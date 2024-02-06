import Image from "next/image";
import React from "react";
import instagram from '@/public/Footer/instagram.png'
import facebook from '@/public/Footer/facebook.png'
import appstore from '@/public/Footer/Appstore.png'
import playstore from '@/public/Footer/Appstore.png'


const Footer = () => {
  return (
    <>
      <div className="footer-container site-wrapper bg-[#06645F]">
        <div className="flex flex-row justify-between">
        <div className="footer-first w-[15%] flex justify-between">
          <div className="footer-menu">
            <p className="text-white text-[12px]">Medical Essentials</p>
            <p className="text-white mt-2 text-[12px]">Nutrition</p>

            <p className="text-white mt-2 text-[12px]">Mom & Baby Care</p>
            <p className="text-white mt-2 text-[12px]">Home Care Eqiupments</p>
          </div>
        </div>

        <div className="footer-first w-[15%] flex justify-between">
          <div className="footer-menu">
            <p className="text-white text-[12px]">Personal Care</p>
            <p className="text-white mt-2 text-[12px]">Beauty</p>

            <p className="text-white mt-2 text-[12px]">Lifestyle</p>
        
          </div>
        </div>

        <div className="footer-first w-[15%] flex justify-between">
          <div className="footer-menu">
            <p className="text-white text-[12px]">Track Orders</p>
            <p className="text-white mt-2 text-[12px]">Shipping</p>

            <p className="text-white mt-2 text-[12px]">Returns & Exchange</p>
            <p className="text-white mt-2 text-[12px]">Cancellation</p>
          </div>
        </div>

        <div className="footer-first w-[15%] flex justify-between">
          <div className="footer-menu">
            <p className="text-white text-[12px]">About us</p>
            <p className="text-white mt-2 text-[12px]">Contact us</p>

            <p className="text-white mt-2 text-[12px]">FAQ</p>
            <p className="text-white mt-2 text-[12px]">Carrers</p>
          </div>
        </div>

        <div className="footer-first w-[15%] flex justify-between">
          <div className="footer-menu">
            <p className="text-white text-[12px]">Talk To Us</p>
            <p className="text-white font-bold  text-[14px]">+971-365-698-13</p>

            <p className="text-white  mt-6 text-[12px]">Help Center</p>
            <p className="text-white font-bold  text-[14px]">support@gogopharma.com3</p>
          </div>
        </div>
        <div className="footer-first w-[15%] flex justify-between">
          <div className="footer-menu">
            <p className="text-white text-[12px]">Follow us</p>
    <div className="mt-2 flex flex-row">
<Image src={instagram} alt='instagram'/>
<Image src={facebook} alt='facebook' className="ml-2"/>
    </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row mt-10 justify-between">
<div>
    <p className="text-white font-bold">Gets latest deals and more</p>
    <div className="flex flex-row mt-2">
    <input placeholder="Enter your email here" className="py-[5px] px-[32px] rounded-[4px]"/>
    <button className="ml-4 text-white bg-[#131313] rounded-[4px] py-[16px] text-[12px] w-[108px] px-[5px]">Send</button>
    </div>
</div>
<div>
<p className="text-white font-bold">Download the App</p>
<div className="mt-2 flex">
<Image src={appstore} alt="app-store"/>
<Image src={playstore} alt="play-store" className="ml-2"/>
</div>
</div>
      </div>
    <div className="mt-20 mb-4 border border-[#0AA79F]"/>
    <div className="flex flex-row justify-between">
    <p className="text-white text-[12px]">Terms and conditions - Privacy Policy</p>
    <p className="text-white text-[12px]">All right recived by GoGo pharama, UAE. Copyright@www.gogopharma.com</p>
    </div>
      </div>
    </>
  );
};

export default Footer;
