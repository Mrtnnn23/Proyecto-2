const STORAGE_KEY = "gamestock_juegos";

const imagenDefault =
"https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200";

let juegos = [];

const juegosEjemplo = [
  {
    id: crypto.randomUUID(),
    titulo: "God of War Ragnarok",
    saga: "God of War",
    plataforma: "PS5",
    genero: "Acción",
    precio: 59990,
    stock: 10,
    imagen: "https://4kwallpapers.com/images/wallpapers/god-of-war-ragnarok-kratos-atreus-2022-games-playstation-4-3840x2160-8636.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Elden Ring",
    saga: "Souls",
    plataforma: "Multiplataforma",
    genero: "RPG",
    precio: 49990,
    stock: 8,
    imagen: "https://assets-prd.ignimgs.com/2021/06/12/elden-ring-button-03-1623460560664.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Spider-Man 2",
    saga: "Spider-Man",
    plataforma: "PS5",
    genero: "Acción",
    precio: 64990,
    stock: 12,
    imagen: "https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S1_2560x1440-f27da78f484626718d1e22e7d6950ca5",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Red Dead Redemption 2",
    saga: "Red Dead",
    plataforma: "Multiplataforma",
    genero: "Mundo abierto",
    precio: 35990,
    stock: 14,
    imagen: "https://criticalhits.com.br/wp-content/uploads/2018/10/red-dead-redemption-2-01.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "The Last of Us II Remastered",
    saga: "The Last of Us",
    plataforma: "Multiplataforma",
    genero: "Acción",
    precio: 50000,
    stock: 15,
    imagen: "https://img.opencritic.com/game/8351/o/4YpEGFpE.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Marvel's Spider-Man",
    saga: "Spider-Man",
    plataforma: "PS5",
    genero: "Acción",
    precio: 39990,
    stock: 9,
    imagen: "https://image.api.playstation.com/vulcan/img/rnd/202011/0714/cKD24Gt2wgE2FeMf5HfqONeV.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Spider-Man Miles Morales",
    saga: "Spider-Man",
    plataforma: "PS5",
    genero: "Acción",
    precio: 35990,
    stock: 6,
    imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1420/HcLcfeQBXd2RiQaCeWQDCIFN.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Horizon Zero Dawn",
    saga: "Horizon",
    plataforma: "PS4",
    genero: "Mundo abierto",
    precio: 29990,
    stock: 11,
    imagen: "https://assets-prd.ignimgs.com/2021/12/08/horizonzerodawn-1638924347525.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Horizon Forbidden West",
    saga: "Horizon",
    plataforma: "PS5",
    genero: "Mundo abierto",
    precio: 49990,
    stock: 5,
    imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/kNJNrzoktsDZWyUR9lKtw8sv.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "EA Sports FC 26",
    saga: "EA Sports FC",
    plataforma: "Multiplataforma",
    genero: "Deportes",
    precio: 42990,
    stock: 18,
    imagen: "https://wallpapercave.com/wp/wp15596619.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Minecraft",
    saga: "Minecraft",
    plataforma: "Multiplataforma",
    genero: "Aventura",
    precio: 24990,
    stock: 20,
    imagen: "https://i.pinimg.com/originals/e6/86/f1/e686f150ab642a2caf181821679e5797.png",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Hogwarts Legacy",
    saga: "Harry Potter",
    plataforma: "Multiplataforma",
    genero: "Mundo abierto",
    precio: 25000,
    stock: 15,
    imagen: "https://cdn.wccftech.com/wp-content/uploads/2020/09/HL_Keyart_landscape_UK-1480x834.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "God of War",
    saga: "God of War",
    plataforma: "PS4",
    genero: "Acción",
    precio: 29990,
    stock: 9,
    imagen: "https://image.api.playstation.com/vulcan/img/rnd/202008/2617/gCLof29n2eeFxVRGpo90xW1A.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Resident Evil 4 Remake",
    saga: "Resident Evil",
    plataforma: "PS5",
    genero: "Terror",
    precio: 49990,
    stock: 6,
    imagen: "https://images.wallpapersden.com/image/download/resident-evil-4-remake-poster-cool_bW5qa2eUmZqaraWkpJRmbmdlrWZnZWU.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Resident Evil Village",
    saga: "Resident Evil",
    plataforma: "PS5",
    genero: "Terror",
    precio: 42990,
    stock: 8,
    imagen: "https://www.residentevil.com/village/assets/images/common/share.png",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Call of Duty Modern Warfare III",
    saga: "Call of Duty",
    plataforma: "Multiplataforma",
    genero: "Shooter",
    precio: 59990,
    stock: 15,
    imagen: "https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/meta/reveal/jpt-reveal-meta.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Call of Duty Black Ops 6",
    saga: "Call of Duty",
    plataforma: "Multiplataforma",
    genero: "Shooter",
    precio: 64990,
    stock: 11,
    imagen: "https://cdn.mos.cms.futurecdn.net/toZfyEv8V7tZaHjMqUQHhU.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Grand Theft Auto V",
    saga: "Grand Theft Auto",
    plataforma: "Multiplataforma",
    genero: "Mundo abierto",
    precio: 24990,
    stock: 20,
    imagen: "https://4kwallpapers.com/images/wallpapers/grand-theft-auto-v-2880x1800-10738.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "The Legend of Zelda: Tears of the Kingdom",
    saga: "Zelda",
    plataforma: "Nintendo Switch",
    genero: "Aventura",
    precio: 54990,
    stock: 7,
    imagen: "https://media.vandal.net/m/5-2023/202351018164127_1.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Uncharted 4",
    saga: "Uncharted",
    plataforma: "PS4",
    genero: "Aventura",
    precio: 27990,
    stock: 10,
    imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/2620/eIO6Ka26JChNo8KaFi7wON4L.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Dragon Ball Sparking Zero",
    saga: "Dragon Ball",
    plataforma: "PS5",
    genero: "Acción",
    precio: 59990,
    stock: 12,
    imagen: "https://gaming-cdn.com/images/products/15531/orig-fallback-v1/dragon-ball-sparking-zero-pc-game-steam-cover.jpg?v=1702396707",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Dragon Ball FighterZ",
    saga: "Dragon Ball",
    plataforma: "Multiplataforma",
    genero: "Competitivo",
    precio: 19990,
    stock: 14,
    imagen: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/ncom/software/switch/70070000020923/42b41cf30b7e8b49822bedf59dfa8509ad7e0e87b1015cee3f7ef65d28241a64",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Death Stranding 2",
    saga: "Death Stranding",
    plataforma: "PS5",
    genero: "Aventura",
    precio: 39990,
    stock: 5,
    imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202503/0316/ba08d42ca97ad050e653b7eda937dca69e560a707eb03dd4.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Silent Hill 2 Remake",
    saga: "Silent Hill",
    plataforma: "PS5",
    genero: "Terror",
    precio: 54990,
    stock: 4,
    imagen: "https://media.vandal.net/m/10-2022/2022102118454583_1.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Ghost of Tsushima",
    saga: "Ghost of Tsushima",
    plataforma: "PS5",
    genero: "Acción",
    precio: 49990,
    stock: 8,
    imagen: "https://noespaisparafrikis.com/wp-content/uploads/2020/07/analisis-ghost-of-tsushima-portada.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Cyberpunk 2077",
    saga: "Cyberpunk",
    plataforma: "Multiplataforma",
    genero: "Mundo abierto",
    precio: 39990,
    stock: 13,
    imagen: "https://phantom-marca.unidadeditorial.es/90d48a492ccd4ba97eb4b9126a0bacd6/resize/1200/f/jpg/assets/multimedia/imagenes/2023/04/11/16812281541070.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "The Witcher 3",
    saga: "The Witcher",
    plataforma: "Multiplataforma",
    genero: "RPG",
    precio: 29990,
    stock: 9,
    imagen: "https://th.bing.com/th/id/R.ef088bdab155160154141fa3898892af?rik=fFj3Q34goxm7Jg&pid=ImgRaw&r=0",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Baldur's Gate 3",
    saga: "Baldur's Gate",
    plataforma: "Multiplataforma",
    genero: "RPG",
    precio: 54990,
    stock: 6,
    imagen: "https://cdn.wccftech.com/wp-content/uploads/2023/08/Baldurs-Gate-3-header-scaled.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Sekiro: Shadows Die Twice",
    saga: "Sekiro",
    plataforma: "PS4",
    genero: "Acción",
    precio: 34990,
    stock: 7,
    imagen: "https://wallpapercave.com/wp/wp3925307.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Bloodborne",
    saga: "Bloodborne",
    plataforma: "PS4",
    genero: "RPG",
    precio: 24990,
    stock: 10,
    imagen: "https://cdn.wccftech.com/wp-content/uploads/2021/07/Bloodborne-scaled.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Doom Eternal",
    saga: "Doom",
    plataforma: "Multiplataforma",
    genero: "Shooter",
    precio: 27990,
    stock: 11,
    imagen: "https://i0.wp.com/twinfinite.net/wp-content/uploads/2020/02/Doom-Eternal-1.jpg?fit=1920%2C1080&ssl=1",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Forza Horizon 6",
    saga: "Forza Horizon",
    plataforma: "Xbox Series",
    genero: "Deportes",
    precio: 45990,
    stock: 8,
    imagen: "https://cdn.forza.net/strapi-uploads/assets/Forza_Horizon_6_3840x2160_Hori_Final_ac7b0063ff.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "God of War III Remastered",
    saga: "God of War",
    plataforma: "PS4",
    genero: "Acción",
    precio: 19990,
    stock: 7,
    imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/2917/oqIXDTKAcEOwAPzM7GhEZ0rW.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "ARC Raiders",
    saga: "ARC Raiders",
    plataforma: "Multiplataforma",
    genero: "Shooter",
    precio: 49990,
    stock: 6,
    imagen: "https://gaming-cdn.com/images/products/10142/616x353/arc-raiders-pc-steam-cover.jpg?v=1760944256",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "NBA 2K26",
    saga: "NBA 2K",
    plataforma: "Multiplataforma",
    genero: "Deportes",
    precio: 64990,
    stock: 12,
    imagen: "https://e01-xlk-ue-marca.uecdn.es/uploads/2025/07/09/686e5cf35d01e.jpeg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "No Man's Sky",
    saga: "No Man's Sky",
    plataforma: "Multiplataforma",
    genero: "Aventura",
    precio: 29990,
    stock: 8,
    imagen: "https://image.api.playstation.com/vulcan/img/rnd/202109/0114/dvnRsW2cEBPSMMJoEQk8s75V.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Sons of the Forest",
    saga: "The Forest",
    plataforma: "PC",
    genero: "Terror",
    precio: 24990,
    stock: 10,
    imagen: "https://th.bing.com/th/id/R.ebb3ab286a4df8e9cce120526f6d26f7?rik=W6MtOhOiShSSDA&pid=ImgRaw&r=0",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Fallout 76",
    saga: "Fallout",
    plataforma: "Multiplataforma",
    genero: "RPG",
    precio: 19990,
    stock: 11,
    imagen: "https://www.fantasymundo.com/wp-content/uploads/2019/01/Fallout-Reportaje-Portada.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Assassin's Creed Valhalla",
    saga: "Assassin's Creed",
    plataforma: "Multiplataforma",
    genero: "Mundo abierto",
    precio: 39990,
    stock: 9,
    imagen: "https://wallpapers.com/images/hd/4k-assassin-s-creed-valhalla-background-3840-x-2160-w92d2uf6xld3muip.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Batman Arkham Knight",
    saga: "Batman Arkham",
    plataforma: "Multiplataforma",
    genero: "Acción",
    precio: 19990,
    stock: 13,
    imagen: "https://img.hype.games/cdn/b874b2a3-a2cf-45df-941f-c920452a9bb8bak-cover.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Mortal Kombat 11",
    saga: "Mortal Kombat",
    plataforma: "Multiplataforma",
    genero: "Competitivo",
    precio: 29990,
    stock: 15,
    imagen: "https://pbs.twimg.com/media/DwkeHvnWwAA93HE.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "The Last of Us Part I",
    saga: "The Last of Us",
    plataforma: "PS4",
    genero: "Acción",
    precio: 49990,
    stock: 7,
    imagen: "https://th.bing.com/th/id/R.c1037486f4469f46e25ebb0dd06140dc?rik=AxfaFcuCbaWoRg&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2fthe_last_of_us_remastered-2560x1440.jpg&ehk=VGW61ahcITp7rdtZJCOp3pO9jwW4ysqT9eP48FGCHPI%3d&risl=&pid=ImgRaw&r=0",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Dead by Daylight",
    saga: "Dead by Daylight",
    plataforma: "Multiplataforma",
    genero: "Terror",
    precio: 15990,
    stock: 20,
    imagen: "https://wallpaperaccess.com/full/1483224.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "WWE 2K26",
    saga: "WWE 2K",
    plataforma: "Multiplataforma",
    genero: "Deportes",
    precio: 59990,
    stock: 10,
    imagen: "https://gamecored.com/wp-content/uploads/2026/01/WWE-2K26-1.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Rust",
    saga: "Rust",
    plataforma: "PC",
    genero: "Aventura",
    precio: 24990,
    stock: 14,
    imagen: "https://devmanweb.com/wp-content/uploads/2025/01/rust-devman.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Naruto Ultimate Ninja Storm 4",
    saga: "Naruto",
    plataforma: "PS4",
    genero: "Acción",
    precio: 19990,
    stock: 11,
    imagen: "https://media.graphassets.com/oT3TdjvASymW11Ecv94L",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "PUBG Battlegrounds",
    saga: "PUBG",
    plataforma: "Multiplataforma",
    genero: "Shooter",
    precio: 19990,
    stock: 18,
    imagen: "https://wallpapers.com/images/featured/pubg-4k-m7d01u319yw5wo0m.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Black Myth: Wukong",
    saga: "Black Myth",
    plataforma: "PS5",
    genero: "RPG",
    precio: 59990,
    stock: 7,
    imagen: "https://wallpapercg.com/download/black-myth-wukong-3840x2160-25790.jpeg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Stray",
    saga: "Stray",
    plataforma: "PS5",
    genero: "Aventura",
    precio: 24990,
    stock: 9,
    imagen: "https://img-eshop.cdn.nintendo.net/i/d8c81b018b2e579aa5c224e635cf5368266ef168c7828e9ae18ad9444158efc4.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Resident Evil 2 Remake",
    saga: "Resident Evil",
    plataforma: "PS5",
    genero: "Terror",
    precio: 34990,
    stock: 8,
    imagen: "https://www.gamertotal.com.ar/wp-content/uploads/2024/01/Resident-Evil-2-Remake.jpg",
    destacado: true
  },
  {
    id: crypto.randomUUID(),
    titulo: "Far Cry 4",
    saga: "Far Cry",
    plataforma: "PS4",
    genero: "Mundo abierto",
    precio: 19990,
    stock: 10,
    imagen: "https://img.hype.games/cdn/db4e18cd-587e-4b99-9403-d8b86ed1583cCOVER---[Ubisoft]-FAR-CRY-4-600.jpg",
    destacado: false
  },
  {
    id: crypto.randomUUID(),
    titulo: "Dark Souls III",
    saga: "Dark Souls",
    plataforma: "PS4",
    genero: "RPG",
    precio: 29990,
    stock: 6,
    imagen: "https://gaming-cdn.com/images/products/18031/orig/dark-souls-3-remastered-pc-game-steam-cover.jpg?v=1731922378",
    destacado: true
  },
];

