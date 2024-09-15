import type { Metadata } from "next";
import { headers } from 'next/headers';
import "./globals.css";
import { Style } from "@/lib/Style";
import Footer from "@/components/global/Footer";
import { Toaster } from "react-hot-toast";
import Main from "./Main";
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
const pathname = headers().get('x-next-pathname');

console.log("pathname", pathname);
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body className={Style.bgPrimary}>
      <Toaster position="top-center" reverseOrder={false} />
        <div className="flex flex-col min-h-screen  ">
          <Main>
            {children}
          </Main>
          <footer className={` w-full border-t border-neutral-400 dark:border-neutral-700 ${Style.bgPrimary} p-2`}><Footer/></footer>
        </div>
      </body>
    </html>
  );
}
