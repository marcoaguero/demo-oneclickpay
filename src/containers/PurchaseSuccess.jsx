import React from "react";
import hero from "../assets/thank-you.jpg";

const PurchaseSuccess = () => {
  const heroStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className="py-5 flex-grow-1" style={heroStyle}>
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">
            <p> Thanks for your purchase and...</p>{" "}
            <p>...make sure to ROCK on!</p>
          </h1>
        </div>
      </div>
    </section>
  );
};
export default PurchaseSuccess;
