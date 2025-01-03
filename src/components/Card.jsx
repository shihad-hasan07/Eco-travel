import { Link } from "react-router-dom";


const Card = ({ singleCard }) => {
    const { categoryName, image, ecoFriendlyFeatures,id,title } = singleCard
    return (
        <div className="border p-5 rounded-2xl" data-aos="zoom-in">

            <div className="h-60">
                <img src={image} className="w-full h-full object-cover rounded-lg" alt="" />
            </div>
            <p className="text-2xl font-medium">{title}</p>
            
            <div className="my-2">
                <ol className="text-xl">Features</ol>
                <div className="ml-3">
                    {
                        ecoFriendlyFeatures.map((p) => <li key={p}>{p}</li>)
                    }
                </div>
            </div>
            
            <Link to={`/adventure/${id}`} className="w-full">
                <button className="border w-full rounded-xl px-4 py-2 text-lg font-semibold">Explore Now</button>
            </Link>
        </div>
    );
};

export default Card;