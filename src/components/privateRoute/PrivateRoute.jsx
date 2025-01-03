import { useContext } from "react";
import { authContext } from "../authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Blocks } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)

    const location = useLocation()

    if (loading) {
        return <div className="flex justify-center items-center min-h-[calc(100vh-352px)]  sm:min-h-[calc(100vh-252px)]">
            <Blocks
                height="300"
                width="300"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
            />
        </div>
    }
    if (user) {
        return children
    }
    // return <Navigate state={{ from: location.pathname }} to='/login'></Navigate>
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
