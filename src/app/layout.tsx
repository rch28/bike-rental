import type { Metadata } from "next";
import "./globals.css";
import { Style } from "@/lib/Style";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
export const metadata: Metadata = {
  title: "Bike Rental System",
  description: "Bike Rental System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const setInitialTheme = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  })();
`;
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className={Style.bgPrimary}>
        <div className="flex flex-col min-h-screen  ">
          <Navbar/>
          <main className="flex-1">{children}</main>
          <footer className={`fixed bottom-0 left-0 w-full border-t border-neutral-400 dark:border-neutral-700 ${Style.bgPrimary} p-2`}><Footer/></footer>
        </div>
      </body>
    </html>
  );
}
