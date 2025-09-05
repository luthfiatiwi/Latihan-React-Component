import CTA from "./components/sections/CTA";
import Features from "./components/sections/Features";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";

export default function App() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Header />
      <Features />
      <CTA />
      <Footer />
    </section>
  );
}

