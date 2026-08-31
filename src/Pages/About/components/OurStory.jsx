import { asserts } from "../../../assets/assets";

const OurStory = () => {
  return (
    <section className="bg-white px-4  py-12 sm:px-6 lg:px-8 lg:py-16 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">

        {/* Content */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-600">
            Our Story
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Together, We Can Make a Difference
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-6 text-gray-600 sm:text-base">
            <p>
              BloodCare was founded with a simple but powerful idea — no one
              should suffer because blood is not available.
            </p>

            <p>
              We started as a small initiative and today are a trusted
              community of thousands of donors and volunteers working together
              to save lives every day.
            </p>

            <p>
              Together, we can build a healthier and stronger society.
            </p>
          </div>

          <button className="mt-7 rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-red-700">
            Join Our Community
          </button>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-xl">
          <img src={asserts.StoryImage} alt="Blood donation community" className="h-[260px] w-full object-cover sm:h-[350px] lg:h-[400px]" />
        </div>

      </div>
    </section>
  );
};

export default OurStory;