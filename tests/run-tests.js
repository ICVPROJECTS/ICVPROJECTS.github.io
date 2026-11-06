const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const index = read('index.html');
const sitemap = read('sitemap.xml');
const legalRoutes = ['privacidad.html', 'terminos.html', 'reembolsos.html', 'soporte.html'];
const screenshotHashes = {
  '01-home.png': '9D9CCD4EC8C1E5F741486849DE0384E1964481AB2F1A83CDF942A879E3853DEB',
  '03-secure-login.png': 'A72B63786F4570FFD401EBAB9C9F1317E1F9B936111C1B14DFA4335166A3602E',
  '04-demo-catalog.png': '963EF54A011111A8E6C135ACD2B1FA6E9A9790D9350C166FF65500855CD68C61',
  '06-license.png': '3165A9FA935AFE73CEBD28ED84C1308670E9308F471CFBC4B389184C3EEA12C5',
};

assert.ok(index.includes('href="styles.css?v=1.0.0"'), 'la portada debe invalidar la caché de estilos al publicar v1.0.0');
assert.equal((index.match(/assets\/screenshots\/.+?\?v=2\.5\.3/g) || []).length, 4, 'todas las capturas públicas deben invalidar caché y corresponder a v2.5.3');

for (const [name, expectedHash] of Object.entries(screenshotHashes)) {
  // Los hashes impiden que una captura antigua vuelva a publicar datos personales o precios obsoletos silenciosamente.
  const data = fs.readFileSync(path.join(root, 'assets', 'screenshots', name));
  assert.equal(crypto.createHash('sha256').update(data).digest('hex').toUpperCase(), expectedHash, `${name} no coincide con la evidencia TV1 v2.5.3 aprobada`);
}

for (const route of legalRoutes) {
  assert.ok(fs.existsSync(path.join(root, route)), `falta la ruta pública ${route}`);
  assert.ok(index.includes(`href="${route}"`), `la portada no enlaza ${route}`);
  assert.ok(sitemap.includes(`/${route}`), `el sitemap no incluye ${route}`);
}

assert.ok(!fs.existsSync(path.join(root, 'publicacion.html')), 'no debe publicarse el estado interno del proyecto');
assert.ok(!fs.existsSync(path.join(root, 'activar.html')), 'la web no debe incluir una ruta de compra intermedia');
assert.ok(!/(publicacion\.html|activar\.html|candidata v\d|Supabase)/i.test(index), 'la portada expone información interna o rutas retiradas');
// La palabra "checkout" es necesaria para explicar el proceso; la protección debe detectar capacidades ejecutables, no texto informativo.
assert.ok(!/<form|<script|api[_-]?base/i.test(index), 'la portada no debe habilitar formularios, scripts ni endpoints');
assert.ok(!/href=["'][^"']*(checkout|paymentwall|pay\.)/i.test(index), 'la portada no debe enlazar un checkout mientras los cobros estén deshabilitados');
assert.ok(index.includes('Próximamente en LG Content Store'), 'debe informarse la disponibilidad sin afirmar que la app ya está publicada');
assert.ok(index.includes('id="como-comprar"'), 'debe publicarse el paso a paso de compra sin habilitar cobros');
assert.ok(index.includes('los cobros reales continúan deshabilitados'), 'el flujo de compra debe conservar el bloqueo comercial');
assert.ok(index.includes('Renovación automática mensual hasta cancelar'), 'el plan mensual debe explicar su recurrencia');
assert.ok(index.includes('Vigencia de 12 meses, sin renovación automática'), 'el plan anual debe explicar que no es recurrente');
assert.ok(index.includes('https://www.sic.gov.co/'), 'debe existir un enlace visible a la autoridad colombiana de protección al consumidor');

const refunds = read('reembolsos.html');
assert.match(refunds, /cinco días hábiles/i, 'la política debe informar el plazo legal de retracto sin prometer su aplicación automática');
assert.match(refunds, /Paymentwall/, 'la política debe identificar el procesador previsto');

console.log('Sitio validado: contenido público esencial, rutas legales y soporte sin estado interno ni checkout web.');
