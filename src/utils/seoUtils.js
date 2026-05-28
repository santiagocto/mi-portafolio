/**
 * Utilidad para manejar dinámicamente los meta tags en la SPA
 * Detecta cambios de hash (#) y actualiza SEO en consecuencia
 */

import { SEO_CONFIG, buildPageMeta } from './seoConfig';

export const handleSectionChange = (hash) => {
  const section = hash.replace('#', '');
  let metaData = {};

  // Map de secciones a páginas
  const sectionMap = {
    'inicio': 'hero',
    'sobre-mi': 'about',
    'proyectos': 'projects',
    'contacto': 'contact'
  };

  const pageKey = sectionMap[section] || 'home';
  metaData = buildPageMeta(pageKey);

  updateDocumentMeta(metaData);
};

/**
 * Actualiza los meta tags del documento
 */
export const updateDocumentMeta = (meta) => {
  // Title
  if (meta.title) {
    document.title = meta.title;
  }

  // Description
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag && meta.description) {
    descriptionTag.setAttribute('content', meta.description);
  }

  // Open Graph
  updateMetaProperty('og:title', meta.ogTitle);
  updateMetaProperty('og:description', meta.ogDescription);
  updateMetaProperty('og:image', meta.ogImage);

  // Canonical
  if (meta.canonical) {
    updateCanonical(meta.canonical);
  }
};

/**
 * Actualiza una propiedad de meta tag
 */
const updateMetaProperty = (property, content) => {
  if (!content) return;

  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/**
 * Actualiza el canonical URL
 */
const updateCanonical = (url) => {
  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement('link');
    canonicalTag.rel = 'canonical';
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.href = url;
};

/**
 * Inyecta JSON-LD schema en el documento
 */
export const injectJsonLd = (schema) => {
  // Remover scripts JSON-LD anteriores (exceptuando el del inicio)
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach((script, index) => {
    // Mantener solo el primero (Person + WebSite)
    if (index > 1) {
      script.remove();
    }
  });

  // Agregar nuevo schema
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Precargar imágenes importantes para SEO
 */
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

export default {
  handleSectionChange,
  updateDocumentMeta,
  injectJsonLd,
  preloadImages
};
