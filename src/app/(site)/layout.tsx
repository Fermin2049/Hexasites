import type { Metadata } from "next";
import { siteMetadata } from "./seo.config";

export const metadata: Metadata = siteMetadata;

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: wrap pages with shared layout (header, footer, providers).
  return <>{children}</>;
}
