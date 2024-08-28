import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bike Rental System",
  description: "Bike Rental System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
