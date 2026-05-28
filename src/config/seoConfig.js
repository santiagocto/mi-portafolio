/**
 * Configuración centralizada de SEO para el portafolio
 * Define todos los meta tags, estructuras de datos y configuraciones SEO
 */

export const SEO_CONFIG = {
  // Datos generales del sitio
  site: {
    name: 'Santiago Castillo - Full Stack Developer & Cloud Engineer',
    shortName: 'Santiago Castillo',
    description: 'Portafolio profesional de Santiago Castillo. Full Stack Developer especializado en Cloud Engineering, React, Node.js y AWS.',
    url: 'https://santiagocto.vercel.app',
    locale: 'es_ES',
    language: 'es',
    email: 'contacto@santiagocdev.com',
    phone: '+57XXXXXXXXX'
  },

  // Redes sociales
  social: {
    linkedin: 'https://linkedin.com/in/santiagocdev',
    github: 'https://github.com/santiagocdev',
    twitter: 'https://twitter.com/santiagocdev',
    instagram: 'https://instagram.com/santiagocdev'
  },

  // Keywords principales
  keywords: {
    main: ['Full Stack Developer', 'Cloud Engineer', 'React Developer', 'Node.js', 'TypeScript', 'AWS'],
    secondary: ['Web Developer', 'Frontend', 'Backend', 'Cloud Computing', 'Desarrollo Web', 'Ingeniería de Software'],
    technical: ['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'JavaScript', 'AWS', 'Docker', 'Microservices', 'SQL', 'NoSQL']
  },

  // Páginas y secciones con sus meta tags específicos
  pages: {
    home: {
      title: 'Santiago Castillo | Full Stack Developer & Cloud Engineer | Portfolio',
      description: 'Portafolio de Santiago Castillo, Full Stack Developer especializado en Cloud Engineering. Experto en React, Node.js, TypeScript y AWS. Disponible para proyectos y colaboraciones.',
      og: {
        title: 'Santiago Castillo | Full Stack Developer & Cloud Engineer',
        description: 'Portafolio profesional de Santiago Castillo. Full Stack Developer especializado en Cloud Engineering.',
        image: 'https://santiagocdev.vercel.app/og-image.png',
        url: 'https://santiagocdev.vercel.app/'
      }
    },
    hero: {
      title: 'Inicio | Santiago Castillo Developer',
      description: 'Bienvenido al portafolio de Santiago Castillo. Ingeniero de Software especializado en Full Stack Development y Cloud Engineering.',
    },
    about: {
      title: 'Sobre mí | Santiago Castillo - Full Stack Developer',
      description: 'Conoce a Santiago Castillo: Full Stack Developer y Cloud Engineer. Experiencia en React, Node.js, TypeScript, AWS y arquitecturas de software escalables.',
    },
    projects: {
      title: 'Proyectos | Santiago Castillo - Portfolio',
      description: 'Proyectos desarrollados por Santiago Castillo. Casos de éxito en React, Node.js, TypeScript y soluciones en la nube.',
    },
    contact: {
      title: 'Contacto | Santiago Castillo - Full Stack Developer',
      description: 'Contacta con Santiago Castillo. Disponible para trabajos freelance, consultoría y proyectos de largo plazo.',
    }
  },

  // Estructura de datos JSON-LD
  schemas: {
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Santiago Castillo',
      'url': 'https://santiagocdev.vercel.app',
      'email': 'contacto@santiagocdev.com',
      'jobTitle': 'Full Stack Developer & Cloud Engineer',
      'image': 'https://santiagocdev.vercel.app/headicon.png',
      'sameAs': [
        'https://linkedin.com/in/santiagocdev',
        'https://github.com/santiagocdev',
        'https://twitter.com/santiagocdev'
      ],
      'knowsAbout': [
        'Full Stack Development',
        'Cloud Engineering',
        'React',
        'Node.js',
        'TypeScript',
        'AWS',
        'Docker',
        'Microservices',
        'Agile'
      ]
    },

    organization: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Santiago Castillo - Portfolio',
      'url': 'https://santiagocdev.vercel.app',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': 'https://santiagocdev.vercel.app/?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  },

  // Configuración de Open Graph
  openGraph: {
    type: 'website',
    siteName: 'Santiago Castillo - Full Stack Developer',
    locale: 'es_ES'
  },

  // Configuración de Twitter Card
  twitter: {
    cardType: 'summary_large_image',
    creator: '@santiagocdev',
    site: '@santiagocdev'
  },

  // Tecnologías destacadas para SEO
  technologies: [
    'React',
    'Next.js',
    'React Native',
    'Vue.js',
    'Node.js',
    'Express.js',
    'Python',
    'Django',
    'FastAPI',
    'TypeScript',
    'JavaScript',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'Docker',
    'Kubernetes',
    'AWS',
    'Azure',
    'Google Cloud',
    'CI/CD',
    'Microservices',
    'REST API',
    'GraphQL',
    'WebSocket',
    'TailwindCSS',
    'Material-UI',
    'Git',
    'GitHub',
    'Agile',
    'Scrum'
  ]
};

/**
 * Función para construir meta tags dinámicamente
 */
export const buildPageMeta = (pageKey) => {
  const pageData = SEO_CONFIG.pages[pageKey];
  if (!pageData) return SEO_CONFIG.pages.home;
  
  return {
    title: pageData.title,
    description: pageData.description,
    ogTitle: pageData.og?.title || pageData.title,
    ogDescription: pageData.og?.description || pageData.description,
    ogImage: pageData.og?.image || 'https://santiagocdev.vercel.app/og-image.png',
    canonical: pageData.og?.url || 'https://santiagocdev.vercel.app/'
  };
};

/**
 * Función para construir keywords para un contexto específico
 */
export const buildKeywords = () => {
  return [
    ...SEO_CONFIG.keywords.main,
    ...SEO_CONFIG.keywords.secondary,
    ...SEO_CONFIG.keywords.technical
  ].join(', ');
};
