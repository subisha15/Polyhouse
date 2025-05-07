import React from "react";
//import bg from "../../assets/carousel1.jpg";
const ContactUs = () => {
  return (
    <div className=" bg-cover bg-center  h-[100vh] flex items-center justify-center px-4">
      <div className="bg-black bg-opacity-60 w-full max-w-6xl rounded-lg shadow-lg p-10 text-white flex flex-col lg:flex-row gap-10">
        {/* Left Section: Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            dignissimos eaque doloremque, nulla mollitia facilis temporibus
            ullam voluptas nostrum.
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="bg-white text-black rounded-full p-3">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 className="text-cyan-400 font-bold">Address</h4>
                <p>
                  4671 Sugar Camp Road,
                  <br /> Owatonna, Minnesota, 55060
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="bg-white text-black rounded-full p-3">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div>
                <h4 className="text-cyan-400 font-bold">Phone</h4>
                <p>561-456-2321</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-white text-black rounded-full p-3">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4 className="text-cyan-400 font-bold">Email</h4>
                <p>example@email.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="flex-1 bg-white text-black p-8 rounded-md shadow-md">
          <h3 className="text-2xl font-bold mb-6">Send Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 py-2"
            />
            <textarea
              placeholder="Type your Message..."
              className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-cyan-500 py-2 h-24 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
