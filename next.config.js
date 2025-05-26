/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static Export aktivieren
  output: 'export',
  
  // Trailing Slash für bessere Kompatibilität
  trailingSlash: true,
  
  // Images unoptimized (da kein Server verfügbar)
  images: {
    unoptimized: true
  },
  
  // Experimentelle Features - optimizeCss entfernt wegen critters Problem
  experimental: {
    optimizePackageImports: ['gsap', 'swiper'],
  },
  
  // Webpack-Optimierungen
  webpack: (config, { dev, isServer }) => {
    // Video-Dateien als statische Assets behandeln
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name]-[hash].[ext]',
        },
      },
    });
    
    return config;
  },
  
  // Kompression
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;