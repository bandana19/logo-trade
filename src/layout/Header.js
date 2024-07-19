import React, { Fragment } from "react";

const Header = ({ setOpenModal }) => {

   

  return (
    <Fragment>
      <img className="logo" src="image/img-1.jpg" alt="image" />
      <div className="image-box">
        <input className="text-box" type="text" placeholder="Enter Brand...." />
        {/* <input type="file"/> */}
        <button className="upload-btn">Uploade</button>
        <button className="search-btn" onClick={() => setOpenModal(true)}>
          Search
        </button>
      </div>
    </Fragment>
  );
};

export default Header;
