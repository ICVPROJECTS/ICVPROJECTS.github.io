# ICV IPTV — sitio público

## Descripción general

Sitio oficial de ICV IPTV, dirigido a usuarios de televisores LG webOS. Presenta la aplicación, sus funciones, planes de licencia, proceso de adquisición, soporte y documentos legales. No contiene el backend de licencias, procesamiento de pagos ni código fuente de la aplicación webOS.

## Estado actual

- La fuente local está en versión web v1.2.0 y aún no ha sido publicada.
- La portada tiene una estructura comercial compacta: presentación en dos columnas, beneficios, funciones, galería en mosaico, cuatro planes comparables, adquisición en cuatro pasos, preguntas frecuentes y soporte.
- El contenido público no menciona TV1, versiones internas de la aplicación, QA, sandbox, prelanzamiento, cobros deshabilitados, Supabase o Paymentwall.
- Soporte, privacidad, términos, reembolsos y 404 comparten identidad visual, navegación y lenguaje orientado al cliente.
- `icvstore01@gmail.com` es el único canal de soporte, PQR, cancelación, retracto, reversión, reembolso y privacidad. El radicado y seguimiento se gestionan manualmente en el mismo hilo.
- La web conserva los avisos necesarios: ICV IPTV no vende ni incluye contenido, cada licencia corresponde a un televisor, mensual y trimestral son recurrentes, anual dura 12 meses sin renovación automática y pago único no se renueva.
- `npm test` valida contenido, rutas, precios, recurrencia, correo único, protección legal, ausencia de lenguaje interno y hashes de las capturas; la validación final está aprobada.
- La estructura responsive quedó definida para escritorio, tablet y móvil sin anchos fijos que obliguen desplazamiento horizontal. El navegador integrado no puede acceder a direcciones locales, por lo que la comprobación visual desde ese navegador solo podrá hacerse tras una publicación o vista previa expresamente autorizada.
- El sitio público activo en `https://icvprojects.github.io` no se modificó durante esta unidad; la publicación requiere una autorización específica posterior a la revisión visual.

## Estructura del proyecto

```text
website-review/
├─ index.html              portada comercial y navegación principal
├─ privacidad.html         tratamiento de información y derechos del usuario
├─ terminos.html           condiciones de uso, licencias y pagos
├─ reembolsos.html         cancelación, retracto, reversión y reembolsos
├─ soporte.html            canal único e instrucciones de atención
├─ 404.html                recuperación de rutas inexistentes
├─ styles.css              sistema visual responsive compartido
├─ logo-icv.png            identidad visual de la aplicación
├─ assets/screenshots/     cuatro pantallas públicas verificadas
├─ robots.txt              reglas para rastreadores
├─ sitemap.xml             rutas públicas indexables
├─ .nojekyll               evita transformaciones automáticas de Jekyll
├─ tests/run-tests.js      regresión estática, legal y comercial
├─ package.json            versión y comando de pruebas
├─ README.md               descripción pública del repositorio
├─ PROJECT.md              contexto maestro y continuidad
└─ CHANGELOG.md            historial semántico inmutable
```

## Librerías y dependencias

- Ninguna dependencia de ejecución. El sitio utiliza HTML5 y CSS3 estáticos.
- Node.js `>=20` se usa únicamente para `npm test`; no forma parte del sitio publicado.
- No se cargan fuentes, scripts, analítica ni recursos de terceros. Esto reduce rastreo, tiempos de carga y puntos de falla.
- GitHub Pages sirve el contenido estático mediante HTTPS.

## Funcionalidades implementadas

- Presentación de ICV IPTV y su propuesta de valor para LG webOS.
- Compatibilidad visible con webOS 4.0 o superior, D-pad y Magic Remote.
- Descripción de TV en vivo, películas, series, favoritos, historial y reanudación.
- Galería compacta con Inicio, configuración, catálogo y Licencia.
- Comparación de cuatro planes: mensual USD 2,00, trimestral USD 5,99, anual USD 19,99 y pago único USD 29,99.
- Explicación de recurrencia y vigencia de cada plan.
- Proceso de adquisición en cuatro pasos dentro de la aplicación.
- Preguntas frecuentes, soporte por correo y documentos legales.
- Canal manual único para PQR y trazabilidad por radicado.
- Accesibilidad básica: estructura semántica, salto al contenido, foco visible, contraste y reducción de movimiento.
- Diseño responsive en cuatro, dos o una columna según el ancho disponible.

## Particularidades y lecciones aprendidas

- El repositorio es público: nunca deben incluirse credenciales IPTV, llaves de pago, tokens, IPs privadas, datos de televisores ni código propietario.
- La página es comunicación para clientes. Versiones candidatas, nombres de dispositivos de prueba, resultados de QA, callbacks, sandbox, proveedores de infraestructura y puertas de aprobación pertenecen solo al expediente privado.
- El estado comercial no debe explicarse mediante advertencias técnicas. La web indica dónde se consultan las opciones sin afirmar disponibilidad que no pueda verificarse.
- La declaración de que ICV IPTV no incluye contenido es comercial y jurídicamente necesaria; no debe eliminarse durante simplificaciones futuras.
- Mensual y trimestral renuevan automáticamente; anual dura 12 meses sin renovación automática; pago único no tiene renovación. Esta distinción está protegida por pruebas.
- La web no incorpora JavaScript, formularios, endpoints ni enlaces directos de pago; la adquisición ocurre desde la aplicación.
- Las páginas legales pueden identificar categorías de proveedores sin presentar como confirmado un procesador que aún no opera públicamente.
- Las cuatro capturas públicas permanecen fijadas por SHA256 para evitar reintroducir datos personales o precios anteriores sin revisión.
- La estructura visual usa cuadrículas compactas en escritorio y apilado progresivo en móvil para evitar una página innecesariamente larga.

## Próximos pasos

1. Presentar la fuente local v1.2.0 al propietario y obtener autorización específica de publicación.
2. Publicar v1.2.0 únicamente después de esa autorización; la aprobación de los cambios locales no autorizó el despliegue.
3. Verificar visualmente portada, tablet, móvil y todas las rutas legales mediante el navegador integrado en la URL publicada.
4. Corregir y documentar cualquier hallazgo de producción antes de considerar cerrada la publicación.
