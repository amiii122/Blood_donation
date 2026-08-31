import { ArrowRight } from "lucide-react";
import { asserts } from "../../../assets/assets";

const AboutCTA = () => {
  return (
    <section className="bg-red-50 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">

        {/* Image */}
        <div className="flex justify-center lg:justify-start">
          <img src={asserts.BeHroImg} alt="Donate blood and save lives" className="h-auto w-full max-w-sm object-contain sm:max-w-md lg:max-w-lg" />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-red-600">
            Make a Difference
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Be a Hero.
            <br />
            <span className="text-red-600">Donate Blood.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-gray-600 sm:text-base lg:mx-0">
            Your blood can be the reason for someone's tomorrow. Join us
            today and be a part of this life-saving mission.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <button className="flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-red-700">
              Become a Donor
              <ArrowRight size={16} />
            </button>

            <button className="rounded-md border border-red-600 bg-white px-5 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50">
              Request Blood
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCTA;