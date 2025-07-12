import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Footer from '../Components/Footer.tsx';
import Hero from '../Components/Hero.tsx';
import Innovation from '../Components/Innovation.tsx';
import Innovators from '../Components/Inovators.tsx';
import Navbar from '../Components/Navbar.tsx';
import Properties from '../Components/Properties.tsx';
import Purpose from '../Components/Purpose.tsx';
import TechStacksScroller from '../Components/ui/Slider.tsx';
import Venture from '../Components/Venture.tsx';
import Whatwedo from '../Components/Whatwedo.tsx';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100); // allow DOM render
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <Innovation />
      <TechStacksScroller />
      <Purpose />

      <div id="about">
        <Whatwedo />
      </div>

      <div id="pillars">
        <Properties />
      </div>

      <Innovators />
      <Venture />
      <Footer />
    </div>
  );
};

export default Home;
