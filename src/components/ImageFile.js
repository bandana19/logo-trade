import React, { Fragment, useState } from "react";
import ImageDetails from "./ImageDetails";
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

  const [showDetails,setShowDetails]=useState(false)
  const [data,setData]=useState([])

  const showImageDeta =(index)=>{
    setShowDetails(true)
    setData(showImage[index])
   
  }
  return (
    <Fragment>
        <ImageDetails showDetails={showDetails} setShowDetails={setShowDetails} data={data}/>
  
    <div className="image-container">
      {showImage.map((item,index) => (
        <div className="image-list">
            <img className="image-item" src={item.image} 
            onClick={()=>showImageDeta(index)}/>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
    </Fragment>
  );
};

export default ImageFile;
