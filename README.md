#  GameStock — Inventario Gamer Profesional

Aplicación web funcional para la gestión de un inventario de videojuegos, desarrollada con **HTML, CSS y JavaScript vanilla**. Permite agregar, editar, eliminar y filtrar juegos con un diseño moderno inspirado en tiendas digitales.

##  Descripción

GameStock es un dashboard interactivo que permite administrar un catálogo de videojuegos con las siguientes funcionalidades:

- **Formulario completo** con validaciones avanzadas (regex, campos obligatorios, sanitización).
- **CRUD completo**: agregar, editar, eliminar y visualizar juegos.
- **Filtros dinámicos** por título, saga, plataforma, género y estado destacado.
- **Ordenamiento** por precio, stock y título.
- **Estadísticas en tiempo real** con contadores animados.
- **Gráfico de distribución** por plataforma.
- **Vista rápida** modal al hacer clic en la imagen de un juego.
- **Persistencia de datos** con `localStorage`.
- **Diseño responsive** adaptado a móvil, tablet y escritorio.

##  Tecnologías Utilizadas

- HTML5 semántico
- CSS3 (variables, grid, flexbox, animaciones, backdrop-filter)
- JavaScript ES6+ (módulos, arrow functions, template literals, destructuring, IntersectionObserver)
- Google Fonts (Orbitron, Syne)
- LocalStorage API

##  Estructura del Proyecto

```
GameStock/
├── index.html      → Estructura HTML principal
├── style.css       → Estilos y animaciones
├── script.js       → Lógica de la aplicación
└── README.md       → Documentación del proyecto
```

##  Requisitos Cumplidos

| Requisito | Estado | Detalle |
|-----------|--------|---------|
| Formulario HTML con 3+ campos | ✅ | texto, número, select, URL, checkbox |
| Validaciones avanzadas con regex | ✅ | Título, saga, URL de imagen |
| Sanitización de datos | ✅ | `sanitizarTexto()` elimina etiquetas HTML y scripts |
| Manipulación del DOM (CRUD) | ✅ | Crear, leer, actualizar y eliminar juegos |
| Arreglo de objetos | ✅ | Array `juegos` con objetos estructurados |
| Funciones modulares y reutilizables | ✅ | `renderizarJuegos`, `validarJuego`, `crearCardJuego`, `crearBadge`, `formatearMoneda`, etc. |
| Seguridad: evitar innerHTML | ✅ | Uso predominante de `createElement` y `textContent` |
| Repositorio GitHub | ✅ | Repositorio público con historial de commits |
| Despliegue | ✅ | GitHub Pages |

##  Buenas Prácticas de Seguridad

- **`sanitizarTexto()`**: elimina caracteres `<>` y la palabra "script" para prevenir inyección XSS.
- **`validarUrlImagen()`**: verifica que las URLs sean válidas usando el constructor `URL()`.
- **`createElement` + `textContent`**: se usa en la creación de cards para evitar inyección de HTML malicioso.
- **Validación de duplicados**: se verifica que no exista un juego con el mismo título y plataforma antes de agregar.
- **Validación de tipos**: precio y stock se verifican como números válidos antes de guardar.

##  Funciones Principales

| Función | Descripción |
|---------|-------------|
| `iniciarApp()` | Inicializa la aplicación, carga datos y bindea eventos |
| `cargarJuegos()` | Lee juegos desde localStorage o carga los de ejemplo |
| `guardarJuegos()` | Persiste el array de juegos en localStorage |
| `agregarJuego()` | Valida y agrega un nuevo juego al inventario |
| `validarJuego()` | Ejecuta todas las validaciones con regex y lógica |
| `sanitizarTexto()` | Limpia texto de caracteres peligrosos |
| `renderizarJuegos()` | Genera las cards del catálogo en el DOM |
| `crearCardJuego()` | Construye una card individual con createElement |
| `eliminarJuego()` | Elimina un juego por ID y actualiza la vista |
| `calcularEstadisticas()` | Calcula y anima los contadores del dashboard |
| `aplicarFiltros()` | Filtra y ordena el catálogo según los criterios activos |
| `abrirModalEditar()` | Abre el modal de edición con los datos del juego |
| `guardarEdicion()` | Guarda los cambios editados en el juego |
| `abrirVistaRapida()` | Abre el modal de vista rápida con detalle del juego |
| `renderizarGraficoPlataformas()` | Genera el gráfico de barras por plataforma |
| `iniciarScrollReveal()` | Activa animaciones de entrada con IntersectionObserver |
| `animarContador()` | Anima los números de las estadísticas con easeOutCubic |

---

##  Uso de IA

