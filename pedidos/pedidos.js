/* =========================================================================
   Coffee Online — Set de iconos SVG
   Se inyecta como <symbol> al inicio del <body>. Uso:
       <svg class="icono"><use href="#i-cart"></use></svg>
   No depende de internet ni de ninguna librería externa.
   ========================================================================= */
(function () {
  /* Marca que el script sí corre: las animaciones de aparición
     sólo ocultan contenido cuando esta clase está presente. */
  document.documentElement.classList.add('js');

  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false">' +

  /* --- Marca ---
     La taza con el cursor del mouse dentro: el logotipo de Coffee Online
     redibujado en vectores. El cursor es un hueco (fill-rule="evenodd"),
     así que adopta el color del fondo sobre el que se apoya la taza. */
  '<symbol id="i-logo" viewBox="0 0 48 48">' +
    '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.5 14.5h29v9.2A14.5 14.5 0 0 1 21 38.2 14.5 14.5 0 0 1 6.5 23.7Z M17.4 19.4v13.1l3.3-3.3 2.3 5.1 2.9-1.3-2.3-5 4.7-.3Z"/>' +
    '<path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" d="M36 18.6h2.3a5.4 5.4 0 0 1 0 10.8H36"/>' +
    '<path fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" d="M5.6 42.4h30.8"/>' +
  '</symbol>' +

  /* --- Categorías --- */
  '<symbol id="i-coffee" viewBox="0 0 24 24"><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 1.5v2.5"/><path d="M10 1.5v2.5"/><path d="M14 1.5v2.5"/></symbol>' +
  '<symbol id="i-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></symbol>' +
  '<symbol id="i-utensils" viewBox="0 0 24 24"><path d="M4 2v6a3 3 0 0 0 6 0V2"/><path d="M7 11v11"/><path d="M17.5 2c-1.7 0-3 2.5-3 5.5S15.8 13 17.5 13"/><path d="M17.5 2v20"/></symbol>' +
  '<symbol id="i-sandwich" viewBox="0 0 24 24"><path d="M3 9.5 12 5l9 4.5-9 4.5Z"/><path d="M3 13.5 12 18l9-4.5"/><path d="M3 17 12 21.5 21 17"/></symbol>' +
  '<symbol id="i-cookie" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4.5-3.5A4 4 0 0 1 12 3Z"/><path d="M9 9.5h.01"/><path d="M8.5 15h.01"/><path d="M13.5 14.5h.01"/><path d="M12.5 11h.01"/></symbol>' +
  '<symbol id="i-cake" viewBox="0 0 24 24"><path d="M3 21h18"/><path d="M4 21v-6.5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3V21"/><path d="M12 11.5v-3"/><circle cx="12" cy="6.5" r="1.3"/><path d="M4 16.5c2 0 2 1.4 4 1.4s2-1.4 4-1.4 2 1.4 4 1.4 2-1.4 4-1.4"/></symbol>' +
  '<symbol id="i-glass" viewBox="0 0 24 24"><path d="M5.5 4h13l-1.4 15.2a2 2 0 0 1-2 1.8H8.9a2 2 0 0 1-2-1.8Z"/><path d="M6.4 10.5h11.2"/></symbol>' +
  '<symbol id="i-leaf" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12"/></symbol>' +
  '<symbol id="i-flame" viewBox="0 0 24 24"><path d="M12 2.5s4.2 3.9 4.2 8a4.2 4.2 0 0 1-8.4 0c0-1.3.4-2.3.4-2.3S5.5 11 5.5 14.3A6.5 6.5 0 0 0 12 21.5a6.5 6.5 0 0 0 6.5-7.2c0-5.2-6.5-11.8-6.5-11.8Z"/></symbol>' +
  '<symbol id="i-grid-all" viewBox="0 0 24 24"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/></symbol>' +

  /* --- Navegación e interfaz --- */
  '<symbol id="i-cart" viewBox="0 0 24 24"><circle cx="9" cy="20" r="1.4"/><circle cx="18.5" cy="20" r="1.4"/><path d="M2 2.5h2.2l2.5 12.1a1.8 1.8 0 0 0 1.8 1.4h9.6a1.8 1.8 0 0 0 1.8-1.4L21.5 6H5.2"/></symbol>' +
  '<symbol id="i-user" viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></symbol>' +
  '<symbol id="i-users" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></symbol>' +
  '<symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.7-4.7"/></symbol>' +
  '<symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></symbol>' +
  '<symbol id="i-close" viewBox="0 0 24 24"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></symbol>' +
  '<symbol id="i-chev-right" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></symbol>' +
  '<symbol id="i-chev-left" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></symbol>' +
  '<symbol id="i-chev-down" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></symbol>' +
  '<symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M4 12h15"/><path d="m12.5 5.5 7 6.5-7 6.5"/></symbol>' +
  '<symbol id="i-arrow-left" viewBox="0 0 24 24"><path d="M20 12H5"/><path d="m11.5 18.5-7-6.5 7-6.5"/></symbol>' +
  '<symbol id="i-plus" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M12 5v14"/></symbol>' +
  '<symbol id="i-minus" viewBox="0 0 24 24"><path d="M5 12h14"/></symbol>' +
  '<symbol id="i-trash" viewBox="0 0 24 24"><path d="M3.5 6h17"/><path d="M18.5 6v13a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V6"/><path d="M8.5 6V4.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V6"/><path d="M10.5 11v5.5"/><path d="M13.5 11v5.5"/></symbol>' +
  '<symbol id="i-pencil" viewBox="0 0 24 24"><path d="M16.8 3.2a2.6 2.6 0 0 1 3.7 3.7L7.6 19.8 2.8 21.2l1.4-4.8Z"/><path d="m14.8 5.2 3.7 3.7"/></symbol>' +
  '<symbol id="i-eye" viewBox="0 0 24 24"><path d="M2 12s3.6-6.8 10-6.8S22 12 22 12s-3.6 6.8-10 6.8S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></symbol>' +
  '<symbol id="i-eye-off" viewBox="0 0 24 24"><path d="M9.9 4.4A9.4 9.4 0 0 1 12 4.2c6.4 0 10 7.8 10 7.8a19 19 0 0 1-2.2 3.3"/><path d="M6.6 6.6A18.4 18.4 0 0 0 2 12s3.6 7.8 10 7.8a9.4 9.4 0 0 0 4.1-.9"/><path d="M14.1 14.1a3 3 0 1 1-4.2-4.2"/><path d="M2.5 2.5 21.5 21.5"/></symbol>' +
  '<symbol id="i-filter" viewBox="0 0 24 24"><path d="M4 21v-6"/><path d="M4 11V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1.5 15h5"/><path d="M9.5 8h5"/><path d="M17.5 16h5"/></symbol>' +
  '<symbol id="i-logout" viewBox="0 0 24 24"><path d="M9.5 21H5.5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16.5 16.5 4.5-4.5-4.5-4.5"/><path d="M21 12H9.5"/></symbol>' +
  '<symbol id="i-lock" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="11" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></symbol>' +
  '<symbol id="i-mail" viewBox="0 0 24 24"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m21.5 7.5-8.6 5.4a1.9 1.9 0 0 1-1.8 0L2.5 7.5"/></symbol>' +
  '<symbol id="i-phone" viewBox="0 0 24 24"><path d="M21.5 16.9v2.9a2 2 0 0 1-2.2 2 19.5 19.5 0 0 1-8.5-3 19.2 19.2 0 0 1-5.9-5.9 19.5 19.5 0 0 1-3-8.6 2 2 0 0 1 2-2.2h2.9a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a15.8 15.8 0 0 0 5.9 5.9l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></symbol>' +
  '<symbol id="i-pin" viewBox="0 0 24 24"><path d="M20 10.5c0 6-8 11.5-8 11.5s-8-5.5-8-11.5a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10.3" r="2.9"/></symbol>' +
  '<symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.2"/><path d="M12 6.6V12l3.6 2.2"/></symbol>' +
  '<symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="4.5" width="18" height="17" rx="2.5"/><path d="M16 2.5v4"/><path d="M8 2.5v4"/><path d="M3 10h18"/></symbol>' +
  '<symbol id="i-check" viewBox="0 0 24 24"><path d="m20 6.5-11 11-5-5"/></symbol>' +
  '<symbol id="i-check-circle" viewBox="0 0 24 24"><path d="M21.6 11.1V12a9.6 9.6 0 1 1-5.7-8.8"/><path d="m8.5 11.5 3.2 3.2 9.4-9.4"/></symbol>' +
  '<symbol id="i-alert" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.2"/><path d="M12 7.5v5"/><path d="M12 16.3h.01"/></symbol>' +
  '<symbol id="i-info" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.2"/><path d="M12 16.5v-5"/><path d="M12 7.8h.01"/></symbol>' +
  '<symbol id="i-star" viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z"/></symbol>' +
  '<symbol id="i-bell" viewBox="0 0 24 24"><path d="M18 8.5a6 6 0 0 0-12 0c0 6.5-2.8 8.5-2.8 8.5h17.6S18 15 18 8.5"/><path d="M13.7 20.5a2 2 0 0 1-3.4 0"/></symbol>' +
  '<symbol id="i-refresh" viewBox="0 0 24 24"><path d="M3.2 12a8.8 8.8 0 0 1 14.7-6.5L21 8.3"/><path d="M21 3.5v5h-5"/><path d="M20.8 12a8.8 8.8 0 0 1-14.7 6.5L3 15.7"/><path d="M3 20.5v-5h5"/></symbol>' +
  '<symbol id="i-download" viewBox="0 0 24 24"><path d="M21 15.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.5"/><path d="m7.5 11 4.5 4.5 4.5-4.5"/><path d="M12 15.5V3"/></symbol>' +
  '<symbol id="i-printer" viewBox="0 0 24 24"><path d="M6.5 9V2.5h11V9"/><path d="M6.5 18H4.5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6.5" y="14" width="11" height="7.5" rx="1.5"/></symbol>' +

  /* --- Comercio --- */
  '<symbol id="i-bag" viewBox="0 0 24 24"><path d="M5.5 7.5h13l1.2 12a2 2 0 0 1-2 2.2H6.3a2 2 0 0 1-2-2.2Z"/><path d="M8.5 10.5v-4a3.5 3.5 0 0 1 7 0v4"/></symbol>' +
  '<symbol id="i-package" viewBox="0 0 24 24"><path d="M20.5 8.2a2 2 0 0 0-1-1.7l-6.5-3.7a2 2 0 0 0-2 0L4.5 6.5a2 2 0 0 0-1 1.7v7.6a2 2 0 0 0 1 1.7l6.5 3.7a2 2 0 0 0 2 0l6.5-3.7a2 2 0 0 0 1-1.7Z"/><path d="m3.8 7.3 8.2 4.7 8.2-4.7"/><path d="M12 21.3V12"/></symbol>' +
  '<symbol id="i-receipt" viewBox="0 0 24 24"><path d="M5 2.5v19l2.4-1.4 2.3 1.4 2.3-1.4 2.3 1.4 2.3-1.4L19 21.5v-19Z"/><path d="M8.8 7.5h6.4"/><path d="M8.8 11.5h6.4"/><path d="M8.8 15.5h4"/></symbol>' +
  '<symbol id="i-clipboard" viewBox="0 0 24 24"><rect x="8.5" y="2.5" width="7" height="4" rx="1.5"/><path d="M15.5 4.5h2.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2h2.5"/><path d="M8.5 12h7"/><path d="M8.5 16h4.5"/></symbol>' +
  '<symbol id="i-card" viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19"/><path d="M6.5 14.8h3"/></symbol>' +
  '<symbol id="i-wallet" viewBox="0 0 24 24"><path d="M3.5 7.5a2 2 0 0 1 2-2h12v3"/><path d="M3.5 7.5v9.5a2.5 2.5 0 0 0 2.5 2.5h13a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2.5 2.5 0 0 1-2.5-2Z"/><circle cx="17" cy="14" r="1.2"/></symbol>' +
  '<symbol id="i-coins" viewBox="0 0 24 24"><circle cx="9" cy="9" r="6.3"/><path d="M17.6 10.8A6.3 6.3 0 1 1 10.8 17.6"/><path d="M7.8 7.2h1.6v4"/></symbol>' +
  '<symbol id="i-truck" viewBox="0 0 24 24"><path d="M14 17.5V6.5a1 1 0 0 0-1-1H2.8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1.4"/><path d="M14 9.5h3.6l3.6 3.6v3.4a1 1 0 0 1-1 1h-1"/><circle cx="7.2" cy="18" r="2"/><circle cx="17.2" cy="18" r="2"/><path d="M9.2 18h6"/></symbol>' +
  '<symbol id="i-dashboard" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9.5" rx="1.5"/><rect x="14" y="3" width="7" height="5.5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></symbol>' +
  '<symbol id="i-chart" viewBox="0 0 24 24"><path d="M3.5 20.5h17"/><path d="M6.5 20.5V15"/><path d="M11 20.5V8"/><path d="M15.5 20.5v-8"/><path d="M20 20.5V4.5"/></symbol>' +
  '<symbol id="i-trend-up" viewBox="0 0 24 24"><path d="M21.5 7 13.5 15 9 10.5 2.5 17"/><path d="M15.5 7h6v6"/></symbol>' +
  '<symbol id="i-trend-down" viewBox="0 0 24 24"><path d="M21.5 17 13.5 9 9 13.5 2.5 7"/><path d="M15.5 17h6v-6"/></symbol>' +
  '<symbol id="i-settings" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M19.1 14.6a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.3a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H2.2a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5V2.2a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1h.3a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1Z"/></symbol>' +

  /* --- Redes sociales --- */
  '<symbol id="i-instagram" viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r=".9" fill="currentColor" stroke="none"/></symbol>' +
  '<symbol id="i-facebook" viewBox="0 0 24 24"><path d="M14.5 8.5V6.8c0-.8.5-1.3 1.3-1.3h1.9V2.3h-2.8c-3 0-4.4 1.9-4.4 4.4v1.8H8v3.4h2.5v9.8h4v-9.8h2.8l.5-3.4Z" fill="currentColor" stroke="none"/></symbol>' +
  '<symbol id="i-tiktok" viewBox="0 0 24 24"><path d="M15.6 3v10.9a4.6 4.6 0 1 1-4.6-4.6c.4 0 .8 0 1.1.1"/><path d="M15.6 3.2A5.4 5.4 0 0 0 21 8.4"/></symbol>' +
  '<symbol id="i-whatsapp" viewBox="0 0 24 24"><path d="M21 11.6a8.6 8.6 0 0 1-12.7 7.6L3 21l1.9-5.2A8.6 8.6 0 1 1 21 11.6Z"/><path d="M9 8.9c0 3.2 2.4 5.6 5.6 5.6l1-1.4-2.1-1-.9.9c-.8-.4-1.6-1.2-2-2l.9-.9-1-2.1Z"/></symbol>' +

  '</svg>';

  if (document.body) {
    document.body.insertAdjacentHTML('afterbegin', sprite);
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      document.body.insertAdjacentHTML('afterbegin', sprite);
    });
  }
})();
/* =========================================================================
   Coffee Online — Catálogo base
   Este archivo es el "seed": los datos con los que arranca la aplicación.
   Cuando exista el backend en Spring Boot, este arreglo se reemplaza por la
   respuesta de GET /api/productos y el resto del front sigue igual.
   ========================================================================= */

