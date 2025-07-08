import React from 'react';

import logo from '../assets/logo.png'
import { useModal } from '../context/Jobcontext';
function Nav() {

   const {openForm}=useModal()

  return (
    <div className="container max-w-[1440px] my-[10px] mx-auto bg-white px-4">
      <div className="flex justify-center">
        <div className="w-[890px]  px-6 py-4 flex justify-between items-center bg-white rounded-[122px] shadow-[0px_0px_20px_0px_#7F7F7F26] border border-[#FCFCFC]">
   
          {/* <div className="font-bold text-lg">Logo</div> */}
          <img  src={logo}  alt="logo" />

        
          <nav className="flex gap-6 text-[#303030]  font-semibold text-[16px] leading-[100%] tracking-[0%]">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">Find Jobs</a>
            <a href="#" className="hover:text-black">Find Talents</a>
            <a href="#" className="hover:text-black">About Us</a>
            <a href="#" className="hover:text-black">Testimonials</a>
          </nav>

        
          <button className="bg-[linear-gradient(180deg,_#A128FF_0%,_#6100AD_113.79%)] text-white flex item-center rounded-[30px] w-[130px] h-[38px] opacity-100 px-[24px] py-[8px]" onClick={openForm}>
            Create Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
