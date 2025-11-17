const What = () => {
    return (
        <section className="w-full bg-gray-900 text-white py-16 px-6 lg:px-20">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Our Values</h2>
                <p className="text-gray-300 text-lg">
                    The principles that guide every step of our journey.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
                    <div className="text-4xl mb-3">🌱</div>
                    <h3 className="text-2xl font-semibold mb-3">Growth</h3>
                    <p className="text-gray-400">
                        We believe in constant self-improvement, discipline, and becoming
                        better every single day.
                    </p>
                </div>

                <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
                    <div className="text-4xl mb-3">🔥</div>
                    <h3 className="text-2xl font-semibold mb-3">Authenticity</h3>
                    <p className="text-gray-400">
                        Staying true to who we are, speaking our truth, and inspiring others
                        with honesty.
                    </p>
                </div>

                <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
                    <div className="text-4xl mb-3">⏳</div>
                    <h3 className="text-2xl font-semibold mb-3">Consistency</h3>
                    <p className="text-gray-400">
                        We show up every day — even when it's hard — because progress comes
                        from discipline.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default What;