var CATEGORIAS = [
  { id: 'todos',      nombre: 'Toda la carta',  icono: 'i-grid-all' },
  { id: 'cafe',       nombre: 'Café de barra',  icono: 'i-coffee'   },
  { id: 'desayunos',  nombre: 'Desayunos',      icono: 'i-sun'      },
  { id: 'almuerzos',  nombre: 'Almuerzos',      icono: 'i-utensils' },
  { id: 'sandwiches', nombre: 'Sánguches',      icono: 'i-sandwich' },
  { id: 'snacks',     nombre: 'Snacks',         icono: 'i-cookie'   },
  { id: 'postres',    nombre: 'Postres',        icono: 'i-cake'     },
  { id: 'bebidas',    nombre: 'Bebidas frías',  icono: 'i-glass'    }
];

var IMG = '../Imagenes/';

var PRODUCTOS_SEED = [

  /* ---------------- Café de barra ---------------- */
  { id: 'CAF-01', nombre: 'Café pasado',           cat: 'cafe', precio: 3.50,  stock: 60, activo: true,  img: IMG + 'cafe-pasado.jpg',
    desc: 'Café de altura de Villa Rica, pasado al momento en chorreador. Servido en taza de 8 oz.', destacado: true },
  { id: 'CAF-02', nombre: 'Espresso doble',        cat: 'cafe', precio: 6.00,  stock: 60, activo: true,  img: IMG + 'espresso-doble.jpg',
    desc: 'Doble shot corto e intenso, con crema densa. Para los que no negocian el sabor.' },
  { id: 'CAF-03', nombre: 'Americano',             cat: 'cafe', precio: 4.50,  stock: 60, activo: true,  img: IMG + 'americano.jpg',
    desc: 'Espresso alargado con agua caliente. Suave, largo y sin azúcar añadida.' },
  { id: 'CAF-04', nombre: 'Capuchino',             cat: 'cafe', precio: 7.50,  stock: 45, activo: true,  img: IMG + 'capuchino.jpg',
    desc: 'Espresso, leche vaporizada y una capa generosa de espuma con canela encima.', destacado: true },
  { id: 'CAF-05', nombre: 'Latte de vainilla',     cat: 'cafe', precio: 8.50,  stock: 45, activo: true,  img: IMG + 'latte-de-vainilla.jpg',
    desc: 'Leche texturizada con espresso y jarabe de vainilla. Dulce sin empalagar.', nuevo: true },
  { id: 'CAF-06', nombre: 'Mocaccino',             cat: 'cafe', precio: 9.00,  stock: 40, activo: true,  img: IMG + 'mocaccino.jpg',
    desc: 'Café con cacao amargo, leche y un toque de crema batida.' },
  { id: 'CAF-07', nombre: 'Frappé de café',        cat: 'cafe', precio: 10.50, stock: 30, activo: true,  img: IMG + 'frappe-de-cafe.jpg',
    desc: 'Café frío licuado con hielo y leche, cubierto con crema. El más pedido en época de calor.', destacado: true },
  { id: 'CAF-08', nombre: 'Chocolate caliente',    cat: 'cafe', precio: 7.00,  stock: 35, activo: true,  img: IMG + 'chocolate-caliente.jpg',
    desc: 'Cacao peruano al 60% con leche entera. Se sirve bien caliente.' },
  { id: 'CAF-09', nombre: 'Té e infusiones',       cat: 'cafe', precio: 3.00,  stock: 80, activo: true,  img: IMG + 'te-e-infusiones.jpg',
    desc: 'Manzanilla, anís, hierbaluisa o té verde. Con miel a pedido.' },

  /* ---------------- Desayunos ---------------- */
  { id: 'DES-01', nombre: 'Desayuno universitario', cat: 'desayunos', precio: 10.00, stock: 40, activo: true, img: IMG + 'desayuno-universitario.jpg',
    desc: 'Pan con huevo revuelto, palta, jugo de fruta del día y café o té. El combo de las 7 a.m.', destacado: true },
  { id: 'DES-02', nombre: 'Pan con chicharrón',     cat: 'desayunos', precio: 9.50,  stock: 25, activo: true, img: IMG + 'pan-con-chicharron.jpg',
    desc: 'Chicharrón de cerdo con camote frito y salsa criolla en pan francés crocante.', destacado: true },
  { id: 'DES-03', nombre: 'Frito norteño',          cat: 'desayunos', precio: 13.00, stock: 18, activo: true, img: IMG + 'frito-norteno.jpg',
    desc: 'Cerdo frito al estilo Lambayeque, con yuca sancochada, mote y zarza de cebolla.' },
  { id: 'DES-04', nombre: 'Ensalada de frutas',     cat: 'desayunos', precio: 7.50,  stock: 30, activo: true, img: IMG + 'ensalada-de-frutas.jpg',
    desc: 'Frutas de estación picadas al momento, con miel, granola y yogurt natural.' },
  { id: 'DES-05', nombre: 'Pan con palta',          cat: 'desayunos', precio: 6.50,  stock: 35, activo: true, img: IMG + 'pan-con-palta.jpg',
    desc: 'Palta fuerte machacada con limón y sal en pan ciabatta tostado.' },
  { id: 'DES-06', nombre: 'Huevos revueltos',       cat: 'desayunos', precio: 8.50,  stock: 30, activo: true, img: IMG + 'huevos-revueltos.jpg',
    desc: 'Dos huevos revueltos con tostadas integrales y mantequilla.' },
  { id: 'DES-07', nombre: 'Avena con quinua',       cat: 'desayunos', precio: 5.00,  stock: 40, activo: true, img: IMG + 'avena-con-quinua.jpg',
    desc: 'Avena caliente con quinua, manzana y canela. Se sirve en vaso de 12 oz.' },

  /* ---------------- Almuerzos ---------------- */
  { id: 'ALM-01', nombre: 'Menú del día',           cat: 'almuerzos', precio: 12.00, stock: 80, activo: true, img: IMG + 'menu-del-dia.png',
    desc: 'Entrada, segundo y refresco. El menú cambia todos los días; se publica a las 11:00 a.m.', destacado: true },
  { id: 'ALM-02', nombre: 'Lomo saltado',           cat: 'almuerzos', precio: 16.00, stock: 30, activo: true, img: IMG + 'lomo-saltado.jpg',
    desc: 'Lomo salteado al wok con cebolla, tomate y sillao. Va con papas fritas y arroz graneado.', destacado: true },
  { id: 'ALM-03', nombre: 'Ají de gallina',         cat: 'almuerzos', precio: 14.00, stock: 28, activo: true, img: IMG + 'aji-de-gallina.jpg',
    desc: 'Pechuga deshilachada en crema de ají amarillo con pecana, papa sancochada y aceituna.' },
  { id: 'ALM-04', nombre: 'Arroz con pollo',        cat: 'almuerzos', precio: 14.00, stock: 30, activo: true, img: IMG + 'arroz-con-pollo.jpg',
    desc: 'Arroz verde con culantro, presa de pollo, arvejas y zanahoria. Incluye salsa criolla.' },
  { id: 'ALM-05', nombre: 'Pollo mechado',          cat: 'almuerzos', precio: 13.50, stock: 25, activo: true, img: IMG + 'pollo-mechado.jpg',
    desc: 'Pollo deshilachado en salsa de la casa, con arroz blanco y ensalada fresca.' },
  { id: 'ALM-06', nombre: 'Tallarines rojos',       cat: 'almuerzos', precio: 12.50, stock: 30, activo: true, img: IMG + 'tallarines-rojos.jpg',
    desc: 'Pasta en salsa de tomate casera con carne molida y queso parmesano rallado.' },
  { id: 'ALM-07', nombre: 'Arroz chaufa de pollo',  cat: 'almuerzos', precio: 13.00, stock: 30, activo: true, img: IMG + 'arroz-chaufa.jpg',
    desc: 'Arroz salteado al wok con pollo, huevo, cebolla china y sillao. Estilo chifa.' },
  { id: 'ALM-08', nombre: 'Causa limeña',           cat: 'almuerzos', precio: 11.00, stock: 22, activo: true, img: IMG + 'causa-limena.jpg',
    desc: 'Papa amarilla prensada con ají y limón, rellena de pollo o atún. Se sirve fría.' },
  { id: 'ALM-09', nombre: 'Cabrito norteño',        cat: 'almuerzos', precio: 18.00, stock: 12, activo: true, img: IMG + 'cabrito-norteno.jpg',
    desc: 'Cabrito macerado en chicha de jora con culantro, frejoles y arroz. Solo los viernes.' },
  { id: 'ALM-10', nombre: 'Trío marino',            cat: 'almuerzos', precio: 26.00, stock: 8,  activo: true, img: IMG + 'trio-marino.jpg',
    desc: 'Ceviche de pescado, chicharrón de calamar y arroz con mariscos en un solo plato.' },
  { id: 'ALM-11', nombre: 'Pollo broaster',         cat: 'almuerzos', precio: 15.00, stock: 25, activo: true, img: IMG + 'pollo-broaster.jpg',
    desc: 'Un cuarto de pollo broaster con papas fritas y ensalada. Incluye cremas.' },
  { id: 'ALM-12', nombre: 'Sopa criolla',           cat: 'almuerzos', precio: 9.00,  stock: 25, activo: true, img: IMG + 'sopa-criolla.jpg',
    desc: 'Caldo con fideo cabello de ángel, carne, leche y huevo escalfado.' },
  { id: 'ALM-13', nombre: 'Ensalada rusa',          cat: 'almuerzos', precio: 13.00, stock: 20, activo: true, img: IMG + 'ensalada-rusa.jpg',
    desc: 'Papa, zanahoria y arveja en cubos, con huevo y mayonesa de la casa.', nuevo: true },

  /* ---------------- Sánguches ---------------- */
  { id: 'SAN-01', nombre: 'Sánguche de pollo',      cat: 'sandwiches', precio: 9.50,  stock: 30, activo: true, img: IMG + 'sanguche-de-pollo.jpg',
    desc: 'Pollo deshilachado con lechuga, tomate y mayonesa casera en pan de yema.' },
  { id: 'SAN-02', nombre: 'Mixto de jamón y queso', cat: 'sandwiches', precio: 8.00,  stock: 35, activo: true, img: IMG + 'mixto-jamon-queso.jpg',
    desc: 'Jamón inglés y queso edam prensado a la plancha. Simple y bien hecho.' },
  { id: 'SAN-03', nombre: 'Triple clásico',         cat: 'sandwiches', precio: 7.50,  stock: 25, activo: true, img: IMG + 'triple-clasico.jpg',
    desc: 'Pan de molde con palta, huevo y tomate en tres capas. Se vende por unidad.' },
  { id: 'SAN-04', nombre: 'Wrap de pollo',          cat: 'sandwiches', precio: 12.00, stock: 20, activo: true, img: IMG + 'wrap-de-pollo.jpg',
    desc: 'Tortilla de trigo con pollo a la parrilla, mix de hojas verdes y aderezo de yogurt.', nuevo: true },
  { id: 'SAN-05', nombre: 'Empanada de carne',      cat: 'sandwiches', precio: 5.50,  stock: 40, activo: true, img: IMG + 'empanada-de-carne.jpg',
    desc: 'Masa horneada rellena de carne, huevo y aceituna. Se sirve con ají de la casa.' },

  /* ---------------- Snacks ---------------- */
  { id: 'SNK-01', nombre: 'Manías tostadas',        cat: 'snacks', precio: 4.00, stock: 50, activo: true, img: IMG + 'manias.jpg',
    desc: 'Maní tostado y salado en bolsa de 80 g. Para aguantar entre clase y clase.' },
  { id: 'SNK-02', nombre: 'Papas Lays',              cat: 'snacks', precio: 3.00, stock: 60, activo: true, img: IMG + 'papas-lays.jpg',
    desc: 'Bolsa personal de papas Lays clásicas de 45 g.' },
  { id: 'SNK-03', nombre: 'Galleta de avena',       cat: 'snacks', precio: 3.50, stock: 45, activo: true, img: IMG + 'galleta-de-avena.jpg',
    desc: 'Galleta artesanal de avena con pasas, horneada cada mañana.' },
  { id: 'SNK-04', nombre: 'Yogurt con granola',     cat: 'snacks', precio: 6.50, stock: 30, activo: true, img: IMG + 'yogurt-con-granola.jpg',
    desc: 'Vaso de yogurt natural con granola crocante y trozos de fruta.' },
  { id: 'SNK-05', nombre: 'Barra de cereal',        cat: 'snacks', precio: 3.00, stock: 55, activo: true, img: IMG + 'barra-de-cereal.jpg',
    desc: 'Barra de avena, quinua y miel. Sin azúcar refinada.' },

  /* ---------------- Postres ---------------- */
  { id: 'POS-01', nombre: 'Torta de chocolate',     cat: 'postres', precio: 8.00, stock: 16, activo: true, img: IMG + 'torta-de-chocolate.jpg',
    desc: 'Porción de bizcocho húmedo de chocolate con ganache. Va bien con el americano.', destacado: true },
  { id: 'POS-02', nombre: 'Pay de limón',           cat: 'postres', precio: 7.50, stock: 14, activo: true, img: IMG + 'pay-de-limon.jpg',
    desc: 'Base de galleta, crema de limón y merengue tostado.' },
  { id: 'POS-03', nombre: 'Alfajor de manjar',      cat: 'postres', precio: 3.50, stock: 40, activo: true, img: IMG + 'alfajor-de-manjar.jpg',
    desc: 'Dos tapas de maicena con manjar blanco y azúcar impalpable.' },
  { id: 'POS-04', nombre: 'Arroz con leche',        cat: 'postres', precio: 5.50, stock: 24, activo: true, img: IMG + 'arroz-con-leche.jpg',
    desc: 'Arroz cocido en leche con canela y clavo, servido frío en vaso.' },
  { id: 'POS-05', nombre: 'Gelatina con crema',     cat: 'postres', precio: 4.00, stock: 30, activo: true, img: IMG + 'gelatina-con-crema.jpg',
    desc: 'Gelatina de fresa con una capa de crema volteada encima.' },

  /* ---------------- Bebidas frías ---------------- */
  { id: 'BEB-01', nombre: 'Jugo de naranja',        cat: 'bebidas', precio: 6.00, stock: 40, activo: true, img: IMG + 'jugo-de-naranja.jpg',
    desc: 'Naranjas exprimidas al momento, sin agua ni azúcar añadida. Vaso de 16 oz.', destacado: true },
  { id: 'BEB-02', nombre: 'Chicha morada',          cat: 'bebidas', precio: 8.00, stock: 20, activo: true, img: IMG + 'chicha-morada.jpg',
    desc: 'Jarra de chicha hervida con maíz morado, piña, canela y clavo. Rinde para dos.' },
  { id: 'BEB-03', nombre: 'Inka Kola personal',     cat: 'bebidas', precio: 3.50, stock: 70, activo: true, img: IMG + 'inka-kola.jpg',
    desc: 'Botella personal de 500 ml, siempre bien fría.' },
  { id: 'BEB-04', nombre: 'Coca-Cola personal',     cat: 'bebidas', precio: 3.50, stock: 70, activo: true, img: IMG + 'coca-cola.jpg',
    desc: 'Botella personal de 500 ml.' },
  { id: 'BEB-05', nombre: 'Fanta personal',         cat: 'bebidas', precio: 3.50, stock: 50, activo: true, img: IMG + 'fanta.jpg',
    desc: 'Gaseosa de naranja en botella personal de 500 ml.' },
  { id: 'BEB-06', nombre: 'Agua mineral 625 ml',    cat: 'bebidas', precio: 2.50, stock: 90, activo: true, img: IMG + 'agua-san-luis.jpg',
    desc: 'Agua sin gas en botella de 625 ml.' },
  { id: 'BEB-07', nombre: 'Limonada frozen',        cat: 'bebidas', precio: 7.00, stock: 25, activo: true, img: IMG + 'limonada-frozen.jpg',
    desc: 'Limón licuado con hielo y hierbabuena. Se prepara al momento.', nuevo: true },
  { id: 'BEB-08', nombre: 'Refresco de maracuyá',   cat: 'bebidas', precio: 5.00, stock: 30, activo: true, img: IMG + 'refresco-de-maracuya.jpg',
    desc: 'Refresco natural de maracuyá, ligeramente endulzado. Vaso de 16 oz.' }
];

