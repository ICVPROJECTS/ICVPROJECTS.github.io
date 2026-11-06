# ICV IPTV — sitio público

## Descripción general

Sitio oficial de pre-lanzamiento de ICV IPTV, dirigido inicialmente a usuarios de Colombia con televisores LG webOS. Su alcance es presentar el producto, explicar el modelo de licencia, publicar soporte y ofrecer URLs HTTPS para privacidad y términos. No contiene el backend de licencias, procesamiento de pagos ni código fuente de la aplicación webOS.

## Estado actual

- Sitio estático publicado y operativo mediante GitHub Pages.
- Repositorio público: `ICVPROJECTS/ICVPROJECTS.github.io`.
- URL pública: `https://icvprojects.github.io`.
- La versión v1.0.1 conserva el sitio como prelanzamiento sin checkout y publica exclusivamente capturas TV1 v2.5.3; la pantalla Licencia ya muestra `ICVSTORE`, `icvstore01@gmail.com`, cuatro planes vigentes y no expone el correo personal ni el nombre civil en imágenes promocionales.
- El despliegue `pages-build-deployment #17` finalizó correctamente el 2026-11-06 para el commit `26ccc6a`; la galería pública carga las cuatro capturas v2.5.3 a 1920×1080, sin el nombre ni el correo personal antiguos. Portada, flujo de seis pasos, privacidad, términos, reembolsos, soporte y enlace SIC permanecen operativos.
- Los planes y documentos legales se identifican como información de prelanzamiento; por diseño la web no contiene formularios, endpoints ni checkout.
- La fuente incluye una galería con cuatro capturas reales 1920×1080 del mismo corte v2.5.3 de TV1: Inicio, formulario vacío de playlist, catálogo demo legal y Licencia. El precio total, moneda e impuestos aplicables deberán mostrarse en el checkout aprobado; la web no afirma que el procesador asuma obligaciones tributarias del vendedor.
- La versión v0.3.0 pasó validación a 1440×1000 y 390×844 sin desbordamiento y quedó publicada mediante `pages-build-deployment #4`; la portada y las cuatro rutas públicas se verificaron en producción.
- La identidad comercial visible es ICVSTORE y el canal de soporte vigente es `icvstore01@gmail.com`; el vendedor legal continúa siendo Ivan Cano Velez como persona natural hasta que exista una entidad jurídica distinta.
- El estado interno, las puertas de aprobación, las versiones candidatas y los detalles de QA permanecen exclusivamente en la documentación privada del proyecto.
- La web conserva solo la información necesaria para presentar el producto, evitar confusión sobre el contenido incluido y ofrecer soporte y documentos legales.

## Estructura del proyecto

```text
icvprojects.github.io/
├─ index.html          página principal y narrativa comercial
├─ privacidad.html     política informativa de privacidad
├─ terminos.html       términos informativos de pre-lanzamiento
├─ reembolsos.html     cancelación, retracto, reversión y reembolsos
├─ soporte.html        instrucciones y correo de soporte
├─ 404.html            recuperación de rutas inexistentes
├─ styles.css          sistema visual responsive y accesible
├─ logo-icv.png        identidad visual reutilizada de la aplicación
├─ assets/screenshots/ cuatro capturas TV1 verificadas de la candidata v2.5.3
├─ robots.txt          reglas públicas para rastreadores
├─ sitemap.xml         rutas públicas principales
├─ .nojekyll           evita transformaciones Jekyll innecesarias
├─ README.md           descripción pública del repositorio
├─ package.json        atajo de pruebas, sin dependencias de ejecución
├─ tests/run-tests.js  regresión estática y del bloqueo comercial
├─ PROJECT.md          contexto maestro para continuidad
└─ CHANGELOG.md        historial semántico del sitio
```

## Librerías y dependencias

- Ninguna dependencia de ejecución. El sitio utiliza HTML5 y CSS3 estáticos.
- Node.js `>=20` se usa únicamente para la prueba local incorporada; no se publica ni ejecuta en GitHub Pages.
- No se cargan fuentes, scripts, analítica ni recursos de terceros para minimizar solicitudes, rastreo y puntos de falla.
- GitHub Pages será el alojamiento gratuito; en el plan GitHub Free el repositorio debe permanecer público.

