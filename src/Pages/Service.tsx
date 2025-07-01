import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Technology Impact Assessment",
    description:
      "We evaluate how your technology is performing within the broader innovation space and provide insights for enhancing its value and impact.",
  },
  {
    title: "Competitive IP Benchmarking",
    description:
      "Assess your IP portfolio against key competitors to discover areas of strength, weakness, and partnership or acquisition opportunities.",
  },
  {
    title: "R&D Direction Planning",
    description:
      "We help organizations identify where to invest next through data-driven insights, ensuring that future developments align with market and technology gaps.",
  },
  {
    title: "Patent Landscape Studies",
    description:
      "Visualize the patent activity in your sector to spot trends, avoid overlap, and guide both innovation and investment decisions.",
  },
  {
    title: "Strategic Competitor Insights",
    description:
      "Our competitive intelligence reports highlight the IP strategies of rivals, helping you align, adapt, or counter strategically.",
  },
  {
    title: "Whitespace Opportunity Mapping",
    description:
      "Discover unpatented or underexplored areas within your domain—an ideal tool for guiding long-term R&D planning.",
  },
];

export const IPStrategyProcess: React.FC = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate vertical line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom bottom-=100",
            scrub: true,
          },
        }
      );

      // Animate step content except for the first two
      stepRefs.current.forEach((el, index) => {
        if (!el || index < 2) return;

        const dot = el.querySelector(".ip-dot");
        const content = el.querySelector(".ip-content");

        if (dot && content) {
          gsap.set(content, { opacity: 0, y: 40 });

          gsap.to(content, {
            opacity: 1,
            y: 0,
            duration: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: el,
                start: "top center+=130",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <section
        ref={sectionRef}
        className="text-white py-20 px-5 relative overflow-hidden"
      >

              {/* Glows */}
      <div className="absolute -top-28 right-0 w-96 h-auto opacity-100 pointer-events-none">
        <div className="w-full h-96 bg-gradient-to-bl from-purple-500/30 via-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-80 h-auto opacity-100 pointer-events-none">
        <div className="w-full h-80 bg-gradient-to-tr from-purple-500/30 via-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>
            <div className="absolute bottom-200 left-40 w-80 h-auto opacity-100 pointer-events-none">
        <div className="w-full h-80 bg-gradient-to-tr from-purple-500/30 via-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>
                  <div className="absolute bottom-100 right-40 w-80 h-auto opacity-100 pointer-events-none">
        <div className="w-full h-80 bg-gradient-to-tr from-purple-500/30 via-purple-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold ip-title bg-gradient-to-br from-white via-white/90 to-[#9b2f9f] text-transparent bg-clip-text">
            Patent Tech Consulting
          </h2>
        </div>

        {/* Timeline & Steps */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div
            ref={lineRef}
            className="absolute top-0 left-1/2 w-1 bg-white rounded-full transform -translate-x-1/2 h-full z-10"
          ></div>

          {/* Step Blocks */}
          <div className="flex flex-col gap-28">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) stepRefs.current[index] = el;
                }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "flex-row text-left"
                    : "flex-row-reverse text-left"
                } items-center justify-between w-full`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="ip-dot w-4 h-4 bg-purple-500 rounded-full relative">
                    <span className="absolute w-8 h-8 border-2 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`w-1/3 md:w-1/3 ip-content will-change-transform ${
                    index < 2 ? "opacity-100 translate-y-0" : ""
                  }`}
                >
                  <h3 className="text-sm md:text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-white/75 leading-tight text-sm text-justify ">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
