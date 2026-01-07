import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // ⬅️ PENTING

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
                https://www.googletagmanager.com
                https://www.google-analytics.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: blob:
                https://www.google-analytics.com;
              connect-src 'self' blob:
                https://www.google-analytics.com
                https://analytics.google.com;
              worker-src 'self' blob:;
              frame-src 'self'
                https://www.google.com
                https://maps.google.com;
              frame-ancestors 'none';
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
