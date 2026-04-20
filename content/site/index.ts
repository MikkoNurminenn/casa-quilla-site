import {
  type FaqItem,
  type LocaleCode,
  type LocaleSiteContent,
  type MassageService,
  type RoomType,
  type Testimonial,
} from "@/content/site/types";

const sharedRooms: RoomType[] = [
  {
    id: "garden-dorm",
    name: "Garden Dorm",
    rate: "From $18 / night",
    capacity: "4-6 guests",
    summary:
      "A light, social dorm for travelers who want good sleep, fresh air, and easy mornings.",
    features: [
      "Privacy curtains and bedside charging",
      "Lockers, fresh linens, and filtered water",
      "Best for solo travelers and flexible itineraries",
    ],
    badge: "Best for backpackers",
  },
  {
    id: "palm-room",
    name: "Palm Private",
    rate: "From $46 / night",
    capacity: "2 guests",
    summary:
      "A calm private room with warm textures, soft lighting, and just enough space to land well.",
    features: [
      "Queen bed, private bathroom, and strong Wi-Fi",
      "Quiet corner placement for early nights",
      "Best for couples or recovery days between hikes",
    ],
    badge: "Most booked direct",
  },
  {
    id: "terrace-suite",
    name: "Terrace Suite",
    rate: "From $68 / night",
    capacity: "2 guests",
    summary:
      "A slower, more boutique stay with a terrace view and a built-in excuse to extend one more night.",
    features: [
      "Terrace seating, coffee setup, and premium linens",
      "Spacious bathroom and sunrise-ready light",
      "Best for special trips and post-adventure reset",
    ],
    badge: "Boutique calm",
  },
];

const sharedMassages: MassageService[] = [
  {
    id: "traveler-legs",
    name: "Traveler Legs Relief",
    duration: "45 min",
    price: "$29",
    description:
      "Focused lower-body recovery after long bus rides, hikes, or city-walking days.",
    note: "Great first treatment after arrival.",
  },
  {
    id: "andean-reset",
    name: "Andean Reset",
    duration: "60 min",
    price: "$38",
    description:
      "A full-body reset balancing pressure, breath, and grounding rhythm for tired travelers.",
    note: "Our signature session.",
  },
  {
    id: "deep-rest-ritual",
    name: "Deep Rest Ritual",
    duration: "90 min",
    price: "$54",
    description:
      "A slower ritual for guests who want deeper release, longer stillness, and a premium recovery moment.",
    note: "Best booked after check-in day.",
  },
];

const sharedTestimonials: Testimonial[] = [
  {
    quote:
      "We booked because the site felt calm and clear, then stayed longer because the place actually matched the promise.",
    author: "Mia & Jonas",
    context: "Couple, direct booking",
  },
  {
    quote:
      "The massage after our trek was exactly what we hoped for. Easy booking, no friction, and genuinely restorative.",
    author: "Camila",
    context: "Traveler, wellness add-on",
  },
  {
    quote:
      "It felt like a hostel built for people who want both conversation and real sleep. That balance is rare.",
    author: "Tom",
    context: "Solo backpacker",
  },
];

const sharedFaqEn: FaqItem[] = [
  {
    question: "How do direct bookings work?",
    answer:
      "The stay flow sends guests into the Cloudbeds booking engine, where live availability, OTA-synced inventory, and deposit rules are handled securely.",
  },
  {
    question: "Do you take a deposit for stays?",
    answer:
      "The default launch setup assumes a first-night style deposit for accommodation bookings. The exact rule can be adjusted later inside Cloudbeds.",
  },
  {
    question: "Can guests reserve massages before arrival?",
    answer:
      "Yes. Massage slots are sold through SimplyBook.me, so guests can choose a treatment and time directly from the site before or during their stay.",
  },
  {
    question: "Is the site available in more than one language?",
    answer:
      "Yes. This launch version ships in English and Spanish, with room to expand into more locales later if marketing needs change.",
  },
];

