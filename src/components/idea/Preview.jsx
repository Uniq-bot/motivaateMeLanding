import { useNavigate } from "react-router-dom";

const Preview = () => {
    const navigate=useNavigate()
    return (
        <div className="bg-white py-16 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 lg:mb-16 text-gray-900 tracking-tight">
                    Preview of the work!
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                    <div className="flex h-100 w-60 justify-center">
                        <img 
                            src="preview-1.jpg" 
                            alt="Preview Image 1" 
                            className="w-full max-w-sm rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        />
                    </div>
                    <div className="flex h-100 w-60 justify-center">
                        <img 
                            src="preview-2.jpg" 
                            alt="Preview Image 2" 
                            className="w-full max-w-sm rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button onClick={()=>navigate('http://motivat3me.surge.sh/')} className="text-white bg-[#1E2B4C] hover:bg-[#2A3A5C] font-semibold text-lg lg:text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            Let's get started!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Preview;