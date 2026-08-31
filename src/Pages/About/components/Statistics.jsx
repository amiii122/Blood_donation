import { Users, Droplet, Heart, MapPin } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      number: "12,500+",
      label: "Registered Donors",
    },
    {
      icon: Droplet,
      number: "8,700+",
      label: "Units Donated",
    },
    {
      icon: Heart,
      number: "2,300+",
      label: "Lives Saved",
    },
    {
      icon: MapPin,
      number: "40+",
      label: "Cities Covered",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 overflow-hidden rounded-lg bg-gradient-to-r from-red-700 to-red-600 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div key={stat.label} className={`flex flex-col items-center justify-center px-3 py-6 text-center text-white lg:py-7 ${index < 2 ? "border-b border-red-500 lg:border-b-0" : ""} ${index % 2 === 0 ? "border-r border-red-500 lg:border-r" : "lg:border-r"} ${index === 3 ? "lg:border-r-0" : ""}`}>
              <Icon className="mb-2 h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />

              <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                {stat.number}
              </h3>

              <p className="mt-1 text-[10px] text-red-100 sm:text-xs lg:text-sm">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Statistics;