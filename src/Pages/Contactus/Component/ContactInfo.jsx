import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactInfo = [
    { icon: MapPin, title: "Our Location", details: ["123, Health Avenue,", "Lahore, Pakistan"] },
    { icon: Phone, title: "Phone Number", details: ["+92 300 1234567", "+92 42 12345678"] },
    { icon: Mail, title: "Email Address", details: ["info@lifelink.com", "support@lifelink.com"] },
    { icon: Clock, title: "Working Hours", details: ["Monday - Saturday", "9:00 AM - 6:00 PM"] },
  ];

  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border border-gray-100 bg-white px-5 py-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600">
                <Icon size={27} strokeWidth={2} />
              </div>

              <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                {item.title}
              </h3>

              <div className="mt-3 space-y-1 text-sm leading-5 text-gray-600">
                {item.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>

              <div className="mt-4 h-0.5 w-9 rounded-full bg-red-600" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactInfo;