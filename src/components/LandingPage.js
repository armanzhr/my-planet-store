import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing-page">
    <h2>Welcome to Plant Store</h2>
    <p>Your one-stop shop for beautiful houseplants!</p>
    <Link to="/products">Get Started</Link>
  </div>
);

export default LandingPage;
