# Music Control - Proyecto de ejemplo para examen

Contenido:
- src/MusicControl : biblioteca con las clases del patrón Command (C#)
- tests/MusicControl.Tests : pruebas unitarias (xUnit)
- tests/MusicControl.Specs : pruebas BDD (SpecFlow + xUnit)
- web : UI estática y pruebas Playwright (Chromium + Firefox) con video

Instrucciones rápidas (local):
1. .NET
   - dotnet build
   - dotnet test tests/MusicControl.Tests --collect:"XPlat Code Coverage"
   - dotnet test tests/MusicControl.Specs

2. UI (Playwright)
   - cd web
   - npm install
   - npx playwright install --with-deps
   - npm run test:ui

GitHub Actions:
- El workflow `.github/workflows/ci.yml` ejecuta las pruebas .NET y las pruebas UI en Chromium y Firefox y sube el reporte de Playwright como artefacto.

Entrega:
- Sube este repositorio a GitHub en la rama `main`. GitHub Actions ejecutará el pipeline automáticamente.
