import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const securityHeaders: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

const cspHeader =
  "default-src 'self'; " +
  "script-src 'self'; " +
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
  "font-src 'self' https://fonts.gstatic.com; " +
  "img-src 'self' https://static.tildacdn.one data:; " +
  "connect-src 'self' https://translate.googleapis.com; " +
  "frame-ancestors 'none'; " +
  "base-uri 'self'; " +
  "form-action 'self';";

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'security-headers',
      configureServer(server) {
        // Dev server: security headers only (no CSP — it blocks HMR)
        server.middlewares.use((_req, res, next) => {
          for (const [key, value] of Object.entries(securityHeaders)) {
            res.setHeader(key, value);
          }
          next();
        });
      },
      configurePreviewServer(server) {
        // Preview / production: full security headers + CSP
        server.middlewares.use((_req, res, next) => {
          for (const [key, value] of Object.entries(securityHeaders)) {
            res.setHeader(key, value);
          }
          res.setHeader('Content-Security-Policy', cspHeader);
          next();
        });
      },
    },
  ],
  server: {
    cors: false,
    allowedHosts: ['localhost'],
  },
});
