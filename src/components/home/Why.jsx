import React from "react";

const Why = () => {
    const featureCards = [
  {
    id: 1,
    emoji: "💭",
    title: "Share Your Thoughts",
    description: "Express and share what motivates you the most and encourage others as well."
  },
  {
    id: 2,
    emoji: "🤝",
    title: "Connect Together",
    description: "Build connection with others by commenting liking and sharing similar mindsets"
  },
  {
    id: 3,
    emoji: "🎯",
    title: "Target Your Goals",
    description: "Track and target your goals by completing milestones as you become consistent from the motivations"
  },
  {
    id: 4,
    emoji: "🔒",
    title: "Safe and Private",
    description: "As you dwell in this website, your data is secured and private so build in silence and let your progress speak for itself."
  }
];
  return (
    <div className="w-full flex flex-col gap-20 items-center pt-10 py-10  min-h-150 bg-gray-900">
      <h1 className="text-white text-5xl font-mono">
        Why Choose <span className="text-blue-500">motivateMe</span>?
      </h1>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl px-6">
        {featureCards.map((card) => (
          <div
            key={card.id}
            className="bg-[#1E2B4C] bg-opacity-30 border-2 border-blue-700 rounded-2xl p-8 hover:bg-opacity-40 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{card.emoji}</div>
            <h3 className="text-white text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
