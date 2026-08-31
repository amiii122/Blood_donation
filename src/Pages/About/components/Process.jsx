import { UserPlus, Search, Bell, Heart } from "lucide-react";
import Step from '../../../Components/Step/index'
const Process = () => {
  const steps = [
    {
      icon: UserPlus,
      count: "1",
      title: "Register",
      disc: "Donors register and create their profile on BloodCare.",
    },
    {
      icon: Search,
      count: "2",
      title: "Search / Request",
      disc: "Recipients search for donors or request the blood they need.",
    },
    {
      icon: Bell,
      count: "3",
      title: "We Notify",
      disc: "Available donors near the required location are notified.",
    },
    {
      icon: Heart,
      count: "4",
      title: "Donate & Save",
      disc: "Donors connect with recipients and help save a life.",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How We Make a Difference
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-red-600" />
        </div>

        {/* Steps */}
        <div className="flex  z-11 items-center justify-evenly">

              {
                steps.map((ele)=>(
                    <Step params={ele}/>
                ))
              }
        </div>
        <div className="relative -top-23  w-[60vw] mx-auto border-t-2 border-dashed border-red-200  "/>
      </div>
    </section>
  );
};

export default Process;