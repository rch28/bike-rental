import type { Metadata } from "next";
import "./globals.css";
import { Style } from "@/lib/Style";
import Footer from "@/components/global/Footer";
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
      <body className={Style.bgPrimary}>
        <div className="flex flex-col min-h-screen  ">
          <nav>Navbar</nav>
          <main className="flex-1">{children}</main>
          <footer className={`fixed bottom-0 left-0 w-full border-t border-neutral-400 ${Style.bgPrimary} p-2`}><Footer/></footer>
        </div>
      </body>
    </html>
  );
}
