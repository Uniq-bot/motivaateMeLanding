const Journey = () => {
    return (
        <section className="w-full bg-[#2A458C] py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl text-center font-semibold mb-16 relative after:block after:w-20 after:h-1 after:bg-linear-to-r after:from-indigo-400 after:to-purple-500 after:mx-auto after:mt-4 text-white">
                    Our Journey
                </h2>

                <div className="relative">
                    <div className="flex mb-16 flex-row">
                        <div className="w-1/2 p-8 rounded-xl bg-[#111727] border border-indigo-400/30 backdrop-blur-md hover:scale-105 transition ml-12 text-left">
                            <div className="text-2xl font-bold text-indigo-400 mb-2">2023</div>
                            <h3 className="text-xl font-semibold mb-2 text-white">The Spark</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Three friends struggling to find direction came together with a shared purpose.
                                They brainstormed ideas late into the night, driven by passion and curiosity.

                            </p>
                        </div>
                    </div>

                    <div className="flex mb-16 flex-row-reverse">
                        <div className="w-1/2 p-8 rounded-xl bg-[#111727] border border-indigo-400/30 backdrop-blur-md hover:scale-105 transition mr-12 text-right">
                            <div className="text-2xl font-bold text-indigo-400 mb-2 ">Early 2024</div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Building Together</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                After months of research, planning, and countless late nights, the foundation began to take shape.
                                Collaboration was key as ideas evolved, challenges were met, and small victories celebrated.

                            </p>
                        </div>
                    </div>

                    <div className="flex mb-16 flex-row">
                        <div className="w-1/2 p-8 rounded-xl bg-[#111727] border border-indigo-400/30 backdrop-blur-md hover:scale-105 transition ml-12 text-left">
                            <div className="text-2xl font-bold text-indigo-400 mb-2">Mid 2024</div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Launch Day</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                MotivateMe officially launched with great anticipation and excitement.
                                The first users joined, providing feedback and encouragement that inspired further improvements.

                            </p>
                        </div>
                    </div>

                    <div className="flex mb-16 flex-row-reverse">
                        <div className="w-1/2 p-8 rounded-xl bg-[#111727] border border-indigo-400/30 backdrop-blur-md hover:scale-105 transition mr-12 text-right">
                            <div className="text-2xl font-bold text-indigo-400 mb-2">Today</div>
                            <h3 className="text-xl font-semibold mb-2 text-white">Growing Strong</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                We're now a thriving community connecting countless individuals around shared goals.
                                The journey continues with energy, creativity, and an unwavering commitment to growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
