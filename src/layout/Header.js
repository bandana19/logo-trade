import ImageDetails from "@/components/ImageDetails";
import ModalFile from "@/components/ModalFile";
import React, { Fragment, useRef, useState } from "react";

const Header = () => {
  const inputFileRef = useRef();
  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
        
    <header className="header-area">
      <ModalFile openModal={openModal} setOpenModal={setOpenModal} />
      <img className="logo" src="image/img-1.jpg" alt="image" />
     <div className=" main-text-box">
     <input className="text-box" type="text" placeholder="Enter Brand...." />
     <input className="text-file" type="file" ref={inputFileRef} />
     <button
    className="upload-btn"
    onClick={() => inputFileRef.current.click()}
  >
    Upload
  </button>
  <button className="search-btn" onClick={() => setOpenModal(true)}>
  Search
</button>
     </div>
    </header>
    </Fragment>
  );
};
export default Header;