/* Cuentas con las que arranca el sistema.
   Con Spring Boot esto pasa a la tabla USUARIO y la contraseña va con BCrypt. */
var USUARIOS_SEED = [
  { id: 1, nombre: 'Administración',  correo: 'admin@coffeeonline.pe',  clave: 'admin123', rol: 'ADMIN',   creado: '2026-03-01' },
  { id: 2, nombre: 'Xavier Lluen',    correo: 'xavier@coffeeonline.pe', clave: '123456',   rol: 'CLIENTE', creado: '2026-03-14' }
];

/* Puntos de entrega dentro del campus */
var PUNTOS_ENTREGA = [
  { id: 'barra',     nombre: 'Recojo en barra',        detalle: 'Pabellón A, primer piso',     costo: 0.00 },
  { id: 'biblio',    nombre: 'Entrega en biblioteca',  detalle: 'Pabellón C, segundo piso',    costo: 1.50 },
  { id: 'labs',      nombre: 'Entrega en laboratorios',detalle: 'Pabellón D, cuarto piso',     costo: 1.50 },
  { id: 'auditorio', nombre: 'Entrega en auditorio',   detalle: 'Pabellón B, planta baja',     costo: 2.00 }
];

var METODOS_PAGO = [
  { id: 'yape',      nombre: 'Yape / Plin',       detalle: 'Escanea el QR al recoger tu pedido', icono: 'i-phone'  },
  { id: 'efectivo',  nombre: 'Efectivo en barra', detalle: 'Paga cuando recojas',                icono: 'i-coins'  },
  { id: 'tarjeta',   nombre: 'Tarjeta',           detalle: 'Débito o crédito, POS en barra',     icono: 'i-card'   }
];

var ESTADOS_PEDIDO = [
  { id: 'recibido',  nombre: 'Recibido',   icono: 'i-receipt' },
  { id: 'preparando',nombre: 'En cocina',  icono: 'i-utensils' },
  { id: 'listo',     nombre: 'Listo',      icono: 'i-bell' },
  { id: 'entregado', nombre: 'Entregado',  icono: 'i-check' }
];
var CO = (function () {
'use strict';

var DEPTH = '';

var K = {
  productos: 'co.productos',
  productosSemilla: 'co.productosSemilla',
  usuarios: 'co.usuarios',
  sesion: 'co.sesion',
  carrito: 'co.carrito',
  pedidos: 'co.pedidos',
  contador: 'co.contadorPedido'
};

function huella(texto) {
  var h = 0;
  for (var i = 0; i < texto.length; i++) {
    h = ((h << 5) - h + texto.charCodeAt(i)) | 0;
  }
  return h;
}

function url(p) {
  if (!p) return p;

  var admin = {
    'admin/index.html': '../admin/index.html',
    'admin/productos.html': '../admin/productos.html',
    'admin/pedidos.html': '../admin/pedidos.html',
    'admin/reportes.html': '../admin/reportes.html'
  };

  if (admin[p]) return admin[p];

  var m = /^(index|carrito|checkout|confirmacion|login|pedidos|producto)\.html(.*)$/.exec(p);
  if (m) {
    return '../' + m[1] + '/' + m[1] + '.html' + m[2];
  }

  return p;
}

function qs(s, ctx) {
  return (ctx || document).querySelector(s);
}

function qsa(s, ctx) {
  return Array.prototype.slice.call(
    (ctx || document).querySelectorAll(s)
  );
}

function leer(clave, porDefecto) {
  try {
    var v = localStorage.getItem(clave);
    return v === null ? porDefecto : JSON.parse(v);
  } catch (e) {
    return porDefecto;
  }
}

function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
  } catch (e) {}
}

function money(n) {
  return 'S/ ' + Number(n || 0).toFixed(2);
}

