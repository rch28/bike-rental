import Footer from "@/components/global/Footer";
import Layout from "@/components/global/Layout";
import Navbar from "@/components/global/Navbar";
import { Style } from "@/lib/Style";
const Main = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <>
        <Navbar />
        <div className="h-3 w-full bg-primary"></div>
        <main className="flex-1">{children}</main>
        <footer
          className={` w-full border-t border-neutral-400 dark:border-neutral-700 ${Style.bgPrimary} p-2`}
        >
          <Layout>
            <Footer />
          </Layout>
        </footer>
      </>
    </div>
  );
};

export default Main;
