import { AboutUs } from "@/components/global/AboutUs";
import FAQComponent from "@/components/global/FQAComponent";
import Layout from "@/components/global/Layout";
import { Process } from "@/components/global/Process";
import { FeaturedBikes } from "@/components/Home/FeaturedBikes";
import { Hero } from "@/components/Home/Hero";
import { OurBlog } from "@/components/Home/OurBlog";
import { ServicesInfo } from "@/components/Home/ServicesInfo";
import { RentSearchFormProvider } from "@/BikeRent/components/RentSearchFormProvider";
export default function Home() {
  return (
    <main className="relative">
      {/* Hero component */}
      <Hero />

      <Layout>
        {/* Serach Bike form */}
        <RentSearchFormProvider />

        {/* Services info */}

        <ServicesInfo />

        {/* About us */}
        <div className="lg:mt-40">
          <AboutUs />
        </div>

        {/* Featured Bikes */}
        <FeaturedBikes />
      </Layout>
      {/* How It works */}
      <Process />

      <Layout>
        {/* FQA Section */}
        <FAQComponent />

        {/* Our Blog section */}
        <OurBlog />
      </Layout>
    </main>
  );
}
