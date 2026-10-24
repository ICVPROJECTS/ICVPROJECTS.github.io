# Registro de cambios

## [v0.9.0] - 2026-10-24

### Cambiado

- La portada elimina referencias a la versión candidata, al estado interno de publicación y a actividades de QA; conserva solo presentación, funciones, capturas, planes, preguntas, soporte y enlaces legales.
- Las capturas usan descripciones orientadas al usuario y ya no exponen etiquetas internas de desarrollo o certificación.
- El sitemap y la navegación se reducen a las rutas públicas necesarias.

### Eliminado

- `publicacion.html`, porque LG no exige publicar el avance interno del proyecto.
- `activar.html`, porque la compra se realizará dentro de la aplicación y la web no necesita una ruta comercial intermedia.
- Estilos asociados exclusivamente a las páginas y bloques retirados.

### Corregido

- Se incorpora la prueba estática referenciada por `npm test`, ausente en el repositorio remoto, para validar enlaces, rutas legales, ausencia de información interna y bloqueo de checkout web.

### Validado

- `npm test`, comprobación de recursos locales, `git diff --check` y escaneo de secretos finalizaron sin hallazgos.
- `pages-build-deployment #10` terminó correctamente; portada, privacidad, términos y soporte se comprobaron en producción, y las dos rutas retiradas muestran la página 404 personalizada.

## [v0.8.0] - 2026-10-24

### Añadido

- Página pública de estado de publicación con avances técnicos y siete puertas pendientes antes de Seller Lounge.

### Cambiado

- La portada identifica la candidata v2.2.0 y enlaza el estado de publicación.
- La página de activación describe el checkout como flujo futuro y usa “procesador autorizado” hasta cerrar el contrato, evitando presentar Paymentwall como operativo antes de su aprobación.
- Privacidad reconoce que la URL HTTPS ya existe y mantiene como pendientes las entidades contractuales, países de tratamiento y revisión jurídica.
- Términos dejan de afirmar que el procesador ya liquida impuestos; esa responsabilidad se publicará después del contrato y revisión profesional.

### Validado

- La prueba estática comprueba versión, estado público, prudencia legal, sitemap y ausencia de checkout web.

## [v0.7.0] - 2026-10-24

### Cambiado

- `activar.html` deja de presentar pairing/correo y explica que los cuatro planes se adquieren exclusivamente desde la pantalla Licencia de ICV IPTV en el televisor.
- La arquitectura pública queda alineada con la candidata webOS v2.2.0: Paymentwall presenta el checkout dentro de la app y la web se limita a información, soporte, privacidad y términos.

### Eliminado

- Formulario de código temporal y `activar.js`; GitHub Pages ya no contiene ninguna ruta capaz de solicitar un checkout móvil.

### Validado

- La prueba estática confirma precios, mensaje de compra en TV, ausencia de formularios/scripts de pago y permanencia de la ruta informativa en el sitemap.

## [v0.6.0] - 2026-10-24

### Añadido

- Página `activar.html` para enlazar el código temporal del TV con el futuro checkout móvil, con validación de código/correo y explicación visible de licencia por TV.
- Script sin dependencias que bloquea cualquier redirección mientras el endpoint comercial no esté configurado y nunca solicita datos de tarjeta.

### Cambiado

- Portada y términos reflejan la prueba de 7 días y los cuatro planes acordados: USD 2,00 mensual, USD 4,99 trimestral, USD 19,99 anual y USD 29,99 pago único.
- La galería identifica la línea v2 sin presentar una captura histórica como versión vigente y el sitemap incorpora la ruta de activación.

### Seguridad

- Ninguna clave de Paymentwall, Supabase, instalación o IPTV se incorporó al repositorio. `API_BASE` permanece vacío hasta completar backend y sandbox.

## [v0.5.0] - 2026-10-24

### Cambiado

- Privacidad y términos describen la sesión persistente mediante una bóveda cifrada y autenticada almacenada únicamente en el televisor.
- Se aclaran las acciones que eliminan el acceso local y la limitación de hardware de los modelos webOS antiguos sin Keymanager3.

### Seguridad

- El sitio no publica URL, usuario, contraseña, clave de instalación ni contenido de la bóveda de ningún televisor.

## [v0.4.0] - 2026-10-24

### Cambiado

- El propietario comercial visible del sitio pasa a ser ICVSTORE, conservando a Ivan Cano Velez como vendedor legal individual para los documentos y trámites que exijan identificación civil.
- El correo de soporte, privacidad y términos cambia a `icvstore01@gmail.com` para unificar el canal de atención con la aplicación webOS.

### Seguridad

- La actualización es exclusivamente de identidad y contacto; no incorpora credenciales IPTV, datos de televisores ni secretos al repositorio público.

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
