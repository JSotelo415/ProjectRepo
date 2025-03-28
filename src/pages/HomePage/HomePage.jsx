import React from "react";
import "../../styles/HomePage.scss";
// import "../../styles/HomePage.scss";
import AnimatedBackground from "../../componants/AnimatedBackground";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      {/* Full-screen landing section */}
      <AnimatedBackground />
      <section className="hero">
        {/* <AnimatedBackground /> */}
        <div>
          {/* <AnimatedBackground /> */}
          <h1>Welcome to My Portfolio</h1>
          <br></br>
          <Link to="/about">
            <button>Learn about my experiences</button>
          </Link>
        </div>
      </section>

      {/* Main content section */}
    </div>
  );
};

export default HomePage;
