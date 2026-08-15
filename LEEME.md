# Coffee Online — Cafetería universitaria UTP

Frontend completo de la cafetería del campus. HTML + CSS + JavaScript puro,
sin librerías ni frameworks. Todo funciona abriendo `index.html` con doble clic.

---

## Cómo abrirlo

**Opción rápida:** doble clic en `index.html`.

**Opción recomendada** (evita restricciones del navegador con `file://`):
levanta cualquier servidor estático dentro de la carpeta. Con Live Server de
VS Code, clic derecho sobre `index.html` → *Open with Live Server*.

### Cuentas de prueba

| Rol | Correo | Contraseña |
|---|---|---|
| Cliente | `xavier@coffeeonline.pe` | `123456` |
| Administrador | `admin@coffeeonline.pe` | `admin123` |

También puedes crear cuentas nuevas desde *Crear cuenta*.

---

## Estructura

Cada página es autocontenida: su `.html` enlaza únicamente a un `.css` y un
`.js` con su mismo nombre, en la misma carpeta. No hay hoja de estilos ni
script compartido entre páginas — si tocas el CSS o el JS de una, las demás
no se ven afectadas.

```
cafeteria-web/
├─ index.html            Portada + carta + nosotros (todo en scroll)
├─ index.css             \_ estilos de esta página (copia completa de tokens y componentes)
├─ index.js              \_ iconos + catálogo + núcleo (sesión, carrito, cabecera, pie)
│
├─ login.html            Iniciar sesión / crear cuenta
├─ login.css / login.js
│
├─ producto.html         Detalle de un producto (?id=ALM-02)
├─ producto.css / producto.js   \_ incluye además el motor de movimiento
│
├─ carrito.html          Carrito del cliente
├─ carrito.css / carrito.js     \_ incluye además el motor de movimiento
│
├─ checkout.html         Datos de recojo, hora y forma de pago
├─ checkout.css / checkout.js   \_ incluye además el motor de movimiento
│
├─ confirmacion.html     Código de pedido y seguimiento (?codigo=CO-1035)
├─ confirmacion.css / confirmacion.js  \_ incluye además el motor de movimiento
│
├─ pedidos.html          Historial y estado de mis pedidos
├─ pedidos.css / pedidos.js     \_ incluye además el motor de movimiento
│
├─ admin/                Mismo patrón: cada .html con su .css y su .js propios
│  ├─ index.html         Resumen: ventas del día, gráfico, ranking
│  ├─ index.css / index.js      \_ incluye además las utilidades del panel
│  ├─ pedidos.html       Gestión de pedidos y cambio de estado
│  ├─ pedidos.css / pedidos.js
│  ├─ productos.html     ABM de productos (alta, edición, baja)
│  ├─ productos.css / productos.js
│  ├─ reportes.html      Reportes por día, categoría y producto + CSV
│  └─ reportes.css / reportes.js
│
└─ Imagenes/             Fotos del catálogo y la taza en PNG del logotipo
```

Cada `.css` trae el mismo juego completo de estilos (tokens, componentes,
layout, animaciones): así cualquier página se ve igual de bien aunque se
edite por separado. Cada `.js` trae, en este orden: iconos SVG propios →
catálogo semilla → núcleo (sesión, carrito, pedidos, cabecera, pie) → cuando
aplica, el motor de movimiento (slider, apariciones al scroll, carruseles) →
en `/admin`, las utilidades del panel.

---

## Dónde tocar cada cosa

Como cada página tiene su propio `.css`/`.js` (no hay archivo compartido),
un cambio a algo que aparece en **todas** las páginas — colores, catálogo,
menú, logotipo — hay que repetirlo en el `.css` o `.js` de cada una. Son
copias idénticas, así que puedes editar una, copiar el bloque cambiado y
pegarlo en las demás.

| Quiero cambiar… | Dónde, dentro de cada `.css` / `.js` |
|---|---|
| Colores, tipografía, espaciados | bloque `:root` al inicio del `.css` |
| Productos, precios, descripciones | `PRODUCTOS_SEED` en el `.js` |
| Categorías de la carta | `CATEGORIAS` en el `.js` |
| Puntos de entrega y su costo | `PUNTOS_ENTREGA` en el `.js` |
| Frases del slider de portada | `index.html` → `.stage__text` (solo ahí) |
| Menú de navegación | `NAV` en el `.js` |
| Horarios del pie | `HORARIOS` en el `.js` |
| El logotipo | símbolo `i-logo`, al inicio del `.js` |

