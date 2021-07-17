import React, { useState } from "react";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

// React modal scss is imported in main styles

const LandingPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="landing-page-wrapper">
      <Navbar></Navbar>
      <Header></Header>
    </div>
  );
};

export default LandingPage;
