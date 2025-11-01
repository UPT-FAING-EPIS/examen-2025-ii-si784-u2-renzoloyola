# Pruebas de UI - Búsqueda de Tesis UPT

## Descripción
Automatización de pruebas de interfaz de usuario para el sistema de búsqueda de tesis en el Repositorio UPT.

## Requerimiento
**Como**: Estudiante de la UPT  
**Quiero**: Encontrar tesis de tecnología en el Repositorio de la UPT  
**Para**: Investigar sobre tecnologías recientes y tener referencias

**Criterio de Aceptación CA1**:
- Dado que como estudiante tengo acceso al repositorio
- Cuando realizo una búsqueda de tecnología
- Entonces espero tener uno o muchos resultados

## Tecnologías utilizadas
- Playwright (Node.js)
- GitHub Actions
- Múltiples navegadores (Chromium, Firefox)

## Ejecución local

```bash
# Instalar dependencias
npm install

# Ejecutar pruebas
npm test

# Ejecutar en modo headed
npm run test:headed

# Ejecutar en navegador específico
npm run test:chrome
npm run test:firefox