// ============================================================
// EXPRESIONES REGULARES PARA VALIDACIONES
// ============================================================

const REGEX_TITULO = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s:'\-\.]{3,80}$/;
const REGEX_SAGA = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s'\-\.]{2,50}$/;
const REGEX_PRECIO = /^[1-9]\d{0,8}$/;
const REGEX_STOCK = /^\d{1,4}$/;
const REGEX_URL_IMAGEN = /^https?:\/\/.+\..+/i;

// ============================================================
// APP INIT
// ============================================================

function iniciarApp() {
  cargarJuegos();
  renderizarJuegos();
  calcularEstadisticas();
  agregarEventos();
  renderizarGraficoPlataformas();
  iniciarScrollReveal();
  iniciarNavbarScroll();
}

// ============================================================
// SCROLL REVEAL
// ============================================================

function iniciarScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ============================================================
// STICKY NAVBAR
// ============================================================

function iniciarNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ============================================================
// DATA FUNCTIONS
// ============================================================

function cargarJuegos() {
  const data = localStorage.getItem(STORAGE_KEY);
  juegos = data ? JSON.parse(data) : juegosEjemplo;
}

function guardarJuegos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(juegos));
}

function sanitizarTexto(texto) {
  return texto.trim().replace(/[<>]/g, "").replace(/script/gi, "").replace(/on\w+=/gi, "");
}

