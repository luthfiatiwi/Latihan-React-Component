import Features from "./components/sections/Features";
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
    </section>
  );
}

