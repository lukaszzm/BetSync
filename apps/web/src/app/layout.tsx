import "@ui/styles/globals.css";
import { Metadata } from "next";
import Providers from "./providers";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "BetSync",
  description: "Elevate your betting game with BetSync",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
