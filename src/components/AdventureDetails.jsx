import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import '../index.css'

const AdventureDetails = () => {
    document.title = 'EcoTravel - Details'

    const alldata = useLoaderData()
    const { cardid } = useParams()

    const [cardDetail, setCardDetail] = useState([])

    useEffect(() => {
        const newSingleCardDetails = alldata.find((d) => d.id === cardid)
        setCardDetail(newSingleCardDetails)
    }, [cardid])

    const { id, title, image, categoryName, shortDescription, adventureCost, bookingAvailability, location
        , duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions
    } = cardDetail

    const handlemeet = () => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const startHour = 10;
        const startMinute = 0;
        const endHour = 20;
        const endMinute = 0;

        const isWithinTime =
            (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
            (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute));

        if (isWithinTime) {
            window.open("https://meet.google.com/your-meet-id", "_blank");
        } else {
            // setShowModal(true); 
            document.getElementById('my_modal_5').showModal()
        }
    }


    return (
        <div className="mx-auto container">
            <div className="p-10">
                <p className="text-4xl font-semibold">{title}</p>
                <p className="text-xl my-4">{shortDescription}</p>

                <div className="relative">
                    <div className="lg:w-3/4">
                        <img src={image} className="w-full h-[250px] lg:h-[500px] object-cover rounded-xl" alt="" />
                        <div className="mt-3">
                            <button className="smBTN lg:text-base lg:px-4 lg:py-1">#{categoryName}</button>
                            <button className="smBTN ml-2 lg:text-base lg:ml-4 lg:px-4 lg:py-1">#{adventureLevel}</button>
                        </div>
                    </div>

                    {/* absolute start */}
                    <div className="lg:absolute lg:w-1/4 lg:top-0 lg:right-0">
                        <div className="mt-4 lg:mt-0 lg:mx-3 p-4 border rounded-xl">
                            <p className="lg:text-xl font-medium">Days:{duration}</p>
                            <p className="lg:text-xl font-medium my-2">Price : {adventureCost} $</p>
                            <li className="font-semibold">Best price guaranteed</li>
                            <li className="font-semibold">No booking fees</li>
                            <li className="font-semibold mb-4">Book once and share the <br /> cost with split payments</li>
                            <button className="mdBTN lg:text-xl lg:py-2 w-full">
                                {
                                    bookingAvailability == 'Available' ? 'Available' : 'Limited'
                                }
                            </button>
                        </div>
                    </div>
                    {/* absolute end */}

                </div>



                <div className="grid grid-cols-2 my-4 text-xl">
                    <p>Location:{location}</p>
                    <p>Duration:{duration}</p>
                    <p>Max Group Size:{maxGroupSize} people</p>
                </div>

                <p><span className="text-2xl font-semibold">Included Items:</span>
                    {
                        includedItems?.map(item => <li key={item}>{item}</li>)
                    }
                </p>

                <p><span className="text-2xl font-semibold">Eco-Friendly Features:</span>
                    {
                        ecoFriendlyFeatures?.map(item => <li key={item}>{item}</li>)
                    }
                </p>

                <p><span className="text-2xl font-semibold">Special Instructions:</span>
                    {
                        specialInstructions?.map(item => <li key={item}>{item}</li>)
                    }
                </p>
                <button onClick={handlemeet} className="bg-blue-700 mt-5 text-white text-xl px-5 py-2 rounded-xl">Talk with expert</button>

                {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <p className="py-4 text-2xl">Consultation time : 10am to 8pm  </p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AdventureDetails;