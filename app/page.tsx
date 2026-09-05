import Navbar from "@/components/navbar";
import Hero from "@/section/hero";
import BrandMarquee from "@/components/brand-marquee";
import Services from "@/section/Services";
import Process from "@/section/Process";
import Gallery from "@/section/gallery";
import RecoveryCTA from "@/section/RecoveryCTA";
import SiteBackground from "@/components/site-background";
import Review from "@/section/review";
import AboutDoc from "@/section/aboutdoc";
import Location from "@/section/Location";
import FAQ from "@/section/FAQ";
import Contact from "@/section/Contact";
export default function Home() {
  return (
    <main>
      <SiteBackground />

      <Navbar />

      <Hero />

      <BrandMarquee />

      <Services />
      <Gallery />

      <Process />

      <RecoveryCTA id="recovery" />

       <Review />


       <RecoveryCTA id="recovery-2" />

       

       <AboutDoc />
       <BrandMarquee />


       <Location />

       <FAQ />
       <Contact />
    </main>
  );
}