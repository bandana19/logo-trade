import ImageFile from "@/components/ImageFile";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

const HomePage = () => {
  const [adminLoader, setAdminLoader] = useState(false);
  const [userLoader, setUserLoader] = useState(false);

  const router = useRouter();
  const handleSubmit = (link) => {
    if (link == "/user") {
      setUserLoader(true);
    } else {
      setAdminLoader(true);
    }

    setTimeout(() => {
      setUserLoader(false);
      setAdminLoader(false);
      router.push(link);
    }, 2000);
  };
  return (
    <Fragment>
      <div className="main-box">
        <div className="button-box">

          <div className="admin-box">
          <i class="fa fa-user-secret admin-arrow"></i>
            <button
              className=" admin-btn"
              onClick={() => handleSubmit("/admin")}
            >
              {adminLoader ? (
                <i class="fa fa-spinner fa-spin spinner-icons"></i>
              ) : (
                " Admin"
              )}
              
            </button>
          </div>

          <div className="user-box">
          <i class="fa fa-user user-arrow"></i>
            <button className=" user-btn" onClick={() => handleSubmit("/user")}>
              {userLoader ? (
                <i class="fa fa-spinner fa-spin spinner-icons"></i>
              ) : (
                " User"
              )}
          
            </button>
          </div>
        </div>
      </div>

      <Header setOpenModal={() => {}} />
      <ImageFile />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
