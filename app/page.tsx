import { Hero } from "../components/Hero";
import { Infrastructure } from "../components/Infrastructure";
import { Why } from "../components/Why";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hidden form for Netlify Forms discovery - notifications go to alif@cryodc.io (set in Netlify dashboard) */}
      <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" />
        <input type="text" name="company" />
        <input type="text" name="interest" />
      </form>
      <Hero />
      <Infrastructure />
      <Why />
      <Contact />
      <Footer />
    </main>
  );
}
