const Preview = () => {

    return (
        <div className="bg-[#FFFFFF] pb-10" >
            <h1 className="w-full h-full font-serif text-[45px] p-5">
                Preview of the work!
            </h1>
            <div className="grid grid-cols-3 gap-20 items-center mt-10 pl-45">
                <div className="cols-span-1">
                    <img src="preview-1.jpg" alt="Preview Image 1" />
                </div>
                <div className="cols-span-1 ">
                    <img src="preview-2.jpg" alt="Preview Image 2" />
                </div>
                <div className="cols-span-1 mb-60 pr-15">
                    <button className="text-white bg-[#1E2B4C] font-sans text-[20px] px-10 py-4 rounded-[30px] ">
                        Let's get started!!
                    </button>
                </div>
            </div>
        </div >
    )
}
export default Preview;