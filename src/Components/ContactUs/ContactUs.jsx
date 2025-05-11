import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import bg from "../../assets/whitebg.png";
const ContactUs = () => {
  return (
    <div
      className="w-full h-auto pt-10 px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-center mb-10">
        <div className="bg-emerald-50 w-full max-w-6xl rounded-lg shadow-lg p-6 sm:p-10 text-black flex flex-col lg:flex-row gap-10">
          {/* Left Section: Contact Info */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-pacifico">
              Get In Touch
            </h2>
            <p className="text-sm text-black font-medium text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis dignissimos eaque doloremque, nulla mollitia facilis
              temporibus ullam voluptas nostrum.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-black font-bold font-poppins">Address</h4>
                  <p className="font-semibold text-sm">
                    4671 Sugar Camp Road,
                    <br /> Owatonna, Minnesota, 55060
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="text-black font-bold font-poppins">Phone</h4>
                  <p className="font-semibold text-sm">+91 9992117565</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-black font-bold font-poppins">Email</h4>
                  <p className="font-semibold text-sm">
                    info@ratheegreenhouse.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Form */}
          <div className="flex-1 bg-white text-black p-6 sm:p-8 rounded-md shadow-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">Send Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-emerald-800 py-2 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-emerald-800 py-2 text-sm"
              />
              <textarea
                placeholder="Type your Message..."
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-emerald-800 py-2 h-24 resize-none text-sm"
              ></textarea>
              <button
                type="submit"
                className="bg-[#2d6a4f] hover:bg-emerald-800 text-white font-bold px-6 py-2 rounded-lg text-sm"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Responsive Google Map */}
      <div className="w-full max-w-6xl mx-auto px-4 mb-10 ">
        <h6 className="font-pacifico text-center text-3xl my-5">Find us</h6>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.958326146313!2d-93.23911418452715!3d44.08711142475892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f0c96e7dbb4d2b%3A0x9fdfc45e8e0e1c9b!2s4671%20Sugar%20Camp%20Rd%2C%20Owatonna%2C%20MN%2055060%2C%20USA!5e0!3m2!1sen!2sin!4v1682969405550!5m2!1sen!2sin"
          width="100%"
          height="350"
          className="rounded-md border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
