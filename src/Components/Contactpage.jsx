import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contactpage = () => {
 
  return (
    <div className="contact py-11">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="contact_heading text-3xl font-extrabold text-white text-center">
          Contact Us
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-100">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 p-2 block w-full shadow-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="mt-1 p-2 block w-full shadow-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="mt-1 p-2 block w-full shadow-sm border-gray-300 rounded-md"
                ></textarea>
              </div>
              <button className="msg_btn">Submit</button>
            </form>
          </div>

          {/* Business Details */}
          <div className="buisness_dets ">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
              <p className="text-sm text-gray-600">
                Food Street, Delicious City, FL 12345
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
              <p className="text-sm text-gray-600">+1 234 567 890</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
              <p className="text-sm text-gray-600">info@foodwebsite.com</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900">Follow Us</h3>
              <div className="social">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <FaFacebook />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <FaWhatsapp />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094677!2d144.95373531531548!3d-37.81627917975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5773e0e5ff0f5e7!2sFood%20Street!5e0!3m2!1sen!2sus!4v1636363816817!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            className="rounded-md shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
