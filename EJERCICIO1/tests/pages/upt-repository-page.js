const { expect } = require('@playwright/test');

exports.UPTRepositoryPage = class UPTRepositoryPage {
  constructor(page) {
    this.page = page;
    this.searchInput = 'input[name="query"]';
    this.searchButton = 'button[type="submit"]';
    this.searchResults = '.ds-artifact-list .ds-artifact-item';
    this.resultTitles = '.artifact-title a';
  }

  async navigate() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async searchThesis(technology) {
    await this.page.fill(this.searchInput, technology);
    await this.page.click(this.searchButton);
    await this.page.waitForTimeout(2000);
  }

  async getSearchResultsCount() {
    return await this.page.locator(this.searchResults).count();
  }

  async getResultTitles() {
    const titles = [];
    const titleElements = this.page.locator(this.resultTitles);
    const count = await titleElements.count();
    
    for (let i = 0; i < count; i++) {
      const title = await titleElements.nth(i).textContent();
      titles.push(title.trim());
    }
    return titles;
  }

  async validateTechnologyInResults(technology) {
    const titles = await this.getResultTitles();
    const technologyLower = technology.toLowerCase();
    
    return titles.some(title => 
      title.toLowerCase().includes(technologyLower)
    );
  }

  async takeScreenshot(name) {
    await this.page.screenshot({ path: `screenshots/${name}.png` });
  }
}