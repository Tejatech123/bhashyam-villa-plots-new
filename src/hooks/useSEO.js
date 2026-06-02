import { useEffect } from 'react';

export function useSEO({ title, description, canonicalUrl, ogTitle, ogDescription }) {
  useEffect(() => {
    // Update Document Title
    if (title) {
      document.title = title;
    }

    // Update Document Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description) {
      metaDescription.setAttribute('content', description);
    }

    // Update Canonical URL Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    if (canonicalUrl) {
      canonical.setAttribute('href', canonicalUrl);
    }

    // Update Open Graph (OG) Title
    let ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag && ogTitle) {
      ogTitleTag.setAttribute('content', ogTitle);
    }

    // Update Open Graph (OG) Description
    let ogDescTag = document.querySelector('meta[property="og:description"]');
    if (ogDescTag && ogDescription) {
      ogDescTag.setAttribute('content', ogDescription);
    }

    // Update Open Graph (OG) URL
    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag && canonicalUrl) {
      ogUrlTag.setAttribute('content', canonicalUrl);
    }

    // Update Twitter Title
    let twTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twTitleTag && ogTitle) {
      twTitleTag.setAttribute('content', ogTitle);
    }

    // Update Twitter Description
    let twDescTag = document.querySelector('meta[name="twitter:description"]');
    if (twDescTag && ogDescription) {
      twDescTag.setAttribute('content', ogDescription);
    }
  }, [title, description, canonicalUrl, ogTitle, ogDescription]);
}
