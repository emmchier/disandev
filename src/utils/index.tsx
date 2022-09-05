export const gtmVirtualPageView = () => {
  window.dataLayer &&
    Array.isArray(window.dataLayer) &&
    window.dataLayer.push({
      event: 'cookies-aceptadas',
    });
  console.log('aceptadas');
};
