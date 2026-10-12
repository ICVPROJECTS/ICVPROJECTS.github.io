# Registro de cambios

## [v0.3.0] - 2026-10-11

### Añadido

- Galería responsive con cuatro capturas reales 1920×1080 de Inicio, acceso IPTV, catálogo demo y Licencia.

### Cambiado

- Privacidad explica que URL, usuario y contraseña IPTV permanecen solo durante la sesión y que los datos heredados se purgan.
- Privacidad incorpora retención bajo la Ley 1581 de 2012 y deja identificados como pendientes los proveedores definitivos de hosting y pagos.
- Términos establecen una compra intransferible por TV, impuestos liquidados por el procesador y cancelación manual iniciada desde la app.

### Validado

- Portada verificada a 1440×1000 y 390×844 sin desbordamiento horizontal; las cuatro imágenes cargan a 1920×1080.
- Privacidad, términos, soporte y página 404 abren localmente con títulos y contenido válidos.
- Los commits de capturas y contenido activaron `pages-build-deployment #3` y `#4`; ambos finalizaron correctamente.
- En producción se comprobaron las cuatro capturas a 1920×1080 y las rutas de privacidad, términos, soporte y 404 con el contenido actualizado.

## [v0.2.0] - 2026-10-11

### Añadido

- Repositorio público `ICVPROJECTS/ICVPROJECTS.github.io` y primera publicación de la fuente estática en GitHub Pages.
- Sitio disponible mediante HTTPS en `https://icvprojects.github.io`.

### Validado

- El despliegue automático de Pages terminó correctamente y se comprobaron en producción la portada, privacidad, términos, soporte y la respuesta 404 personalizada.
- El escaneo previo a la carga no encontró credenciales, tokens, passphrases, llaves privadas ni direcciones de red local.

## [v0.1.3] - 2026-10-11

### Corregido

- La cuenta de GitHub fue renombrada correctamente a `ICVPROJECTS`; el nombre objetivo del repositorio, la URL canónica, el sitemap, robots y la documentación ahora usan `https://icvprojects.github.io`.
- La carpeta local fue renombrada a `icvprojects.github.io` para evitar divergencias entre la fuente y el repositorio definitivo.

## [v0.1.2] - 2026-10-11

### Corregido

- El propietario confirmó que su usuario real es `ivancanovelez`; repositorio, URL canónica, sitemap, robots y documentación sustituyen la referencia preliminar `Ivan53428` por `ivancanovelez` antes de la primera publicación.

## [v0.1.1] - 2026-10-11

### Corregido

- La cuadrícula principal, botones y maqueta del televisor ya pueden contraerse correctamente en pantallas móviles, evitando el desbordamiento horizontal que recortaba textos y acciones a 390 px.

### Cambiado

- Los botones principales se apilan en móvil para mantener objetivos táctiles completos y una lectura estable.
- El logo se mantiene en la raíz para que la primera publicación pueda cargarse en una sola operación web sin perder rutas de subcarpetas.

## [v0.1.0] - 2026-10-11

### Añadido

- Sitio público responsive de pre-lanzamiento para ICV IPTV.
- Presentación de funciones, compatibilidad, modelo de uso y licencia de una TV.
- Plan mensual previsto de USD 1,50 y anual de USD 15, identificados como próximos y sin flujo de cobro.
- Páginas de privacidad, términos y soporte con información específica para Colombia.
- Declaración visible de que ICV IPTV no suministra canales, listas ni suscripciones de contenido.
- SEO básico, página 404, accesibilidad, soporte de movimiento reducido y navegación adaptable.
- Documentación maestra para evitar publicar secretos o confundir GitHub Pages con el backend comercial.

### Cambiado

- La identidad visual de ICV IPTV se adaptó a una experiencia web informativa conservando el logo oficial de la aplicación.

### Corregido

- Se evita ofrecer compra o activación antes de que existan backend, procesador y validación de licencias en producción.