function validarUrlImagen(url) {
  if (!url) return true;
  try { new URL(url); return REGEX_URL_IMAGEN.test(url); } catch { return false; }
}

function mostrarNotificacion(mensaje) {
  const noti = document.getElementById("notificacion");
  const texto = document.getElementById("notificacionTexto");
  if (texto) texto.textContent = mensaje;
  else noti.textContent = mensaje;
  noti.classList.add("show");
  setTimeout(() => { noti.classList.remove("show"); }, 3000);
}

// ============================================================
// AGREGAR JUEGO
// ============================================================

function agregarJuego(e) {
  e.preventDefault();
  limpiarErrores();
  const juego = obtenerDatosFormulario();
  if (!validarJuego(juego)) return;

  const duplicado = juegos.some(
    item =>
      item.titulo &&
      item.titulo.toLowerCase() === juego.titulo.toLowerCase() &&
      item.plataforma === juego.plataforma
  );

  if (duplicado) {
    mostrarError("errorTitulo", "Juego duplicado en esta plataforma");
    return;
  }

  juegos.push(juego);
  guardarJuegos();
  renderizarJuegos();
  calcularEstadisticas();
  renderizarGraficoPlataformas();
  e.target.reset();
  mostrarNotificacion("Juego agregado correctamente");
}

