import React from 'react'

export default function Works() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-12">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {[
          {
            step: "1",
            title: "Generate",
            desc: "Click 'Generate Palette' and input what color you want, create color combos instantly.",
          },
          {
            step: "2",
            title: "Customize",
            desc: "Tweak shades, lock favorites, and explore harmonious blends.",
          },
          {
            step: "3",
            title: "Save & Share",
            desc: "Export to HEX, RGB, or CSS and share your palette online.",
          },
        ].map((item) => (
          <div key={item.step}>
            <div className="text-5xl font-bold text-primary mb-4">
              {item.step}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
