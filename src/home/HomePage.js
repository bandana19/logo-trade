import ImageFile from "@/components/ImageFile";
import ModalFile from "@/components/ModalFile";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import React, { Fragment, useState } from "react";

const HomePage = () => {
  const [isAdminSelected, setIsAdminSelected] = useState(!false);
  const [isUserSelected, setIsUserSelected] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleAdminClick = () => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setIsUserSelected(false);
      setIsAdminSelected(false);
    }, 5000);
  };

  const handleSubmit = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setIsUserSelected(false);
      setIsAdminSelected(false);
    }, 5000);
  };

  //  Header

  const [openModal, setOpenModal] = useState(false);

  return (
    <Fragment>
      <ModalFile openModal={openModal} setOpenModal={setOpenModal} />
      {isUserSelected && (
        <div className="button-box">
          <button className="admin-button " onClick={handleAdminClick}>
         
            {showLoader ? (
              <i class="fa fa-spinner fa-spin spinner-icons"></i>
            ) : (
              " Admin"
            )}
          </button>
          <button className="user-button " onClick={handleSubmit}>
            {loader ? (
              <i class="fa fa-spinner fa-spin spinner-icons"></i>
            ) : (
               " User"
            )}
          </button>
        </div>
      )}
      {isAdminSelected && <div className="main-box"></div>}
      <Header setOpenModal={setOpenModal} />
      <ImageFile />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
