import "@ui/styles/globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "BetSync",
  description: "Elevate your betting game with BetSync",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
