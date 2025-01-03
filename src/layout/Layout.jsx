import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures animation runs only once
    });
  }, []);

  return (
    <div className="overflow-hidden sm:px-0">

      <Header></Header>
      
    <div className=" px-3 sm:px-0">
    <Outlet></Outlet>
    </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Layout
