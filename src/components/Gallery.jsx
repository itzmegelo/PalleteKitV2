// components/Gallery.jsx
import React from "react";

const images = [
  "/images/catgirl1.jpg",
  "/images/catgirl2.jpg",
  "/images/catgirl3.jpg",
  "/images/catgirl4.jpg",
  "/images/catgirl5.jpg",
  "/images/catgirl6.jpg",
];

const Gallery = () => {
  return (
    <section className="py-12 px-4 md:px-12 bg-gray-100 dark:bg-gray-900 w-full">
      <h2 className="text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        <span className="text-[#6366f1]">Anime</span> Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-70 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
