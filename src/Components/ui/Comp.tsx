import type React from "react";

interface ComponentElements {
  title: React.ReactNode;
  imgUrl: string;
  p: React.ReactNode;
}

export const Component: React.FC<ComponentElements> = ({ title, imgUrl, p }) => {
  return (
    <div className="w-full h-full relative rounded-2xl flex flex-col items-center justify-start gap-2.5 flex-wrap gradient-border-inner overflow-clip">
      <div className="h-[303.8px] flex flex-col justify-start items-center text-center">
        {/* Title & Description */}
        <div className="h-[64px] mt-2 px-3">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold">
            {title}
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-base text-white font-normal mt-1">
            {p}
          </p>
        </div>

        {/* Image Block */}
        <div className="relative h-[183.38px] flex flex-col items-center -bottom-1/3">
          {/* Icon Circle */}
          <div className="absolute bottom-[83%] w-[90px] h-[90px] rounded-[29.5px] z-20 flex justify-center items-center bg-white/5 backdrop-blur-2xl mt-4">
            <img
              className="w-[54.84px] h-[54.84px]"
              src={imgUrl}
              alt="component-icon"
            />
          </div>

          {/* Expanding Hover Box */}
          <div className="absolute bottom-[25%] w-[185.06px] h-[160.63px] rounded-[12px] bg-white/5 hover:w-[290px] transition-all duration-500 ease-in-out z-10" />
        </div>
      </div>

      {/* Decorative Gradient Image */}
      <div className="absolute -bottom-40 sm:-bottom-60">
        <img src="/gradient.png" alt="gradient" />
      </div>
    </div>
  );
};
