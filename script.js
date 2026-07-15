/* =========================================================================
   ✏️  DATOS PARA EDITAR
   ========================================================================= */

// Contraseña que Camila debe escribir (acepta "/" o "-" indistintamente)
const PASSWORD = "15/05/2026";

// Fecha y hora exacta en que comenzó la relación (mes es 0-indexado: mayo = 4)
const START_DATE = new Date(2026, 4, 15, 19, 4, 0);

// Ruta del archivo de música. Pon el mp3 en la misma carpeta que index.html
const SONG_SRC = "cancion.mp3";

// NUEVA LÍNEA DE TIEMPO INTERACTIVA ("ÁLBUM DE NUESTROS MOMENTOS")
const TIMELINE = [
  { 
    icon: "✨", 
    date: "Agosto 2025", 
    title: "Donde comenzó todo", 
    text: "Nunca imaginé que una persona que al principio solo era alguien más en mi salón terminaría convirtiéndose en alguien tan importante para mí.",
    img: "https://picsum.photos/seed/moment-1/600/400" // Cambiar por foto de ustedes / universidad
  },
  { 
    icon: "❤️", 
    date: "Mejores amigos", 
    title: "Antes de ser novios, fuimos nosotros", 
    text: "Me encanta pensar que antes de tener una relación, tuvimos una amistad. Que aprendimos a conocernos, a hablar todos los días, a compartir nuestras cosas y a disfrutar simplemente estar juntos.",
    img: "https://picsum.photos/seed/moment-2/600/400" // Cambiar por foto de conversaciones / salidas
  },
  { 
    icon: "💕", 
    date: "Nuestro primer beso", 
    title: "Cuando dejamos de imaginarnos y empezamos a vivirlo", 
    text: "Ese día no sabía todo lo que venía después, pero sí sabía algo: quería seguir creando momentos contigo.",
    img: "https://picsum.photos/seed/moment-3/600/400" // Cambiar por foto del día especial
  },
  { 
    icon: "🌎", 
    date: "La distancia", 
    title: "Unos kilómetros, pero el mismo sentimiento", 
    text: "No te voy a mentir, hay días donde extraño demasiado estar contigo. Extraño abrazarte, verte y compartir momentos simples. Pero también me has demostrado que incluso estando lejos seguimos encontrando formas de estar presentes.",
    img: "https://picsum.photos/seed/moment-4/600/400" // Cambiar por foto de videollamadas / viajes
  },
  { 
    icon: "❤️", 
    date: "2 meses juntos", 
    title: "Hoy: Dos meses de nosotros", 
    text: "Hoy no celebro solamente dos meses de ser tu novio. Celebro todo lo que construimos antes de llegar aquí y todo lo que todavía nos falta vivir.",
    img: "https://picsum.photos/seed/moment-5/600/400" // Cambiar por su foto más reciente
  }
];

// Fotos de la galería — reemplaza estas URLs por las rutas de tus propias fotos
const PHOTOS = [
  "https://picsum.photos/seed/rodricam1/500/650",
  "https://picsum.photos/seed/rodricam2/500/650",
  "https://picsum.photos/seed/rodricam3/500/650",
  "https://picsum.photos/seed/rodricam4/500/650",
  "https://picsum.photos/seed/rodricam5/500/650",
  "https://picsum.photos/seed/rodricam6/500/650",
];

