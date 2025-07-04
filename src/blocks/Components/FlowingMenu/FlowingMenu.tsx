import React from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  title: string;
  description: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

interface FlowingMenuProps {
  items?: { link: string; title: string; description: string }[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

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
            <MenuItem
              key={idx}
              {...item}
              isActive={hoverIndex === idx}
              onHover={() => setHoverIndex(idx)}
              onLeave={() => setHoverIndex(null)}
            />
          ))}
        </nav>
      </div>
    </>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  description,
  isActive,
  onHover,
  onLeave,
}) => {
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  React.useEffect(() => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;

    const tl = gsap.timeline({ defaults: animationDefaults });

    if (isActive) {
      gsap.set(marqueeRef.current, { y: "101%" });
      gsap.set(marqueeInnerRef.current, { y: "-101%" });
      tl.to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
    } else {
      tl.to(marqueeRef.current, { y: "101%" }).to(
        marqueeInnerRef.current,
        { y: "-101%" },
        "<"
      );
    }
  }, [isActive]);

  return (
    <div
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[2vh] md:text-[4vh] hover:text-[#060010]"
        href="#"
        onClick={(e) => e.preventDefault()}
      >
        {title}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full flex" ref={marqueeInnerRef}>
          <div
            className={`flex items-center relative h-full will-change-transform ${
              isActive ? "animate-scroll-left" : "scroll-paused"
            }`}
          >
            <span className="text-[#060010] font-normal text-[2vh] md:text-[4vh] leading-[1.2] whitespace-nowrap px-[2vw]">
              {description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