function obtenerDatosFormulario() {
  return {
    id: crypto.randomUUID(),
    titulo: sanitizarTexto(document.getElementById("titulo").value),
    saga: sanitizarTexto(document.getElementById("saga").value),
    plataforma: document.getElementById("plataforma").value,
    genero: document.getElementById("genero").value,
    precio: Number(document.getElementById("precio").value),
    stock: Number(document.getElementById("stock").value),
    imagen: document.getElementById("imagen").value || imagenDefault,
    destacado: document.getElementById("destacado").checked
  };
}

// ============================================================
// VALIDACIÓN CON REGEX
// ============================================================

function validarJuego(juego) {
  let valido = true;

  if (!REGEX_TITULO.test(juego.titulo)) {
    mostrarError("errorTitulo", "Mínimo 3 caracteres. Solo letras, números y caracteres básicos");
    valido = false;
  }

  if (juego.saga && !REGEX_SAGA.test(juego.saga)) {
    mostrarError("errorSaga", "Solo letras, números y espacios (2-50 caracteres)");
    valido = false;
  }

  if (!juego.plataforma) {
    mostrarError("errorPlataforma", "Selecciona una plataforma");
    valido = false;
  }

  if (!juego.genero) {
    mostrarError("errorGenero", "Selecciona un género");
    valido = false;
  }

  if (!REGEX_PRECIO.test(String(juego.precio))) {
    mostrarError("errorPrecio", "Ingresa un precio válido (número entero positivo)");
    valido = false;
  }

  if (!REGEX_STOCK.test(String(juego.stock))) {
    mostrarError("errorStock", "Stock debe ser un número entre 0 y 9999");
    valido = false;
  }

  if (juego.imagen && juego.imagen !== imagenDefault && !validarUrlImagen(juego.imagen)) {
    mostrarError("errorImagen", "URL inválida. Debe comenzar con http:// o https://");
    valido = false;
  }

  return valido;
}