## Funcionalidades implementadas

- Presentación responsive de ICV IPTV y aviso de disponibilidad futura.
- Descripción de TV en vivo, películas, series, Magic Remote y optimización por memoria.
- Flujo previsto de instalación, configuración, prueba de 7 días y licencia por TV.
- Planes previstos de USD 2,00 mensual, USD 5,99 trimestral, USD 19,99 anual y USD 29,99 pago único, sin checkout activo.
- Paso a paso de compra futura dentro de la aplicación, sin formularios ni captura de datos financieros en la web.
- Política pública de cancelación, retracto, reversión y reembolsos.
- Preguntas frecuentes, soporte por correo, privacidad y términos.
- SEO básico mediante descripción, `robots.txt` y `sitemap.xml`.
- Accesibilidad básica: enlace de salto, estructura semántica, foco visible, contraste y reducción de movimiento.
- Maquetación verificada a 1440×1000 y 390×844 sin desbordamiento horizontal.
- Galería responsive de pantallas v2.5.3: Inicio, formulario vacío de playlist, catálogo demo legal y Licencia con identidad/soporte vigentes.

## Particularidades y lecciones aprendidas

- El repositorio es público: nunca deben incluirse credenciales IPTV, llaves de pago, tokens, datos de TVs, IPs privadas ni código propietario de la aplicación.
- GitHub Pages solo sirve contenido estático; no puede ser el backend de licencias ni recibir webhooks de pago.
- Los planes permanecen marcados como `Próximamente` porque mostrar un checkout sin backend validado podría inducir al usuario a creer que el cobro ya está operativo.
- Mensual y trimestral son recurrentes; anual dura 12 meses sin renovación automática y pago único no tiene vencimiento programado. La web no debe volver a describir el anual como recurrente.
- Paymentwall exige identidad/dirección comercial, términos, privacidad, reembolsos, soporte y HTTPS antes de live. NIT, dirección de notificación y teléfono siguen sin datos verificados; no se inventan ni se publican mientras el sitio no vende.
- La página pública no contiene JavaScript, endpoint ni formulario de compra; publicar GitHub Pages nunca puede habilitar cobros por accidente.
- Las versiones, checklists, proveedores pendientes y resultados de QA no pertenecen a la comunicación pública; se conservan en el expediente privado para no exponer información interna ni confundir a usuarios.
- Privacidad y términos son informativos de pre-lanzamiento. Deben actualizarse después de definir procesador, hosting, retención, domicilio legal y reglas comerciales, y someterse a revisión jurídica antes de la publicación en tienda.
- ICVSTORE es la marca y el propietario comercial mostrado al usuario; no debe sustituir el nombre legal de la persona natural en trámites KYC, fiscales o contractuales mientras no exista una sociedad registrada con ese nombre.
- La marca utiliza el activo maestro de la aplicación para mantener continuidad visual sin introducir recursos remotos.
- Las cuatro capturas públicas están fijadas por SHA256 en la prueba estática; esto evita reintroducir silenciosamente la antigua pantalla v2.0.0 con nombre, correo y precios obsoletos.
- Privacidad y términos explican que el acceso IPTV se conserva en una bóveda cifrada local para mantener la sesión. También declaran que los webOS antiguos sin Keymanager3 no ofrecen protección TEE frente a un sistema completamente comprometido.

## Próximos pasos

1. Mantener deshabilitados los cobros mientras LG QA y Paymentwall live no estén aprobados.
2. Incorporar NIT, dirección de notificación y teléfono verificados antes de abrir ventas; no usar marcadores ni datos inventados.
3. Confirmar con Paymentwall la elegibilidad del vendedor colombiano, el Fee Schedule y al menos un método live compatible con los planes recurrentes.
4. Revisar jurídicamente privacidad, términos y reembolsos antes del lanzamiento comercial.
5. Cambiar los avisos `Próximamente` únicamente después de verificar checkout final, precio total en la moneda aplicable, aceptación expresa y comprobante.
6. Mantener la rama `main` libre de secretos y validar las rutas públicas después de cada publicación.
