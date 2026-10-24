const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const index = read('index.html');
const sitemap = read('sitemap.xml');
const legalRoutes = ['privacidad.html', 'terminos.html', 'soporte.html'];

for (const route of legalRoutes) {
  assert.ok(fs.existsSync(path.join(root, route)), `falta la ruta pública ${route}`);
  assert.ok(index.includes(`href="${route}"`), `la portada no enlaza ${route}`);
  assert.ok(sitemap.includes(`/${route}`), `el sitemap no incluye ${route}`);
}

assert.ok(!fs.existsSync(path.join(root, 'publicacion.html')), 'no debe publicarse el estado interno del proyecto');
assert.ok(!fs.existsSync(path.join(root, 'activar.html')), 'la web no debe incluir una ruta de compra intermedia');
assert.ok(!/(publicacion\.html|activar\.html|candidata v\d|Paymentwall|Supabase)/i.test(index), 'la portada expone información interna o rutas retiradas');
assert.ok(!/<form|<script|api[_-]?base|checkout/i.test(index), 'la portada no debe habilitar formularios, scripts ni checkout');
assert.ok(index.includes('Próximamente en LG Content Store'), 'debe informarse la disponibilidad sin afirmar que la app ya está publicada');

console.log('Sitio validado: contenido público esencial, rutas legales y soporte sin estado interno ni checkout web.');
