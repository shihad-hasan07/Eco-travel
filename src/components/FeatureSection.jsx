import { IoRemoveOutline } from "react-icons/io5";

const FeatureSection = () => {
    return (
        <div data-aos="fade-up">
            <p className="text-5xl font-semibold flex items-center -ml-[22px] mt-16" data-aos="slide-right">
                <IoRemoveOutline className="rotate-90 text-red-800 -mb-1" />
                Featured Services
            </p>
            <p data-aos="slide-right" className="ml-7 text-lg mt-2 opacity-60">Discover exclusive services tailored to elevate your adventures</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">

                {/* 1 */}
                <div className="rounded-3xl p-2  hover:scale-105 transition-transform duration-300" data-aos="fade-down">
                    <div className="z-10 h-60">
                        <img src="/assets/feature1.jpg" className="w-full h-full rounded-t-3xl object-cover" alt="" />
                    </div>
                    <div className="relative -top-12 -mb-12 h-64 rounded-t-[55px] rounded-b-3xl text-center p-5 z-20 bg-pink-500 text-blue-800 ">
                        <p className="text-3xl font-semibold underline">Expert Guides</p>
                        <p className="text-base my-4 leading-5 text-black">Flexible itineraries tailored to your preferences, offering personalized destinations, activities, and accommodations for a unique and unforgettable experience</p>
                        <button className="bg-blue-500 py-2 text-xl font-semibold text-white rounded-2xl px-10">Learn More</button>
                    </div>
                </div>

                {/* 2 */}
                <div className="rounded-3xl p-2  hover:scale-105 transition-transform duration-300">
                    <div className="z-10 h-60">
                        <img src="/assets/customPackage.jpg" className="w-full h-full rounded-t-3xl object-cover" alt="" />
                    </div>
                    <div className="relative -top-12 -mb-12 h-64 rounded-t-[55px] rounded-b-3xl text-center p-5 z-20 bg-blue-300 text-blue-800 ">
                        <p className="text-3xl font-semibold">Custom Packages</p>
                        <p className="text-base my-4 leading-5 text-black">Flexible itineraries tailored to your preferences, offering personalized destinations, activities, and accommodations for a unique and unforgettable experience</p>
                        <button className="bg-blue-500 py-2 text-xl font-semibold text-white rounded-2xl px-10">Learn More</button>
                    </div>
                </div>

                {/* 3 */}
                <div className="rounded-3xl p-2  hover:scale-105 transition-transform duration-300" data-aos="fade-down">
                    <div className="z-10 h-60">
                        <img src="/assets/eco-friendly.jpg" className="w-full h-full rounded-t-3xl object-cover" alt="" />
                    </div>
                    <div className="relative -top-12 -mb-12 h-64 rounded-t-[55px] rounded-b-3xl text-center p-5 z-20 bg-green-500 text-blue-800 ">
                        <p className="text-3xl font-semibold">Eco-Friendly Stays</p>
                        <p className="text-base my-4 leading-5 text-black">Flexible itineraries tailored to your preferences, offering personalized destinations, activities, and accommodations for a unique and unforgettable experience</p>
                        <button className="bg-blue-500 py-2 text-xl font-semibold text-white rounded-2xl px-10">Learn More</button>
                    </div>
                </div>

                {/* 4 */}
                <div className="rounded-3xl p-2  hover:scale-105 transition-transform duration-300">
                    <div className="z-10 h-60">
                        <img src="/assets/insurance.jpg" className="w-full h-full rounded-t-3xl object-cover" alt="" />
                    </div>
                    <div className="relative -top-12 -mb-12 h-64 rounded-t-[55px] rounded-b-3xl text-center p-5 z-20 bg-pink-500 text-blue-800 ">
                        <p className="text-3xl font-semibold">Adventure Insurance</p>
                        <p className="text-base my-4 leading-5 text-black">Flexible itineraries tailored to your preferences, offering personalized destinations, activities, and accommodations for a unique and unforgettable experience</p>
                        <button className="bg-blue-500 py-2 text-xl font-semibold text-white rounded-2xl px-10">Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FeatureSection;