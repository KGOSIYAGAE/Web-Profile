import React from "react";
import "./Contacts.css";
import { FaMap } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Contacts() {
  return (
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
              <FaGithub size={20} className="" />
            </div>
            <div className="social-icon">
              <FaFacebook size={20} className="" />
            </div>
            <div className="social-icon">
              <FaWhatsapp size={20} className="" />
            </div>
            <div className="social-icon">
              <FaLinkedin size={20} className="" />
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
  );
}

export default Contacts;
