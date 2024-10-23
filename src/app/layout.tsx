import Adsense from "@/components/Adsense/Adsense";
import Providers from "@/lib/Providers";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cleano",
  description: "Cleaning Service Provider",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <Adsense />
        </head>
        <body>
          <Toaster />
          {children}
        </body>
      </html>
    </Providers>
  );
}
