import { asserts } from "../../../assets/assets";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-red-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center lg:grid-cols-2">
        
        {/* Content */}
        <div className="z-10 px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">Contact Us</p>

          <h1 className="max-w-lg text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            We're Here to
            <br />
            <span className="text-red-600">Help & Support</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
            Have a question, suggestion, or need help with a blood request?
            Feel free to reach out to us. Our team is always ready to assist you.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[280px] sm:h-[350px] lg:h-[400px]">
          <img src={asserts.ContactHeroImg} alt="BloodCare medical support" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-transparent to-transparent" />
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute -bottom-8 left-1/2 h-16 w-[65%] -translate-x-1/2 rounded-[50%] bg-red-600" />
    </section>
  );
};

export default ContactHero;