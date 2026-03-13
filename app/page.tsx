import { Hero } from "../components/Hero";
import { CapacityDashboard } from "../components/CapacityDashboard";
import { Infrastructure } from "../components/Infrastructure";
import { Why } from "../components/Why";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CapacityDashboard />
      <Infrastructure />
      <Why />
      <Contact />
      <Footer />
    </main>
  );
}
