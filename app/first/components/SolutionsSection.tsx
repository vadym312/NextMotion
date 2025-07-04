"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: "clinical_notes.webp",
      title: "Individuals",
    },
    {
      icon: "medical.webp",
      title: "Clinics",
    },
    {
      icon: "medication.webp",
      title: "Clinic chains",
    },
    {
      icon: "marketing.webp",
      title: "Marketing",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#081F4D] mb-4 sm:mb-8">
            All in one solution designed by a doctor for aesthetic clinics
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-5xl mx-auto px-4">
            Nextmotion is a comprehensive ecosystem of solutions offering all
            the tools you need, whether you are an individual physician, clinic
            manager, or chain clinic owner.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4 w-12 sm:w-16 h-12 sm:h-16">
                <OptimizedImage
                  src={solution.icon}
                  alt={solution.title}
                  width={70}
                  height={70}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                {solution.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
