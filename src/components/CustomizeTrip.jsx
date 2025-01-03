import { IoRemoveOutline } from "react-icons/io5";


const CustomizeTrip = () => {
    return (
        <div>
            <p className="text-5xl font-semibold flex items-center -ml-[22px] mt-16" data-aos="slide-right">
                <IoRemoveOutline className="rotate-90 text-red-800 -mb-1" />
                Customize Your Trip with us
            </p>

            <div className="  border-2 lg:mx-0 xl:mx-40 rounded-2xl p-12 
                    justify-between text-center sm:flex mt-10" data-aos="zoom-in-up">

                <div className="sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px] xl:mr-5 2xl:mr-0">
                    <p className="text-4xl xl:text-5xl font-serif">We can help you Customize your trip</p>
                    <button className="border-2 bg-blue-600 mt-10 border-blue-600 text-white font-semibold text-lg md:text-xl lg:text-2xl px-8 md:px-12 py-3 md:py-4 rounded-2xl">Contact us</button>
                </div>


                <span className="border-2 hidden sm:block text-blue-600 my-5 border-blue-600"></span>
            

                <div className="mt-12 sm:mt-0 sm:w-[250px] md:w-[300px] lg:w-[400px] xl:w-[500px]">
                    <p className="text-4xl xl:text-5xl font-serif">Subscribe to our Newsletter</p>
                    <div className="flex flex-col items-center mt-10">
                        <input type="text" placeholder="Email address" className="w-3/4 border-2 border-blue-600 text-lg md:text-xl lg:text-2xl px-8 md:px-12 py-3 md:py-4 rounded-2xl" />
                        <button className="border-2  bg-blue-600 border-blue-600 text-white font-semibold  mt-6 text-lg md:text-xl lg:text-2xl px-8 md:px-12 py-3 md:py-4 w-3/4 rounded-2xl">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizeTrip;