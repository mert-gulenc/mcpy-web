import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import RoutesBand from "@/components/landing/RoutesBand";
import Scrollytelling from "@/components/landing/Scrollytelling";
import ModelsMarquee from "@/components/landing/ModelsMarquee";
import ConnectorsGrid from "@/components/landing/ConnectorsGrid";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <RoutesBand />
      <Scrollytelling />
      <ModelsMarquee />
      <ConnectorsGrid />
      <CTA />
      <Footer />
    </>
  );
}
