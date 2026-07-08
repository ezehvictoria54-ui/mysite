/**
 * Single scrolling landing page. One component per section, top to bottom.
 */
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import VideoSection from "./components/VideoSection";
import WhatYouGet from "./components/WhatYouGet";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <VideoSection />
        <WhatYouGet />
        <HowItWorks />
        <About />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
