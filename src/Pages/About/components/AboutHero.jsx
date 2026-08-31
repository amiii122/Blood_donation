import { asserts } from "../../../assets/assets";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row lg:items-center  justify-center">

        {/* Left Content */}
        <div className="z-10 px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">About Us</p>

          <h1 className="max-w-xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            We Connect.
            <br />
            We Care. We <span className="text-red-600">Save Lives.</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
            BloodCare is a platform dedicated to connecting voluntary blood donors with people in need. We believe a single act of kindness can bring hope, strength and a new chance to life.
          </p>

          <button className="mt-6 rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-red-700">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-[430px ] ">
          <img src={asserts.aboutHeroImg}  className="mx-auto h-[90%] rounded-xl w-[85%] object-cover object-center" />
         
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute -bottom-8 left-1/2 h-16 w-[65%] -translate-x-1/2 rounded-[50%] bg-red-600" />
    </section>
  );
};

export default AboutHero;