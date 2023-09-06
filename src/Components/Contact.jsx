import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-white font-reality text-4xl underline p-10 ">
        Lets Chat!
      </h1>
      
      <div className="w-full h-full grid auto-cols-auto grid-flow-col gap-4">
      <div className = "w-full aspect-square flex items-center justify-center">
          <iframe
          className = "w-[75%] aspect-square border-8 border-white rounded-xl p-2 "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101130.15699105864!2d-122.15171246075876!3d37.61822097898874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9431b601597d%3A0x70474dec26939c0!2sHayward%2C%20CA!5e0!3m2!1sen!2sus!4v1693987304239!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div id="Contact" className="min-h-screen flex items-center justify-center">
          <div className="bg-[#242424] border-2 border-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl text-white font-semibold mb-4">Lets Chat!</h2>
            <form>
              <div className="mb-4">
                <label  className="block text-white font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border-2 border-white bg-transparent rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label  className="block text-white font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 bg-transparent border-white border-2 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
               
                  className="block bg-transparent text-whwhite border-2-bold mb-2 text-white font-bold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-3 py-2  bg-transparent border-white border-2 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
