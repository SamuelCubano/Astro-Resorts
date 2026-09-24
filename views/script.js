// Package data
const packages = [
    // Food Packages
    {
        id: 1,
        title: "Gourmet Mundial",
        category: "food",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
        badge: "Experiencia Culinaria",
        days: "3 Días / 2 Noches",
        price: 1250,
        description: "Un viaje gastronómico alrededor del mundo sin salir del hotel. Cenas temáticas de Italia, Japón, México y Francia con chefs internacionales.",
        features: [
            { icon: "fa-utensils", text: "Cenas Gourmet Diarias" },
            { icon: "fa-cheese", text: "Quesos Artesanales del Mundo" },
            { icon: "fa-wine-glass", text: "Maridaje de Vinos Premium" },
            { icon: "fa-user-chef", text: "Clases de Cocina con Chefs" }
        ],
        itinerary: [
            { time: "Día 1", description: "Llegada y welcome cocktail. Cena italiana con sommelier." },
            { time: "Día 2", description: "Clase de sushi japonesa. Cena mexicana auténtica." },
            { time: "Día 3", description: "Taller de repostería francesa. Despedida con buffet internacional." }
        ],
        included: [
            "Alojamiento en habitación Deluxe",
            "Todas las comidas gourmet (desayuno, almuerzo, cena)",
            "Clases de cocina y maridaje",
            "Traslados desde el aeropuerto",
            "Servicio de conserje gastronómico",
            "Recetario exclusivo del chef"
        ]
    },
    {
        id: 2,
        title: "Sabores de América Latina",
        category: "food",
        img: "https://images.unsplash.com/photo-1543352634-978dd3019bbe",
        badge: "Fiesta de Sabores",
        days: "2 Días / 1 Noche",
        price: 890,
        description: "Explora la riqueza culinaria de Latinoamérica: desde ceviche peruano hasta feijoada brasileña, pasando por tacos al pastor y arepas venezolanas.",
        features: [
            { icon: "fa-pepper-hot", text: "Picante Auténtico" },
            { icon: "fa-lemon", text: "Frutas Tropicales Frescas" },
            { icon: "fa-martini-glass", text: "Cócteles Latinoamericanos" },
            { icon: "fa-music", text: "Música en Vivo Latino" }
        ],
        itinerary: [
            { time: "Día 1", description: "Check-in y clase de cócteles pisco sour. Cena peruana." },
            { time: "Día 2", description: "Taller de arepas venezolanas. Desayuno brasileño y check-out." }
        ],
        included: [
            "Alojamiento en habitación Standard",
            "Desayuno y cena temática",
            "Clases de cocina latinoamericana",
            "Espectáculo de música en vivo",
            "Traslado al aeropuerto"
        ]
    },
    // Events Packages
    {
        id: 3,
        title: "Festival de Estrellas",
        category: "events",
        img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
        badge: "Evento Astronómico",
        days: "4 Días / 3 Noches",
        price: 1650,
        description: "Participa en nuestro festival anual de astronomía con conferencias de expertos, observación guiada de fenómenos celestiales y talleres prácticos.",
        features: [
            { icon: "fa-telescope", text: "Observación Nocturna Guiada" },
            { icon: "fa-chalkboard-teacher", text: "Charlas de Astrónomos Famosos" },
            { icon: "fa-wrench", text: "Taller de Astrofotografía" },
            { icon: "fa-rocket", text: "Simulador de Misiones Espaciales" }
        ],
        itinerary: [
            { time: "Día 1", description: "Registro y cóctel de bienvenida. Charla de apertura." },
            { time: "Día 2", description: "Taller de astrofotografía. Observación de lluvias de meteoritos." },
            { time: "Día 3", description: "Conferencia sobre exoplanetas. Cena bajo las estrellas." },
            { time: "Día 4", description: "Despedida con desayuno cósmico y entrega de certificados." }
        ],
        included: [
            "Alojamiento en habitación Suite",
            "Acceso a todas las charlas y talleres",
            "Equipo de observación (telescopios)",
            "Material didáctico y certificado",
            "Traslados al observatorio privado",
            "Cenas temáticas incluidas"
        ]
    },
    {
        id: 4,
        title: "Noche de Juegos Cósmicos",
        category: "events",
        img: "https://images.unsplash.com/photo-1516450360452-9310448ba977",
        badge: "Diversión Intergaláctica",
        days: "1 Día / 0 Noches",
        price: 350,
        description: "Una velada llena de juegos de mesa temáticos, realidad virtual espacial y competiciones amistosas para todas las edades.",
        features: [
            { icon: "fa-dice-d20", text: "Juegos de Mesa Temáticos" },
            { icon: "fa-headset-vr", text: "Experiencias de VR Espacial" },
            { icon: "fa-trophy", text: "Torneo de Juegos Estratégicos" },
            { icon: "fa-pizza-slice", text: "Snacks y Bebidas Incluidas" }
        ],
        itinerary: [
            { time: "18:00", description: "Registro y welcome drink temático." },
            { time: "19:00", description: "Torneo de Catan Espacial comienza." },
            { time: "20:30", description: "Sesión de realidad virtual: paseo por Marte." },
            { time: "22:00", description: "Premiación y cóctel de despedida." }
        ],
        included: [
            "Acceso completo a todas las actividades de juegos",
            "Snacks y bebidas ilimitadas",
            "Material de juegos y guías",
            "Premios para ganadores",
            "Personal de apoyo y explicación"
        ]
    },
    // Travel Packages
    {
        id: 5,
        title: "Escapada Romántica a París",
        category: "travel",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbd34",
        badge: "Ciudad del Amor",
        days: "4 Días / 3 Noches",
        price: 2100,
        description: "Disfruta de una escapada romántica a la Ciudad de la Luz con visitas guiadas, cena en el Eiffel Tower y paseo en barco por el Sena.",
        features: [
            { icon: "fa-compass", text: "Tour Guiado de París" },
            { icon: "fa-heart", text: "Cena Romántica en Torre Eiffel" },
            { icon: "fa-ship", text: "Paseo en Barco por el Sena" },
            { icon: "fa-spa", text: "Acceso a Spa de Lujo" }
        ],
        itinerary: [
            { time: "Día 1", description: "Llegada a París y check-in en hotel boutique." },
            { time: "Día 2", description: "Tour por Montmartre y Sacré-Cœur. Cena en crucero por el Sena." },
            { time: "Día 3", description: "Visita al Louvre y tarde libre. Opcional: show de cabaret." },
            { time: "Día 4", description: "Desayuno con vista a Notre-Dame y traslado al aeropuerto." }
        ],
        included: [
            "Alojamiento en hotel 4★ en París",
            "Desayuno diario",
            "Tour guiado y entradas incluidas",
            "Cena en Torre Eiffel (día 2)",
            "Traslados aeropuerto-hotel-aeropuerto",
            "Seguro de viaje básico"
        ]
    },
    {
        id: 6,
        title: "Aventura en Costa Rica",
        category: "travel",
        img: "https://images.unsplash.com/photo-1520007008086-948d1017d2f5",
        badge: "Eco-Aventura",
        days: "5 Días / 4 Noches",
        price: 1850,
        description: "Explora la biodiversidad de Costa Rica con canopy, termales, avistamiento de tortugas y caminatas por selva virgen.",
        features: [
            { icon: "fa-tree", text: "Canopy y Puentes Colgantes" },
            { icon: "fa-fire", text: "Termales Volcánicos" },
            { icon: "fa-paw", text: "Avistamiento de Vida Silvestre" },
            { icon: "fa-suitcase-rolling", text: "Guía Local Especializado" }
        ],
        itinerary: [
            { time: "Día 1", description: "Llegada a San José y traslado a La Fortuna." },
            { time: "Día 2", description: "Canopy en Arenal y visita a termales." },
            { time: "Día 3", description: "Traslado a Tortuguero. Paseo en bote por canales." },
            { time: "Día 4", description: "Avistamiento de tortugas y caminata nocturna." },
            { time: "Día 5", description: "Desayuno y traslado al aeropuerto para salida." }
        ],
        included: [
            "Alojamiento en eco-lodges",
            "Desayuno y cena",
            "Todas las actividades mencionadas",
            "Transporte interno",
            "Guía bilingüe",
            "Equipo de seguridad para actividades"
        ]
    },
    // Games Packages
    {
        id: 7,
        title: "Retro Gaming Weekend",
        category: "games",
        img: "https://images.unsplash.com/photo-1511512578047-639591857572",
        badge: "Nostalgia Gamer",
        days: "2 Días / 1 Noche",
        price: 650,
        description: "Fin de semana dedicado a los clásicos: desde Atari hasta PlayStation 2, con torneos, free play y estaciones de juego ilimitadas.",
        features: [
            { icon: "fa-gamepad", text: "Consolas Clásicas y Modernas" },
            { icon: "fa-headset", text: "Área de Juegos en Red" },
            { icon: "fa-mountain", text: "Torneo de Fighting Games" },
            { icon: "fa-cookie", text: "Snacks Gamer Ilimitados" }
        ],
        itinerary: [
            { time: "Día 1", description: "Check-in y free play en sala retro." },
            { time: "Día 2", description: "Torneo de Street Fighter II. Premiación y cierre." }
        ],
        included: [
            "Alojamiento en habitación Gaming",
            "Acceso ilimitado a todas las consolas",
            "Snacks y bebidas",
            "Premios para torneos",
            "Personal técnico de apoyo",
            "Late checkout sujeto a disponibilidad"
        ]
    },
    {
        id: 8,
        title: "eSports Training Camp",
        category: "games",
        img: "https://images.unsplash.com/photo-1587829438727-42d73e430e25",
        badge: "Entrenamiento Profesional",
        days: "3 Días / 2 Noches",
        price: 950,
        description: "Campamento intensivo para mejorar tus habilidades en juegos competitivos como Valorant, League of Legends y CS:GO con coaches profesionales.",
        features: [
            { icon: "fa-headset", text: "Coaching Personalizado" },
            { icon: "fa-chart-line", text: "Análisis de Partidas" },
            { icon: "fa-heart-pulse", text: "Entrenamiento Físico y Mental" },
            { icon: "fa-laptop-code", text: "Hardware de Última Generación" }
        ],
        itinerary: [
            { time: "Día 1", description: "Evaluación de habilidades y asignación de coach." },
            { time: "Día 2", description: "Sesiones de entrenamiento y análisis de replays." },
            { time: "Día 3", description: "Partido de exhibición y retroalimentación final." }
        ],
        included: [
            "Alojamiento en habitación doble",
            "Sesiones de coaching diario",
            "Análisis de videojuego profesional",
            "Plan de entrenamiento personalizado",
            "Comidas balanceadas para gamers",
            "Hardware de alta gama para usar"
        ]
    },
    // Observatory / Space Experiences
    {
        id: 9,
        title: "Noche en el Observatorio",
        category: "observatory",
        img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
        badge: "Experiencia Estelar",
        days: "1 Día / 0 Noches",
        price: 420,
        description: "Vive una noche única bajo las estrellas con nuestro telescopio de última generación, guiado por astrónomos profesionales y incluyendo cena gourmet bajo el cielo nocturno.",
        features: [
            { icon: "fa-telescope", text: "Telescopio de 16 pulgadas" },
            { icon: "fa-utensils", text: "Cena Gourmet Astronómica" },
            { icon: "fa-moon", text: "Observación de Planet y Nebulosas" },
            { icon: "fa-star", text: "Fotografía del Cielo Nocturno" }
        ],
        itinerary: [
            { time: "19:00", description: "Llegada y welcome cocktail cósmico." },
            { time: "20:00", description: "Cena de 3 tiempos bajo las estrellas." },
            { time: "21:30", description: "Sesión de observación guiada: planetas y constelaciones." },
            { time: "23:00", description: "Taller de astrofotografía básica." },
            { time: "00:30", description: "Despedida con té de hierbas y observations finales." }
        ],
        included: [
            "Acceso al observatorio privado",
            "Cena gourmet de 3 tiempos",
            "Uso de telescopio profesional",
            "Guía astrónomo certificado",
            "Material para astrofotografía",
            "Traslado desde y hacia el hotel"
        ]
    },
    {
        id: 10,
        title: "Experiencia Astronauta por un Día",
        category: "observatory",
        img: "https://images.unsplash.com/photo-1505740420928-3e5fb064d0d7",
        badge: "Entrenamiento Real",
        days: "1 Día / 0 Noches",
        price: 780,
        description: "Entrena como un verdadero astronauta: centrifugadora, simulador de paseo espacial EVA y entrenamiento de supervivencia en ingravidez.",
        features: [
            { icon: "fa-rocket", text: "Simulador de Lanzamiento" },
            { icon: "fa-person-booth", text: "Centrifugadora de Gravedad" },
            { icon: "fa-person-walking", text: "Simulador de EVA" },
            { icon: "fa-medal", text: "Certificado de Astronauta" }
        ],
        itinerary: [
            { time: "09:00", description: "Bienvenida y briefing de seguridad." },
            { time: "10:00", description: "Entrenamiento en centrifugadora (2G)." },
            { time: "12:00", description: "Almuerzo nutricional especializado." },
            { time: "14:00", description: "Simulador de paseo espacial EVA." },
            { time: "16:00", description: "Taller de supervivencia espacial." },
            { time: "18:00", description: "Entrega de certificado y cierre." }
        ],
        included: [
            "Todo el equipo de entrenamiento",
            "Almuerzo especializado para astronautas",
            "Instructores certificados por NASA/ESA",
            "Uso de simuladores de última generación",
            "Certificado de participación",
            "Traslado desde el hotel"
        ]
    }
];

