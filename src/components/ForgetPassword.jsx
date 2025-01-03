import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import { toast } from "react-toastify";



const ForgetPassword = () => {
    document.title='EcoTravel - Reset-password'

    const navigate=useNavigate()
    const forgetpasswordemail = useLocation()

    const [mail, setemail] = useState(forgetpasswordemail.state)
    const handleemailchange = (e) => {
        setemail(e.target.value)
    }
    const handlerestsubmit = (e) => {
        e.preventDefault()
        if (mail) {
            sendPasswordResetEmail(auth, mail)
            .then(()=>toast.success('Password Reset Email sent'))
            .then((res)=>navigate('/login'))
        }
        else {
            toast.error('envalid email')
        }
    }
    return (
        <div className="min-h-[calc(100vh-371px)]  sm:min-h-[calc(100vh-331px)] sm:mb-10 container mx-auto mt-5 sm:mt-10 w-[300px] sm:w-[400px] text-center">
            <form action="" onSubmit={handlerestsubmit}>
            <p className='text-3xl md:text-4xl mb-10'>Reset your password</p>
                <p className="">
                    <div className="text-lg font-medium text-left">Email</div>
                    <input type="email" value={mail} onChange={handleemailchange} required placeholder="Please enter your Email"
                        className="input placeholder:text-xl input-bordered w-full" />
                </p>
                <button className='bg-blue-500 w-full mt-6 py-3 rounded-xl text-white text-xl font-semibold'>Send Email</button>
            </form>
        </div>
    );
};

export default ForgetPassword;