function mostrarError(id, mensaje) {
  const el = document.getElementById(id);
  if (el) el.textContent = mensaje;
}

function limpiarErrores() {
  document.querySelectorAll(".error-msg").forEach(e => e.textContent = "");
}

// ============================================================
// SKELETON LOADERS
// ============================================================

function mostrarSkeletons(cantidad = 6) {
  const contenedor = document.getElementById("contenedorJuegos");
  contenedor.innerHTML = "";
  for (let i = 0; i < cantidad; i++) {
    const sk = document.createElement("div");
    sk.className = "skeleton-card";
    sk.innerHTML = `
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line wide"></div>
        <div class="skeleton-line medium"></div>
        <div class="skeleton-badges"><div class="skeleton-badge"></div><div class="skeleton-badge"></div></div>
        <div class="skeleton-line short"></div>
      </div>`;
    contenedor.appendChild(sk);
  }
}

// ============================================================
// RENDERIZAR JUEGOS
// ============================================================

function renderizarJuegos(lista = juegos) {
  const contenedor = document.getElementById("contenedorJuegos");
  const sinResultados = document.getElementById("sinResultados");

  mostrarSkeletons(Math.min(lista.length || 6, 6));

  setTimeout(() => {
    contenedor.innerHTML = "";
    if (lista.length === 0) { sinResultados.classList.remove("hidden"); return; }
    sinResultados.classList.add("hidden");
    actualizarContador(lista.length);
    lista.forEach(juego => contenedor.appendChild(crearCardJuego(juego)));
  }, 300);
}