// DOM Elements
const packagesGrid = document.getElementById('packagesGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('packageModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const btnReservar = document.getElementById('btnReservar');

let currentFilter = 'all';
let selectedPackage = null;

// Initialize
function init() {
    renderPackages();
    setupEventListeners();
}

// Render packages based on filter
function renderPackages() {
    packagesGrid.innerHTML = '';
    
    const filteredPackages = currentFilter === 'all' 
        ? packages 
        : packages.filter(pkg => pkg.category === currentFilter);

    filteredPackages.forEach(pkg => {
        const card = document.createElement('div');
        card.className = 'package-card';
        card.dataset.id = pkg.id;
        card.innerHTML = `
            <img src="${pkg.img}" alt="${pkg.title}" class="package-img">
            <div class="badge">${pkg.badge}</div>
            <div class="package-content">
                <h3 class="package-title"><i class="fas fa-star"></i>${pkg.title}</h3>
                <p class="package-description">${pkg.description}</p>
                <div class="package-features">
                    ${pkg.features.slice(0, 3).map(f => `
                        <div class="feature-item">
                            <i class="fas ${f.icon}"></i>
                            <span>${f.text}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="package-price">
                    $${pkg.price}<span>${pkg.days.includes('Noche') ? '/paquete' : '/persona'}</span>
                </div>
                <div class="package-actions">
                    <button class="btn btn-secondary btn-details">Ver Detalles</button>
                    <button class="btn btn-primary btn-book">Reservar Paquete</button>
                </div>
            </div>
        `;
        packagesGrid.appendChild(card);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderPackages();
        });
    });

    // Package card clicks (for details)
    packagesGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.package-card');
        if (!card) return;

        const packageId = parseInt(card.dataset.id);
        selectedPackage = packages.find(pkg => pkg.id === packageId);
        
        if (e.target.classList.contains('btn-details') || 
            e.target.parentElement.classList.contains('btn-details')) {
            openModal(selectedPackage);
        }
        
        if (e.target.classList.contains('btn-book') || 
            e.target.parentElement.classList.contains('btn-book')) {
            openModal(selectedPackage);
        }
    });

    // Modal close
    closeModal.addEventListener('click', closeModalHandler);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModalHandler();
    });

    // Reserve button in modal
    btnReservar.addEventListener('click', () => {
        alert(`¡Gracias por su interés en ${selectedPackage.title}!\nPronto nuestro equipo de concierge se pondrá en contacto para finalizar su reserva.`);
        closeModalHandler();
    });
}

// Open modal with package details
function openModal(packageData) {
    modalTitle.innerHTML = `<i class="fas fa-star"></i>${packageData.title}`;
    
    modalBody.innerHTML = `
        <div class="modal-section">
            <h3><i class="fas fa-map-marked-alt"></i>Itinerario Detallado</h3>
            <div class="itinerary">
                ${packageData.itinerary.map(item => `
                    <div class="itinerary-item">
                        <div class="itinerary-time">${item.time}</div>
                        <div class="itinerary-description">${item.description}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-check-circle"></i>Servicios Incluidos</h3>
            <div class="features-list">
                ${packageData.included.map(item => `
                    <div class="feature">
                        <i class="fas fa-check"></i>
                        <span>${item}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-info-circle"></i>Condiciones Generales</h3>
            <ul>
                <li>Reserva requerida con 15 días de anticipación</li>
                <li>Política de cancelación: 50% de reembolso hasta 7 días antes</li>
                <li>Algunas actividades requieren buen estado físico</li>
                <li>Seguro de viaje incluido en paquetes de viaje</li>
                <li>Traslados desde y hacia el aeropuerto incluidos (según paquete)</li>
            </ul>
        </div>
    `;
    
    modal.style.display = 'flex';
    // Prevent scrolling behind modal
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalHandler() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);