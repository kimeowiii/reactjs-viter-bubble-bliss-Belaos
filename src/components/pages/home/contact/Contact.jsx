import React from "react";

const Contact = () => {
  return (
    <>
      {/* Contact */}
      <section id="contact" className="bg-pink-100 py-16">
        <div className="mx-auto px-4">
          <div className="text-center">
            <h3 className="font-bold text-2xl mb-5">
              Get Your{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Milk Tea
              </span>{" "}
              Fix
            </h3>
            <p className="text-gray-500">
              Have questions or want to share your favorite flavor? We'd love to
              hear from you!
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg mt-5  lg:mx-44 xl:mx-60  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="">
                <p className="mb-3">Your Name</p>
                <input
                  className="border rounded-lg p-2 w-full"
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <p className="mb-3">Email Address</p>
                <input
                  className="border rounded-lg p-2 w-full"
                  type="email"
                  name=""
                  id=""
                  placeholder="jane@example.com"
                />
              </div>
            </div>
            <div>
              <p className="mt-5 mb-3">Subject</p>
              <input
                className="border rounded-lg p-2 w-full"
                type="text"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <p className="mt-5 mb-3">Your Message</p>
              <input
                className="border rounded-lg p-2 w-full pb-20"
                type="text"
                placeholder="Tell us about your favorite milk tea..."
              />
            </div>
            <button className="bg-pink-500 text-white text-center rounded-lg p-2 w-full mt-5 hover:text-pink-500 hover:bg-pink-200 duration-300 transition-all ease-in-out">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
