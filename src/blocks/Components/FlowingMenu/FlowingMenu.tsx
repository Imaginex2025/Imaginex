/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  link: string;
  title: string;
  description: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <>
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(100vw); }
          to { transform: translateX(-100%); }
        }
        .animate-scroll-left {
          animation: scroll-left 8s linear infinite;
        }
        .scroll-paused {
          animation-play-state: paused;
          transform: translateX(100vw);
        }
      `}</style>
      <div className="w-full h-full overflow-hidden">
        <nav className="flex flex-col h-full m-0 p-0">
          {items.map((item, idx) => (
            <MenuItem key={idx} {...item} />
          ))}
        </nav>
      </div>
    </>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, title, description }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number,
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    
    setIsHovered(true);
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    
    setIsHovered(false);
    
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height,
    );

    const tl = gsap.timeline({ defaults: animationDefaults }) as TimelineMax;
    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }).to(
      marqueeInnerRef.current,
      { y: edge === "top" ? "101%" : "-101%" },
    );
  };

  const singleLineContent = React.useMemo(() => {
    return (
      <span className="text-[#060010] font-normal text-[4vh] leading-[1.2] whitespace-nowrap px-[2vw]">
        {description}
      </span>
    );
  }, [description]);

  return (
    <div
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]"
      ref={itemRef}
    >
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[4vh] hover:text-[#060010] focus:text-white focus-visible:text-[#060010]"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full flex" ref={marqueeInnerRef}>
          <div className={`flex items-center relative h-full will-change-transform ${isHovered ? 'animate-scroll-left' : 'scroll-paused'}`}>
            {singleLineContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;

// Example usage:
// const menuItems = [
//   {
//     link: "/home",
//     title: "Home",
//     description: "Welcome to our homepage - discover our latest updates"
//   },
//   {
//     link: "/about",
//     title: "About",
//     description: "Learn more about our company and mission"
//   },
//   {
//     link: "/services",
//     title: "Services",
//     description: "Explore our comprehensive range of professional services"
//   },
//   {
//     link: "/contact",
//     title: "Contact",
//     description: "Get in touch with our team for any inquiries"
//   }
// ];

// <FlowingMenu items={menuItems} />

// Note: No Tailwind config needed - CSS keyframes are included in the component
// The component now includes inline styles for the scroll animation