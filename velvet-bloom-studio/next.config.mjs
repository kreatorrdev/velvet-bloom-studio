/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['localhost', '127.0.0.1'],
  // Keep static generation sequential on Windows to avoid concurrent mkdir races.
  experimental: { cpus: 1, staticGenerationMaxConcurrency: 1 },
  turbopack: {
    rules: {
      '*.css': { loaders: ['@tailwindcss/turbopack'], as: '*.css' },
    },
  },
  webpack(config) {
    // Extend Next's existing CSS pipeline without replacing its CSS handling.
    // This installed Tailwind package implements the webpack loader API too.
    function addTailwind(rules) {
      for (const rule of rules) {
        if (!rule || typeof rule !== 'object') continue;
        if (rule.oneOf) addTailwind(rule.oneOf);
        if (rule.rules) addTailwind(rule.rules);
        if (Array.isArray(rule.use) && rule.use.some((entry) =>
          typeof entry === 'object' && entry?.loader?.includes('postcss-loader')
        )) {
          rule.use.push({ loader: '@tailwindcss/turbopack' });
        }
      }
    }
    addTailwind(config.module.rules);
    return config;
  },
};

export default nextConfig;
