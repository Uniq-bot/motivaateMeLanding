const How = () => {

    return (
        <div className="grid grid-cols-3 gap-20 items-center mt-20 bg-[#2A458C]" >
            <div className="col-span-2 pl-20 mb-10 mt-10 text-left text-white font-serif text-[38px]">
                <h1 className="text-[50px]" >
                    How it works?
                </h1>
                <div className="mt-8" >
                    <p>Step 1: Register / Login</p>
                    <p>Step 2: Create a Post</p>
                    <p>Step 3: Like & Comment</p>
                    <p>Step 4: Explore feed and connect with others</p>
                    <p>Step 5: Repeat and stay Motivated</p>
                </div>
            </div>
            <div className="col-span-1 mt-10 mb-5" >
                <img src="/login.jpg" alt="Login Page" className="-w79 h-171"/>
            </div>
        </div>
    )
}
export default How;