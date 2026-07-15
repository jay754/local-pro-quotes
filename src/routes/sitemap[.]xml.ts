import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://gethomequotes.ca";
const LAST_MODIFIED = "2026-07-15";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },

          { path: "/gutter-cleaning", changefreq: "weekly", priority: "0.9" },
          { path: "/gutter-cleaning/toronto", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/mississauga", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/markham", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/north-york", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/scarborough", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/etobicoke", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/vaughan", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/richmond-hill", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/brampton", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/pickering", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/ajax", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/whitby", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/oshawa", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/oakville", changefreq: "weekly", priority: "0.85" },
          { path: "/gutter-cleaning/burlington", changefreq: "weekly", priority: "0.85" },

          { path: "/pressure-washing", changefreq: "weekly", priority: "0.9" },
          { path: "/pressure-washing/toronto", changefreq: "weekly", priority: "0.85" },
          { path: "/pressure-washing/mississauga", changefreq: "weekly", priority: "0.85" },
          { path: "/pressure-washing/markham", changefreq: "weekly", priority: "0.85" },

          { path: "/junk-removal", changefreq: "weekly", priority: "0.9" },
          { path: "/junk-removal/toronto", changefreq: "weekly", priority: "0.85" },
          { path: "/junk-removal/mississauga", changefreq: "weekly", priority: "0.85" },
          { path: "/junk-removal/markham", changefreq: "weekly", priority: "0.85" },
        ];

        const urls = entries
          .map(
            (entry) => `  <url>
    <loc>${BASE_URL}${entry.path}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});