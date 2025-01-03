// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderData from "../components/SliderData";
import { useLoaderData } from "react-router-dom";
import '../index.css'
import Card from "../components/Card";
import { IoRemoveOutline } from "react-icons/io5";
import FeatureSection from "../components/FeatureSection";
import CustomizeTrip from "../components/CustomizeTrip";


const Home = () => {
    document.title = 'EcoTravel - Home'
    const { sliderDetail, cardDetail } = useLoaderData();

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
    };


    return (
        <div className="container mx-auto mb-12">
            <div data-aos="fade-up">
                <Slider {...settings} className="mt-2 mb-20">
                    {
                        sliderDetail.map((slider) => <SliderData detail={slider} key={slider.adventureName}></SliderData>)
                    }
                </Slider>
            </div>

            <p className="text-5xl font-semibold flex items-center -ml-[22px] mb-8" data-aos="slide-right">
                <IoRemoveOutline className="rotate-90 text-red-800 -mb-1" />
                Our Top Adventures
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-7">
                {
                    cardDetail.map((singleCard) => <Card
                        singleCard={singleCard} key={singleCard.id}></Card>)
                }
            </div>
            <div>
                <FeatureSection></FeatureSection>
            </div>
            <div>
                <CustomizeTrip></CustomizeTrip>
            </div>
        </div>
    );
};

export default Home;