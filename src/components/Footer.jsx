import { MdOutlineTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-neutral text-white p-10">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-around">
                <div>
                    <div className="flex flex-col justify-center items-center">
                       <div className="flex justify-center items-center"> <MdOutlineTravelExplore className="text-6xl" /></div>
                        <p className="text-3xl font-semibold">Eco-Travel Ltd.</p>

                        <p> A trusted travel guide since 2015</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-2">
                        <ImFacebook2 className="text-xl" />
                        <FaTwitterSquare className="text-2xl" />
                        <GrInstagram className="text-[23px]" />
                        <FaLinkedin className="text-[25px]" />
                    </div>
                </div>
                <div className="mt-7">
                    <div className="flex items-center gap-2">
                        <FaLocationDot />
                        <p>Shapla Chattar</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoCall />
                        <p>+880 17564s41</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdOutlineMail />
                        <p>shihadhasan@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="opacity-50 mt-5 text-center">@all right reserved by Eco-travel 2015 Ltd</div>
        </div>
    );
};

export default Footer;