function escapar(t) {
  return String(t == null ? '' : t)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function param(nombre) {
  return new URLSearchParams(location.search).get(nombre);
}

function icono(id, clase) {
  return '<svg class="icono ' + (clase || '') +
    '" aria-hidden="true"><use href="#' + id + '"></use></svg>';
}

function fecha(iso, conHora) {
  var d = new Date(iso);
  var dd = String(d.getDate()).padStart(2, '0');
  var mm = String(d.getMonth() + 1).padStart(2, '0');

  var base =
    dd + '/' +
    mm + '/' +
    d.getFullYear();

  if (!conHora) return base;

  return base +
    ' · ' +
    String(d.getHours()).padStart(2, '0') +
    ':' +
    String(d.getMinutes()).padStart(2, '0');
}

function hora(iso) {
  var d = new Date(iso);

  return String(d.getHours()).padStart(2, '0') +
    ':' +
    String(d.getMinutes()).padStart(2, '0');
}

function normalizar(t) {
  return String(t)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}


/* ================================================================
   PRODUCTOS
   ================================================================ */

function productos() {
  var semillaActual =
    huella(JSON.stringify(PRODUCTOS_SEED));

  var guardados =
    leer(K.productos, null);

  var semillaGuardada =
    leer(K.productosSemilla, null);

  if (
    guardados &&
    guardados.length &&
    semillaGuardada === semillaActual
  ) {
    return guardados;
  }

  guardar(K.productos, PRODUCTOS_SEED);
  guardar(K.productosSemilla, semillaActual);

  return PRODUCTOS_SEED;
}

function guardarProductos(lista) {
  guardar(K.productos, lista);
}

function producto(id) {
  return productos()
    .filter(function (p) {
      return p.id === id;
    })[0] || null;
}

function categoria(id) {
  return CATEGORIAS
    .filter(function (c) {
      return c.id === id;
    })[0] || CATEGORIAS[0];
}

function iconoCategoria(catId) {
  return categoria(catId).icono;
}

function miniatura(p) {
  if (p.img) {
    return (
      '<img src="' +
      url(p.img) +
      '" alt="' +
      escapar(p.nombre) +
      '" loading="lazy">'
    );
  }

  return (
    '<div class="imagen-alterna imagen-alterna--' +
    p.cat +
    '">' +
    icono(iconoCategoria(p.cat), 'icono--xl') +
    '</div>'
  );
}


/* ================================================================
   USUARIOS
   ================================================================ */

function usuarios() {
  var u = leer(K.usuarios, null);

  if (u && u.length) {
    return u;
  }

  guardar(K.usuarios, USUARIOS_SEED);

  return USUARIOS_SEED;
}

function guardarUsuarios(lista) {
  guardar(K.usuarios, lista);
}

function sesion() {
  return leer(K.sesion, null);
}

function login(correo, clave) {
  var u = usuarios()
    .filter(function (x) {
      return (
        x.correo.toLowerCase() ===
        String(correo).toLowerCase().trim() &&
        x.clave === clave
      );
    })[0];

  if (!u) return null;

  var s = {
    id: u.id,
    nombre: u.nombre,
    correo: u.correo,
    rol: u.rol
  };

  guardar(K.sesion, s);

  return s;
}

function registrar(nombre, correo, clave) {
  var lista = usuarios();

  correo =
    String(correo)
      .toLowerCase()
      .trim();

  if (
    lista.some(function (x) {
      return x.correo.toLowerCase() === correo;
    })
  ) {
    return {
      ok: false,
      error: 'Ese correo ya tiene una cuenta registrada.'
    };
  }

  var nuevo = {
    id:
      Math.max.apply(
        null,
        lista.map(function (x) {
          return x.id;
        })
      ) + 1,

    nombre: nombre.trim(),
    correo: correo,
    clave: clave,
    rol: 'CLIENTE',

    creado:
      new Date()
        .toISOString()
        .slice(0, 10)
  };

  lista.push(nuevo);

  guardarUsuarios(lista);

  return {
    ok: true,
    usuario: nuevo
  };
}

function salir() {
  localStorage.removeItem(K.sesion);

  location.href =
    url('index.html');
}

function exigirSesion() {
  if (!sesion()) {
    location.href =
      url(
        'login.html?volver=' +
        encodeURIComponent(
          location.pathname.split('/').pop() +
          location.search
        )
      );

    return false;
  }

  return true;
}

function exigirAdmin() {
  var s = sesion();

  if (!s) {
    location.href =
      url('login.html');

    return false;
  }

  if (s.rol !== 'ADMIN') {
    location.href =
      url('index.html');

    return false;
  }

  return true;
}

function iniciales(nombre) {
  return String(nombre || '?')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(function (p) {
      return p[0];
    })
    .join('')
    .toUpperCase();
}


/* ================================================================
   CARRITO
   ================================================================ */

function carrito() {
  return leer(K.carrito, []);
}

function guardarCarrito(c) {
  guardar(K.carrito, c);
  pintarContador();
}

function agregar(id, cantidad) {
  var p = producto(id);

  if (!p) return;

  var c = carrito();

  var linea =
    c.filter(function (x) {
      return x.id === id;
    })[0];

  if (linea) {
    linea.cantidad +=
      cantidad || 1;
  } else {
    c.push({
      id: id,
      cantidad: cantidad || 1
    });
  }

  guardarCarrito(c);
}

function fijarCantidad(id, cantidad) {
  var c = carrito();

  if (cantidad <= 0) {
    c =
      c.filter(function (x) {
        return x.id !== id;
      });
  } else {
    var linea =
      c.filter(function (x) {
        return x.id === id;
      })[0];

    if (linea) {
      linea.cantidad = cantidad;
    }
  }

  guardarCarrito(c);
}

function quitar(id) {
  fijarCantidad(id, 0);
}

function vaciarCarrito() {
  guardarCarrito([]);
}

function unidades() {
  return carrito()
    .reduce(function (s, l) {
      return s + l.cantidad;
    }, 0);
}

function carritoDetallado() {
  return carrito()
    .map(function (l) {
      var p = producto(l.id);

      if (!p) return null;

      return {
        id: p.id,
        nombre: p.nombre,
        precio: p.precio,
        img: p.img,
        cat: p.cat,
        cantidad: l.cantidad,
        importe: p.precio * l.cantidad
      };
    })
    .filter(Boolean);
}

function subtotal() {
  return carritoDetallado()
    .reduce(function (s, l) {
      return s + l.importe;
    }, 0);
}

function pintarContador() {
  qsa('[data-conteo-carrito]')
    .forEach(function (el) {
      var n = unidades();

      el.textContent = n;

      el.setAttribute(
        'data-conteo',
        n
      );
    });
}


/* ================================================================
   PEDIDOS
   ================================================================ */

function pedidos() {
  return leer(K.pedidos, []);
}

function guardarPedidos(lista) {
  guardar(K.pedidos, lista);
}

function siguienteCodigo() {
  var n =
    leer(K.contador, 1040) + 1;

  guardar(K.contador, n);

  return 'CO-' + n;
}

function crearPedido(datos) {
  var lineas =
    carritoDetallado();

  if (!lineas.length) {
    return null;
  }

  var punto =
    PUNTOS_ENTREGA
      .filter(function (x) {
        return x.id === datos.entrega;
      })[0] ||
    PUNTOS_ENTREGA[0];

  var sub =
    lineas.reduce(function (s, l) {
      return s + l.importe;
    }, 0);

  var ahora =
    new Date().toISOString();

  var pedido = {
    codigo: siguienteCodigo(),
    creado: ahora,

    cliente: datos.cliente,
    correo: datos.correo,
    telefono: datos.telefono || '',

    entrega: punto.id,
    entregaNombre: punto.nombre,
    entregaDetalle: punto.detalle,

    horaRecojo: datos.horaRecojo,
    pago: datos.pago,
    nota: datos.nota || '',

    lineas: lineas,

    subtotal: sub,
    envio: punto.costo,
    total: sub + punto.costo,

    estado: 'recibido',

    historial: [
      {
        estado: 'recibido',
        en: ahora
      }
    ]
  };

  var lista = pedidos();

  lista.unshift(pedido);

  guardarPedidos(lista);

  vaciarCarrito();

  return pedido;
}

function pedido(codigo) {
  return pedidos()
    .filter(function (p) {
      return p.codigo === codigo;
    })[0] || null;
}

function cambiarEstado(codigo, estado) {
  var lista = pedidos();

  var p =
    lista.filter(function (x) {
      return x.codigo === codigo;
    })[0];

  if (!p) return;

  p.estado = estado;

  p.historial =
    p.historial || [];

  if (
    !p.historial.some(function (h) {
      return h.estado === estado;
    })
  ) {
    p.historial.push({
      estado: estado,
      en: new Date().toISOString()
    });
  }

  guardarPedidos(lista);
}

function pedidosDe(correo) {
  return pedidos()
    .filter(function (p) {
      return p.correo === correo;
    });
}

function etiquetaEstado(estado) {
  var map = {
    recibido: {
      clase: 'tag--slate',
      texto: 'Recibido'
    },

    preparando: {
      clase: 'tag--amber',
      texto: 'En cocina'
    },

    listo: {
      clase: 'tag--sage',
      texto: 'Listo para recoger'
    },

    entregado: {
      clase: 'tag',
      texto: 'Entregado'
    },

    anulado: {
      clase: 'tag--clay',
      texto: 'Anulado'
    }
  };

  var e =
    map[estado] ||
    map.recibido;

  return (
    '<span class="etiqueta ' +
    e.clase +
    '">' +
    e.texto +
    '</span>'
  );
}

function sembrarPedidos() {
  if (
    leer(K.pedidos, null) !== null
  ) {
    return;
  }

  var catalogo =
    productos()
      .filter(function (p) {
        return p.activo;
      });

  var clientes = [
    ['Ana Quispe Rojas', 'ana.quispe@correo.pe'],
    ['Diego Salazar', 'diego.salazar@correo.pe'],
    ['Milagros Ticona', 'milagros.t@correo.pe'],
    ['Kevin Ramos', 'kevin.ramos@correo.pe'],
    ['Xavier Lluen', 'xavier@coffeeonline.pe'],
    ['Rosa Huamán', 'rosa.huaman@correo.pe'],
    ['Jorge Paredes', 'jorge.p@correo.pe'],
    ['Fiorella Castro', 'fiorella.c@correo.pe']
  ];

  var estados = [
    'entregado',
    'entregado',
    'entregado',
    'listo',
    'preparando',
    'recibido'
  ];

  var lista = [];

  var contador = 1000;

  for (
    var d = 6;
    d >= 0;
    d--
  ) {
    var porDia =
      3 +
      Math.floor(
        Math.random() * 4
      );

    for (
      var i = 0;
      i < porDia;
      i++
    ) {
      var f = new Date();

      f.setDate(
        f.getDate() - d
      );

      f.setHours(
        8 +
        Math.floor(
          Math.random() * 9
        ),

        Math.floor(
          Math.random() * 60
        ),

        0,
        0
      );

      var lineas = [];

      var cuantos =
        1 +
        Math.floor(
          Math.random() * 3
        );

      for (
        var j = 0;
        j < cuantos;
        j++
      ) {
        var p =
          catalogo[
            Math.floor(
              Math.random() *
              catalogo.length
            )
          ];

        if (
          lineas.some(function (l) {
            return l.id === p.id;
          })
        ) {
          continue;
        }

        var cant =
          1 +
          Math.floor(
            Math.random() * 2
          );

        lineas.push({
          id: p.id,
          nombre: p.nombre,
          precio: p.precio,
          img: p.img,
          cat: p.cat,
          cantidad: cant,
          importe:
            p.precio * cant
        });
      }

      if (!lineas.length) {
        continue;
      }

      var cl =
        clientes[
          Math.floor(
            Math.random() *
            clientes.length
          )
        ];

      var punto =
        PUNTOS_ENTREGA[
          Math.floor(
            Math.random() *
            PUNTOS_ENTREGA.length
          )
        ];

      var sub =
        lineas.reduce(
          function (s, l) {
            return s + l.importe;
          },
          0
        );

      var estado =
        d === 0
          ? estados[
              Math.floor(
                Math.random() *
                estados.length
              )
            ]
          : 'entregado';

      contador++;

      lista.push({
        codigo:
          'CO-' + contador,

        creado:
          f.toISOString(),

        cliente: cl[0],
        correo: cl[1],

        telefono:
          '9' +
          Math.floor(
            10000000 +
            Math.random() *
            89999999
          ),

        entrega: punto.id,
        entregaNombre:
          punto.nombre,

        entregaDetalle:
          punto.detalle,

        horaRecojo:
          String(
            f.getHours()
          ).padStart(2, '0') +
          ':30',

        pago:
          METODOS_PAGO[
            Math.floor(
              Math.random() *
              METODOS_PAGO.length
            )
          ].id,

        nota: '',

        lineas: lineas,

        subtotal: sub,
        envio: punto.costo,
        total:
          sub + punto.costo,

        estado: estado,

        historial: [
          {
            estado: 'recibido',
            en: f.toISOString()
          }
        ]
      });
    }
  }

  lista.sort(function (a, b) {
    return (
      new Date(b.creado) -
      new Date(a.creado)
    );
  });

  guardar(
    K.contador,
    contador
  );

  guardarPedidos(lista);
}


/* ================================================================
   TOAST
   ================================================================ */

function toast(mensaje, ico) {
  var cont =
    qs('.avisos');

  if (!cont) {
    cont =
      document.createElement(
        'div'
      );

    cont.className =
      'avisos';

    document.body.appendChild(
      cont
    );
  }

  var t =
    document.createElement(
      'div'
    );

  t.className =
    'aviso';

  t.innerHTML =
    icono(
      ico ||
      'i-check-circle',
      'icono--sm'
    ) +
    '<span>' +
    escapar(mensaje) +
    '</span>';

  cont.appendChild(t);

  setTimeout(function () {
    t.style.transition =
      'opacity .3s, transform .3s';

    t.style.opacity = '0';

    t.style.transform =
      'translateY(6px)';

    setTimeout(function () {
      t.remove();
    }, 320);
  }, 2400);
}


/* ================================================================
   TARJETA DE PRODUCTO
   ================================================================ */

function tarjetaProducto(p) {
  var etiqueta = '';

  if (!p.activo) {
    etiqueta =
      '<span class="etiqueta etiqueta--arcilla etiqueta--flotante">Agotado</span>';
  } else if (p.nuevo) {
    etiqueta =
      '<span class="etiqueta etiqueta--salvia etiqueta--flotante">Nuevo</span>';
  } else if (p.destacado) {
    etiqueta =
      '<span class="etiqueta etiqueta--ambar etiqueta--flotante">Favorito</span>';
  }

  return '' +

    '<article class="tarjeta">' +

      '<a class="tarjeta__medio" href="' +
        url(
          'producto.html?id=' +
          encodeURIComponent(p.id)
        ) +
      '">' +

        miniatura(p) +
        etiqueta +

      '</a>' +

      '<div class="tarjeta__cuerpo">' +

        '<h3 class="tarjeta__nombre">' +

          '<a href="' +
            url(
              'producto.html?id=' +
              encodeURIComponent(p.id)
            ) +
          '">' +

            escapar(p.nombre) +

          '</a>' +

        '</h3>' +

        '<p class="tarjeta__descripcion">' +
          escapar(p.desc) +
        '</p>' +

        '<div class="tarjeta__pie">' +

          '<span class="price">' +
            money(p.precio) +
          '</span>' +

          (
            p.activo

            ? '<button class="tarjeta__agregar" data-agregar="' +
              p.id +
              '" aria-label="Agregar ' +
              escapar(p.nombre) +
              ' al pedido">' +
              icono('i-plus') +
              '</button>'

            : '<span class="diminuto atenuado">Sin stock</span>'
          ) +

        '</div>' +

      '</div>' +

    '</article>';
}


/* ================================================================
   BOTONES AGREGAR
   ================================================================ */

function activarBotonesAgregar() {
  document.addEventListener(
    'click',
    function (e) {

      var btn =
        e.target.closest(
          '[data-agregar]'
        );

      if (!btn) return;

      e.preventDefault();

      var id =
        btn.getAttribute(
          'data-agregar'
        );

      var p =
        producto(id);

      agregar(id, 1);

      btn.classList.add(
        'is-added'
      );

      btn.innerHTML =
        icono('i-check');

      setTimeout(function () {

        btn.classList.remove(
          'is-added'
        );

        btn.innerHTML =
          icono('i-plus');

      }, 900);

      if (p) {
        toast(
          p.nombre +
          ' se agregó a tu pedido'
        );
      }
    }
  );
}


/* ================================================================
   NAVEGACIÓN
   ================================================================ */

var NAV = [
  {
    clave: 'inicio',
    texto: 'Inicio',
    href: 'index.html#inicio'
  },

  {
    clave: 'carta',
    texto: 'La carta',
    href: 'index.html#carta'
  },

  {
    clave: 'nosotros',
    texto: 'Nosotros',
    href: 'index.html#nosotros'
  },

  {
    clave: 'pedidos',
    texto: 'Mis pedidos',
    href: 'pedidos.html'
  }
];

function marca(clase) {
  return (
    '<a class="marca ' +
    (clase || '') +
    '" href="' +
    url('index.html') +
    '">' +

      '<img class="marca__logo" src="../Imagenes/logo-coffee-online.png" alt="Coffee Online">' +

    '</a>'
  );
}

function montarCabecera(activo) {
  var s = sesion();

  var enlaces =
    NAV.map(function (n) {

      return (
        '<a class="menu__enlace' +
        (
          n.clave === activo
            ? ' is-active'
            : ''
        ) +
        '" href="' +
        url(n.href) +
        '">' +
        n.texto +
        '</a>'
      );

    }).join('');

  var zonaUsuario =
    s

    ? '<div class="menu-usuario">' +

        '<button class="boton-icono" id="btn-usuario" aria-label="Menú de cuenta" aria-expanded="false">' +

          '<span class="avatar">' +
            iniciales(s.nombre) +
          '</span>' +

        '</button>' +

        '<div class="menu-usuario__panel">' +

          '<div class="menu-usuario__cabecera">' +

            '<div class="menu-usuario__nombre">' +
              escapar(s.nombre) +
            '</div>' +

            '<div class="diminuto atenuado">' +
              escapar(s.correo) +
            '</div>' +

          '</div>' +

          '<a class="menu-usuario__elemento" href="' +
            url('pedidos.html') +
          '">' +
            icono('i-clipboard', 'icono--sm') +
            'Mis pedidos' +
          '</a>' +

          (
            s.rol === 'ADMIN'

            ? '<a class="menu-usuario__elemento" href="' +
              url('admin/index.html') +
              '">' +
              icono('i-dashboard', 'icono--sm') +
              'Panel de administración' +
              '</a>'

            : ''
          ) +

          '<button class="menu-usuario__elemento menu-usuario__elemento--peligro" id="btn-salir">' +
            icono('i-logout', 'icono--sm') +
            'Cerrar sesión' +
          '</button>' +

        '</div>' +

      '</div>'

    : '<a class="boton boton--fantasma boton--sm" href="' +
      url('login.html') +
      '">' +
      icono('i-user', 'icono--sm') +
      'Ingresar' +
      '</a>';

  var html =
    '' +

    '<header class="cabecera-sitio">' +

      '<div class="contenedor cabecera-sitio__barra">' +

        marca() +

        '<nav class="menu" id="menu-principal">' +
          enlaces +
        '</nav>' +

        '<div class="cabecera-acciones">' +

          '<a class="boton-icono" href="' +
            url('carrito.html') +
            '" aria-label="Ver mi pedido">' +

            icono('i-cart') +

            '<span class="insignia-conteo" data-conteo-carrito data-conteo="0">0</span>' +

          '</a>' +

          zonaUsuario +

          '<button class="boton-icono menu-alternar" id="btn-menu" aria-label="Abrir menú" aria-expanded="false">' +
            icono('i-menu') +
          '</button>' +

        '</div>' +

      '</div>' +

    '</header>';

  var slot =
    qs('#cabecera');

  if (slot) {
    slot.outerHTML = html;
  }

  var btnNav =
    qs('#btn-menu');

  if (btnNav) {

    btnNav.addEventListener(
      'click',
      function () {

        var nav =
          qs('#menu-principal');

        var abierto =
          nav.classList.toggle(
            'is-open'
          );

        btnNav.setAttribute(
          'aria-expanded',
          abierto
        );

        btnNav.innerHTML =
          icono(
            abierto
              ? 'i-close'
              : 'i-menu'
          );
      }
    );
  }

  var btnUsuario =
    qs('#btn-usuario');

  if (btnUsuario) {

    btnUsuario.addEventListener(
      'click',
      function (e) {

        e.stopPropagation();

        var m =
          btnUsuario.closest(
            '.menu-usuario'
          );

        var abierto =
          m.classList.toggle(
            'is-open'
          );

        btnUsuario.setAttribute(
          'aria-expanded',
          abierto
        );
      }
    );

    document.addEventListener(
      'click',
      function () {

        var m =
          qs('.menu-usuario');

        if (m) {
          m.classList.remove(
            'is-open'
          );
        }
      }
    );
  }

  var btnSalir =
    qs('#btn-salir');

  if (btnSalir) {
    btnSalir.addEventListener(
      'click',
      salir
    );
  }

  pintarContador();
}


/* ================================================================
   HORARIOS
   ================================================================ */

var HORARIOS = [
  {
    dia: 'Lunes',
    texto: '07:00 – 21:00',
    n: 1
  },

  {
    dia: 'Martes',
    texto: '07:00 – 21:00',
    n: 2
  },

  {
    dia: 'Miércoles',
    texto: '07:00 – 21:00',
    n: 3
  },

  {
    dia: 'Jueves',
    texto: '07:00 – 21:00',
    n: 4
  },

  {
    dia: 'Viernes',
    texto: '07:00 – 21:00',
    n: 5
  },

  {
    dia: 'Sábado',
    texto: '08:00 – 14:00',
    n: 6
  },

  {
    dia: 'Domingo',
    texto: 'Cerrado',
    n: 0
  }
];

function montarPie() {
  var hoy =
    new Date().getDay();

  var html =
    '' +

    '<footer class="pie-sitio">' +

      '<div class="contenedor">' +

        '<div class="pie-sitio__cuadricula">' +

          '<div>' +

            marca() +

            '<p class="mt-4" style="max-width:32ch">' +
              'Cafetería del campus UTP. Pides desde el aula, pasas por barra y sigues con tu día.' +
            '</p>' +

            '<div class="redes mt-5">' +

              '<a href="#" aria-label="Instagram">' +
                icono('i-instagram', 'icono--sm') +
              '</a>' +

              '<a href="#" aria-label="Facebook">' +
                icono('i-facebook', 'icono--sm') +
              '</a>' +

              '<a href="#" aria-label="TikTok">' +
                icono('i-tiktok', 'icono--sm') +
              '</a>' +

              '<a href="#" aria-label="WhatsApp">' +
                icono('i-whatsapp', 'icono--sm') +
              '</a>' +

            '</div>' +

          '</div>' +

          '<div>' +

            '<h5>La carta</h5>' +

            '<ul class="pila">' +

              CATEGORIAS
                .slice(1, 6)
                .map(function (c) {

                  return (
                    '<li>' +
                    '<a href="' +
                    url(
                      'index.html?cat=' +
                      c.id +
                      '#carta'
                    ) +
                    '">' +
                    c.nombre +
                    '</a>' +
                    '</li>'
                  );

                })
                .join('') +

            '</ul>' +

          '</div>' +

          '<div>' +

            '<h5>Tu cuenta</h5>' +

            '<ul class="pila">' +

              '<li><a href="' +
                url('login.html') +
              '">Iniciar sesión</a></li>' +

              '<li><a href="' +
                url('login.html#registro') +
              '">Crear cuenta</a></li>' +

              '<li><a href="' +
                url('pedidos.html') +
              '">Mis pedidos</a></li>' +

              '<li><a href="' +
                url('carrito.html') +
              '">Mi carrito</a></li>' +

              '<li><a href="' +
                url('index.html#nosotros') +
              '">Nosotros</a></li>' +

            '</ul>' +

          '</div>' +

          '<div>' +

            '<h5>Atención</h5>' +

            '<div class="pie-sitio__horario">' +

              HORARIOS
                .map(function (h) {

                  return (
                    '<div class="' +
                    (
                      h.n === hoy
                        ? 'is-today'
                        : ''
                    ) +
                    '">' +

                      '<span>' +
                        h.dia +
                      '</span>' +

                      '<span>' +
                        h.texto +
                      '</span>' +

                    '</div>'
                  );

                })
                .join('') +

            '</div>' +

            '<p class="mt-4 fila gap-2" style="font-size:.8125rem">' +

              icono(
                'i-pin',
                'icono--sm'
              ) +

              'Pabellón A, 1.º piso · Campus UTP' +

            '</p>' +

          '</div>' +

        '</div>' +

        '<div class="pie-sitio__inferior">' +

          '<span>© ' +
            new Date().getFullYear() +
            ' Coffee Online · Proyecto de Desarrollo Web Integrado · UTP' +
          '</span>' +

          '<span>' +
            'Precios en soles e incluyen IGV' +
          '</span>' +

        '</div>' +

      '</div>' +

    '</footer>';

  var slot =
    qs('#pie');

  if (slot) {
    slot.outerHTML = html;
  }
}


/* ================================================================
   ARRANQUE
   ================================================================ */

function iniciar(opciones) {
  opciones =
    opciones || {};

  productos();
  usuarios();
  sembrarPedidos();

  if (
    opciones.cabecera !== false
  ) {
    montarCabecera(
      opciones.activo
    );
  }

  if (
    opciones.pie !== false
  ) {
    montarPie();
  }

  activarBotonesAgregar();
}

return {

  url: url,
  qs: qs,
  qsa: qsa,
  money: money,
  escapar: escapar,
  param: param,

  icono: icono,
  fecha: fecha,
  hora: hora,
  normalizar: normalizar,
  iniciales: iniciales,

  leer: leer,
  guardar: guardar,
  K: K,

  productos: productos,
  guardarProductos: guardarProductos,
  producto: producto,

  categoria: categoria,
  iconoCategoria: iconoCategoria,
  miniatura: miniatura,

  tarjetaProducto: tarjetaProducto,

  usuarios: usuarios,
  guardarUsuarios: guardarUsuarios,

  sesion: sesion,
  login: login,
  registrar: registrar,
  salir: salir,

  exigirSesion: exigirSesion,
  exigirAdmin: exigirAdmin,

  carrito: carrito,
  carritoDetallado: carritoDetallado,
  agregar: agregar,

  fijarCantidad: fijarCantidad,
  quitar: quitar,
  vaciarCarrito: vaciarCarrito,

  unidades: unidades,
  subtotal: subtotal,
  pintarContador: pintarContador,

  pedidos: pedidos,
  pedido: pedido,
  pedidosDe: pedidosDe,
  crearPedido: crearPedido,

  cambiarEstado: cambiarEstado,
  guardarPedidos: guardarPedidos,
  etiquetaEstado: etiquetaEstado,

  toast: toast,
  montarCabecera: montarCabecera,
  montarPie: montarPie,
  iniciar: iniciar
};

})();


