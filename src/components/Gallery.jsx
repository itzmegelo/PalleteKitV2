// components/Gallery.jsx
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
      <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-gray-900 dark:text-white">
        <span className="text-[#6366f1]">Anime</span> Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <LazyLoadImage
              src={src}
              alt={`Gallery ${index + 1}`}
              className=" object-cover"
              effect="blur" // adds smooth blur placeholder
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
