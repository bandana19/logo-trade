import React, { useState } from "react";
const ImageFile = () => {
  const [showImage, setShowImage] = useState([
    {
      image: "image/img-2.jpg",
      title: "UI UX Designer",
    },
    {
      image: "image/img-3.jpg",
      title: "Graphic Designer",
    },
    {
      image: "image/img-4.png",
      title: "Interior  Designer",
    },
    {
      image: "image/img-5.png",
      title: "Designer Lead",
    },
    {
      image: "image/img-2.jpg",
      title: "Graphic Designer",
    },
    {
      image: "image/img-3.jpg",
      title: "Graphic Designer",
    },
    {
      image: "image/img-4.png",
      title: "UX Designer",
    },
    {
      image: "image/img-5.png",
      title: "Multimeida Designer",
    },
    {
      image: "image/img-2.jpg",
      title: "Graphic Designer",
    },
    {
      image: "image/img-3.jpg",
      title: "Graphic Designer",
    },
    {
      image: "image/img-4.png",
      title: "Interior  Designer",
    },
    {
      image: "image/img-5.png",
      title: " UX Designer",
    },
    {
      image: "image/img-4.png",
      title: "Multimeida Designer",
    },
    {
      image: "image/img-5.png",
      title: "UI UX Designer",
    },
    {
      image: "image/img-2.jpg",
      title: "Graphic Designer",
    },
    {
      image: "image/img-3.jpg",
      title: "Multimeida Designer",
    },
    {
      image: "image/img-2.jpg",
      title: "UI UX Designer",
    },
    {
      image: "image/img-3.jpg",
      title: "Interior  Designer",
    },
  ]);
  return (
    <div className="container">
      {showImage.map((item) => (
        <div className="image-list">
          <div className="image-item-box">
            <img className="image-item" src={item.image} />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageFile;
