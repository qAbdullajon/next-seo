import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "My Awesome Blog",
    template: "%s - My Awesome Blog",
  },
  description: "Come and read my awesome articles!",
  verification: {
    google: "bD6I35SSxW4Rbx-GMqSHdA8ZkyZVKU6A_QsLNWOFEBM",
  },
  openGraph: {
    title: "My Awesome Blog",
    description: "Come and read my awesome articles!",
    type: "website",
    url: "https://next-seo-delta.vercel.app/",
    images: [
      {
        url: "https://next-seo-delta.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "My Awesome Blog Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Awesome Blog",
    description: "Come and read my awesome articles!",
    images: [
      "https://next-seo-delta.vercel.app/opengraph-image.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
