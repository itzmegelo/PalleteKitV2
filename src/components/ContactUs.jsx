import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white dark:bg-gray-900 p-4 rounded-lg transition-colors duration-300">
      <div className="text-center px-6">
        <h2 className="text-slate-900 dark:text-white text-5xl font-bold">
          Contact <span className="text-[#6366f1]">Us</span>
        </h2>
        <p className="text-[15px] text-slate-600 dark:text-slate-300 mt-4">
          Have some big idea or brand to develop and need help?
        </p>
      </div>

      <div className="grid lg:grid-cols-5 items-center p-2 [box-shadow:0_2px_10px_-3px_rgba(115,120,131,0.6)] rounded-lg mt-12">
        {/* Contact Form */}
        <div className="px-4 sm:px-8 py-4 lg:col-span-3">
          <form>
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="First Name"
                className="px-2 py-3 bg-white dark:bg-gray-800 w-full text-sm text-slate-900 dark:text-white border-b border-gray-300 dark:border-gray-600 focus:border-slate-900 dark:focus:border-white outline-none transition-colors duration-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-2 py-3 bg-white dark:bg-gray-800 w-full text-sm text-slate-900 dark:text-white border-b border-gray-300 dark:border-gray-600 focus:border-slate-900 dark:focus:border-white outline-none transition-colors duration-300"
              />
              <input
                type="number"
                placeholder="Phone No."
                className="px-2 py-3 bg-white dark:bg-gray-800 w-full text-sm text-slate-900 dark:text-white border-b border-gray-300 dark:border-gray-600 focus:border-slate-900 dark:focus:border-white outline-none transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-3 bg-white dark:bg-gray-800 w-full text-sm text-slate-900 dark:text-white border-b border-gray-300 dark:border-gray-600 focus:border-slate-900 dark:focus:border-white outline-none transition-colors duration-300"
              />
              <textarea
                placeholder="Write Message"
                className="px-2 pt-3 bg-white dark:bg-gray-800 w-full text-sm text-slate-900 dark:text-white border-b border-gray-300 dark:border-gray-600 focus:border-slate-900 dark:focus:border-white outline-none transition-colors duration-300 col-span-full"
              ></textarea>
            </div>

            {/* Radio buttons */}
            <div className="col-span-full mt-6">
              <h6 className="text-[15px] text-slate-900 dark:text-white font-medium">
                Select Subject
              </h6>
              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center">
                  <input
                    id="radio1"
                    type="radio"
                    name="subject"
                    className="hidden peer"
                    defaultChecked
                  />
                  <label
                    htmlFor="radio1"
                    className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                  >
                    <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                  </label>
                  <p className="text-sm text-slate-600 dark:text-slate-300 ml-3">
                    General Inquiry
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio2"
                    type="radio"
                    name="subject"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="radio2"
                    className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                  >
                    <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                  </label>
                  <p className="text-sm text-slate-600 dark:text-slate-300 ml-3">
                    Technical Support
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio3"
                    type="radio"
                    name="subject"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="radio3"
                    className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                  >
                    <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                  </label>
                  <p className="text-sm text-slate-600 dark:text-slate-300 ml-3">
                    Website Feedback
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-12 flex items-center justify-center text-sm font-medium lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
