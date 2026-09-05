import Navbar from "@/components/navbar";
import Hero from "@/section/hero";
import BrandMarquee from "@/components/brand-marquee";
import Services from "@/section/Services";
import Process from "@/section/Process";
import Gallery from "@/section/gallery";
import RecoveryCTA from "@/section/RecoveryCTA";
import Review from "@/section/review";
import AboutDoc from "@/section/aboutdoc";
import Location from "@/section/Location";
import FAQ from "@/section/FAQ";
import Contact from "@/section/Contact";
export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <BrandMarquee />

      <Services />
      <Gallery />

      <Process />

      <RecoveryCTA id="recovery" bgImage="/service5.png" />

       <Review />


       <RecoveryCTA id="recovery-2" bgImage="/service6.png" />

       

       <AboutDoc />
       <BrandMarquee />


       <Location />

       <FAQ />
       <Contact />
    </main>
  );
}