const sharedFaqEs: FaqItem[] = [
  {
    question: "Como funcionan las reservas directas?",
    answer:
      "La reserva de alojamiento se hace en Cloudbeds, donde la disponibilidad en vivo, el inventario sincronizado con OTAs y las reglas de deposito se gestionan de forma segura.",
  },
  {
    question: "Se cobra deposito por la estadia?",
    answer:
      "La configuracion inicial asume un deposito similar a la primera noche para el alojamiento. Esa regla se puede ajustar despues dentro de Cloudbeds.",
  },
  {
    question: "Se pueden reservar masajes antes de llegar?",
    answer:
      "Si. Los horarios de masaje se venden con SimplyBook.me, asi que el huesped puede elegir tratamiento y hora directamente desde la web.",
  },
  {
    question: "La web esta disponible en mas de un idioma?",
    answer:
      "Si. Esta version sale en ingles y espanol, con espacio para ampliar a mas idiomas si la estrategia lo necesita.",
  },
];

export const siteContent: Record<LocaleCode, LocaleSiteContent> = {
  en: {
    locale: "en",
    languageLabel: "English",
    meta: {
      localeName: "English",
      title: "Casa Quilla",
      description:
        "A warm Peruvian hostel and massage concept for backpackers and couples who want to book direct.",
    },
    brand: {
      name: "Casa Quilla",
      label: "Hostel & Massage House",
      tagline: "Sleep softly, recover deeply, keep moving beautifully.",
      location: "Peru",
      announcement: "Direct booking, bilingual hospitality, calm energy.",
    },
    navigation: {
      home: "Home",
      stay: "Stay",
      massage: "Massage",
      contact: "Contact",
      bookStay: "Book stay",
      bookMassage: "Reserve massage",
    },
    home: {
      hero: {
        eyebrow: "Boutique jungle calm",
        title:
          "A warm Peruvian stay for backpackers, couples, and tired legs.",
        description:
          "Casa Quilla is designed as a direct-booking base for travelers who want restful rooms, local ease, and a massage menu that turns recovery into part of the trip.",
        primaryCta: "Book your stay",
        secondaryCta: "Reserve a massage",
        proof: [
          "Booking.com and Airbnb synced in real time",
          "English and Spanish booking paths",
          "Stay deposit + massage add-on flow built for direct sales",
        ],
      },
      directBooking: {
        eyebrow: "Direct is better",
        title: "One clear booking path, fewer drop-offs, better nights.",
        intro:
          "The site leads with accommodation and keeps the decision simple: see the room mood, understand the value, then move straight into the live booking engine.",
        benefits: [
          "Branded direct-book flow instead of sending guests back to OTAs",
          "Room-first storytelling with massage as a believable upsell",
          "Tracking-ready CTAs for campaigns, social traffic, and referrals",
        ],
      },
      rooms: {
        eyebrow: "Stay your way",
        title: "Three room moods for different kinds of travelers.",
        intro:
          "Dorms stay practical, private rooms feel soft, and the terrace suite sells the slower version of the trip.",
        cta: "See all room types",
      },
      massage: {
        eyebrow: "Recovery worth adding",
        title: "Turn a good hostel stay into a restorative travel ritual.",
        intro:
          "Massage is presented as a natural next step after buses, hikes, altitude, or long walking days, not as a disconnected side business.",
        cta: "See treatments",
        highlights: [
          "Short sessions for arrivals and tight schedules",
          "Signature rituals for deeper reset",
          "Deposit-ready booking through SimplyBook.me",
        ],
      },
      localStory: {
        eyebrow: "Peru, without the rush",
        title: "Built for soft landings between adventures.",
        intro:
          "The visual language leans earthy and intimate so the site feels less like a booking form and more like the first moment of the stay itself.",
        moments: [
          "Early coffee before a market walk",
          "A quiet room after long transit",
          "Recovery time before the next trail or bus",
        ],
      },
      testimonials: {
        eyebrow: "Proof",
        title: "The promise should feel believable before the booking ever happens.",
      },
      faq: {
        eyebrow: "Clarity removes friction",
        title: "Questions guests usually have before they commit.",
        intro:
          "Pricing, deposits, language, and wellness booking should feel straightforward before someone leaves the page.",
      },
      finalCta: {
        title: "Book the room first. Add the calm second.",
        description:
          "Lead with the stay, keep the journey frictionless, and make massage the upsell guests are already ready to say yes to.",
        primaryCta: "Start direct booking",
        secondaryCta: "Plan recovery time",
      },
    },
    stay: {
      hero: {
        eyebrow: "Stay at Casa Quilla",
        title: "Room moods built for recovery, not just sleep.",
        description:
          "This page sells room types as distinct experiences, then hands guests into the live Cloudbeds path for real availability and deposit handling.",
        availabilityLabel: "Live availability through Cloudbeds",
      },
      directBenefitsTitle: "Why the stay page converts better direct",
      directBenefits: [
        "OTA inventory sync lives in the booking engine, so guests see current availability without you managing it manually on the site.",
        "Each room type gets a distinct emotional angle, making the decision feel faster and more personal.",
        "Direct-book advantages stay visible all the way to the CTA instead of disappearing below generic room copy.",
      ],
      amenitiesTitle: "Essentials travelers actually care about",
      amenities: [
        "Strong Wi-Fi in private and shared spaces",
        "Filtered water, hot showers, and luggage help",
        "Early arrival / late check-in guidance by message",
        "Soft communal zones without party-hostel chaos",
        "Massage booking available before or after check-in",
        "English and Spanish guest communication",
      ],
      roomTypesTitle: "Room types",
      roomTypesIntro:
        "The copy stays short, the promise stays clear, and the CTA remains close to the inventory story.",
      faqTitle: "Stay FAQ",
      faqIntro:
        "A fast answer is often the difference between a direct booking and another tab.",
      finalCta: {
        title: "Ready to move from inspiration into inventory?",
        description:
          "Launch the booking engine from here and keep the direct path feeling intentional from first click to checkout.",
        cta: "Open stay booking",
      },
    },
    massage: {
      hero: {
        eyebrow: "Massage at Casa Quilla",
        title: "Sell recovery like part of the trip, not an afterthought.",
        description:
          "The massage offer is positioned for sore legs, altitude fatigue, and post-transit reset, then handed into a clean SimplyBook reservation flow.",
        bookingLabel: "Inline booking powered by SimplyBook.me",
      },
      servicesTitle: "Treatments",
      servicesIntro:
        "Keep the menu tight, the durations easy to compare, and the choice simple enough for a traveler to make in seconds.",
      ritualTitle: "How the massage flow should feel",
      ritualSteps: [
        "Pick the treatment that matches the day: arrival, recovery, or slow rest.",
        "Choose the time from the live SimplyBook schedule.",
        "Pay the deposit and receive the follow-up details automatically.",
      ],
      trustTitle: "Why this upsell works",
      trustPoints: [
        "It solves a real traveler problem instead of inventing a luxury add-on.",
        "It can be booked before arrival, after check-in, or as a calm impulse purchase.",
        "The service menu is narrow on purpose so guests can decide quickly.",
      ],
      depositNote:
        "Launch assumption: massage bookings take a 30% deposit through SimplyBook.me, with the remainder settled on-site or by your chosen policy.",
      widgetTitle: "Reserve a treatment",
      widgetIntro:
        "Drop the live widget here once the SimplyBook URL is connected. Until then, the page still communicates the value and flow clearly.",
      finalCta: {
        title: "A strong upsell should feel useful, not pushy.",
        description:
          "Position massage as recovery, support it with real schedule availability, and let the booking happen without leaving the site story.",
        cta: "Open massage booking",
      },
    },
    contact: {
      hero: {
        eyebrow: "Need help before launch or booking?",
        title: "Keep the contact page practical, warm, and easy to scan.",
        description:
          "Travelers mainly want reassurance: how to reach you, when you reply, and what happens if plans shift.",
      },
      contactTitle: "Contact lines",
      contactMethods: [
        { label: "Email", value: "hello@casaquilla.example" },
        { label: "WhatsApp", value: "+51 placeholder line" },
        { label: "Region", value: "Peru — replace with final district + map pin" },
      ],
      arrivalTitle: "Arrival guidance",
      arrivalSteps: [
        "Share final arrival details by message once booking is confirmed.",
        "Use English and Spanish templates for check-in, transit, and late arrivals.",
        "Offer the massage add-on again in pre-arrival messaging for a second conversion chance.",
      ],
      policyTitle: "Policies to keep visible",
      policyPoints: [
        "Stay deposits are handled in the booking engine.",
        "Massage deposits are handled in SimplyBook.me.",
        "Cancellation language should stay short, confident, and easy to translate.",
      ],
    },
    rooms: sharedRooms,
    massages: sharedMassages,
    testimonials: sharedTestimonials,
    faq: sharedFaqEn,
    footer: {
      note:
        "Concept launch site for a bilingual direct-booking hostel and massage experience.",
      legal:
        "Replace final legal entity, address, and booking terms before going live.",
    },
  },
  es: {
    locale: "es",
    languageLabel: "Espanol",
    meta: {
      localeName: "Espanol",
      title: "Casa Quilla",
      description:
        "Un concepto bilingue de hostel peruano con reservas directas y masajes pensados para viajeros.",
    },
    brand: {
      name: "Casa Quilla",
      label: "Hostel & Massage House",
      tagline: "Dormir suave, recuperarse profundo, seguir el viaje con calma.",
      location: "Peru",
      announcement: "Reserva directa, hospitalidad bilingue y energia serena.",
    },
    navigation: {
      home: "Inicio",
      stay: "Hospedaje",
      massage: "Masajes",
      contact: "Contacto",
      bookStay: "Reservar hospedaje",
      bookMassage: "Reservar masaje",
    },
    home: {
      hero: {
        eyebrow: "Calma boutique en clave selva",
        title:
          "Una estadia peruana calida para mochileros, parejas y piernas cansadas.",
        description:
          "Casa Quilla esta pensada como una base de reserva directa para viajeros que buscan habitaciones tranquilas, cercania local y una carta de masajes que convierte la recuperacion en parte del viaje.",
        primaryCta: "Reservar hospedaje",
        secondaryCta: "Reservar masaje",
        proof: [
          "Booking.com y Airbnb sincronizados en tiempo real",
          "Rutas de reserva en ingles y espanol",
          "Deposito para estadia + upsell de masajes para venta directa",
        ],
      },
      directBooking: {
        eyebrow: "Reservar directo rinde mejor",
        title:
          "Un camino claro de reserva, menos abandonos, mejores noches.",
        intro:
          "La web abre con el alojamiento y simplifica la decision: sentir el ambiente de la habitacion, entender el valor y pasar directo al motor de reservas en vivo.",
        benefits: [
          "Experiencia de marca propia en vez de devolver al huesped a las OTAs",
          "Narrativa centrada en habitaciones con masaje como upsell creible",
          "CTAs listos para medir campanas, trafico social y referidos",
        ],
      },
      rooms: {
        eyebrow: "Tu forma de quedarte",
        title: "Tres moods de habitacion para distintos tipos de viajeros.",
        intro:
          "Los dormitorios siguen siendo practicos, las privadas se sienten suaves y la suite con terraza vende la version mas lenta del viaje.",
        cta: "Ver todas las habitaciones",
      },
      massage: {
        eyebrow: "Recuperacion que si suma",
        title:
          "Convierte una buena estadia en un ritual de viaje realmente reparador.",
        intro:
          "El masaje se presenta como el siguiente paso natural despues de buses, caminatas, altura o dias largos, no como un negocio separado.",
        cta: "Ver tratamientos",
        highlights: [
          "Sesiones cortas para llegadas y agendas apretadas",
          "Rituales firma para un reset mas profundo",
          "Reserva con deposito a traves de SimplyBook.me",
        ],
      },
      localStory: {
        eyebrow: "Peru, sin correr",
        title: "Pensado para aterrizajes suaves entre aventuras.",
        intro:
          "El lenguaje visual se mantiene terroso e intimo para que la web se sienta menos como un formulario y mas como el primer momento real de la estadia.",
        moments: [
          "Cafe temprano antes de caminar por el mercado",
          "Una habitacion tranquila despues del traslado",
          "Tiempo de recuperacion antes del siguiente sendero o bus",
        ],
      },
      testimonials: {
        eyebrow: "Prueba",
        title:
          "La promesa tiene que sentirse creible antes de que ocurra la reserva.",
      },
      faq: {
        eyebrow: "La claridad baja la friccion",
        title: "Preguntas que el huesped suele tener antes de decidirse.",
        intro:
          "Precio, deposito, idioma y reserva de bienestar deben sentirse claros antes de que alguien abandone la pagina.",
      },
      finalCta: {
        title: "Primero reserva la habitacion. Luego agrega la calma.",
        description:
          "Abre con el alojamiento, mantien el recorrido sin friccion y convierte el masaje en un upsell facil de aceptar.",
        primaryCta: "Empezar reserva directa",
        secondaryCta: "Planear recuperacion",
      },
    },
    stay: {
      hero: {
        eyebrow: "Hospedarse en Casa Quilla",
        title: "Habitaciones pensadas para recuperar, no solo para dormir.",
        description:
          "Esta pagina vende cada tipo de habitacion como una experiencia distinta y luego entrega al huesped al flujo en vivo de Cloudbeds para disponibilidad real y deposito.",
        availabilityLabel: "Disponibilidad en vivo por Cloudbeds",
      },
      directBenefitsTitle: "Por que esta pagina convierte mejor en directo",
      directBenefits: [
        "La sincronizacion con OTAs vive en el motor de reservas, asi que el huesped ve disponibilidad actual sin que la web tenga que gestionar inventario.",
        "Cada tipo de habitacion tiene una propuesta emocional distinta y la decision se siente mas rapida y personal.",
        "Las ventajas de reservar directo siguen visibles hasta el CTA, en vez de perderse bajo texto generico.",
      ],
      amenitiesTitle: "Lo esencial que al viajero si le importa",
      amenities: [
        "Wi-Fi fuerte en habitaciones y espacios comunes",
        "Agua filtrada, duchas calientes y ayuda con equipaje",
        "Guia por mensaje para llegada temprana o check-in tarde",
        "Zonas compartidas suaves, sin caos de hostel-fiesta",
        "Reserva de masaje antes o despues del check-in",
        "Comunicacion con huespedes en ingles y espanol",
      ],
      roomTypesTitle: "Tipos de habitacion",
      roomTypesIntro:
        "El texto sigue breve, la promesa sigue clara y el CTA permanece cerca de la historia del inventario.",
      faqTitle: "FAQ de hospedaje",
      faqIntro:
        "Una respuesta rapida suele ser la diferencia entre una reserva directa y otra pestana mas.",
      finalCta: {
        title: "Listo para pasar de inspiracion a inventario?",
        description:
          "Abre el motor de reservas desde aqui y mantien la experiencia directa intencional desde el primer clic hasta el checkout.",
        cta: "Abrir reserva de hospedaje",
      },
    },
    massage: {
      hero: {
        eyebrow: "Masajes en Casa Quilla",
        title:
          "Vende recuperacion como parte del viaje, no como un extra suelto.",
        description:
          "La oferta de masajes se posiciona para piernas cansadas, fatiga por altura y reset post-traslado, y luego se entrega a un flujo limpio de SimplyBook.",
        bookingLabel: "Reserva integrada con SimplyBook.me",
      },
      servicesTitle: "Tratamientos",
      servicesIntro:
        "Menu corto, duraciones faciles de comparar y una decision lo bastante simple para tomarla en segundos.",
      ritualTitle: "Como deberia sentirse el flujo",
      ritualSteps: [
        "Elegir el tratamiento que mejor acompana el dia: llegada, recuperacion o descanso profundo.",
        "Escoger la hora desde la agenda en vivo de SimplyBook.",
        "Pagar el deposito y recibir los detalles automaticamente.",
      ],
      trustTitle: "Por que este upsell funciona",
      trustPoints: [
        "Resuelve un problema real del viajero en vez de inventar un lujo vacio.",
        "Se puede reservar antes de llegar, despues del check-in o como compra impulsiva tranquila.",
        "El menu es corto a proposito para que el huesped decida rapido.",
      ],
      depositNote:
        "Supuesto de lanzamiento: los masajes toman un deposito del 30% en SimplyBook.me y el resto se paga en sitio o segun la politica final.",
      widgetTitle: "Reservar un tratamiento",
      widgetIntro:
        "El widget en vivo se integra aqui cuando la URL de SimplyBook este conectada. Mientras tanto, la pagina sigue vendiendo con claridad el valor y el recorrido.",
      finalCta: {
        title: "Un buen upsell debe sentirse util, no insistente.",
        description:
          "Posiciona el masaje como recuperacion, apoyalo con horarios reales y deja que la reserva ocurra sin romper la historia del sitio.",
        cta: "Abrir reserva de masajes",
      },
    },
    contact: {
      hero: {
        eyebrow: "Ayuda antes del viaje o antes del lanzamiento",
        title: "La pagina de contacto debe ser practica, calida y facil de leer.",
        description:
          "El viajero quiere seguridad: como escribirte, cuando respondes y que pasa si cambia el plan.",
      },
      contactTitle: "Canales de contacto",
      contactMethods: [
        { label: "Email", value: "hello@casaquilla.example" },
        { label: "WhatsApp", value: "+51 linea placeholder" },
        { label: "Region", value: "Peru — reemplazar por distrito final + mapa" },
      ],
      arrivalTitle: "Guia de llegada",
      arrivalSteps: [
        "Enviar detalles finales de llegada por mensaje cuando la reserva quede confirmada.",
        "Usar plantillas en ingles y espanol para check-in, traslado y llegadas tarde.",
        "Ofrecer de nuevo el masaje en los mensajes previos a la llegada para una segunda conversion.",
      ],
      policyTitle: "Politicas que deben quedar visibles",
      policyPoints: [
        "Los depositos de hospedaje se gestionan en el motor de reservas.",
        "Los depositos de masaje se gestionan en SimplyBook.me.",
        "El lenguaje de cancelacion debe ser corto, claro y facil de traducir.",
      ],
    },
    rooms: [
      {
        ...sharedRooms[0],
        name: "Dormitorio Jardin",
        rate: "Desde $18 / noche",
        capacity: "4-6 huespedes",
        summary:
          "Un dormitorio luminoso y social para quien quiere dormir bien, respirar aire fresco y empezar el dia con suavidad.",
        features: [
          "Cortinas de privacidad y carga al lado de la cama",
          "Lockers, sabanas frescas y agua filtrada",
          "Ideal para viajeros solos y rutas flexibles",
        ],
        badge: "Ideal para mochileros",
      },
      {
        ...sharedRooms[1],
        name: "Palm Private",
        rate: "Desde $46 / noche",
        capacity: "2 huespedes",
        summary:
          "Una privada tranquila con texturas calidas, luz suave y el espacio justo para aterrizar bien.",
        features: [
          "Cama queen, bano privado y Wi-Fi fuerte",
          "Ubicacion silenciosa para dormir temprano",
          "Ideal para parejas o dias de recuperacion",
        ],
        badge: "La mas reservada en directo",
      },
      {
        ...sharedRooms[2],
        name: "Suite Terraza",
        rate: "Desde $68 / noche",
        capacity: "2 huespedes",
        summary:
          "Una estadia mas boutique y lenta, con vista desde la terraza y una razon perfecta para quedarse una noche mas.",
        features: [
          "Terraza, cafe y ropa de cama premium",
          "Bano amplio y luz suave al amanecer",
          "Ideal para viajes especiales y descanso post-aventura",
        ],
        badge: "Calma boutique",
      },
    ],
    massages: [
      {
        ...sharedMassages[0],
        name: "Alivio para Piernas Viajeras",
        duration: "45 min",
        description:
          "Recuperacion focalizada de piernas y parte baja del cuerpo despues de buses largos, caminatas o dias intensos.",
        note: "Muy buena primera sesion al llegar.",
      },
      {
        ...sharedMassages[1],
        name: "Reset Andino",
        duration: "60 min",
        description:
          "Un reset corporal completo que mezcla presion, respiracion y ritmo para viajeros cansados.",
        note: "Nuestra sesion firma.",
      },
      {
        ...sharedMassages[2],
        name: "Ritual de Descanso Profundo",
        duration: "90 min",
        description:
          "Un ritual mas lento para quienes buscan descarga profunda, quietud prolongada y un momento premium de recuperacion.",
        note: "Ideal para el dia del check-in o despues de una caminata.",
      },
    ],
    testimonials: [
      {
        ...sharedTestimonials[0],
        quote:
          "Reservamos porque la web se sentia clara y tranquila, y al llegar el lugar si cumplia esa promesa.",
        author: "Mia y Jonas",
        context: "Pareja, reserva directa",
      },
      {
        ...sharedTestimonials[1],
        quote:
          "El masaje despues del trek fue exactamente lo que esperabamos. Reserva facil, sin friccion y realmente reparadora.",
        author: "Camila",
        context: "Viajera, upsell de bienestar",
      },
      {
        ...sharedTestimonials[2],
        quote:
          "Se siente como un hostel para gente que quiere conversacion y tambien dormir bien. Ese equilibrio es raro.",
        author: "Tom",
        context: "Mochilero solo",
      },
    ],
    faq: sharedFaqEs,
    footer: {
      note:
        "Sitio conceptual de lanzamiento para una experiencia bilingue de hostel y masajes con venta directa.",
      legal:
        "Reemplazar entidad legal final, direccion y terminos de reserva antes de publicar.",
    },
  },
};

export function getSiteContent(locale: LocaleCode) {
  return siteContent[locale];
}
