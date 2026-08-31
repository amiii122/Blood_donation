import { User, Mail, Tag, Pencil, Send } from "lucide-react";
import { asserts } from "../../../assets/assets";

const ContactForm = () => {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 overflow-hidden rounded-xl border border-gray-100 shadow-sm lg:grid-cols-5">

        {/* Get In Touch */}
        <div className="relative overflow-hidden bg-red-700 px-7 py-10 text-white sm:px-10 lg:col-span-2 lg:px-8 lg:py-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-red-100">
            Get In Touch
          </p>

          <h2 className="mt-4 max-w-xs text-3xl font-bold leading-tight sm:text-4xl">
            We'd Love to
            <br />
            Hear From You!
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-6 text-red-100">
            Whether you have a question, want to partner with us, or need
            support with a blood request, our team is ready to assist you.
          </p>

          <div className="pointer-events-none absolute -right-6 top-6 grid grid-cols-4 gap-2 opacity-20">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-white" />
            ))}
          </div>

          <div className=" flex justify-center lg:mt-16">
            <img className="w-20 h-20 md:w-30 md:h-30 scale-220" src={asserts.ContactImg} alt="conatct image" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="px-6 py-8 sm:px-10 lg:col-span-3 lg:px-8 lg:py-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-red-600">
              Contact
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Send Us a Message
            </h2>

            <div className="mt-2 h-1 w-9 rounded-full bg-red-600" />
          </div>

          <form className="mt-6 space-y-4">

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

                <input type="text" placeholder="Your Name" className="h-12 w-full rounded-md border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500" />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

                <input type="email" placeholder="Your Email" className="h-12 w-full rounded-md border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500" />
              </div>

            </div>

            {/* Subject */}
            <div className="relative">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />

              <input type="text" placeholder="Subject" className="h-12 w-full rounded-md border border-gray-200 bg-white pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500" />
            </div>

            {/* Message */}
            <div className="relative">
              <Pencil className="absolute left-3 top-4 text-gray-400" size={18} />

              <textarea placeholder="Your Message" rows={7} className="w-full resize-none rounded-md border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-red-500 focus:ring-1 focus:ring-red-500" />
            </div>

            {/* Submit */}
            <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-md bg-red-600 text-sm font-semibold text-white transition hover:bg-red-700">
              <Send size={17} />
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;