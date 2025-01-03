import React, { useContext } from 'react';
import { authContext } from './authprovider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import { useNavigate } from 'react-router-dom';
import { CgAsterisk } from "react-icons/cg";

const UpdateProfile = () => {
    document.title='EcoTravel - update'

    const navigate = useNavigate()
    const { user,setUser } = useContext(authContext)

    const handleupdatesubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
            .then((res) => {
                setUser((preuser)=>{
                    return {
                        ...preuser,displayName:name,photoURL:image
                    }
                })
                navigate('/user-profile')
            })

    }

    return (
        <div className='mt-5 sm:mt-10 container mx-auto text-center min-h-[calc(100vh-372px)] sm:mb-10 sm:min-h-[calc(100vh-332px)]'>
            <div className='w-[300px] sm:w-[400px] mx-auto'>
                <p className='text-3xl md:text-4xl mb-10'>Update your profile</p>
                <form action="" onSubmit={handleupdatesubmit}>
                    <p>
                        <div className="text-lg font-medium flex text-left">Name
                            <CgAsterisk className="mt-1" />
                        </div>
                        <input type="text" name="name" placeholder="Type your name"
                            className="input placeholder:text-xl input-bordered w-full"  />
                    </p>

                    <p className='mt-5'>
                        <div className="text-lg font-medium flex text-left">Image url
                            <CgAsterisk className="mt-1" />
                        </div>
                        <input type="url" name="image" placeholder="Enter an Image Url"
                            className="input placeholder:text-xl input-bordered w-full"  />
                    </p>
                    <button className='bg-blue-500 w-full mt-6 py-3 rounded-xl text-white text-xl font-semibold'>update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;