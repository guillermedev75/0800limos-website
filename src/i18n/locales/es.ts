export default {
  header: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      destinations: 'Destinos',
      areas: 'Áreas',
      contact: 'Contacto',
    },
    cta: 'Reservar',
    instantQuote: 'Cotización Instantánea',
  },
  hero: {
    title: 'Transporte',
    titleHighlight: 'Ejecutivo',
    slides: [
      { subtitle: 'BMW Serie 7 - Elegancia alemana en cada detalle' },
      { subtitle: 'Mercedes S-Class - El estándar de lujo' },
      { subtitle: 'Cadillac CTS - Sedanes compatibles' },
      { subtitle: 'Cadillac Escalade - Presencia imponente' },
      { subtitle: 'Mercedes Sprinter - Confort para grupos' },
      { subtitle: 'Flota completa para eventos corporativos' },
    ],
    ctaPrimary: 'Reservar Ahora',
    ctaSecondary: 'Explorar Bay Area',
  },
  services: {
    label: 'Nuestros Servicios',
    title: 'Experiencia Premium',
    items: {
      airport: {
        title: 'Traslados Aeropuerto',
        description: 'Servicio de traslado a los principales aeropuertos de la región con monitoreo de vuelos en tiempo real. Atendemos FBOs y aviación privada.',
        features: ['SFO, OAK, SJC, STS, MRY', 'FBOs', 'Seguimiento de vuelos', 'Meet & Greet', 'TARMAC where available'],
      },
      fbo: {
        title: 'FBOs & Aviación Privada',
        description: 'Servicio especializado para FBOs (Fixed Base Operators) en el Bay Area. Transporte ejecutivo para aviación privada y corporativa.',
        features: ['Bay Area FBOs', 'Terminales privadas', 'Servicio discreto', 'TARMAC where available'],
      },
      corporate: {
        title: 'Viajes Corporativos',
        description: 'Soluciones de transporte ejecutivo para reuniones de negocios, road shows, convenciones y eventos corporativos.',
        features: ['Reuniones de negocios', 'Road shows', 'Convenciones', 'Transporte ejecutivo'],
      },
      special: {
        title: 'Ocasiones Especiales',
        description: 'Haga que los momentos especiales sean aún más memorables con nuestro servicio de lujo personalizado.',
        features: ['Bodas', 'Aniversarios', 'Noches de salida'],
      },
      wine: {
        title: 'Tours de Vino',
        description: 'Paseos exclusivos por las mejores viñedos de California con confort y sofisticación.',
        features: ['Napa Valley', 'Sonoma', 'Tours personalizados'],
      },
    },
  },
  destinations: {
    label: 'Explorar',
    title: 'Destinos Bay Area',
    description: 'Descubra los lugares más increíbles de California con el confort y seguridad de 0800 Limos.',
    items: {
      shasta: {
        name: 'Monte Shasta',
        location: 'Norte de California',
        description: 'Vistas impresionantes de la montaña sagrada, perfecta para excursiones de un día y retiros espirituales. Explore senderos, cascadas y la energía única de este destino icónico.',
      },
      parasailing: {
        name: 'Parasailing',
        location: 'Santa Cruz',
        description: 'Aventura sobre el agua con vistas panorámicas de la ciudad. Una experiencia única de adrenalina y paisajes deslumbrantes.',
      },
      winery: {
        name: 'Bodegas Premium',
        location: 'Sonoma & Napa',
        description: 'Bodegas históricas con arquitectura única y vinos premiados. Experiencias gourmet y tours exclusivos por el mundo del vino.',
      },
      tours: {
        name: 'Tours de Vino',
        location: 'Bay Area',
        description: 'Rutas personalizadas por las mejores regiones vinícolas de California. Transporte lujoso entre bodegas seleccionadas.',
      },
    },
  },
  whyUs: {
    label: 'Por Qué Elegir',
    title: '0800 Limos',
    items: {
      chauffeurs: {
        title: 'Chóferes Profesionales',
        description: 'Nuestros conductores pasan por entrenamiento continuo para garantizar su seguridad y confort.',
        stat: '100% Verificados',
      },
      fleet: {
        title: 'Flota de Lujo',
        description: 'Vehículos de modelos recientes, meticulosamente mantenidos y equipados con las últimas tecnologías de confort y seguridad.',
        stat: 'Modelos Más Nuevos',
      },
      punctuality: {
        title: 'Puntualidad Garantizada',
        description: 'Compromiso con la puntualidad. Monitoreo de vuelos en tiempo real para ajustes automáticos de recogida.',
        stat: '99% A tiempo',
      },
      support: {
        title: 'Soporte 24/7',
        description: 'Equipo de soporte disponible en cualquier momento para atender sus necesidades y resolver cualquier imprevisto.',
        stat: 'Siempre Online',
      },
    },
  },
  testimonials: {
    label: 'Testimonios',
    title: 'Lo Que Dicen Nuestros Clientes',
    items: [
      {
        content: '0800 Limos es nuestra elección para transporte ejecutivo en eventos tech. Puntualidad impecable y conductores profesionales. Excelente para equipos de desarrollo.',
        name: 'Guillerme',
        role: 'Team Leader, Dreamteam',
      },
      {
        content: 'Lo uso para transporte de clientes y reuniones corporativas. El servicio FBO es excepcional para recibir inversores en el aeropuerto. Altamente recomendado.',
        name: 'Renan',
        role: 'Tech Lead, Dreamteam',
      },
      {
        content: 'Viajo constantemente entre conferencias y 0800 Limos facilita mi rutina. El monitoreo de vuelos y el servicio discreto hacen toda la diferencia para un CTO.',
        name: 'Fabio',
        role: 'CTO, Dreamteam',
      },
    ],
  },
  areas: {
    label: 'Área de Servicio',
    title: 'Áreas Atendidas',
    description: 'Cubrimos toda la región de la Bahía de San Francisco y áreas circundantes, ofreciendo servicio de transporte premium dondequiera que necesite ir.',
    cta: 'Reservar viaje',
    customDestination: {
      title: '¿Necesita un destino diferente?',
      description: 'Contáctenos para verificar disponibilidad en otras regiones de California.',
    },
    locations: {
      sf: { name: 'San Francisco', description: 'Una de las ciudades más icónicas del mundo — hogar del Golden Gate Bridge, Fisherman\'s Wharf y una vibrante escena cultural y gastronómica. Desde las colinas neblinosas de Pacific Heights hasta las animadas calles de SoMa, San Francisco ofrece una mezcla única de cultura, historia e innovación.', highlights: ['Golden Gate Bridge', 'Gastronomía premiada', 'Hub tecnológico'] },
      napa: { name: 'Napa Valley', description: 'La principal región vinícola de Estados Unidos, entre colinas ondulantes y fincas de clase mundial. Con más de 400 bodegas que producen algunos de los mejores Cabernet Sauvignons y Chardonnays del planeta, Napa es imprescindible para los amantes del vino y la gastronomía.', highlights: ['400+ bodegas', 'Restaurantes Michelin', 'Resorts de lujo'] },
      sonoma: { name: 'Sonoma', description: 'Sonoma County combina encanto rústico con sofisticación. Más amplio y relajado que Napa, es conocido por sus granjas artesanales, viñedos orgánicos, secuoyas costeras y una cultura vinícola acogedora que invita a explorar sin prisa.', highlights: ['Viñedos orgánicos', 'Secuoyas costeras', 'Cocina de campo'] },
      monterey: { name: 'Monterey', description: 'Una joya del litoral californiano. Monterey enamora con sus acantilados dramáticos, fauna marina y la legendaria 17-Mile Drive. Hogar de uno de los mejores acuarios del mundo, es igualmente apreciada por amantes de la naturaleza y viajeros de lujo.', highlights: ['17-Mile Drive', 'Acuario de clase mundial', 'Vistas del Pacífico'] },
      tahoe: { name: 'Lake Tahoe', description: 'En la frontera entre California y Nevada, a 1.900 metros de altitud, el Lago Tahoe es un paraíso alpino durante todo el año. Aguas cristalinas, estaciones de esquí de primer nivel en invierno y senderismo y deportes acuáticos en verano lo convierten en un destino único.', highlights: ['Estaciones de esquí premium', 'Lago alpino cristalino', 'Senderismo y deportes'] },
      silicon: { name: 'Silicon Valley', description: 'El epicentro mundial de la tecnología e innovación. Desde el campus de Apple hasta el Stanford Research Park, Silicon Valley vibra con energía emprendedora. Ofrecemos transporte ejecutivo discreto para reuniones, conferencias y eventos corporativos en toda la región.', highlights: ['Campus corporativos', 'Traslados a conferencias', 'Conexiones aeroportuarias'] },
      carmel: { name: 'Carmel-by-the-Sea', description: 'Uno de los pueblos más encantadores de California, Carmel-by-the-Sea es una ciudad de cuento de hadas con arquitectura de cottages, galerías de arte y una prístina playa de arena blanca. Junto a Pebble Beach y la costa de Big Sur, es la definición misma del lujo costero discreto.', highlights: ['Playa de Carmel', 'Galerías y boutiques', 'Portal a Big Sur'] },
      sacramento: { name: 'Sacramento', description: 'La vibrante capital de California se asienta en la confluencia de los ríos Sacramento y American. Una ciudad de rica historia de la Fiebre del Oro, una floreciente escena gastronómica farm-to-fork y un creciente polo profesional y gubernamental — ofrecemos traslados ejecutivos a la capital.', highlights: ['Capitolio Estatal', 'Gastronomía farm-to-fork', 'Historia de la Fiebre del Oro'] },
      pebble: { name: 'Pebble Beach', description: 'Hogar de uno de los campos de golf más icónicos del mundo, Pebble Beach es sinónimo de exclusividad y belleza natural. Con vistas dramáticas al océano en la Península de Monterey, ha albergado múltiples U.S. Opens y sigue siendo un destino de ensueño para golfistas y viajeros de lujo.', highlights: ['Pebble Beach Golf Links', '17-Mile Drive', 'Lodges con vista al océano'] },
      santacruz: { name: 'Santa Cruz', description: 'Un querido destino costero californiano donde la cultura bohemia se encuentra con la belleza natural. Famosa por su histórico boardwalk, el surf de clase mundial en Steamer Lane y los bosques de secuoyas a pocos minutos de la playa, Santa Cruz ofrece una escapada vibrante para todo tipo de viajero.', highlights: ['Boardwalk histórico', 'Surf en Steamer Lane', 'Bosques de secuoyas'] },
      calistoga: { name: 'Calistoga', description: 'Enclavada en el extremo norte del Valle de Napa, Calistoga es un destino en sí misma — célebre por sus manantiales termales naturales, baños de lodo volcánico y spas de clase mundial. Rodeada de prestigiosas bodegas y dramáticos paisajes montañosos, ofrece una experiencia profundamente restauradora.', highlights: ['Manantiales termales naturales', 'Baños de lodo volcánico', 'Bodegas premium'] },
      yountville: { name: 'Yountville', description: 'A menudo llamada la capital gastronómica del Valle de Napa, Yountville alberga el legendario The French Laundry de Thomas Keller — uno de los restaurantes más aclamados del mundo. Este íntimo pueblo de apenas 3.000 habitantes tiene más estrellas Michelin per cápita que cualquier otro lugar en la Tierra.', highlights: ['The French Laundry', 'Más estrellas Michelin per cápita', 'Bodegas boutique'] },
      halfmoon: { name: 'Ritz-Carlton Half Moon Bay', description: 'Ubicado en dramáticos acantilados costeros con vistas al Océano Pacífico, el Ritz-Carlton Half Moon Bay es uno de los resorts más celebrados de California. Con dos campos de golf de campeonato, un spa de clase mundial y panorámicas oceánicas impresionantes, es el retiro definitivo a solo 30 minutos al sur de San Francisco.', highlights: ['Ritz-Carlton frente al mar', 'Golf de campeonato', '30 min de SF'] },
    },
  },
  contact: {
    label: 'Contacto',
    title: 'Póngase en Contacto',
    description: 'Solicite una cotización o haga su reserva. Rápido, fácil y seguro.',
    buttons: {
      email: 'Email',
      copyEmail: 'Copiar dirección de email',
      call: 'Llamar',
      whatsapp: 'WhatsApp',
    },
    emailCopied: 'Email de 0800 Limos copiado al portapapeles',
    response: 'Respuestas rápidas',
    cards: {
      phone: { title: 'Teléfono', value: '650-666-9333' },
      whatsapp: { title: 'WhatsApp', value: '650-666-9333' },
      email: { title: 'Email', value: 'hussein@0800limos.com' },
      availability: { title: 'Disponibilidad', value: '24/7 - Todos los días' },
    },
  },
  footer: {
    brand: 'Professional transportation services in the San Francisco Bay Area. Experience luxury, comfort, and reliability with our premium fleet.',
    links: {
      services: 'Servicios',
      destinations: 'Destinos',
      contact: 'Contacto',
    },
    copyright: '© 2026 0800 Limos. Todos los derechos reservados.',
    tagline: 'Transporte Ejecutivo Premium',
  },
  floatingButton: {
    label: 'Cotizar',
    menuTitle: '¿Cómo podemos ayudar?',
    options: {
      online: { title: 'Reservar Online' },
      whatsapp: { title: 'WhatsApp' },
      call: { title: 'Llamar Ahora' },
    },
  },
  languages: {
    'pt-BR': 'PT',
    'en-US': 'EN',
    'es': 'ES',
  },
};
