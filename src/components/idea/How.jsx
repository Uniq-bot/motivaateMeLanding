const How = () => {
    return ( 
        <div className="grid grid-cols-1 py-10 lg:grid-cols-3 gap-12 lg:gap-20 items-center mt-20 bg-[#2A458C] px-6 lg:px-0">
            <div className="col-span-1 lg:col-span-2 lg:pl-20 py-12 lg:py-14 text-white">
                <h1 className="text-6xl lg:text-6x  l font-bold mb-8 tracking-tight">
                    How it works?
                </h1>
                <div className="space-y-4 text-base lg:text-lg xl:text-xl">
                    <div className="flex items-start gap-4">
                        <span className="font-bold text-blue-300 min-w-[3rem]">Step 1:</span>
                        <p className="font-light">Register / Login</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="font-bold text-blue-300 min-w-[3rem]">Step 2:</span>
                        <p className="font-light">Create a Post</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="font-bold text-blue-300 min-w-[3rem]">Step 3:</span>
                        <p className="font-light">Like & Comment</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="font-bold text-blue-300 min-w-[3rem]">Step 4:</span>
                        <p className="font-light">Explore feed and connect with others</p>
                    </div>
                    <div className="flex items-start gap-4">
                        <span className="font-bold text-blue-300 min-w-[3rem]">Step 5:</span>
                        <p className="font-light">Repeat and stay motivated</p>
                    </div>
                </div>
            </div>
            <div className=" flex w-60 justify-center h-120 lg:justify-start pb-8 lg:pb-0">
                <img 
                    src="/login.jpg" 
                    alt="Login Page" 
                    className="w-full max-w-xs h-full lg:max-w-sm rounded-lg shadow-2xl"
                />
            </div>
        </div>
    )
}
export default How;