function actualizarContador(cantidad) {
  const contador = document.getElementById("contadorResultados");
  if (!contador) return;
  contador.textContent = cantidad === juegos.length
    ? `${cantidad} juegos en catálogo`
    : `Mostrando ${cantidad} de ${juegos.length} juegos`;
}

// ============================================================
// CREAR CARD (createElement — sin innerHTML)
// ============================================================

function crearCardJuego(juego) {
  const card = document.createElement("article");
  card.className = "game-card";

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "game-image-wrapper";

  const img = document.createElement("img");
  img.src = juego.imagen;
  img.alt = juego.titulo;
  img.className = "game-image";
  img.loading = "lazy";
  img.onerror = () => { img.src = imagenDefault; };
  imgWrapper.addEventListener("click", () => abrirVistaRapida(juego));
  imgWrapper.appendChild(img);

  const content = document.createElement("div");
  content.className = "game-content";

  const title = document.createElement("h3");
  title.className = "game-title";
  title.textContent = juego.titulo;

  const saga = document.createElement("p");
  saga.className = "game-saga";
  saga.textContent = juego.saga;

  const badges = document.createElement("div");
  badges.className = "badges";
  badges.append(crearBadge(juego.plataforma, "platform"), crearBadge(juego.genero, "genre"));
  if (juego.destacado) badges.append(crearBadge("★ Destacado", "destacado"));

  const info = document.createElement("div");
  info.className = "game-info";

  const precio = document.createElement("div");
  precio.className = "game-price";
  precio.textContent = formatearMoneda(juego.precio);

  const stock = document.createElement("div");
  stock.className = "game-stock";
  const stockSpan = document.createElement("span");
  stockSpan.className = "stock-badge";
  if (juego.stock <= 3) stockSpan.classList.add("stock-critico");
  else if (juego.stock <= 7) stockSpan.classList.add("stock-bajo");
  stockSpan.textContent = `Stock: ${juego.stock}`;
  stock.appendChild(stockSpan);
  info.append(precio, stock);

  const botones = document.createElement("div");
  botones.className = "card-buttons";

  const btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.className = "btn btn-edit";
  btnEditar.addEventListener("click", () => abrirModalEditar(juego.id));

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.className = "btn btn-delete";
  btnEliminar.addEventListener("click", () => eliminarJuego(juego.id));

  botones.append(btnEditar, btnEliminar);
  content.append(title, saga, badges, info, botones);
  card.append(imgWrapper, content);
  return card;
}

function crearBadge(texto, clase) {
  const badge = document.createElement("span");
  badge.className = `badge ${clase}`;
  badge.textContent = texto;
  return badge;
}

// ============================================================
// ELIMINAR
// ============================================================

function eliminarJuego(id) {
  juegos = juegos.filter(j => j.id !== id);
  guardarJuegos();
  renderizarJuegos();
  calcularEstadisticas();
  renderizarGraficoPlataformas();
  mostrarNotificacion("Juego eliminado");
}

// ============================================================
// ESTADÍSTICAS CON COUNTER ANIMATION
// ============================================================

