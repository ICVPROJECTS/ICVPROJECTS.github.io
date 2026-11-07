const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const routes = ['index.html', 'privacidad.html', 'terminos.html', 'reembolsos.html', 'soporte.html', '404.html'];
const pages = Object.fromEntries(routes.map((route) => [route, read(route)]));
const index = pages['index.html'];
const sitemap = read('sitemap.xml');
const publicText = routes.map((route) => pages[route]).join('\n');
const screenshotHashes = {
  '01-home.png': '9D9CCD4EC8C1E5F741486849DE0384E1964481AB2F1A83CDF942A879E3853DEB',
  '03-secure-login.png': 'A72B63786F4570FFD401EBAB9C9F1317E1F9B936111C1B14DFA4335166A3602E',
  '04-demo-catalog.png': '963EF54A011111A8E6C135ACD2B1FA6E9A9790D9350C166FF65500855CD68C61',
  '06-license.png': '3165A9FA935AFE73CEBD28ED84C1308670E9308F471CFBC4B389184C3EEA12C5',
};

for (const route of routes) {
  assert.ok(pages[route].includes('styles.css?v=1.2.0'), `${route} debe usar la hoja de estilos v1.2.0`);
}
assert.equal((index.match(/assets\/screenshots\/.+?\?v=1\.2\.0/g) || []).length, 4, 'las cuatro capturas deben invalidar caché con la versión web vigente');

for (const [name, expectedHash] of Object.entries(screenshotHashes)) {
  // Los hashes evitan reintroducir imágenes con datos personales o precios obsoletos sin una revisión expresa.
  const data = fs.readFileSync(path.join(root, 'assets', 'screenshots', name));
  assert.equal(crypto.createHash('sha256').update(data).digest('hex').toUpperCase(), expectedHash, `${name} no coincide con la captura aprobada`);
}

for (const route of ['privacidad.html', 'terminos.html', 'reembolsos.html', 'soporte.html']) {
  assert.ok(index.includes(`href="${route}"`), `la portada no enlaza ${route}`);
  assert.ok(sitemap.includes(`/${route}`), `el sitemap no incluye ${route}`);
}

assert.ok(!fs.existsSync(path.join(root, 'publicacion.html')), 'no debe publicarse el estado interno del proyecto');
assert.ok(!fs.existsSync(path.join(root, 'activar.html')), 'la web no debe incluir una ruta de compra intermedia');
assert.doesNotMatch(publicText, /TV1|v2\.5\.3|prelanzamiento|revisión de LG|cobros reales|sandbox|Supabase|Paymentwall/i, 'las páginas públicas contienen lenguaje técnico o de operación interna');
assert.doesNotMatch(index, /Ivan Cano Velez|ivancanovelez@gmail\.com/i, 'la portada no debe exponer identidad o correo personales');
// La web orienta al cliente sin adquirir capacidades de cobro ni recopilar datos.
assert.doesNotMatch(index, /<form|<script|api[_-]?base/i, 'la portada no debe incorporar formularios, scripts ni endpoints');
assert.doesNotMatch(index, /href=["'][^"']*(checkout|paymentwall|pay\.)/i, 'la portada no debe enlazar directamente un procesador de pagos');
assert.match(index, /id="como-comprar"/, 'debe existir el paso a paso de adquisición');
assert.match(index, /Renovación automática mensual hasta cancelar/i, 'el plan mensual debe explicar su recurrencia');
assert.match(index, /Vigencia de 12 meses, sin renovación automática/i, 'el plan anual debe explicar que no es recurrente');
assert.match(index, /Pago único/i, 'debe mostrarse la opción de pago único');
assert.match(index, /https:\/\/www\.sic\.gov\.co\//, 'debe existir un enlace visible a la autoridad colombiana de protección al consumidor');

const refunds = pages['reembolsos.html'];
assert.match(refunds, /cinco días hábiles/i, 'la política debe informar el plazo legal de retracto');
assert.match(refunds, /quince días calendario/i, 'la política debe reflejar el plazo de devolución asociado al retracto electrónico');
assert.match(refunds, /medio de pago que prefiera el consumidor/i, 'la devolución debe reflejar la elección del consumidor');
assert.doesNotMatch(refunds, /método original cuando sea posible/i, 'no debe restablecerse la regla de devolución anterior a la Ley 2439 de 2024');

for (const [name, page] of Object.entries({soporte: pages['soporte.html'], privacidad: pages['privacidad.html'], términos: pages['terminos.html'], reembolsos: refunds})) {
  assert.match(page, /icvstore01@gmail\.com/i, `${name} debe usar el único correo oficial`);
  assert.match(page, /radicado/i, `${name} debe conservar la trazabilidad manual por radicado`);
}

console.log('Sitio v1.2.0 validado: contenido comercial claro, rutas legales, soporte y ausencia de lenguaje interno.');
