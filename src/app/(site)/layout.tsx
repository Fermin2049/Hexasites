import type { Metadata } from "next";
import seo from "./seo.config";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: seo.openGraph,
  twitter: seo.twitter,
  alternates: {
    canonical: seo.canonical,
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
