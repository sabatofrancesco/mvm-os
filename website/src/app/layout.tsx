import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata={
  title:{default:"MVM Packaging | Primary Packaging for Beauty Brands",template:"%s | MVM Packaging"},
  description:"Selected primary packaging and project support for beauty brands across skincare, lip care and colour cosmetics.",
  applicationName:"MVM Packaging",
  keywords:["beauty packaging","cosmetic packaging","primary packaging","skincare packaging","lip care packaging"],
  robots:{index:false,follow:false,nocache:true,googleBot:{index:false,follow:false,noimageindex:true}},
  openGraph:{title:"MVM Packaging | Primary Packaging for Beauty Brands",description:"Selected primary packaging and project support for beauty brands.",type:"website",siteName:"MVM Packaging"},
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
