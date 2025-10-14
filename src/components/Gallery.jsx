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
      <div className="columns-2 md:columns-3 lg:columns-4 space-y-4">
        <div className=" bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="/images/catgirl1.jpg"
            alt="img-1"
            className="h-auto max-w-full object-cover object-top"
          />
        </div>
        <div className=" bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="/images/catgirl2.jpg"
            alt="img-2"
            className="h-auto max-w-full object-cover object-top"
          />
        </div>
        <div className=" bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="/images/catgirl3.jpg"
            alt="img-3"
            className="h-auto max-w-full object-cover object-top"
          />
        </div>
        <div className=" bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="/images/catgirl4.jpg"
            alt="img-4"
            className="h-auto max-w-full object-cover object-top"
          />
        </div>
        <div className=" bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="/images/catgirl5.jpg"
            alt="img-5"
            className="h-auto max-w-full object-cover object-top"
          />
        </div>
        <div className=" bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="/images/catgirl6.jpg"
            alt="img-6"
            className="h-auto max-w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
