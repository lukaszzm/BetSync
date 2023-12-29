import "@ui/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BetSync",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