### Sobre el logotipo

Es tu logo original —la taza con el cursor del mouse dentro— redibujado en
vectores. Al ser SVG se ve nítido en cualquier tamaño, toma el color de donde
se apoya y no arrastra el "SLOGAN HERE" de la plantilla. Aparece en la
cabecera, el pie, el inicio de sesión, el panel de administración y el icono
de la pestaña del navegador.

El PNG original quedó guardado en `Imagenes/logo-taza.png` por si lo
necesitas para el informe o una presentación.

### Agregar fotos de productos

1. Copia la imagen a `Imagenes/` con nombre en minúsculas,
   sin tildes ni espacios (por ejemplo `wrap-de-pollo.jpg`).
2. En `PRODUCTOS_SEED`, dentro del `.js` de cada página (o al menos donde
   quieras que se vea), en el producto correspondiente cambia `img: null`
   por `img: IMG + 'wrap-de-pollo.jpg'`.

Los productos sin foto muestran un mosaico con el icono de su categoría.
Está hecho a propósito: se ve como parte del diseño, no como una imagen rota.

---

## Datos

Todo el estado vive en `localStorage` del navegador:

| Clave | Contenido |
|---|---|
| `co.productos` | Catálogo (lo que edita el panel de administración) |
| `co.usuarios` | Cuentas registradas |
| `co.sesion` | Usuario con sesión abierta |
| `co.carrito` | Carrito actual |
| `co.pedidos` | Pedidos realizados |

La primera vez se generan pedidos de ejemplo de los últimos 7 días para que el
panel y los reportes no arranquen vacíos.

**Para empezar de cero**, abre la consola del navegador (F12) y ejecuta:

```js
localStorage.clear(); location.reload();
```

---

## Paso a Spring Boot

El frontend ya está ordenado para que el backend entre sin rehacer nada.

**Ubicación de los archivos:**

```
src/main/resources/static/     ← todo el contenido de cafeteria-web/
```

Si vas a usar Thymeleaf, la cabecera y el pie ya están centralizados en la
misma función en cada `.js` (`montarCabecera` y `montarPie`): se convierten
en dos fragmentos `th:fragment` y desaparecen de JavaScript.

**Puntos de conexión.** En el código están marcados con el comentario `[API]`
(el mismo bloque aparece repetido en el `.js` de cada página, por eso hoy no
hay un solo `app.js`):

| Marca | Endpoint sugerido | Función |
|---|---|---|
| `[API] GET /api/productos` | listar catálogo | `productos()` |
| `[API] POST /api/auth/login` | autenticar | `login()` |
| `[API] POST /api/auth/registro` | registrar | `registrar()` |
| `[API] POST /api/pedidos` | crear pedido | `checkout.html` |
| `[API] PATCH /api/pedidos/{codigo}/estado` | cambiar estado | `admin/pedidos.html` |
| `[API] POST · PUT · DELETE /api/productos` | ABM | `admin/productos.html` |

**Entidades que se desprenden del modelo actual:**

- `Usuario` — id, nombre, correo, clave (con BCrypt), rol (`ADMIN` / `CLIENTE`)
- `Categoria` — id, nombre, icono
- `Producto` — id, nombre, categoría, precio, stock, imagen, descripción, activo
- `Pedido` — código, cliente, fecha, punto de entrega, hora de recojo, forma de pago, nota, subtotal, envío, total, estado
- `DetallePedido` — pedido, producto, cantidad, precio unitario, importe
- `HistorialEstado` — pedido, estado, fecha y hora

Los roles del front (`ADMIN` / `CLIENTE`) ya coinciden con lo que espera
Spring Security para proteger `/admin/**`.

---

## Detalles del frontend

- **Sin dependencias externas.** Los iconos son SVG propios embebidos al
  inicio del `.js` de cada página. Lo único que viene de internet son las
  fuentes de Google; si no hay conexión, el navegador usa las de respaldo y
  la web se ve igual.
- **Responsive** desde 360 px. Sin scroll horizontal en ninguna página.
- **Accesibilidad.** Contraste revisado, foco visible, etiquetas `aria` en los
  botones de icono y `alt` en las imágenes.
- **`prefers-reduced-motion`.** Si el sistema operativo tiene las animaciones
  desactivadas, el sitio no anima nada. Si en tu PC no ves el movimiento,
  revisa *Configuración → Accesibilidad → Efectos visuales → Efectos de animación*.
