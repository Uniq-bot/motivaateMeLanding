import React from 'react'

const MotivationalQuote = () => {
  const quotes = [
    {
      id: 1,
      text: "Discovering what you really want saves you endless confusion and wasted energy",
      author: "Stuart Wilde"
    },
    {
      id: 2,
      text: "Take a leap of faith right now and know that you can live the life of your dream by making a positive decision",
      author: "Aulia Ice"
    },
    {
      id: 3,
      text: "Before you can make your dreams work, you have to get out of bed!!",
      author: "Stephen Richards"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center py-16 bg-[#1E2B4C] min-h-100">
      <h1 className="text-white text-4xl md:text-5xl font-semibold mb-12 text-center px-4">
        Some Peak Motivation Lines
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl px-6">
        {quotes.slice(0, 2).map((quote) => (
          <div
            key={quote.id}
            className="bg-slate-900 border-2 border-slate-600 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between min-h-[200px]"
          >
            <p className="text-white text-center text-base leading-relaxed mb-4">
              {quote.text}
            </p>
            <p className="text-gray-400 text-center text-sm italic">
              -{quote.author}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-md px-6">
        <div className="bg-slate-900 border-2 border-slate-600 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between min-h-[200px]">
          <p className="text-white text-center text-base leading-relaxed mb-4">
            {quotes[2].text}
          </p>
          <p className="text-gray-400 text-center text-sm italic">
            -{quotes[2].author}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MotivationalQuote
