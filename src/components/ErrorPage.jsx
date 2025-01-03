import { Link } from "react-router-dom";

const ErrorPage = () => {
    document.title='EcoTravel - Error 404'
    return (
        <div className="flex flex-col justify-center items-center mt-32">
            <p className="text-5xl mb-7">404 Page Not Found</p>
            <Link to='/'><button className="text-2xl text-blue-500">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;