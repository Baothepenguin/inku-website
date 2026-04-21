/** @type {import('next').NextConfig} */
const nextConfig = {
  // MDX loader disabled for now; Next 16 + Turbopack breaks serialization of
  // @next/mdx loader options. All current content authored as TSX. Re-enable
  // once @next/mdx ships a Turbopack-compatible release (or swap to
  // next-mdx-remote if MDX authoring is needed sooner).
  pageExtensions: ["ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "api.qrserver.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/download",
        destination:
          "https://apps.apple.com/app/id0000000000?mt=8&utm_source=web&utm_medium=download&utm_campaign=inku-site",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
