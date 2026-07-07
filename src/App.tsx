/**
 * Single scrolling landing page. One component per section, top to bottom.
 */
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import VideoSection from "./components/VideoSection";
import WhatYouGet from "./components/WhatYouGet";
import SeeItLive from "./components/SeeItLive";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Problem />
        <VideoSection />
        <WhatYouGet />
        <SeeItLive />
        <HowItWorks />
        <About />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
