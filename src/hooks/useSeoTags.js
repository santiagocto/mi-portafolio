/**
 * Hook para manejar dinámicamente los meta tags del documento
 * Útil para aplicaciones React SPA (Single Page Application)
 */

export const useMetaTags = (meta) => {
  useEffect(() => {
    // Actualizar o crear title
    if (meta.title) {
      document.title = meta.title;
    }

    // Actualizar o crear description
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag && meta.description) {
      descriptionTag.setAttribute('content', meta.description);
    }

    // Actualizar Open Graph tags
    if (meta.ogTitle) {
      updateMetaTag('og:title', meta.ogTitle);
    }
    if (meta.ogDescription) {
      updateMetaTag('og:description', meta.ogDescription);
    }
    if (meta.ogImage) {
      updateMetaTag('og:image', meta.ogImage);
    }

    // Canonical URL
    if (meta.canonical) {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.rel = 'canonical';
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.href = meta.canonical;
    }
  }, [meta]);
};

/**
 * Función auxiliar para actualizar o crear meta tags
 */
const updateMetaTag = (property, content) => {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

/**
 * Hook para manejar Structured Data (JSON-LD)
 */
export const useStructuredData = (data) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);
};
