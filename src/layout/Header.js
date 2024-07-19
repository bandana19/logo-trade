import ModalFile from "@/components/ModalFile";
import React, { useRef, useState } from "react";

const Header = () => {
  const inputFileRef = useRef()
  const [openModal,setOpenModal]=useState(false)
  return (

    <header className="header-area">
      <ModalFile openModal={openModal} setOpenModal={setOpenModal}/>
      <div className="box">
        <img className="logo" src="image/img-1.jpg" alt="image" />
        <input className="text-box" type="text" placeholder="Enter Brand...." />
        <div>
       
        <input className="text-file" type="file" ref={inputFileRef} />
        <button className="upload-btn"
          onClick={() => inputFileRef.current.click()}>Uploade</button>
          </div>
        <button className="search-btn" onClick={() => setOpenModal(true)}>
          Search
        </button>
        </div>
    </header>
  );
};

export default Header;
