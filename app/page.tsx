import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import WhyNoble from "@/components/WhyNoble";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import QuoteForm from "@/components/QuoteForm";
import Faq from "@/components/Faq";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";
import StickyCtaBar from "@/components/StickyCtaBar";

export default function Home() {
  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      <Nav />
      <Hero />
      <SocialProof />
      <Services />
      <WhyNoble />
      <Process />
      <Gallery />
      <Testimonials />
      <Team />
      <QuoteForm />
      <Faq />
      <PreFooterCta />
      <Footer />
      <StickyCtaBar />
    </main>
  );
}