/* ================================================================
   MOV — SLIDER Y ANIMACIONES
   ================================================================ */

var MOV = (function () {
'use strict';

function qs(selector, context) {
  return (
    context || document
  ).querySelector(selector);
}

function qsa(selector, context) {
  return Array.prototype.slice.call(
    (context || document)
      .querySelectorAll(selector)
  );
}


/* ================================================================
   SLIDER PRINCIPAL INFINITO
   ================================================================ */

function portada(selector) {

  var portadaEl =
    qs(selector);

  if (!portadaEl) return;

  var riel =
    qs(
      '.portada__riel',
      portadaEl
    );

  if (!riel) return;

  if (
    riel.dataset.inicializado ===
    'true'
  ) {
    return;
  }

  riel.dataset.inicializado =
    'true';

  var originales =
    qsa(
      '.portada__diapositiva:not(.is-clone)',
      riel
    );

  if (!originales.length) {
    return;
  }

  var total =
    originales.length;

  var indice = 0;

  var ocupado = false;

  var timer = null;

  var pausado = false;

  var DURACION = 6800;

  var TRANSICION = 900;

  var puntos =
    qsa(
      '.portada__punto',
      portadaEl
    );

  var frases =
    qsa(
      '.portada__frase',
      portadaEl
    );


  /* ============================================================
     CLONES PARA HACER EL CARRUSEL INFINITO
     ============================================================ */

  var clonUltima =
    originales[
      total - 1
    ].cloneNode(true);

  var clonPrimera =
    originales[
      0
    ].cloneNode(true);

  clonUltima.classList.remove(
    'is-active'
  );

  clonPrimera.classList.remove(
    'is-active'
  );

  clonUltima.classList.add(
    'is-clone'
  );

  clonPrimera.classList.add(
    'is-clone'
  );

  riel.insertBefore(
    clonUltima,
    riel.firstChild
  );

  riel.appendChild(
    clonPrimera
  );

  var slides =
    qsa(
      '.portada__diapositiva',
      riel
    );


  /* ============================================================
     ANCHO
     ============================================================ */

  function ancho() {

    return (
      portadaEl
        .getBoundingClientRect()
        .width ||
      window.innerWidth
    );

  }


  /* ============================================================
     TRANSICIÓN
     ============================================================ */

  function aplicarTransicion(activa) {

    riel.style.transition =
      activa

        ? 'transform ' +
          TRANSICION +
          'ms cubic-bezier(.65,0,.35,1)'

        : 'none';

  }


  /* ============================================================
     MOVER SLIDER
     ============================================================ */

  function mover(
    posicion,
    animar
  ) {

    aplicarTransicion(
      animar !== false
    );

    riel.style.transform =
      'translate3d(' +
      (-posicion * ancho()) +
      'px,0,0)';

  }


  /* ============================================================
     ACTUALIZAR ESTADO VISUAL
     ============================================================ */

  function estadoVisual() {

    var real =
      indice;

    if (real < 0) {
      real =
        total - 1;
    }

    if (real >= total) {
      real = 0;
    }


    slides.forEach(
      function (slide, i) {

        slide.classList.toggle(
          'is-active',
          i === indice + 1
        );

      }
    );


    frases.forEach(
      function (frase, i) {

        frase.classList.toggle(
          'is-active',
          i === real
        );

      }
    );


    puntos.forEach(
      function (punto, i) {

        punto.classList.toggle(
          'is-active',
          i === real
        );

        punto.setAttribute(
          'aria-current',
          i === real
            ? 'true'
            : 'false'
        );

      }
    );

  }


  /* ============================================================
     REAJUSTAR SIN ANIMACIÓN
     ============================================================ */

  function reajustar() {

    aplicarTransicion(false);

    mover(
      indice + 1,
      false
    );

    riel.offsetHeight;

    aplicarTransicion(true);

  }


  /* ============================================================
     TERMINAR TRANSICIÓN INFINITA
     ============================================================ */

  function terminarTransicion() {

    if (indice >= total) {

      indice = 0;

      reajustar();

    } else if (indice < 0) {

      indice =
        total - 1;

      reajustar();

    }

    estadoVisual();

    ocupado = false;

  }


  /* ============================================================
     SIGUIENTE
     ============================================================ */

  function siguiente() {

    if (ocupado) return;

    ocupado = true;

    indice += 1;

    mover(
      indice + 1,
      true
    );

    estadoVisual();

    reiniciarAuto();

    window.setTimeout(
      terminarTransicion,
      TRANSICION + 30
    );

  }


  /* ============================================================
     ANTERIOR
     ============================================================ */

  function anterior() {

    if (ocupado) return;

    ocupado = true;

    indice -= 1;

    mover(
      indice + 1,
      true
    );

    estadoVisual();

    reiniciarAuto();

    window.setTimeout(
      terminarTransicion,
      TRANSICION + 30
    );

  }


  /* ============================================================
     IR A PUNTO
     ============================================================ */

  function irA(
    nuevoIndice
  ) {

    if (
      ocupado ||
      nuevoIndice < 0 ||
      nuevoIndice >= total
    ) {
      return;
    }

    ocupado = true;

    indice =
      nuevoIndice;

    mover(
      indice + 1,
      true
    );

    estadoVisual();

    reiniciarAuto();

    window.setTimeout(
      function () {

        ocupado = false;

      },
      TRANSICION + 30
    );

  }


  /* ============================================================
     FLECHAS
     ============================================================ */

  var btnAnterior =
    qs(
      '#portada-anterior',
      portadaEl
    );

  var btnSiguiente =
    qs(
      '#portada-siguiente',
      portadaEl
    );

  if (btnAnterior) {

    btnAnterior.addEventListener(
      'click',
      anterior
    );

  }

  if (btnSiguiente) {

    btnSiguiente.addEventListener(
      'click',
      siguiente
    );

  }


  /* ============================================================
     PUNTOS
     ============================================================ */

  puntos.forEach(
    function (punto, i) {

      punto.addEventListener(
        'click',
        function () {

          irA(i);

        }
      );

    }
  );


  /* ============================================================
     AUTOPLAY
     ============================================================ */

  function detenerAuto() {

    if (timer !== null) {

      window.clearTimeout(
        timer
      );

      timer = null;

    }

  }


  function programarAuto() {

    detenerAuto();

    if (
      pausado ||
      document.hidden
    ) {
      return;
    }

    timer =
      window.setTimeout(
        function () {

          siguiente();

        },
        DURACION
      );

  }


  function reiniciarAuto() {

    programarAuto();

  }


  /* ============================================================
     PAUSAR AL PASAR EL MOUSE
     ============================================================ */

  portadaEl.addEventListener(
    'mouseenter',
    function () {

      pausado = true;

      detenerAuto();

    }
  );


  portadaEl.addEventListener(
    'mouseleave',
    function () {

      pausado = false;

      programarAuto();

    }
  );


  /* ============================================================
     SWIPE EN CELULAR
     ============================================================ */

  var inicioX = 0;

  var finX = 0;


  portadaEl.addEventListener(
    'touchstart',
    function (e) {

      if (!e.touches.length) {
        return;
      }

      inicioX =
        e.touches[0].clientX;

      finX =
        inicioX;

    },
    {
      passive: true
    }
  );


  portadaEl.addEventListener(
    'touchmove',
    function (e) {

      if (!e.touches.length) {
        return;
      }

      finX =
        e.touches[0].clientX;

    },
    {
      passive: true
    }
  );


  portadaEl.addEventListener(
    'touchend',
    function () {

      var diferencia =
        finX - inicioX;

      if (
        Math.abs(diferencia) <
        50
      ) {
        return;
      }

      if (
        diferencia < 0
      ) {
        siguiente();
      } else {
        anterior();
      }

    }
  );


  /* ============================================================
     RESIZE
     ============================================================ */

  window.addEventListener(
    'resize',
    function () {

      reajustar();

    }
  );


  /* ============================================================
     CAMBIO DE PESTAÑA
     ============================================================ */

  document.addEventListener(
    'visibilitychange',
    function () {

      if (
        document.hidden
      ) {

        detenerAuto();

      } else if (
        !pausado
      ) {

        programarAuto();

      }

    }
  );


  /* ============================================================
     INICIALIZAR TAMAÑOS
     ============================================================ */

  slides.forEach(
    function (slide) {

      slide.style.width =
        ancho() + 'px';

      slide.style.flexBasis =
        ancho() + 'px';

    }
  );


  /* ============================================================
     POSICIÓN INICIAL
     ============================================================ */

  aplicarTransicion(false);

  mover(
    1,
    false
  );

  riel.offsetHeight;

  aplicarTransicion(true);

  estadoVisual();

  programarAuto();

}


/* ================================================================
   CARRUSELES DE PRODUCTOS
   ================================================================ */

function carrusel(
  selector,
  anteriorSelector,
  siguienteSelector
) {

  var contenedor =
    qs(selector);

  if (!contenedor) {
    return;
  }

  var anteriorBtn =
    qs(anteriorSelector);

  var siguienteBtn =
    qs(siguienteSelector);


  function paso() {

    var tarjeta =
      qs(
        '.tarjeta',
        contenedor
      );

    if (!tarjeta) {
      return 280;
    }

    return (
      tarjeta
        .getBoundingClientRect()
        .width +
      20
    );

  }


  if (anteriorBtn) {

    anteriorBtn.addEventListener(
      'click',
      function () {

        contenedor.scrollBy({
          left: -paso(),
          behavior: 'smooth'
        });

      }
    );

  }


  if (siguienteBtn) {

    siguienteBtn.addEventListener(
      'click',
      function () {

        contenedor.scrollBy({
          left: paso(),
          behavior: 'smooth'
        });

      }
    );

  }


  /* Drag con mouse */

  var presionado = false;

  var inicio = 0;

  var scrollInicial = 0;


  contenedor.addEventListener(
    'mousedown',
    function (e) {

      presionado = true;

      inicio =
        e.pageX;

      scrollInicial =
        contenedor.scrollLeft;

      contenedor.classList.add(
        'is-dragging'
      );

    }
  );


  document.addEventListener(
    'mouseup',
    function () {

      presionado = false;

      contenedor.classList.remove(
        'is-dragging'
      );

    }
  );


  contenedor.addEventListener(
    'mousemove',
    function (e) {

      if (!presionado) {
        return;
      }

      contenedor.scrollLeft =
        scrollInicial -
        (
          e.pageX -
          inicio
        );

    }
  );

}


/* ================================================================
   AUTODESPLAZAMIENTO
   ================================================================ */

function autoDesplazar(selector) {

  var contenedor =
    qs(selector);

  if (!contenedor) {
    return;
  }

  var detenido = false;

  var frame = null;

  var velocidad =
    0.35;


  contenedor.addEventListener(
    'mouseenter',
    function () {

      detenido = true;

    }
  );


  contenedor.addEventListener(
    'mouseleave',
    function () {

      detenido = false;

    }
  );


  function animar() {

    if (!detenido) {

      contenedor.scrollLeft +=
        velocidad;

    }

    frame =
      window.requestAnimationFrame(
        animar
      );

  }


  frame =
    window.requestAnimationFrame(
      animar
    );


  window.addEventListener(
    'beforeunload',
    function () {

      if (frame !== null) {

        window.cancelAnimationFrame(
          frame
        );

      }

    }
  );

}


/* ================================================================
   ESCALONADO
   ================================================================ */

function escalonar(
  selector,
  retraso,
  tipo
) {

  var contenedor =
    qs(selector);

  if (!contenedor) {
    return;
  }

  Array.prototype
    .slice.call(
      contenedor.children
    )
    .forEach(
      function (
        elemento,
        indice
      ) {

        elemento.style.setProperty(
          '--delay',
          (
            indice *
            (retraso || 50)
          ) +
          'ms'
        );

        if (tipo) {

          elemento.dataset.revelar =
            tipo;

        }

      }
    );

}


/* ================================================================
   REVELAR
   ================================================================ */

function revelar(
  contenedor
) {

  var elementos =
    contenedor

      ? qsa(
          '[data-revelar]',
          contenedor
        )

      : qsa(
          '[data-revelar]'
        );


  if (!elementos.length) {
    return;
  }


  if (
    !(
      'IntersectionObserver'
      in window
    )
  ) {

    elementos.forEach(
      function (elemento) {

        elemento.classList.add(
          'is-visible'
        );

      }
    );

    return;
  }


  var observer =
    new IntersectionObserver(
      function (entradas) {

        entradas.forEach(
          function (entrada) {

            if (
              entrada.isIntersecting
            ) {

              entrada.target.classList.add(
                'is-visible'
              );

              observer.unobserve(
                entrada.target
              );

            }

          }
        );

      },
      {
        threshold: 0.12
      }
    );


  elementos.forEach(
    function (elemento) {

      observer.observe(
        elemento
      );

    }
  );

}


/* ================================================================
   PARALAJE
   ================================================================ */

function paralaje() {

  var elementos =
    qsa('[data-paralaje]');

  if (!elementos.length) {
    return;
  }

  window.addEventListener(
    'scroll',
    function () {

      var scroll =
        window.scrollY;

      elementos.forEach(
        function (elemento) {

          var velocidad =
            Number(
              elemento.dataset.paralaje
            ) || 0.04;

          elemento.style.transform =
            'translate3d(0,' +
            (
              scroll *
              velocidad
            ) +
            'px,0)';

        }
      );

    },
    {
      passive: true
    }
  );

}


/* ================================================================
   CONTADORES
   ================================================================ */

function contadores() {

  var elementos =
    qsa(
      '[data-contar-hasta]'
    );

  if (!elementos.length) {
    return;
  }


  elementos.forEach(
    function (elemento) {

      var objetivo =
        Number(
          elemento.dataset.contarHasta
        );

      if (!isFinite(objetivo)) {
        return;
      }

      var decimales =
        Number(
          elemento.dataset.decimales ||
          0
        );

      var duracion =
        1000;

      var inicio =
        null;


      function animar(
        tiempo
      ) {

        if (inicio === null) {
          inicio = tiempo;
        }

        var progreso =
          Math.min(
            (
              tiempo -
              inicio
            ) /
            duracion,
            1
          );

        var suave =
          1 -
          Math.pow(
            1 - progreso,
            3
          );

        var valor =
          objetivo *
          suave;

        elemento.textContent =
          valor.toFixed(
            decimales
          );

        if (
          progreso < 1
        ) {

          window.requestAnimationFrame(
            animar
          );

        }

      }


      window.requestAnimationFrame(
        animar
      );

    }
  );

}


function detalles() {}


/* ================================================================
   ANCLAS
   ================================================================ */

function anclas() {

  qsa(
    'a[href^="#"]'
  ).forEach(
    function (enlace) {

      enlace.addEventListener(
        'click',
        function (e) {

          var id =
            enlace.getAttribute(
              'href'
            );

          if (
            !id ||
            id === '#'
          ) {
            return;
          }


          var destino =
            qs(id);

          if (!destino) {
            return;
          }


          e.preventDefault();


          var cabecera =
            qs(
              '.cabecera-sitio'
            );

          var offset =
            cabecera
              ? cabecera.offsetHeight
              : 0;


          var posicion =
            destino
              .getBoundingClientRect()
              .top +
            window.scrollY -
            offset;


          window.scrollTo({
            top: posicion,
            behavior: 'smooth'
          });

        }
      );

    }
  );

}


/* ================================================================
   MENÚ ACTIVO
   ================================================================ */

function menuActivo() {

  var enlaces =
    qsa(
      '.menu__enlace'
    );

  if (!enlaces.length) {
    return;
  }


  function actualizar() {

    var hash =
      location.hash ||
      '#inicio';


    enlaces.forEach(
      function (enlace) {

        var href =
          enlace.getAttribute(
            'href'
          ) || '';

        enlace.classList.toggle(
          'is-active',
          href.indexOf(hash) !== -1
        );

      }
    );

  }


  window.addEventListener(
    'hashchange',
    actualizar
  );

  actualizar();

}


/* ================================================================
   API MOV
   ================================================================ */

return {

  portada: portada,

  carrusel: carrusel,

  autoDesplazar:
    autoDesplazar,

  escalonar:
    escalonar,

  revelar:
    revelar,

  paralaje:
    paralaje,

  contadores:
    contadores,

  detalles:
    detalles,

  anclas:
    anclas,

  menuActivo:
    menuActivo

};

})();/* =========================================================================
   Coffee Online — Movimiento
   Apariciones al hacer scroll, portada con diapositivas, carruseles
   arrastrables, paralaje y detalles de interfaz.
   Sin librerías externas.
   ========================================================================= */

