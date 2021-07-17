import React, { useState } from "react";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import FindProperty from "../../components/findProperty/findProperty";
import Card from "../../components/card/card";

// React modal scss is imported in main styles

const LandingPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="landing-page-wrapper">
      <Navbar />
      <Header />
      <div className="landing-page-content">
        <h3>Explore</h3>
        <div className="landing-page-cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="landing-page-content">
        <h3>Explore</h3>
        <div className="landing-page-cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
