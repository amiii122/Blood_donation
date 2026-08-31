import React from "react";

const cards = [
  {
    type: "text",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
    title: "Our Mission",
    description:
      "To make blood donation simple, accessible and reliable for everyone by connecting donors with recipients quickly and efficiently.",
  },
  {
    type: "text",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Our Vision",
    description:
      "A world where no life is lost due to unavailability of blood and every person has easy access to safe blood when needed.",
  },
  {
    type: "list",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" />
      </svg>
    ),
    title: "Our Values",
    items: ["Compassion", "Integrity", "Transparency", "Community"],
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 flex-shrink-0 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
      <path d="m8 12.5 2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MissionVisionValuesSection() {
  return (
    <section className="bg-white  px-6 py-16 sm:px-10 lg:px-20">
      <div className="mb-12  text-center">
        <h2 className="inline-block text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Our Mission, Vision &amp; Values
        </h2>
        <div className="mx-auto mt-2 h-1 w-14 rounded-full bg-red-600" />
         </div>

      <div className="flex flex-col  gap-6 sm:flex-row sm:flex-wrap sm:justify-center">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex items-center flex-col text-center gap-4 rounded-xl border border-gray-100 p-6 shadow-sm sm:min-w-[260px] sm:basis-[30%]"
          >
            <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
              {card.icon}
            </div>
            <h3 className="text-base font-bold text-gray-900">{card.title}</h3>

            {card.type === "text" ? (
              <p className="text-sm leading-relaxed text-gray-600">
                {card.description}
              </p>
            ) : (
              <ul className="flex flex-wrap items-center justify-center gap-2">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}