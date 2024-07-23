import React from "react";

const Footer = () => {
  return (
  <footer className=" row footer ">
 <div className=" col-md-3 footer-container-1 text-center">
  <h3>Company</h3>
  
  <p className="mt-2 ml-1">
  <p>About Us</p>
  <p>Our Servicse</p>
  <p>Privacy Policy</p>
  <p>Affiliate Program</p>
  </p >
 </div>

 <div className=" col-md-3 footer-container-1  text-center">
 <h3>Get Help</h3>
 <p className="mt-2 ml-1">
 <p>FAQ</p>
 <p>Shipping</p>
 <p>Returns</p>
 <p>Order Status</p>
 <p>Payment Options</p>
 </p>
 </div>

 <div className=" col-md-3 footer-container-1  text-center">
 <h3>Online Shop</h3>
 <p className="mt-2 ml-1">
 <p>Watch</p>
 <p>Bag</p>
 <p>Shose</p>
 <p>Dress</p>
 </p>
 </div>

 <div className=" col-md-3 footer-container-1  text-center">
 <h3>Follow Us</h3>
 <div className="mt-2 ">
 <div className="arrow-1"><i class="fa fa-twitter"></i></div>
<div className="arrow-1"><i class="fa fa-facebook"></i></div>
<div className="arrow-1"><i class="fa fa-instagram"></i></div>
<div className="arrow-1"><i class="fa fa-behance"></i></div>
</div>
 </div>
  </footer>
  );
};


export default Footer;
