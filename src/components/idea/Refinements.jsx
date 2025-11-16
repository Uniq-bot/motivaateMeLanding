const Refinements = () => {
    return (
        <div className="bg-gray-300 py-8 px-6 lg:px-12 space-y-8">
            <div className="text-3xl font-bold mb-12 text-center">
                <h1>Future Enhancements</h1>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-20">

                <div className="flex justify-center">
                    <button className="text-white bg-[#1E2B4C] hover:bg-[#2A3A5C] font-semibold px-8 py-2 rounded-full flex items-center gap-3">
                        <span>AI Integration</span>
                        <span className="text-lg font-bold">✕</span>
                    </button>
                </div>

                <div className="flex justify-center">
                    <button className="text-white bg-[#1E2B4C] hover:bg-[#2A3A5C] font-semibold px-8 py-2 rounded-full flex items-center gap-3">
                        <span>Smooth UX</span>
                        <span className="text-lg font-bold">✕</span>
                    </button>
                </div>

                <div className="flex justify-center">
                    <button className="text-white bg-[#1E2B4C] hover:bg-[#2A3A5C] font-semibold px-8 py-2 rounded-full flex items-center gap-3">
                        <span>Chats</span>
                        <span className="text-lg font-bold">✕</span>
                    </button>
                </div>

                <div className="flex justify-center">
                    <button className="text-white bg-[#1E2B4C] hover:bg-[#2A3A5C] font-semibold px-8 py-2 rounded-full flex items-center gap-3">
                        <span>More Auth</span>
                        <span className="text-lg font-bold">✕</span>
                    </button>
                </div>

                <div className="flex justify-center">
                    <button className="text-white bg-[#1E2B4C] hover:bg-[#2A3A5C] font-semibold px-8 py-2 rounded-full flex items-center gap-3">
                        <span>Groups</span>
                        <span className="text-lg font-bold">✕</span>
                    </button>
                </div>

                <div className="flex justify-center">
                    <button className="text-white bg-[#1E2B4C] hover:bg-[#2A3A5C] font-semibold px-8 py-2 rounded-full flex items-center gap-3">
                        <span>Share</span>
                        <span className="text-lg font-bold">✕</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Refinements;
