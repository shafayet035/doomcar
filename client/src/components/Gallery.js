import React from "react";

const images = [
  "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg",
  "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
  "https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg",
  "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
  "https://images.pexels.com/photos/72581/pexels-photo-72581.jpeg",
  "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg",
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((el) => (
        <img key={el} src={el} alt="" className="img-fluid" />
      ))}
    </div>
  );
};

export default Gallery;
