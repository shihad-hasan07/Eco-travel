import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AdventureDetails from "../components/AdventureDetails";
import ErrorPage from "../../src/components/ErrorPage"
import Signup from "../pages/Signup";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import UserProfile from "../pages/UserProfile";
import ForgetPassword from "../components/ForgetPassword";
import UpdateProfile from "../components/UpdateProfile";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const sliderDetail = await fetch('/slider-img-details.json').then(res => res.json());
                    const cardDetail = await fetch('/adventure.json').then(res => res.json());
                    return { sliderDetail, cardDetail };
                }
            },
            {
                path: '/adventure/:cardid',
                element: <PrivateRoute>
                    <AdventureDetails></AdventureDetails>
                </PrivateRoute>,
                loader: () => fetch('../adventure.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path:'/user-profile',
                element:<PrivateRoute>
                    <UserProfile></UserProfile>
                </PrivateRoute>
            },
            {
                path:'/forget-password',
                element:<ForgetPassword></ForgetPassword>
            },
            {
                path:'/updateprofile',
                element:<PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            }
        ]
    }
])

export default router
