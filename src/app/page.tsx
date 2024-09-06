import { AboutUs } from "@/components/global/AboutUs";
import Layout from "@/components/global/Layout";
import { Process } from "@/components/global/Process";
import { RentBikeForm } from "@/components/global/RentBikeForm";
import { FeaturedBikes } from "@/components/Home/FeaturedBikes";
import { Hero } from "@/components/Home/Hero";
import { ServicesInfo } from "@/components/Home/ServicesInfo";
export default function Home() {
  return (
    <main className="relative">
      {/* Hero component */}
      <Hero />

      <Layout>

        {/* Serach Bike form */}
        <RentBikeForm />

        {/* Services info */}

        <ServicesInfo/>

        {/* About us */}
        <AboutUs/>

        {/* Featured Bikes */}
        <FeaturedBikes/>



      </Layout>
      {/* How It works */}
      <Process/>
    </main>
  );
}
