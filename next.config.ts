import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Active le mode strict pour éviter les erreurs silencieuses
  // i18n: {
  //   locales: ['fr', 'en'], // Langues disponibles
  //   defaultLocale: 'fr', // Langue par défaut
  // },
  images: {
    domains: ['example.com'], // Ajoute les domaines autorisés pour charger des images
  },
  compiler: {
    styledComponents: true, // Active le support de Styled Components (si utilisé)
  },
};

export default nextConfig;
