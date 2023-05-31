export const gtmVirtualPageView = () => {
  window.dataLayer &&
    Array.isArray(window.dataLayer) &&
    window.dataLayer.push({
      event: 'cookies-aceptadas',
    });
};

export const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);
