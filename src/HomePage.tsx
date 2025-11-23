import "./index.css";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { AboutSection } from "./components/AboutSection";
import { SDBSection } from "./components/SFBSection";
import { FeedbackSection } from "./components/FeedbackSection";
import { ContactSection } from "./components/ContactSection";

export function HomePage() {
  return (
    <div className="w-full h-full">
      <header className="bg-[#f3ffea]">
        <Header />
        <Hero />
      </header>
      <main className="bg-[#f9fafb]">
        <AboutSection />
      </main>
      <section className="bg-[#2e7d32]">
        <SDBSection />
      </section>
      <section className="bg-[#2e7d32]">
        <FeedbackSection/>
      </section>
      <section>
        <ContactSection/>
      </section>
    </div>
  );
}