Se utilizaron **ChatGPT (OpenAI)** y **Claude (Anthropic)** como herramientas de apoyo durante el desarrollo. A continuación se detallan los prompts utilizados y las mejoras aplicadas:

### Prompt 0 — Base del proyecto (ChatGPT)

> **Prompt:** Se solicitó a ChatGPT la creación de la estructura base de la aplicación: formulario HTML con campos de texto, número, select y checkbox; lógica JavaScript para el CRUD completo (agregar, editar, eliminar juegos); filtros dinámicos; estadísticas del dashboard; persistencia con localStorage; diseño responsive con tema oscuro y estilo gamer.

**Resultado:**
- Se obtuvo la estructura HTML semántica con formulario, modal de edición, sección de filtros y catálogo de cards.
- Lógica JS funcional con funciones modulares: `agregarJuego`, `renderizarJuegos`, `eliminarJuego`, `abrirModalEditar`, `aplicarFiltros`, `calcularEstadisticas`.
- CSS base con tema oscuro, variables CSS, grid responsive y animaciones de entrada.
- Array de juegos de ejemplo con datos reales.
- Mejoras adicionales como skeleton loaders, vista rápida, gráfico de plataformas, badges de stock con niveles de alerta y contador de resultados.

### Prompt 1 — Mejoras visuales generales (Claude)

> **Prompt:** "amigo como puedo mejorar esta pagina visualmente"
>
> Se compartieron los tres archivos del proyecto (HTML, CSS, JS) para que la IA analizara el estado actual y propusiera mejoras.

**Mejoras aplicadas:**
- Navbar sticky con efecto glassmorphism (`backdrop-filter: blur`).
- Texto del hero con gradiente animado (`@keyframes gradientFlow`).
- Partículas flotantes decorativas en el fondo.
- Animaciones de scroll reveal usando `IntersectionObserver`.
- Stat cards rediseñadas con íconos SVG y colores diferenciados.
- Cards con efecto glow en el borde al hacer hover.
- Contadores animados en las estadísticas con función `animarContador()`.
- Barras del gráfico de plataformas con animación de entrada.
- Notificaciones mejoradas con ícono y animación slide-in.
- Scrollbar personalizado con gradiente.
- Tipografía actualizada de Inter a Syne para mayor personalidad.
- Botones con íconos SVG inline y efecto de brillo overlay.

### Prompt 2 — Corrección de error CSS (Claude)

> **Prompt:** "me sale mal eso" (adjuntando captura del error en `-webkit-mask`)

**Mejora aplicada:**
- Se reemplazó la técnica de `mask-composite` (incompatible en algunos navegadores) por un efecto de `box-shadow` + `border-color` que logra el mismo resultado visual sin errores.

### Prompt 3 — Consulta sobre estructura de datos (Claude)

> **Prompt:** "y puedo agregar mas juegos en el script? o hay q cambiar algo"

**Resultado:**
- Se confirmó que el array `juegosEjemplo` es extensible sin modificar otra parte del código, solo respetando el formato del objeto y los valores exactos de plataforma/género.

### Prompt 4 — Validación contra rúbrica (Claude)

> **Prompt:** Se compartió la rúbrica de la actividad para comparar con el estado del proyecto.

**Resultado:**
- Se identificaron brechas: falta de expresiones regulares en validaciones, uso de `innerHTML` en algunos puntos, y ausencia del README con sección de IA.

### Herramientas de IA utilizadas

| Herramienta | Uso |
|-------------|-----|
| ChatGPT (OpenAI) | Generación de la estructura base del proyecto (HTML, CSS, JS), CRUD, filtros, diseño inicial |
| Claude (Anthropic) | Refactorización de CSS, mejoras de diseño, corrección de bugs, generación de validaciones, documentación |

### Reflexión sobre el uso de IA

Las herramientas de IA fueron utilizadas como **apoyo y consulta**, no como generador automático sin revisión. El flujo de trabajo consistió en:

1. Solicitar a ChatGPT la estructura base funcional del proyecto.
2. Revisar, entender y personalizar el código generado (agregar juegos, ajustar estilos, probar funcionalidad).
3. Consultar a Claude para identificar mejoras visuales avanzadas y corrección de errores.
4. Revisar y adaptar cada sugerencia antes de integrarla.
5. Validar el resultado final contra los requisitos de la rúbrica.

Esto permitió acelerar el desarrollo manteniendo el aprendizaje activo, ya que cada sugerencia fue evaluada y comprendida antes de aplicarse.

---

##  Despliegue

El proyecto está desplegado en **GitHub Pages**:
 `https://github.com/Mrtnnn23/Proyecto-2`


## Integrantes

- Martín Oviedo
- Luis Farías

---

© 2025 GameStock. Proyecto académico.