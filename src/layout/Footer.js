import React from "react";

const Footer = () => {
  return (
  <footer className=" footer">
 <div className="footer-container-1">
  <h3> LOGO TREND PROJECTS</h3>
  <div className="arrow-1"><i class="fa fa-twitter"></i></div>
  <div className="arrow-1"><i class="fa fa-facebook"></i></div>
  <div className="arrow-1"><i class="fa fa-instagram"></i></div>
  <div className="arrow-1"><i class="fa fa-behance"></i></div>
 </div>

 <div className="footer-container-2">
  <p>
  <span>About Us</span>
  <span>Contact Us</span>
  <span>Customer Support</span>
  <span>Jobs</span>
  <span>Legal</span>
  </p>
 </div>

 <div className="footer-container-3">
  <h4>Subscribe To Logo Trend</h4>
  <input type="email" placeholder="Enter Email"/>
  <button>Submit</button>
 </div>
  </footer>
  );
};

export default Footer;
