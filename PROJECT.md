# ICV IPTV — sitio público

## Descripción general

Sitio oficial de pre-lanzamiento de ICV IPTV, dirigido inicialmente a usuarios de Colombia con televisores LG webOS. Su alcance es presentar el producto, explicar el modelo de licencia, publicar soporte y ofrecer URLs HTTPS para privacidad y términos. No contiene el backend de licencias, procesamiento de pagos ni código fuente de la aplicación webOS.

## Estado actual

- Sitio estático publicado y operativo mediante GitHub Pages.
- Repositorio público: `ICVPROJECTS/ICVPROJECTS.github.io`.
- URL pública: `https://icvprojects.github.io`.
- El despliegue automático `pages-build-deployment #1` finalizó correctamente; portada, privacidad, términos, soporte y página 404 se validaron en producción.
- Los planes y documentos legales se identifican como información de pre-lanzamiento; no hay cobro activo.
- La fuente local incluye una galería con cuatro capturas reales 1920×1080 de la candidata, retención conforme al marco colombiano, impuestos liquidados por el procesador y licencia intransferible por TV.
- La versión local v0.3.0 pasó validación a 1440×1000 y 390×844 sin desbordamiento; su publicación en GitHub Pages debe confirmarse porque esta carpeta de trabajo no conserva metadatos `.git`.

## Estructura del proyecto

```text
icvprojects.github.io/
├─ index.html          página principal y narrativa comercial
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
├─ PROJECT.md          contexto maestro para continuidad
└─ CHANGELOG.md        historial semántico del sitio
```

## Librerías y dependencias

- Ninguna dependencia de ejecución. El sitio utiliza HTML5 y CSS3 estáticos.
- No se cargan fuentes, scripts, analítica ni recursos de terceros para minimizar solicitudes, rastreo y puntos de falla.
- GitHub Pages será el alojamiento gratuito; en el plan GitHub Free el repositorio debe permanecer público.

## Funcionalidades implementadas

- Presentación responsive de ICV IPTV y su estado de pre-lanzamiento.
- Descripción de TV en vivo, películas, series, Magic Remote y optimización por memoria.
- Flujo previsto de instalación, configuración, prueba de 15 días y licencia por TV.
- Planes previstos de USD 1,50 mensual y USD 15 anual, sin checkout activo.
- Preguntas frecuentes, soporte por correo, privacidad y términos.
- SEO básico mediante descripción, `robots.txt` y `sitemap.xml`.
- Accesibilidad básica: enlace de salto, estructura semántica, foco visible, contraste y reducción de movimiento.
- Maquetación verificada a 1440×1000 y 390×844 sin desbordamiento horizontal.
- Galería responsive de pantallas reales: Inicio, acceso IPTV protegido por sesión, catálogo demo legal y Licencia.

## Particularidades y lecciones aprendidas

- El repositorio es público: nunca deben incluirse credenciales IPTV, llaves de pago, tokens, datos de TVs, IPs privadas ni código propietario de la aplicación.
- GitHub Pages solo sirve contenido estático; no puede ser el backend de licencias ni recibir webhooks de pago.
- Los botones de compra permanecen sustituidos por `Próximamente` porque mostrar un checkout sin backend validado podría inducir al usuario a creer que el cobro ya está operativo.
- Privacidad y términos son informativos de pre-lanzamiento. Deben actualizarse después de definir procesador, hosting, retención, domicilio legal y reglas comerciales, y someterse a revisión jurídica antes de la publicación en tienda.
- La marca utiliza el activo maestro de la aplicación para mantener continuidad visual sin introducir recursos remotos.
- Las credenciales IPTV se describen como datos de sesión y no como datos cifrados en almacenamiento local; prometer cifrado local sin almacén de llaves seguro sería engañoso en webOS antiguos.

## Próximos pasos

1. Publicar la versión local v0.3.0 y comprobar en producción la galería y las cuatro rutas públicas.
2. Revisar jurídicamente privacidad y términos; reemplazar los avisos provisionales cuando se definan hosting y procesador de pagos.
3. Conectar un dominio propio en el futuro sin cambiar el repositorio ni el ID de la aplicación.
4. Añadir enlaces de compra únicamente después de validar backend, proveedor de pagos, pruebas sandbox y políticas finales.
5. Mantener la rama `main` libre de secretos y validar las rutas públicas después de cada publicación.
