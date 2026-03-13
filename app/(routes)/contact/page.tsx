import React from "react";

const Contact = () => {
  return (
    <div className="px-container py-10 flex flex-col lg:flex-row gap-10">
      <div className="lg:w-1/2 w-full space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Get in <span className="text-orange-600">Touch</span>
        </h1>
        <p className="text-gray-600">
          Have a question about an order, product details, or anything else? Send us
          a message and we will get back to you as soon as possible.
        </p>

        <form className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              placeholder="How can we help you?"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full space-y-6">
        <div className="bg-gray-100 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Contact Info</h2>
          <p className="text-gray-600">
            You can also reach us through the following contact details.
          </p>
          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              support@shopaz.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +994 (00) 000 00 00
            </p>
            <p>
              <span className="font-semibold">Working hours:</span> Mon - Fri, 09:00 - 18:00
            </p>
            <p>
              <span className="font-semibold">Address:</span> Baku, Azerbaijan
            </p>
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Frequently Asked
          </h2>
          <p className="text-gray-600 text-sm">
            Check our FAQ section on the main site for quick answers about shipping,
            returns, and payments. If you still need help, just send us a message using
            the form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
