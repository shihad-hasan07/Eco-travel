import { useContext, useEffect, useState } from "react";
import { authContext } from "../components/authprovider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { Link, useNavigate } from "react-router-dom";

import { CgAsterisk } from "react-icons/cg";
import { toast } from "react-toastify";

const Signup = () => {
    document.title='EcoTravel - Signup'

    const { handleRegister, manageProfile } = useContext(authContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value
        const image = e.target.image.value

        if (password.length < 6) {
            setError("Password must have bigger than 6 number")
        }
        if (password !== confirmPassword) {
            setError("Password Didn't Match")
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain atleaset 1 lowercase")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain atleaset 1 uppercase")
            return;
        }

        handleRegister(email, password)
            .then(res => {
                manageProfile(name, image)
                toast.success('Succesfully Created Your accout')
                navigate(location?.state ? location.state : "/login");
            })
            .catch(er=>{
                toast.error('Signup Failed')
            })
            .then(() => signOut(auth))
    }

    return (
        <div className="container mx-auto text-center w-96">
            <form action="" onSubmit={handleSubmit}>
                <div className="text-2xl font-semibold mb-5">Create Account</div>
                <p>
                    <div className="text-lg font-medium flex text-left">Name
                        <CgAsterisk className="mt-1" />
                    </div>
                    <input type="text" name="name" placeholder="Type your name"
                        className="input placeholder:text-xl input-bordered w-full" required />
                </p>
                <p className="my-6">
                    <div className="text-lg font-medium text-left flex">E-mail
                        <CgAsterisk className="mt-1" />
                    </div>
                    <input type="email" name="email" placeholder="Enter email"
                        className="input placeholder:text-xl input-bordered w-full" required />
                </p>
                <p>
                    <div className="text-lg font-medium text-left flex">Password
                        <CgAsterisk className="mt-1" />
                    </div>
                    <input type="password" name="password" placeholder="Password"
                        className="input placeholder:text-xl input-bordered w-full" required />
                </p>
                <p className="my-6">
                    <div className="text-lg font-medium text-left flex">Confirm Password
                        <CgAsterisk className="mt-1" />
                    </div>
                    <input type="password" name="confirmPassword" placeholder="Confirm password"
                        className="input placeholder:text-xl input-bordered w-full" required />
                </p>

                <p>
                    <div className="text-lg font-medium text-left flex">Image url
                        <CgAsterisk className="mt-1" />
                    </div>
                    <input type="url" name="image" placeholder="Enter the image url" required
                        className="file-input placeholder:text-xl placeholder:pl-4 file-input-bordered file-input-info w-full" />
                </p>


                {
                    error && (<div role="alert" className="flex items-center mt-1 text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error}</span>
                    </div>)
                }
                <button type="submit" className="w-full p-3 mt-6 bg-blue-700 text-white text-xl font-semibold rounded-md">Sign Up</button>

                <div className="divider text-lg font-medium text-gray-400 mt-7">Already have an account?</div>
                <Link to='/login'><button className="w-full border mt-1 border-blue-700 text-blue-700 font-medium py-3 text-xl rounded-md mb-5">Login</button></Link>
            </form>
        </div>
    );
};
export default Signup;