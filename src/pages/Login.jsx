import { useContext, useRef, useState } from "react";
import { authContext } from "../components/authprovider/AuthProvider";
import { signOut } from "firebase/auth";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";



const Login = () => {
    document.title='EcoTravel - Login'
    const { handleGoogleLogin, handleLogin, handleLogOut } = useContext(authContext)
    const [logError, setLogError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        handleLogin(email, password)
            .then(res => {
                toast.success('Succesfully Login')
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                setLogError(err)
                toast.error('Login Failed')
            })
    }

    const googleLoginHandler = () => {
        handleGoogleLogin()
            .then(res => {
                toast.success('Succesfully Login')
                // navigate(location.state.from)
                navigate(location?.state ? location.state : "/");
            })
            .catch(loginerror=>{
                toast.error('Google Login Failed')
            })
    }
    const emailref=useRef()

    const handleForgetPassword=()=>{
        navigate('/forget-password',{state:emailref.current.value})
    }

    return (
        <div className="container mx-auto text-center min-h-[calc(100vh-372px)]  sm:min-h-[calc(100vh-251px)]">
            <div className="w-96 mx-auto">
                <form action="" onSubmit={handleSubmit}>
                    <div className="text-2xl font-semibold mb-5">Login to your Account</div>
                    <p className="">
                        <div className="text-lg font-medium text-left">Email</div>
                        <input type="email" name="email" ref={emailref} required placeholder="Please enter your Email"
                            className="input placeholder:text-xl input-bordered w-full" />
                    </p>

                    <p className="mt-6">
                        <div className="text-lg font-medium text-left">Password</div>
                        <input type="password" name="password" required placeholder="Password"
                            className="input placeholder:text-xl input-bordered w-full" />
                    </p>


                    {
                        logError && <div role="alert" className="flex items-center  text-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 mr-1 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Please enter valid Email / Password</span>
                        </div>
                    }



                    <button type="submit" className="w-full p-3 mt-6 bg-blue-700 text-white text-xl font-semibold rounded-md">Login</button>
                </form>

                <button onClick={googleLoginHandler}
                    className="w-full border my-6 py-[7px] rounded-lg bg-slate-200 flex justify-center items-center">
                    <FcGoogle className="text-4xl" />
                    <p className="text-xl font-medium ml-2">Google</p>
                </button>

                <button className="text-red-700" onClick={handleForgetPassword}>Forget password...</button>
                <div className="divider text-lg font-medium  text-gray-400 mt-5">Don't have an account?</div>
                <Link to='/signup'><button className="w-full border mt-1 border-blue-700 text-blue-700 font-medium py-3 text-xl rounded-md mb-5">Create Your Account</button></Link>
            </div>
        </div>

    );
};

export default Login;