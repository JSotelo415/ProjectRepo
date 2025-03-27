import React from "react";
// import AnimatedBackground from "../../componants/AnimatedBackground";

const HomePage = () => {
  return (
    <section
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      {/* <AnimatedBackground /> */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          paddingTop: "10vh",
          color: "white",
        }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>This is the homepage.</p>
      </div>
    </section>
  );
};

export default HomePage;
