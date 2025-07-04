import React, { useState } from "react";

interface CardData {
  id: number;
  imgUrl: string;
  content: string;
}

interface CardProps {
  data: CardData[];
}

const Card: React.FC<CardProps> = ({ data }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  return (
    <div className="w-full px-4">
      <div className="flex flex-col md:flex-row gap-5">
        {data.map((card) => {
          const isActive = activeCardIndex === card.id;

          return (
            <div key={card.id} className="flex-1 h-[200px] flex-shrink-0">
              <button
                type="button"
                onClick={() =>
                  setActiveCardIndex(isActive ? null : card.id)
                }
                className="relative h-full w-full overflow-hidden rounded-lg shadow-md group cursor-pointer text-left"
              >
                <img
                  src={card.imgUrl}
                  alt={`Card ${card.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-black/80 text-white p-4 transition-transform duration-300 transform ${
                    isActive ? "translate-y-0" : "translate-y-full"
                  } group-hover:translate-y-0`}
                >
                  <p className="text-sm">{card.content}</p>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
