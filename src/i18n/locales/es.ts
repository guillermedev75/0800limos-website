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
  },
  hero: {
    title: 'Transporte',
    titleHighlight: 'Ejecutivo',
    slides: [
      { subtitle: 'BMW Serie 7 - Elegancia alemana en cada detalle' },
      { subtitle: 'Mercedes S-Class - El estándar de lujo' },
      { subtitle: 'Cadillac CTS - Sofisticación americana' },
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
        features: ['SFO, OAK, SJC, STS', 'FBOs - Aviación Privada', 'Seguimiento de vuelos', 'Meet & Greet'],
      },
      fbo: {
        title: 'FBOs & Aviación Privada',
        description: 'Servicio especializado para FBOs (Fixed Base Operators) en el Bay Area. Transporte ejecutivo para aviación privada y corporativa.',
        features: ['Bay Area FBOs', 'Aeropuerto STS', 'Terminales privadas', 'Servicio discreto'],
      },
      corporate: {
        title: 'Viajes Corporativos',
        description: 'Soluciones de transporte ejecutivo para reuniones de negocios, road shows y eventos corporativos.',
        features: ['Reuniones de negocios', 'Road shows', 'Transporte ejecutivo'],
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
        location: 'Bahía de San Francisco',
        description: 'Aventura sobre las aguas de la bahía con vistas panorámicas de la ciudad y el Golden Gate. Una experiencia única de adrenalina y paisajes deslumbrantes.',
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
        description: 'Nuestros conductores pasan por rigurosas verificaciones de antecedentes y entrenamiento continuo para garantizar su seguridad y confort.',
        stat: '100% Verificados',
      },
      fleet: {
        title: 'Flota de Lujo',
        description: 'Vehículos de modelos recientes, meticulosamente mantenidos y equipados con las últimas tecnologías de confort y seguridad.',
        stat: 'Modelos 2024-2026',
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
        content: '0800 Limos transformó nuestra experiencia de transporte corporativo. La puntualidad impecable y el profesionalismo de los choferes son incomparables. Recomiendo fuertemente para ejecutivos que valoran la excelencia.',
        name: 'Michael Chen',
        role: 'CEO, TechVentures Inc.',
      },
      {
        content: 'Uso los servicios de 0800 Limos para todas las bodas que planifico. La flota de limusinas es deslumbrante y el servicio siempre supera las expectativas de los novios. ¡Un socio confiable!',
        name: 'Sarah Johnson',
        role: 'Wedding Planner',
      },
      {
        content: 'Viajo constantemente por trabajo y 0800 Limos es mi elección número uno para traslados de aeropuerto. El monitoreo de vuelos y el servicio Meet & Greet hacen toda la diferencia.',
        name: 'David Rodriguez',
        role: 'Viajero Frecuente de Negocios',
      },
      {
        content: 'Organicé un tour de bodegas en Napa para un grupo de 12 personas. 0800 Limos se encargó de todos los detalles, desde el transporte hasta las sugerencias de bodegas. ¡Experiencia perfecta!',
        name: 'Emily Thompson',
        role: 'Coordinadora de Eventos',
      },
    ],
  },
  areas: {
    label: 'Área de Servicio',
    title: 'Áreas Atendidas',
    description: 'Cubrimos toda la región de la Bahía de San Francisco y áreas circundantes, ofreciendo servicio de transporte premium dondequiera que necesite ir.',
    cta: 'Llamar ahora',
    customDestination: {
      title: '¿Necesita un destino diferente?',
      description: 'Contáctenos para verificar disponibilidad en otras regiones de California.',
    },
    locations: {
      sf: { name: 'San Francisco', description: 'Servicio completo en toda la ciudad y alrededores del distrito financiero.' },
      napa: { name: 'Napa Valley', description: 'Tours exclusivos a las mejores bodegas de la región vinícola más famosa.' },
      sonoma: { name: 'Sonoma', description: 'Experiencias premium en las encantadoras bodegas del Condado de Sonoma.' },
      monterey: { name: 'Monterey', description: 'Viajes costeros con vistas impresionantes de la Pacific Coast Highway.' },
      tahoe: { name: 'Lake Tahoe', description: 'Transporte confortable a estaciones de esquí y destinos de ocio.' },
      silicon: { name: 'Silicon Valley', description: 'Servicio ejecutivo para empresas de tecnología y startups.' },
    },
  },
  contact: {
    label: 'Contacto',
    title: 'Póngase en Contacto',
    description: 'Solicite una cotización o haga su reserva. Rápido, fácil y seguro.',
    buttons: {
      online: 'Reservar Online',
      call: 'Llamar',
      whatsapp: 'WhatsApp',
    },
    response: 'Respuestas dentro de 15 minutos durante horario comercial',
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
      online: { title: 'Reservar Online', subtitle: 'Sistema Moovs' },
      whatsapp: { title: 'WhatsApp', subtitle: 'Respuesta rápida' },
      call: { title: 'Llamar Ahora', subtitle: '650-666-9333' },
    },
  },
  languages: {
    'pt-BR': 'PT',
    'en-US': 'EN',
    'es': 'ES',
  },
};
