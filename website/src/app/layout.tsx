import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MVM | Primary Packaging for Beauty Brands",
  description: "MVM helps beauty brands develop, source and deliver exceptional primary packaging.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
