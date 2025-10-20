import React from "react";
import { Palette, Sparkles, Share2 } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "AI Color Harmony",
      description:
        "Generate perfectly balanced color palettes using AI. Get instant combinations that match your style and purpose.",
      icon: <Sparkles className="text-[#6366f1]" />,
    },
    {
      title: "Smart Palette Editor",
      description:
        "Fine-tune hues, shades, and tones in real time with our intuitive editor — built for designers and developers alike.",
      icon: <Palette className="text-[#6366f1]" />,
    },
    {
      title: "One-Click Sharing",
      description:
        "Share your palettes instantly with teammates or export them to Figma, CSS, or your favorite design tools.",
      icon: <Share2 className="text-[#6366f1]" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="lg:text-center">
          <h2 className="text-base text-[#6366f1] font-semibold tracking-wide uppercase">
            Explore Creativity
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
            Powerful Tools for Color Lovers
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-700 dark:text-gray-300 lg:mx-auto">
            PaletteKit helps you create, customize, and share stunning color
            palettes — effortlessly and beautifully.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col justify-center items-center text-center p-6 bg-gray-50 dark:bg-white/5 rounded-xl shadow-xl border border-[#6366f1]/30 transition duration-300 hover:shadow-[#6366f1]/50"
              >
                <dt className="flex flex-col items-center">
                  <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#6366f1]/10 mb-4">
                    {feature.icon}
                  </div>
                  <p className="mt-2 text-lg leading-6 font-medium text-black dark:text-white">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-600 dark:text-gray-400 text-center max-w-sm">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
