import React from "react";
import { FaMap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Contacts() {
  return (
    <div className="flex flex-col p-10 gap-10">
      <div className="flex justify-center gap-3 text-7xl font-bold">
        <span>CONTACT</span>
        <span className="text-blue-500">ME</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center gap-5">
          <span className="text-2xl font-bold">GET IN TOUCH</span>
          <p className="text-neutral-400">Reach Me On One Of My Social Or Contact Details Am Always Available 24/7 For Inqueries</p>

          <div className="flex gap-5">
            <FaMap size={30} className="text-blue-500" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Address :</span>
              <span className="text-neutral-400">Kimberley</span>
            </div>
          </div>

          <div className="flex gap-5">
            <MdEmail size={30} className="text-blue-500" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Email :</span>
              <span className="text-neutral-400">ndosisetlole@gmail.com</span>
            </div>
          </div>

          <div className="flex gap-5">
            <FaPhone size={30} className="text-blue-500" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Number :</span>
              <span className="text-neutral-400">0789384743</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-neutral-800 rounded-full p-3">
              <a href="https://github.com/KGOSIYAGAE" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} className="" />
              </a>
            </div>
            <div className="bg-neutral-800 rounded-full p-3">
              <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} className="" />
              </a>
            </div>
            <div className="bg-neutral-800 rounded-full p-3">
              <a href="https://wa.me/1" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} className="" />
              </a>
            </div>
            <div className="bg-neutral-800 rounded-full p-3">
              <a href="https://www.linkedin.com/in/kgosiyagae-motabogi-026a611ab/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} className="" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <form action="" className="flex flex-col gap-3">
            <div className="flex gap-5">
              <input type="text" className="w-[400px] bg-neutral-800 rounded-3xl p-3 outline-none placeholder:pl-2 placeholder:text-neutral-400" placeholder="your name" />
              <input type="text" className="w-[400px] bg-neutral-800 rounded-3xl p-3 outline-none placeholder:pl-2 placeholder:text-neutral-400" placeholder="your number" />
            </div>
            <div className="flex gap-5">
              <input type="text" className="w-[400px] bg-neutral-800 rounded-3xl p-3 outline-none placeholder:pl-2 placeholder:text-neutral-400" placeholder="your email" />
              <input type="text" className="w-[400px] bg-neutral-800 rounded-3xl p-3 outline-none placeholder:pl-2 placeholder:text-neutral-400" placeholder="your subject" />
            </div>
            <textarea name="" id="" placeholder="your message" className="h-[200px] bg-neutral-800 outline-none rounded-3xl placeholder:p-3"></textarea>
            <button className="flex gap-3 items-center w-[150px] bg-blue-500 p-3 rounded-3xl mt-2 hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;

/*
 <div className="contacts">
      <div className="contacts-title">
        <span>CONTACT</span>
        <span>ME</span>
      </div>
      <div className="contacts-box">
        <div className="left-box">
          <span>GET IN TOUCH</span>
          <p>Reach Me On One Of My Social Or Contact Details Am Always Available 24/7 For Inqueries</p>
          <div className="icon-box">
            <FaMap size={30} className="contacts-icon" />
            <div className="icon-text">
              <span>Address :</span>
              <span>Kimberley</span>
            </div>
          </div>
          <div className="icon-box">
            <MdEmail size={30} className="contacts-icon" />
            <div className="icon-text">
              <span>Email :</span>
              <span>ndosisetlole@gmail.com</span>
            </div>
          </div>
          <div className="icon-box">
            <FaPhone size={30} className="contacts-icon" />

            <div className="icon-text">
              <span>Number :</span>
              <span>0789384743</span>
            </div>
          </div>
          <div className="social-media-box">
            <div className="social-icon">
              <a href="https://github.com/KGOSIYAGAE" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} className="" />
              </a>
            </div>
            <div className="social-icon" onClick={() => {}}>
              <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} className="" />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://wa.me/1" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} className="" />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kgosiyagae-motabogi-026a611ab/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} className="" />
              </a>
            </div>
          </div>
        </div>

        
        <div className="right-box">
          <form action="" className="contacts-form">
            <div className="inputs">
              <input type="text" className="form-input" placeholder="your name" />
              <input type="text" className="form-input" placeholder="your number" />
            </div>
            <div className="inputs">
              <input type="text" className="form-input" placeholder="your email" />
              <input type="text" className="form-input" placeholder="your subject" />
            </div>
            <textarea name="" id="" placeholder="your message"></textarea>
            <button className="btn-send-message">Send Message</button>
          </form>
        </div>
      </div>
    </div>
*/