function animarContador(elemento, valorFinal, prefijo = "", esCurrency = false) {
  const duracion = 800;
  const inicio = performance.now();

  function step(timestamp) {
    const progreso = Math.min((timestamp - inicio) / duracion, 1);
    const eased = 1 - Math.pow(1 - progreso, 3);
    const valorActual = Math.round(valorFinal * eased);
    elemento.textContent = esCurrency ? formatearMoneda(valorActual) : prefijo + valorActual.toLocaleString("es-CL");
    if (progreso < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function calcularEstadisticas() {
  const totalJuegos = juegos.length;
  const stockTotal = juegos.reduce((acc, j) => acc + j.stock, 0);
  const valorTotal = juegos.reduce((acc, j) => acc + j.precio * j.stock, 0);
  const destacados = juegos.filter(j => j.destacado).length;

  animarContador(document.getElementById("statTotalJuegos"), totalJuegos);
  animarContador(document.getElementById("statStock"), stockTotal);
  animarContador(document.getElementById("statValor"), valorTotal, "", true);
  animarContador(document.getElementById("statDestacados"), destacados);
}

function formatearMoneda(valor) {
  return new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP" }).format(valor);
}

// ============================================================
// FILTROS
// ============================================================

function aplicarFiltros() {
  let resultado = [...juegos];
  const busqueda = document.getElementById("buscarJuego").value.toLowerCase();
  const plataforma = document.getElementById("filtroPlataforma").value;
  const genero = document.getElementById("filtroGenero").value;
  const destacado = document.getElementById("filtroDestacado").value;
  const ordenar = document.getElementById("ordenar").value;

  if (busqueda) {
    resultado = resultado.filter(j =>
      (j.titulo || "").toLowerCase().includes(busqueda) ||
      (j.saga || "").toLowerCase().includes(busqueda)
    );
  }
  if (plataforma) resultado = resultado.filter(j => j.plataforma === plataforma);
  if (genero) resultado = resultado.filter(j => j.genero === genero);
  if (destacado === "true") resultado = resultado.filter(j => j.destacado);

  switch (ordenar) {
    case "precioAsc":  resultado.sort((a,b) => a.precio - b.precio); break;
    case "precioDesc": resultado.sort((a,b) => b.precio - a.precio); break;
    case "stockDesc":  resultado.sort((a,b) => b.stock - a.stock); break;
    case "tituloAsc":  resultado.sort((a,b) => (a.titulo || "").localeCompare(b.titulo || "")); break;
  }
  renderizarJuegos(resultado);
}

function limpiarFiltros() {
  ["buscarJuego","filtroPlataforma","filtroGenero","filtroDestacado","ordenar"].forEach(id => {
    document.getElementById(id).value = "";
  });
  renderizarJuegos();
}

// ============================================================
// MODAL EDITAR
// ============================================================

function abrirModalEditar(id) {
  const j = juegos.find(j => j.id === id);
  document.getElementById("editId").value = j.id;
  document.getElementById("editTitulo").value = j.titulo;
  document.getElementById("editSaga").value = j.saga;
  document.getElementById("editPlataforma").value = j.plataforma;
  document.getElementById("editGenero").value = j.genero;
  document.getElementById("editPrecio").value = j.precio;
  document.getElementById("editStock").value = j.stock;
  document.getElementById("editImagen").value = j.imagen;
  document.getElementById("editDestacado").checked = j.destacado;
  document.getElementById("modalEditar").classList.remove("hidden");
}

function cerrarModal() { document.getElementById("modalEditar").classList.add("hidden"); }

function guardarEdicion(e) {
  e.preventDefault();
  const id = document.getElementById("editId").value;
  const index = juegos.findIndex(j => j.id === id);

  juegos[index] = {
    ...juegos[index],
    titulo: sanitizarTexto(document.getElementById("editTitulo").value),
    saga: sanitizarTexto(document.getElementById("editSaga").value),
    plataforma: document.getElementById("editPlataforma").value,
    genero: document.getElementById("editGenero").value,
    precio: Number(document.getElementById("editPrecio").value),
    stock: Number(document.getElementById("editStock").value),
    imagen: document.getElementById("editImagen").value,
    destacado: document.getElementById("editDestacado").checked
  };

  guardarJuegos();
  renderizarJuegos();
  calcularEstadisticas();
  renderizarGraficoPlataformas();
  cerrarModal();
  mostrarNotificacion("Juego actualizado");
}

function restaurarJuegosEjemplo() {
  juegos = [...juegosEjemplo];
  guardarJuegos();
  renderizarJuegos();
  calcularEstadisticas();
  renderizarGraficoPlataformas();
  mostrarNotificacion("Juegos restaurados");
}

// ============================================================
// VISTA RÁPIDA
// ============================================================

function abrirVistaRapida(juego) {
  const modal = document.getElementById("modalVistaRapida");
  const img = document.getElementById("vrImagen");
  img.src = juego.imagen;
  img.onerror = () => { img.src = imagenDefault; };
  document.getElementById("vrTitulo").textContent = juego.titulo;
  document.getElementById("vrSaga").textContent = juego.saga;
  document.getElementById("vrPlataforma").textContent = juego.plataforma;
  document.getElementById("vrGenero").textContent = juego.genero;
  document.getElementById("vrPrecio").textContent = formatearMoneda(juego.precio);

  const stockContainer = document.getElementById("vrStock");
  stockContainer.innerHTML = "";
  const stockSpan = document.createElement("span");
  stockSpan.className = "stock-badge";
  if (juego.stock <= 3) stockSpan.classList.add("stock-critico");
  else if (juego.stock <= 7) stockSpan.classList.add("stock-bajo");
  stockSpan.textContent = `Stock: ${juego.stock}`;
  stockContainer.appendChild(stockSpan);

  const dest = document.getElementById("vrDestacado");
  juego.destacado ? dest.classList.remove("hidden") : dest.classList.add("hidden");
  modal.classList.remove("hidden");
}

function cerrarVistaRapida() { document.getElementById("modalVistaRapida").classList.add("hidden"); }

// ============================================================
// GRÁFICO PLATAFORMAS (createElement)
// ============================================================

function renderizarGraficoPlataformas() {
  const contenedor = document.getElementById("graficoPlataformas");
  if (!contenedor) return;

  const conteo = {};
  juegos.forEach(j => { conteo[j.plataforma] = (conteo[j.plataforma] || 0) + 1; });
  const sorted = Object.entries(conteo).sort((a, b) => b[1] - a[1]);
  const max = sorted[0]?.[1] || 1;

  contenedor.innerHTML = "";
  sorted.forEach(([plat, count]) => {
    const fila = document.createElement("div");
    fila.className = "grafico-fila";

    const label = document.createElement("span");
    label.className = "grafico-label";
    label.textContent = plat;

    const barraWrap = document.createElement("div");
    barraWrap.className = "grafico-barra-wrap";
    const barra = document.createElement("div");
    barra.className = "grafico-barra";
    barra.style.width = "0%";
    barraWrap.appendChild(barra);

    const valor = document.createElement("span");
    valor.className = "grafico-valor";
    valor.textContent = count;

    fila.append(label, barraWrap, valor);
    contenedor.appendChild(fila);
  });

  requestAnimationFrame(() => {
    setTimeout(() => {
      contenedor.querySelectorAll('.grafico-barra').forEach((barra, i) => {
        barra.style.width = Math.round((sorted[i][1] / max) * 100) + '%';
      });
    }, 100);
  });
}

// ============================================================
// EVENTOS
// ============================================================

function agregarEventos() {
  document.getElementById("formJuego").addEventListener("submit", agregarJuego);
  document.getElementById("formEditar").addEventListener("submit", guardarEdicion);
  document.getElementById("cerrarModal").addEventListener("click", cerrarModal);
  document.getElementById("btnRestaurar").addEventListener("click", restaurarJuegosEjemplo);
  document.getElementById("btnLimpiarFiltros").addEventListener("click", limpiarFiltros);

  ["buscarJuego","filtroPlataforma","filtroGenero","filtroDestacado","ordenar"].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener("input", aplicarFiltros);
    el.addEventListener("change", aplicarFiltros);
  });

  document.getElementById("btnIrFormulario").addEventListener("click", () => {
    document.getElementById("formJuego").scrollIntoView({ behavior: "smooth" });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { cerrarModal(); cerrarVistaRapida(); }
  });

  document.getElementById("cerrarVistaRapida").addEventListener("click", cerrarVistaRapida);

  document.getElementById("modalEditar").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalEditar")) cerrarModal();
  });

  document.getElementById("modalVistaRapida").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modalVistaRapida")) cerrarVistaRapida();
  });
}

// ============================================================
// INIT
// ============================================================

document.addEventListener("DOMContentLoaded", iniciarApp);