// Carta que se escribe sola con tu texto personalizado
const LETTER_TEXT =
`Mon amour, la plus belle fille du monde

Ya dos meses siendo novios pero mucho más tiempo conociéndote. Estos dos meses contigo me han enseñado muchas cosas, pero creo que una de las más importantes ha sido aprender a valorar.

Valorar esos pequeños momentos que antes parecían normales, pero que ahora entiendo que eran momentos muy especiales. Y creo que lo que más he aprendido a valorar es tu compañía. Porque extraño muchas cosas de ti.

Extraño escuchar tu voz. Y aunque puedo escucharte en videos, notas de voz o llamadas, no es lo mismo. Extraño ese sonido de tu voz estando frente a mí, ese momento en el que te escucho hablar y, sin darme cuenta, mi corazón empieza a acelerarse.

Extraño esos caminos hacia tu casa. Y algo que nunca pensé decir es que extraño hasta el tráfico. Extraño esos momentos donde pensaba “que ruta tomar para llegar más rápido” o “cuánto tiempo me voy a tardar en llegar”, porque ahora entiendo que ese tiempo valía muchísimo la pena, porque al final del camino estabas tú.

Extraño hasta las cosas más sencillas.
Extraño abrazarte.
Extraño mirarte a los ojos y pensar que estoy viendo a la persona más hermosa del mundo.
Extraño tomar tu mano, sentir tus manos frías o calientitas, sentir tus dedos entre los míos y saber que con ese pequeño gesto puedo hacerte sentir segura conmigo. Extraño esos momentos donde no necesitábamos hacer nada especial, porque simplemente estar juntos ya hacía que todo fuera especial.

Y también extraño besarte. Porque un beso contigo nunca ha sido solo un beso. Es una forma de demostrar amor sin necesidad de decir nada. Es un momento donde siento una conexión contigo que no puedo explicar, y es algo que extraño muchísimo.

Esta distancia me hizo darme cuenta de algo muy importante:

Muchas veces nos quejamos de cosas que en realidad son regalos. Me quejaba del tráfico para llegar a verte, sin saber que algún día iba a extrañar esos caminos. Me costaba despedirme de ti por unas horas, sin saber que iba a extrañar esos momentos donde sabía que al día siguiente volvería a verte. Y ahora entiendo que cada minuto contigo siempre fue más valioso de lo que imaginaba.

Pero también estos dos meses me hicieron darme cuenta de algo todavía más bonito:

Que tú eres la mujer de mis sueños. Y es curioso porque antes de que fuéramos novios, te soñaba cada día.
Y ahora que te tengo a mi lado, ya no te sueño de esa manera . Y por un momento pensé: “¿por qué será?”
Hasta que entendí que es porque ahora tengo a mi lado mi sueño. Tengo de novia a la persona que antes solo podía imaginar. Tengo a la niña de mis ojos, a la mujer de mi vida y a la persona que amo con todo mi corazón.

Y quiero que sepas que estoy muy orgulloso de ti. Orgulloso de la mujer que eres, de lo fuerte que eres y de la manera en la que estás enfrentando esta distancia. Sé que no siempre es fácil, pero admiro muchísimo cómo sigues poniendo de tu parte y cómo seguimos cuidando lo nuestro incluso estando lejos.

Gracias por ser tú.

Gracias por llegar a mi vida y hacerla más bonita. Te extraño muchísimo, más de lo que las palabras pueden explicar, pero también te amo más de lo que pensé que podía amar a alguien.

Y aunque ahora no pueda abrazarte, tomarte de la mano o verte a los ojos, hay algo que sigue igual:

Mi corazón sigue estando contigo. Porque tú eres mi otro corazón y mi mundo entero`;

// Razones por las que la ama — una por estrella
const REASONS = [
  "Por tu sonrisa única que me alegra hasta el peor de los días.",
  "Por la forma tan bonita en la que me cuidas incluso desde lejos.",
  "Porque eres mi mayor apoyo y mi lugar seguro en el mundo.",
  "Por la paciencia y el amor incondicional que me das siempre.",
  "Porque logras que quiera ser una mejor versión de mí mismo cada día.",
  "Por tu increíble fuerza y valentía para afrontar cualquier reto.",
  "Por los pequeños detalles que demuestran lo grande que es tu corazón.",
  "Simplemente porque siendo tú misma, completas mi mundo por completo."
];

/* =========================================================================
   A partir de aquí se gestiona el flujo y la interactividad
   ========================================================================= */

const scenes = document.querySelectorAll(".scene");
function goToScene(id){
  scenes.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top:0, behavior:"instant" });
}

/* ---------- Escena 1: intro ---------- */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro-phrase").classList.add("show");
  }, 1800);
  setTimeout(() => {
    document.getElementById("btn-enter").classList.add("show");
  }, 4000);
});

document.getElementById("btn-enter").addEventListener("click", () => {
  goToScene("scene-password");
});

/* ---------- Escena 2: contraseña ---------- */
const gentleTries = [
  "Casi... inténtalo de nuevo.",
  "Esa no es, mi amor.",
  "Piensa un poco más...",
];
document.getElementById("password-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("password-input");
  const value = input.value.trim().replace(/-/g, "/");
  const target = PASSWORD.replace(/-/g, "/");
  if (value.toLowerCase() === target.toLowerCase()){
    const song = document.getElementById("song");
    song.src = SONG_SRC;
    song.play().catch(() => {});
    goToScene("scene-reveal");
  } else {
    const hint = document.getElementById("password-hint");
    hint.textContent = gentleTries[Math.floor(Math.random()*gentleTries.length)];
    input.classList.add("shake");
    setTimeout(() => input.classList.remove("shake"), 450);
  }
});

/* ---------- Escena 3: revelación ---------- */
document.getElementById("btn-to-counter").addEventListener("click", () => {
  goToScene("scene-counter");
});

/* ---------- Escena 4: contador en vivo ---------- */
function updateCounter(){
  const now = new Date();
  let diff = now - START_DATE;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  document.getElementById("count-days").textContent = days;
  document.getElementById("count-hours").textContent = hours;
  document.getElementById("count-minutes").textContent = minutes;
  document.getElementById("count-seconds").textContent = seconds;
}
setInterval(updateCounter, 1000);
updateCounter();

document.getElementById("btn-to-timeline").addEventListener("click", () => {
  goToScene("scene-timeline");
  startTimelineIntro();
});

/* ---------- Escena 5: línea de tiempo / viaje interactivo ---------- */
function startTimelineIntro() {
  const p1 = document.getElementById("t-phrase-1");
  const p2 = document.getElementById("t-phrase-2");
  const btn = document.getElementById("btn-start-story");
  
  p1.classList.remove("show");
  p2.classList.remove("show");
  btn.classList.remove("show");
  document.getElementById("timeline-container").classList.add("hidden");

  setTimeout(() => p1.classList.add("show"), 1000);
  setTimeout(() => p2.classList.add("show"), 4000);
  setTimeout(() => btn.classList.add("show"), 7000);
}

