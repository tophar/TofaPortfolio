import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
const vercelHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteOrigin =
  configuredOrigin ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000");
const title = "Tofa David — Product Design & Strategy";
const description =
  "Product design leader helping teams turn complex ideas into useful, adoptable products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title,
  description,
  icons: {
    icon: "/tofa-logo.png",
    shortcut: "/tofa-logo.png",
    apple: "/tofa-logo.png",
  },
  openGraph: { title, description, type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('tofa_theme');
    var isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = (stored === 'light' || stored === 'dark') ? stored : (isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

