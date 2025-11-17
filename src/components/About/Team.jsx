const Team = () => {
    return (
        <section className="py-24 bg-linear-to-br from-indigo-900/20 to-teal-500/10">
            <h2 className="text-4xl text-center font-semibold mb-10 relative after:block after:w-20 after:h-1 after:bg-linear-to-r after:from-indigo-400 after:to-purple-500 after:mx-auto after:mt-4 text-white">
                Meet the Team
            </h2>

            <div className="grid max-w-6xl mx-auto gap-10 px-6 md:grid-cols-3">
                <div className="bg-[#0f192399] p-10 rounded-2xl text-center border-2 border-transparent hover:border-indigo-400 transition relative overflow-hidden">
                    <div className="text-5xl mb-6 w-28 h-28 mx-auto rounded-full bg-linear-to-br from-indigo-400 to-purple-500 flex items-center justify-center border-4 border-indigo-300/30">
                        👨‍💼
                    </div>
                    <h3 className="text-2xl font-semibold mb-1 text-white">Unique Prajapati</h3>
                    <p className="text-indigo-400 font-medium text-sm mb-3">Co-Founder & Backend Developer</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Unique is a tech lead turned entrepreneur, building scalable backend systems and mentoring developers while keeping performance and reliability top priority.
                    </p>
                </div>

                <div className="bg-[#0f192399] p-10 rounded-2xl text-center border-2 border-transparent hover:border-indigo-400 transition relative overflow-hidden">
                    <div className="text-5xl mb-6 w-28 h-28 mx-auto rounded-full bg-linear-to-br from-indigo-400 to-purple-500 flex items-center justify-center border-4 border-indigo-300/30">
                        👨‍💻
                    </div>
                    <h3 className="text-2xl font-semibold mb-1 text-white">Lucky Rajkarnikar</h3>
                    <p className="text-indigo-400 font-medium text-sm mb-3">Design Lead and Frontend Developer</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        Lucky blends design and psychology to craft intuitive, engaging interfaces, focusing on usability, aesthetics, and seamless user experiences across the platform.
                    </p>
                </div>

                <div className="bg-[#0f192399] p-10 rounded-2xl text-center border-2 border-transparent hover:border-indigo-400 transition relative overflow-hidden">
                    <div className="text-5xl mb-6 w-28 h-28 mx-auto rounded-full bg-linear-to-br from-indigo-400 to-purple-500 flex items-center justify-center border-4 border-indigo-300/30">
                        👨‍🏫
                    </div>
                    <h3 className="text-2xl font-semibold mb-1 text-white">John Doe</h3>
                    <p className="text-indigo-400 font-medium text-sm mb-3">Community Lead</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        John leads the community, inspiring members, fostering growth, and ensuring a welcoming environment where everyone can achieve their goals together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Team;