document.getElementById("btn-start-story").addEventListener("click", () => {
  document.querySelector(".timeline-intro").classList.add("hidden");
  const container = document.getElementById("timeline-container");
  container.classList.remove("hidden");
  
  const timelineList = document.getElementById("timeline-list");
  if (timelineList.children.length === 0) {
    TIMELINE.forEach((item, i) => {
      const node = document.createElement("div");
      node.className = "timeline-node";
      
      let imgHtml = "";
      if (item.img) {
        imgHtml = `<img src="${item.img}" class="timeline-card-img" alt="${item.title}">`;
      }

      node.innerHTML = `
        <div class="timeline-dot">${item.icon}</div>
        <div class="timeline-card">
          <div class="timeline-card-date">${item.date}</div>
          <h3 class="timeline-card-title">${item.title}</h3>
          <p class="timeline-card-desc">${item.text}</p>
          ${imgHtml}
        </div>
      `;
      timelineList.appendChild(node);
    });
  }

  const nodes = document.querySelectorAll(".timeline-node");
  const nodeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.15 });

  nodes.forEach(node => nodeObserver.observe(node));
});

document.getElementById("btn-to-gallery").addEventListener("click", () => {
  goToScene("scene-gallery");
});

/* ---------- Escena 6: galería ---------- */
const photoTable = document.getElementById("photo-table");
PHOTOS.forEach((src, i) => {
  const card = document.createElement("div");
  card.className = "photo-card";
  const rotation = (i % 2 === 0 ? -1 : 1) * (4 + Math.random() * 5);
  card.style.transform = `rotate(${rotation.toFixed(1)}deg)`;
  card.innerHTML = `<img src="${src}" alt="Recuerdo ${i+1}">`;
  card.addEventListener("click", () => {
    document.getElementById("modal-img").src = src;
    document.getElementById("photo-modal").classList.add("show");
  });
  photoTable.appendChild(card);
});
document.getElementById("photo-modal").addEventListener("click", () => {
  document.getElementById("photo-modal").classList.remove("show");
});

document.getElementById("btn-to-letter").addEventListener("click", () => {
  goToScene("scene-letter");
  typeLetter();
});

/* ---------- Escena 7: carta que se escribe sola ---------- */
let letterTyped = false;
function typeLetter(){
  if (letterTyped) return;
  letterTyped = true;
  const el = document.getElementById("letter-text");
  let i = 0;
  const speed = 28; 
  function tick(){
    if (i <= LETTER_TEXT.length){
      el.textContent = LETTER_TEXT.slice(0, i);
      i++;
      setTimeout(tick, speed);
    } else {
      document.getElementById("letter-caret").classList.add("hidden");
      document.getElementById("btn-to-stars").classList.remove("hidden");
    }
  }
  tick();
}

document.getElementById("btn-to-stars").addEventListener("click", () => {
  goToScene("scene-stars");
});

/* ---------- Escena 8: cielo de estrellas ---------- */
const sky = document.getElementById("sky");
const progressLabel = document.getElementById("stars-progress");
let found = 0;

function placeStars(){
  const positions = [];
  const total = REASONS.length;
  const cols = Math.ceil(Math.sqrt(total));
  const rows = Math.ceil(total / cols);
  let idx = 0;
  for (let r = 0; r < rows && idx < total; r++){
    for (let c = 0; c < cols && idx < total; c++){
      const jitterX = (Math.random() - 0.5) * 10;
      const jitterY = (Math.random() - 0.5) * 10;
      const left = (c + 0.5) / cols * 100 + jitterX;
      const top = (r + 0.5) / rows * 100 + jitterY;
      positions.push({ left, top });
      idx++;
    }
  }
  REASONS.forEach((reason, i) => {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${positions[i].left}%`;
    star.style.top = `${positions[i].top}%`;
    star.style.animationDelay = `${(Math.random()*2).toFixed(2)}s`;
    star.addEventListener("click", () => revealReason(star, reason));
    sky.appendChild(star);
  });
  progressLabel.textContent = `0 / ${total} descubiertas`;
}
placeStars();

function revealReason(star, text){
  document.getElementById("reason-text").textContent = text;
  document.getElementById("reason-panel").classList.add("show");
  if (!star.classList.contains("found")){
    star.classList.add("found");
    found++;
    progressLabel.textContent = `${found} / ${REASONS.length} descubiertas`;
    if (found === REASONS.length){
      setTimeout(() => {
        document.getElementById("final-overlay").classList.add("show");
      }, 900);
    }
  }
}
document.getElementById("reason-close").addEventListener("click", () => {
  document.getElementById("reason-panel").classList.remove("show");
});

/* ---------- Botón de volver al inicio ---------- */
document.getElementById("btn-restart").addEventListener("click", () => {
  window.location.reload();
});