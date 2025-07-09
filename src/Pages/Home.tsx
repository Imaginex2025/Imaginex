import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Innovation from '../Components/Innovation';
import Innovators from '../Components/Inovators';
import Navbar from '../Components/Navbar';
import Properties from '../Components/Properties';
import Purpose from '../Components/Purpose';
import TechStacksScroller from '../Components/ui/Slider';
import Venture from '../Components/Venture';
import Whatwedo from '../Components/Whatwedo';

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
