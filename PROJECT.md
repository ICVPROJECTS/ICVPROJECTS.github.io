# ICV IPTV — sitio público

## Descripción general

Sitio oficial de pre-lanzamiento de ICV IPTV, dirigido inicialmente a usuarios de Colombia con televisores LG webOS. Su alcance es presentar el producto, explicar el modelo de licencia, publicar soporte y ofrecer URLs HTTPS para privacidad y términos. No contiene el backend de licencias, procesamiento de pagos ni código fuente de la aplicación webOS.

## Estado actual

- Sitio estático publicado y operativo mediante GitHub Pages.
- Repositorio público: `ICVPROJECTS/ICVPROJECTS.github.io`.
- URL pública: `https://icvprojects.github.io`.
- El despliegue automático `pages-build-deployment #1` finalizó correctamente; portada, privacidad, términos, soporte y página 404 se validaron en producción.
- Los planes y documentos legales se identifican como información de pre-lanzamiento; la página de compra dirige al módulo Licencia del TV y por diseño no contiene formulario, endpoint ni checkout web.
- La fuente local incluye una galería con cuatro capturas reales 1920×1080 de la candidata, retención conforme al marco colombiano, impuestos liquidados por el procesador y licencia intransferible por TV.
- La versión v0.3.0 pasó validación a 1440×1000 y 390×844 sin desbordamiento y quedó publicada mediante `pages-build-deployment #4`; la portada y las cuatro rutas públicas se verificaron en producción.
- La identidad comercial visible es ICVSTORE y el canal de soporte vigente es `icvstore01@gmail.com`; el vendedor legal continúa siendo Ivan Cano Velez como persona natural hasta que exista una entidad jurídica distinta.
- La fuente local v0.7.0 elimina el checkout móvil y dirige la compra al módulo Licencia del TV; sus pruebas pasan. Esta carpeta no conserva metadatos `.git`, por lo que la publicación en GitHub Pages debe realizarse todavía mediante el repositorio remoto o la interfaz de GitHub.
- La v0.8.0 añade un estado público de publicación, identifica la candidata v2.2.0 y corrige los textos legales para no afirmar que impuestos, Paymentwall o LG ya están aprobados. La página distingue claramente avances técnicos de contratos, Data Safety, sandbox y certificación todavía pendientes.

## Estructura del proyecto

```text
icvprojects.github.io/
├─ index.html          página principal y narrativa comercial
├─ activar.html        explica la compra exclusiva desde el módulo Licencia del TV
├─ publicacion.html    estado público de preparación y puertas pendientes para LG
├─ privacidad.html     política informativa de privacidad
├─ terminos.html       términos informativos de pre-lanzamiento
├─ soporte.html        instrucciones y correo de soporte
├─ 404.html            recuperación de rutas inexistentes
├─ styles.css          sistema visual responsive y accesible
├─ logo-icv.png        identidad visual reutilizada de la aplicación
├─ assets/screenshots/ cuatro capturas reales de la candidata comercial
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

- Presentación responsive de ICV IPTV y su estado de pre-lanzamiento.
- Descripción de TV en vivo, películas, series, Magic Remote y optimización por memoria.
- Flujo previsto de instalación, configuración, prueba de 7 días y licencia por TV.
- Planes previstos de USD 2,00 mensual, USD 4,99 trimestral, USD 19,99 anual y USD 29,99 pago único, sin checkout activo.
- Página accesible que explica en futuro el flujo previsto de compra dentro del TV, sin afirmar que el checkout o Paymentwall ya están habilitados.
- Estado público de publicación que evita afirmar aprobación antes de Seller Lounge.
- Preguntas frecuentes, soporte por correo, privacidad y términos.
- SEO básico mediante descripción, `robots.txt` y `sitemap.xml`.
- Accesibilidad básica: enlace de salto, estructura semántica, foco visible, contraste y reducción de movimiento.
- Maquetación verificada a 1440×1000 y 390×844 sin desbordamiento horizontal.
- Galería responsive de pantallas reales: Inicio, acceso IPTV protegido localmente, catálogo demo legal y Licencia.

## Particularidades y lecciones aprendidas

- El repositorio es público: nunca deben incluirse credenciales IPTV, llaves de pago, tokens, datos de TVs, IPs privadas ni código propietario de la aplicación.
- GitHub Pages solo sirve contenido estático; no puede ser el backend de licencias ni recibir webhooks de pago.
- Los botones de compra permanecen sustituidos por `Próximamente` porque mostrar un checkout sin backend validado podría inducir al usuario a creer que el cobro ya está operativo.
- La página pública no contiene JavaScript, endpoint ni formulario de compra; publicar GitHub Pages nunca puede habilitar cobros por accidente.
- Privacidad y términos son informativos de pre-lanzamiento. Deben actualizarse después de definir procesador, hosting, retención, domicilio legal y reglas comerciales, y someterse a revisión jurídica antes de la publicación en tienda.
- ICVSTORE es la marca y el propietario comercial mostrado al usuario; no debe sustituir el nombre legal de la persona natural en trámites KYC, fiscales o contractuales mientras no exista una sociedad registrada con ese nombre.
- La marca utiliza el activo maestro de la aplicación para mantener continuidad visual sin introducir recursos remotos.
- Privacidad y términos explican que el acceso IPTV se conserva en una bóveda cifrada local para mantener la sesión. También declaran que los webOS antiguos sin Keymanager3 no ofrecen protección TEE frente a un sistema completamente comprometido.

## Próximos pasos

1. Crear/desplegar Supabase y completar Paymentwall; el checkout real se habilita únicamente en la app del TV.
2. Revisar jurídicamente privacidad y términos; reemplazar los avisos provisionales con Supabase/Paymentwall únicamente después de aceptar sus contratos.
3. Conectar un dominio propio en el futuro sin cambiar el repositorio ni el ID de la aplicación.
4. Cambiar los avisos `Próximamente` únicamente después de validar backend, proveedor de pagos, pruebas sandbox y políticas finales; los enlaces deben explicar cómo abrir Licencia en el TV, no vender desde la web.
5. Mantener la rama `main` libre de secretos y validar las rutas públicas después de cada publicación.
