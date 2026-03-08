import { Hero } from "../components/Hero";
import { Infrastructure } from "../components/Infrastructure";
import { Why } from "../components/Why";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <main className="pt-20">
      <Hero />
      <Infrastructure />
      <Why />
      <Contact />
      <Footer />
    </main>
  );
}
