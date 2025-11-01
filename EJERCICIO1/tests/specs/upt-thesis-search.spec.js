const { test, expect } = require('@playwright/test');
const { UPTRepositoryPage } = require('../pages/upt-repository-page');

test.describe('Búsqueda de tesis de tecnología en Repositorio UPT', () => {
  let repositoryPage;

  test.beforeEach(async ({ page }) => {
    repositoryPage = new UPTRepositoryPage(page);
    await repositoryPage.navigate();
  });

  const testTechnologies = [
    'web',
    'base de datos',
    'mobile',
    'inteligencia de negocios',
    'inteligencia artificial'
  ];

  for (const technology of testTechnologies) {
    test(`CA1 - Debería encontrar tesis sobre ${technology}`, async ({ page }) => {
      console.log(`Buscando tesis sobre: ${technology}`);
      
      await repositoryPage.searchThesis(technology);
      
      const resultsCount = await repositoryPage.getSearchResultsCount();
      expect(resultsCount).toBeGreaterThan(0);
      
      console.log(`Encontrados ${resultsCount} resultados para: ${technology}`);
      
      await repositoryPage.takeScreenshot(`resultados-${technology.replace(/\s+/g, '-')}`);
      
      const hasTechnologyInResults = await repositoryPage.validateTechnologyInResults(technology);
      expect(hasTechnologyInResults).toBeTruthy();
    });
  }

  test('CA1 - Validar múltiples tecnologías en una sola ejecución', async ({ page }) => {
    const technologies = ['web', 'base de datos'];
    let allTestsPassed = true;
    const results = [];

    for (const tech of technologies) {
      await repositoryPage.searchThesis(tech);
      const count = await repositoryPage.getSearchResultsCount();
      const hasTechInResults = await repositoryPage.validateTechnologyInResults(tech);
      
      results.push({
        technology: tech,
        resultsCount: count,
        hasTechnology: hasTechInResults,
        status: count > 0 && hasTechInResults ? 'PASS' : 'FAIL'
      });

      if (count === 0 || !hasTechInResults) {
        allTestsPassed = false;
      }

      await repositoryPage.navigate();
    }

    console.table(results);
    expect(allTestsPassed).toBeTruthy();
  });
});