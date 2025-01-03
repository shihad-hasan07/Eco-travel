import { Link } from "react-router-dom";
import { BsFillPersonXFill } from "react-icons/bs";
import { useContext } from "react";
import { authContext } from "./authprovider/AuthProvider";


const Header = () => {
    const { user, handleLogOut } = useContext(authContext)
    return (
        <div>
            <div className="navbar pb-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-40 p-2 shadow">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/updateprofile'>Update Profile</Link></li>
                            <li><Link to='/user-profile'>User Profile</Link></li>
                        </ul>
                    </div>
                    <Link className="text-xl md:text-3xl">Eco-Travel</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 px-1 text-xl">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/updateprofile'>Update Profile</Link></li>
                        <li><Link to='/user-profile'>User Profile</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center">
                        <div className="tooltip tooltip-bottom" data-tip={user && user.displayName }>
                            <div className="w-12 h-12 border bg-blue-200 flex justify-center items-center rounded-full">
                                {
                                    user?(<img className="w-12 object-cover h-12 rounded-3xl" src={user.photoURL} alt="" />):
                                    <BsFillPersonXFill className="w-7 h-8  ml-1" />
                                }
                            </div>
                        </div>

                        <Link to={!user && '/login'}>
                            <button className="bg-blue-300 rounded-md px-4 py-2 ml-3 text-xl">
                                {
                                    !user ? 'Login' : <p onClick={handleLogOut}>Logout</p>
                                }
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;