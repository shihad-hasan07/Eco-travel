import { useContext, useEffect, useState } from "react";
import { authContext } from "../components/authprovider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { CgAsterisk } from "react-icons/cg";

const UserProfile = () => {
    document.title = 'EcoTravel - Profile'
    const navigate = useNavigate()
    const { user } = useContext(authContext)
    const named = user.displayName
    const email = user.email
    const pic=user.photoURL

    const goedit = () => {
        navigate('/updateprofile')
    }


    return (
        <div className="mt-5 sm:mt-10 container mb-7 mx-auto text-center 
        min-h-[calc(100vh-400px)]  sm:min-h-[calc(100vh-320px)]">
            <p className="text-5xl">Welcome</p>

            <div className="max-w-[650px] mt-4 border-spacing-5 flex 
            flex-col items-center sm:flex-row justify-center  mx-auto">

                <div className="w-full mt-5 ">
                    <div className="w-full h-52 rounded-2xl border">
                        <img src={pic} alt="Image not found" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="text-lg font-medium flex text-left mt-7">Name :</div>
                    <p className={named == null ? 'text-red-500 font-medium border-2 w-full py-3 rounded-2xl'
                        : 'text-lg sm:text-xl border-2 w-full py-3 rounded-2xl px-4 font-semibold overflow-hidden'}>
                        {
                            named == null ? 'Username not found' : named
                        }
                    </p>

                    <div className="text-lg font-medium mt-7 flex text-left">Email :</div>
                    <p className={email == null ? 'text-red-600 border-2 w-full py-3 rounded-2xl'
                        : 'text-lg sm:text-xl border-2 w-full py-3 rounded-2xl font-semibold overflow-hidden px-4'}>
                        {
                            email == null ? 'Email not found' : email
                        }
                    </p>
                    <button onClick={goedit} className='bg-blue-500 w-full mt-6 py-3 rounded-xl text-white text-xl font-semibold'>Edit</button>
                </div>


            </div>
        </div>
    );
};

export default UserProfile;