var MOV = (function () {
  'use strict';

  var reducido = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;


  /* ===============================================================
     1. APARICIÓN AL ENTRAR EN PANTALLA
     =============================================================== */

  function revelar(raiz) {

    var elementos =
      (raiz || document)
        .querySelectorAll(
          '[data-revelar]:not(.is-visible)'
        );


    if (!elementos.length) {
      return;
    }


    if (
      reducido ||
      !('IntersectionObserver' in window)
    ) {

      elementos.forEach(
        function (el) {

          el.classList.add(
            'is-visible'
          );

        }
      );

      return;
    }


    var observador =
      new IntersectionObserver(
        function (entradas) {

          entradas.forEach(
            function (e) {

              if (
                !e.isIntersecting
              ) {
                return;
              }


              e.target.classList.add(
                'is-visible'
              );


              observador.unobserve(
                e.target
              );

            }
          );

        },
        {
          threshold: 0.12,
          rootMargin:
            '0px 0px -8% 0px'
        }
      );


    elementos.forEach(
      function (el) {

        observador.observe(el);

      }
    );


    /*
      Red de seguridad.
    */
    setTimeout(
      function () {

        elementos.forEach(
          function (el) {

            el.classList.add(
              'is-visible'
            );

          }
        );

      },
      2500
    );

  }


  /* ===============================================================
     ESCALONADO
     =============================================================== */

  function escalonar(
    selector,
    paso,
    tipo
  ) {

    document
      .querySelectorAll(selector)
      .forEach(
        function (cont) {

          Array.prototype.forEach.call(
            cont.children,
            function (hijo, i) {

              if (
                !hijo.hasAttribute(
                  'data-revelar'
                )
              ) {

                hijo.setAttribute(
                  'data-revelar',
                  tipo || ''
                );

              }


              hijo.style.setProperty(
                '--delay',
                (
                  (i % 8) *
                  (paso || 70)
                ) +
                'ms'
              );

            }
          );

        }
      );

  }


  /* ===============================================================
     2. PORTADA — SLIDER INFINITO CINEMATOGRÁFICO
     =============================================================== */

  function portada(raiz) {

    var stage =
      typeof raiz === 'string'
        ? document.querySelector(raiz)
        : raiz;


    if (!stage) {
      return;
    }


    /*
      Evita inicializar el mismo slider
      más de una vez.
    */
    if (
      stage.dataset.sliderInicializado ===
      'true'
    ) {
      return;
    }


    stage.dataset.sliderInicializado =
      'true';


    var riel =
      stage.querySelector(
        '.portada__riel'
      );


    if (!riel) {
      return;
    }


    /*
      SOLO tomamos las diapositivas originales.

      Los clones que crearemos tendrán
      la clase .is-clone.
    */
    var originales =
      Array.prototype.slice.call(
        riel.querySelectorAll(
          '.portada__diapositiva:not(.is-clone)'
        )
      );


    var textos =
      stage.querySelectorAll(
        '.portada__frase'
      );


    var ticks =
      stage.querySelectorAll(
        '.portada__punto'
      );


    var total =
      originales.length;


    if (!total) {
      return;
    }


    /* =============================================================
       CONFIGURACIÓN
       ============================================================= */


    /*
      Tiempo que permanece cada imagen antes
      de comenzar el siguiente movimiento.
    */
    var TIEMPO_ESPERA =
      7500;


    /*
      Tiempo del desplazamiento entre imágenes.

      3.8 segundos = movimiento lento.
    */
    var DURACION_CAMBIO =
      3800;


    /*
      Temporizador del siguiente movimiento.
    */
    var temporizador =
      null;


    /*
      Indica que hay una transición en curso.
    */
    var animando =
      false;


    /*
      Posición física.

      0             = clon última
      1             = primera
      2             = segunda
      ...
      total         = última
      total + 1     = clon primera
    */
    var posicion =
      1;


    /* =============================================================
       CREAR CLONES
       ============================================================= */

    var primeraClon =
      originales[0].cloneNode(
        true
      );


    var ultimaClon =
      originales[
        total - 1
      ].cloneNode(
        true
      );


    primeraClon.classList.remove(
      'is-active'
    );


    ultimaClon.classList.remove(
      'is-active'
    );


    primeraClon.classList.add(
      'is-clone'
    );


    ultimaClon.classList.add(
      'is-clone'
    );


    /*
      [última clon]
      [1]
      [2]
      [3]
      [4]
      [5]
      [primera clon]
    */

    riel.insertBefore(
      ultimaClon,
      riel.firstChild
    );


    riel.appendChild(
      primeraClon
    );


    var slides =
      Array.prototype.slice.call(
        riel.querySelectorAll(
          '.portada__diapositiva'
        )
      );


    /* =============================================================
       TAMAÑOS
       ============================================================= */

    var anchoSlide =
      100 /
      (total + 2);


    riel.style.width =
      (
        (total + 2) *
        100
      ) +
      '%';


    slides.forEach(
      function (slide) {

        slide.style.width =
          anchoSlide +
          '%';


        slide.style.flex =
          '0 0 ' +
          anchoSlide +
          '%';

      }
    );


    riel.style.willChange =
      'transform';


    /* =============================================================
       ÍNDICE LÓGICO
       ============================================================= */

    function obtenerIndiceLogico(
      pos
    ) {

      if (
        pos === 0
      ) {

        return total - 1;

      }


      if (
        pos === total + 1
      ) {

        return 0;

      }


      return pos - 1;

    }


    /* =============================================================
       ACTUALIZAR ESTADOS
       ============================================================= */

    function actualizarEstado() {

      var indice =
        obtenerIndiceLogico(
          posicion
        );


      slides.forEach(
        function (
          slide,
          i
        ) {

          slide.classList.toggle(
            'is-active',
            i === posicion
          );

        }
      );


      textos.forEach(
        function (
          texto,
          i
        ) {

          texto.classList.toggle(
            'is-active',
            i === indice
          );

        }
      );


      ticks.forEach(
        function (
          tick,
          i
        ) {

          tick.classList.toggle(
            'is-active',
            i === indice
          );


          tick.classList.toggle(
            'is-past',
            i < indice
          );


          if (
            i === indice
          ) {

            tick.setAttribute(
              'aria-current',
              'true'
            );

          } else {

            tick.removeAttribute(
              'aria-current'
            );

          }

        }
      );

    }


    /* =============================================================
       APLICAR POSICIÓN
       ============================================================= */

    function aplicarPosicion(
      pos,
      animado
    ) {

      posicion =
        pos;


      if (
        animado
      ) {

        riel.style.transition =
          'transform ' +
          DURACION_CAMBIO +
          'ms cubic-bezier(.65, 0, .35, 1)';

      } else {

        riel.style.transition =
          'none';

      }


      riel.style.transform =
        'translate3d(' +
        (
          -posicion *
          anchoSlide
        ) +
        '%, 0, 0)';


      actualizarEstado();

    }


    /* =============================================================
       CORREGIR CARRUSEL INFINITO
       ============================================================= */

    function corregirInfinito() {

      /*
        Llegamos al clon de la primera.

        [5] [1] [2] [3] [4] [5] [1]
                              ↑

        Saltamos a la primera real.
      */

      if (
        posicion === total + 1
      ) {

        riel.style.transition =
          'none';


        posicion =
          1;


        riel.style.transform =
          'translate3d(' +
          (
            -posicion *
            anchoSlide
          ) +
          '%, 0, 0)';


        actualizarEstado();


        void riel.offsetWidth;

      }


      /*
        Llegamos al clon de la última.

        [5] [1] [2] [3] [4] [5] [1]
         ↑

        Saltamos a la última real.
      */

      if (
        posicion === 0
      ) {

        riel.style.transition =
          'none';


        posicion =
          total;


        riel.style.transform =
          'translate3d(' +
          (
            -posicion *
            anchoSlide
          ) +
          '%, 0, 0)';


        actualizarEstado();


        void riel.offsetWidth;

      }


      animando =
        false;

    }


    /* =============================================================
       CANCELAR TEMPORIZADOR
       ============================================================= */

    function cancelarTemporizador() {

      if (
        temporizador !== null
      ) {

        clearTimeout(
          temporizador
        );

        temporizador =
          null;

      }

    }


    /* =============================================================
       PROGRAMAR SIGUIENTE
       ============================================================= */

    function programarSiguiente() {

      cancelarTemporizador();


      if (
        reducido
      ) {
        return;
      }


      temporizador =
        setTimeout(
          function () {

            siguiente();

          },
          TIEMPO_ESPERA
        );

    }


    /* =============================================================
       SIGUIENTE
       ============================================================= */

    function siguiente() {

      if (
        animando
      ) {
        return;
      }


      animando =
        true;


      posicion =
        posicion + 1;


      aplicarPosicion(
        posicion,
        true
      );


      /*
        Esperamos a que termine completamente
        la animación antes de volver a programar.
      */

      setTimeout(
        function () {

          corregirInfinito();

          programarSiguiente();

        },
        DURACION_CAMBIO + 80
      );

    }


    /* =============================================================
       ANTERIOR
       ============================================================= */

    function anterior() {

      if (
        animando
      ) {
        return;
      }


      cancelarTemporizador();


      animando =
        true;


      posicion =
        posicion - 1;


      aplicarPosicion(
        posicion,
        true
      );


      setTimeout(
        function () {

          corregirInfinito();

          programarSiguiente();

        },
        DURACION_CAMBIO + 80
      );

    }


    /* =============================================================
       IR A UN PUNTO
       ============================================================= */

    function irA(
      indice
    ) {

      if (
        animando
      ) {
        return;
      }


      cancelarTemporizador();


      animando =
        true;


      posicion =
        indice + 1;


      aplicarPosicion(
        posicion,
        true
      );


      setTimeout(
        function () {

          corregirInfinito();

          programarSiguiente();

        },
        DURACION_CAMBIO + 80
      );

    }


    /* =============================================================
       TRANSITION END — RESPALDO
       ============================================================= */

    riel.addEventListener(
      'transitionend',
      function (e) {

        if (
          e.propertyName !==
          'transform'
        ) {
          return;
        }


        if (
          posicion === total + 1 ||
          posicion === 0
        ) {

          corregirInfinito();

        }

      }
    );


    /* =============================================================
       FLECHA ANTERIOR
       ============================================================= */

    var anteriorBtn =
      stage.querySelector(
        '#portada-anterior'
      );


    if (
      anteriorBtn
    ) {

      anteriorBtn.addEventListener(
        'click',
        function (e) {

          e.preventDefault();

          anterior();

        }
      );

    }


    /* =============================================================
       FLECHA SIGUIENTE
       ============================================================= */

    var siguienteBtn =
      stage.querySelector(
        '#portada-siguiente'
      );


    if (
      siguienteBtn
    ) {

      siguienteBtn.addEventListener(
        'click',
        function (e) {

          e.preventDefault();

          siguiente();

        }
      );

    }


    /* =============================================================
       PUNTOS
       ============================================================= */

    ticks.forEach(
      function (
        tick,
        i
      ) {

        tick.addEventListener(
          'click',
          function (e) {

            e.preventDefault();

            irA(i);

          }
        );

      }
    );


    /* =============================================================
       SWIPE
       ============================================================= */

    var inicioX =
      null;


    var inicioY =
      null;


    stage.addEventListener(
      'touchstart',
      function (e) {

        if (
          !e.touches ||
          !e.touches.length
        ) {
          return;
        }


        inicioX =
          e.touches[0].clientX;


        inicioY =
          e.touches[0].clientY;


        cancelarTemporizador();

      },
      {
        passive: true
      }
    );


    stage.addEventListener(
      'touchend',
      function (e) {

        if (
          inicioX === null
        ) {
          return;
        }


        var touch =
          e.changedTouches &&
          e.changedTouches[0];


        if (!touch) {
          return;
        }


        var dx =
          touch.clientX -
          inicioX;


        var dy =
          touch.clientY -
          inicioY;


        /*
          Solo swipe horizontal.
        */

        if (
          Math.abs(dx) > 45 &&
          Math.abs(dx) >
          Math.abs(dy)
        ) {

          if (
            dx < 0
          ) {

            siguiente();

          } else {

            anterior();

          }

        } else {

          programarSiguiente();

        }


        inicioX =
          null;


        inicioY =
          null;

      },
      {
        passive: true
      }
    );


    /* =============================================================
       TECLADO
       ============================================================= */

    document.addEventListener(
      'keydown',
      function (e) {

        var rect =
          stage.getBoundingClientRect();


        var visible =
          rect.bottom > 0 &&
          rect.top <
          window.innerHeight;


        if (!visible) {
          return;
        }


        if (
          e.key ===
          'ArrowRight'
        ) {

          siguiente();

        }


        if (
          e.key ===
          'ArrowLeft'
        ) {

          anterior();

        }

      }
    );


    /* =============================================================
       VISIBILIDAD DE PESTAÑA
       ============================================================= */

    document.addEventListener(
      'visibilitychange',
      function () {

        if (
          document.hidden
        ) {

          cancelarTemporizador();

        } else {

          programarSiguiente();

        }

      }
    );


    /* =============================================================
       POSICIÓN INICIAL
       ============================================================= */

    aplicarPosicion(
      1,
      false
    );


    void riel.offsetWidth;


    if (
      !reducido
    ) {

      programarSiguiente();

    }

  }


  /* ===============================================================
     3. CARRUSEL DE TARJETAS
     =============================================================== */

  function carrusel(
    selectorRail,
    selectorPrev,
    selectorNext
  ) {

    var rail =
      document.querySelector(
        selectorRail
      );


    if (!rail) {
      return;
    }


    var prev =
      document.querySelector(
        selectorPrev
      );


    var next =
      document.querySelector(
        selectorNext
      );


    function salto() {

      var primero =
        rail.firstElementChild;


      if (!primero) {
        return 300;
      }


      var ancho =
        primero
          .getBoundingClientRect()
          .width;


      var estilo =
        getComputedStyle(
          rail
        );


      var hueco =
        parseFloat(
          estilo.columnGap ||
          estilo.gap ||
          24
        );


      return (
        ancho +
        hueco
      ) *
      Math.max(
        1,
        Math.floor(
          rail.clientWidth /
          (
            ancho +
            hueco
          )
        ) - 1
      );

    }


    function refrescar() {

      if (
        prev
      ) {

        prev.disabled =
          rail.scrollLeft <
          8;

      }


      if (
        next
      ) {

        next.disabled =
          rail.scrollLeft >
          (
            rail.scrollWidth -
            rail.clientWidth -
            8
          );

      }

    }


    function mover(
      signo
    ) {

      rail.scrollBy({
        left:
          signo *
          salto(),

        behavior:
          'smooth'
      });


      setTimeout(
        refrescar,
        450
      );

    }


    if (
      prev
    ) {

      prev.addEventListener(
        'click',
        function () {

          mover(-1);

        }
      );

    }


    if (
      next
    ) {

      next.addEventListener(
        'click',
        function () {

          mover(1);

        }
      );

    }


    rail.addEventListener(
      'scroll',
      refrescar,
      {
        passive: true
      }
    );


    var arrastrando =
      false;


    var inicioX =
      0;


    var inicioScroll =
      0;


    var movido =
      0;


    rail.addEventListener(
      'mousedown',
      function (e) {

        if (
          e.button !== 0
        ) {
          return;
        }


        arrastrando =
          true;


        movido =
          0;


        inicioX =
          e.pageX;


        inicioScroll =
          rail.scrollLeft;


        e.preventDefault();

      }
    );


    window.addEventListener(
      'mousemove',
      function (e) {

        if (
          !arrastrando
        ) {
          return;
        }


        var dx =
          e.pageX -
          inicioX;


        movido =
          Math.abs(dx);


        if (
          movido > 4
        ) {

          rail.classList.add(
            'is-dragging'
          );

        }


        rail.scrollLeft =
          inicioScroll -
          dx;

      }
    );


    window.addEventListener(
      'mouseup',
      function () {

        if (
          !arrastrando
        ) {
          return;
        }


        arrastrando =
          false;


        setTimeout(
          function () {

            rail.classList.remove(
              'is-dragging'
            );

          },
          40
        );

      }
    );


    setTimeout(
      refrescar,
      60
    );


    window.addEventListener(
      'resize',
      refrescar
    );

  }


  /* ===============================================================
     4. AUTODESPLAZAMIENTO DE TARJETAS
     =============================================================== */

  function autoDesplazar(
    selectorRail
  ) {

    var rail =
      document.querySelector(
        selectorRail
      );


    if (
      !rail ||
      reducido
    ) {
      return;
    }


    var activo =
      true;


    var VELOCIDAD =
      0.35;


    var posicion =
      rail.scrollLeft;


    rail.classList.add(
      'is-desplazando'
    );


    function pausar() {

      activo =
        false;

    }


    function reanudar() {

      activo =
        true;


      posicion =
        rail.scrollLeft;

    }


    rail.addEventListener(
      'mouseenter',
      pausar
    );


    rail.addEventListener(
      'mouseleave',
      reanudar
    );


    rail.addEventListener(
      'mousedown',
      pausar
    );


    rail.addEventListener(
      'touchstart',
      pausar,
      {
        passive: true
      }
    );


    rail.addEventListener(
      'touchend',
      reanudar
    );


    window.addEventListener(
      'mouseup',
      function () {

        if (
          !rail.matches(':hover')
        ) {

          reanudar();

        }

      }
    );


    function paso() {

      if (
        activo &&
        !rail.classList.contains(
          'is-dragging'
        )
      ) {

        var maximo =
          rail.scrollWidth -
          rail.clientWidth;


        if (
          maximo > 1
        ) {

          posicion +=
            VELOCIDAD;


          if (
            posicion >=
            maximo
          ) {

            posicion =
              0;

          }


          rail.scrollLeft =
            posicion;

        }

      }


      requestAnimationFrame(
        paso
      );

    }


    reanudar();


    requestAnimationFrame(
      paso
    );

  }


  /* ===============================================================
     5. PARALAJE
     =============================================================== */

  function paralaje() {

    if (
      reducido
    ) {
      return;
    }


    var piezas =
      Array.prototype.slice.call(
        document.querySelectorAll(
          '[data-paralaje]'
        )
      );


    if (!piezas.length) {
      return;
    }


    var pendiente =
      false;


    function pintar() {

      var centro =
        window.innerHeight /
        2;


      piezas.forEach(
        function (el) {

          var caja =
            el.getBoundingClientRect();


          if (
            caja.bottom < -200 ||
            caja.top >
            window.innerHeight + 200
          ) {
            return;
          }


          var factor =
            parseFloat(
              el.getAttribute(
                'data-paralaje'
              )
            ) || 0.15;


          var giro =
            parseFloat(
              el.getAttribute(
                'data-paralaje-giro'
              )
            ) || 0;


          var d =
            (
              caja.top +
              caja.height / 2 -
              centro
            );


          el.style.transform =
            'translate3d(0,' +
            (
              -d *
              factor
            ).toFixed(1) +
            'px,0) rotate(' +
            (
              -d *
              giro /
              100
            ).toFixed(2) +
            'deg)';

        }
      );


      pendiente =
        false;

    }


    window.addEventListener(
      'scroll',
      function () {

        if (
          pendiente
        ) {
          return;
        }


        pendiente =
          true;


        requestAnimationFrame(
          pintar
        );

      },
      {
        passive: true
      }
    );


    window.addEventListener(
      'resize',
      pintar
    );


    pintar();

  }


  /* ===============================================================
     6. CONTADORES
     =============================================================== */

  function contadores() {

    var nodos =
      document.querySelectorAll(
        '[data-contar-hasta]'
      );


    if (!nodos.length) {
      return;
    }


    function correr(
      el
    ) {

      var destino =
        parseFloat(
          el.getAttribute(
            'data-contar-hasta'
          )
        );


      var sufijo =
        el.getAttribute(
          'data-sufijo'
        ) || '';


      var decimales =
        (
          el.getAttribute(
            'data-decimales'
          ) | 0
        );


      if (
        reducido
      ) {

        el.textContent =
          destino.toFixed(
            decimales
          ) +
          sufijo;

        return;

      }


      var inicio =
        performance.now();


      var DUR =
        1400;


      function paso(
        t
      ) {

        var p =
          Math.min(
            1,
            (
              t -
              inicio
            ) /
            DUR
          );


        var suave =
          1 -
          Math.pow(
            1 - p,
            3
          );


        el.textContent =
          (
            destino *
            suave
          ).toFixed(
            decimales
          ) +
          sufijo;


        if (
          p < 1
        ) {

          requestAnimationFrame(
            paso
          );

        }

      }


      requestAnimationFrame(
        paso
      );

    }


    if (
      !(
        'IntersectionObserver'
        in window
      )
    ) {

      nodos.forEach(
        correr
      );

      return;

    }


    var obs =
      new IntersectionObserver(
        function (entradas) {

          entradas.forEach(
            function (e) {

              if (
                !e.isIntersecting
              ) {
                return;
              }


              correr(
                e.target
              );


              obs.unobserve(
                e.target
              );

            }
          );

        },
        {
          threshold: 0.6
        }
      );


    nodos.forEach(
      function (n) {

        obs.observe(n);

      }
    );

  }


  /* ===============================================================
     7. DETALLES DE INTERFAZ
     =============================================================== */

  function detalles() {

    var barra =
      document.createElement(
        'div'
      );


    barra.className =
      'progreso';


    document.body.appendChild(
      barra
    );


    var subir =
      document.createElement(
        'button'
      );


    subir.className =
      'subir';


    subir.setAttribute(
      'aria-label',
      'Volver arriba'
    );


    subir.innerHTML =
      '<svg class="icono">' +
      '<use href="#i-chev-down" ' +
      'style="transform:rotate(180deg);transform-origin:center">' +
      '</use>' +
      '</svg>';


    subir.addEventListener(
      'click',
      function () {

        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });

      }
    );


    document.body.appendChild(
      subir
    );


    var cabecera =
      document.querySelector(
        '.cabecera-sitio'
      );


    function alScroll() {

      var alto =
        document.documentElement
          .scrollHeight -
        window.innerHeight;


      barra.style.width =
        (
          alto > 0
            ? (
                window.scrollY /
                alto
              ) *
              100
            : 0
        ) +
        '%';


      subir.classList.toggle(
        'is-visible',
        window.scrollY > 700
      );


      if (
        cabecera
      ) {

        cabecera.classList.toggle(
          'is-scrolled',
          window.scrollY > 8
        );

      }

    }


    window.addEventListener(
      'scroll',
      alScroll,
      {
        passive: true
      }
    );


    alScroll();

  }


  /* ===============================================================
     8. ANCLAS
     =============================================================== */

  function anclas() {

    document.addEventListener(
      'click',
      function (e) {

        var a =
          e.target.closest(
            'a[href*="#"]'
          );


        if (!a) {
          return;
        }


        var href =
          a.getAttribute(
            'href'
          );


        if (!href) {
          return;
        }


        var partes =
          href.split('#');


        if (
          partes.length < 2 ||
          !partes[1]
        ) {
          return;
        }


        var mismaPagina =
          !partes[0] ||
          partes[0] ===
            location.pathname
              .split('/')
              .pop() ||
          partes[0] === './';


        if (
          !mismaPagina
        ) {
          return;
        }


        var destino =
          document.getElementById(
            partes[1]
          );


        if (!destino) {
          return;
        }


        e.preventDefault();


        var cabecera =
          document.querySelector(
            '.cabecera-sitio'
          );


        var margen =
          cabecera
            ? cabecera.offsetHeight
            : 72;


        window.scrollTo({

          top:
            destino
              .getBoundingClientRect()
              .top +
            window.scrollY -
            margen -
            12,

          behavior:
            'smooth'

        });


        history.replaceState(
          null,
          '',
          '#' +
          partes[1]
        );

      }
    );


    if (
      location.hash
    ) {

      setTimeout(
        function () {

          var destino =
            document.getElementById(
              location.hash.slice(1)
            );


          if (!destino) {
            return;
          }


          var cabecera =
            document.querySelector(
              '.cabecera-sitio'
            );


          var margen =
            cabecera
              ? cabecera.offsetHeight
              : 72;


          window.scrollTo({

            top:
              destino
                .getBoundingClientRect()
                .top +
              window.scrollY -
              margen -
              12

          });

        },
        220
      );

    }

  }


  /* ===============================================================
     9. MENÚ ACTIVO
     =============================================================== */

  function menuActivo(
    mapa
  ) {

    if (
      !(
        'IntersectionObserver'
        in window
      )
    ) {
      return;
    }


    var secciones =
      Object.keys(mapa)
        .map(
          function (id) {

            return document.getElementById(
              id
            );

          }
        )
        .filter(Boolean);


    if (
      !secciones.length
    ) {
      return;
    }


    var obs =
      new IntersectionObserver(
        function (entradas) {

          entradas.forEach(
            function (e) {

              if (
                !e.isIntersecting
              ) {
                return;
              }


              var enlace =
                mapa[
                  e.target.id
                ];


              document
                .querySelectorAll(
                  '.menu__enlace'
                )
                .forEach(
                  function (a) {

                    a.classList.toggle(
                      'is-active',
                      a.getAttribute(
                        'href'
                      ) === enlace
                    );

                  }
                );

            }
          );

        },
        {
          rootMargin:
            '-45% 0px -50% 0px'
        }
      );


    secciones.forEach(
      function (s) {

        obs.observe(s);

      }
    );

  }


  /* ===============================================================
     API PÚBLICA
     =============================================================== */

  return {

    reducido:
      reducido,

    revelar:
      revelar,

    escalonar:
      escalonar,

    portada:
      portada,

    carrusel:
      carrusel,

    autoDesplazar:
      autoDesplazar,

    paralaje:
      paralaje,

    contadores:
      contadores,

    detalles:
      detalles,

    anclas:
      anclas,

    menuActivo:
      menuActivo

  };


})();