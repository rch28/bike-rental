import Layout from "@/components/global/Layout";
import { RentBikeForm } from "@/components/global/RentBikeForm";
import { Hero } from "@/components/Home/Hero";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero component */}
      <Hero />

      <Layout>
        <RentBikeForm />
      </Layout>
    </main>
  );
}
