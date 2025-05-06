import React from "react";

const images = [
  "/img/photo1.jpg",
  "/img/photo2.jpg",
  "/img/photo3.jpg",
  "/img/photo4.jpg",
];

const GallerySection = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-700">Our Journey</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Memory ${index + 1}`}
            className="rounded-lg shadow-md object-cover w-full h-48"
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
