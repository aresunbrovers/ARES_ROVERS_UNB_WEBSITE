import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  // Substitua pelo nome exato do seu repositório
  basePath: '/ARES_ROVERS_UNB_WEBSITE',
  assetPrefix: '/ARES_ROVERS_UNB_WEBSITE/',
  // Desabilita otimização de imagem, pois GitHub Pages não suporta o formato otimizado do Next
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;   

export default nextConfig;
