import React from "react";
// import posed from 'react-pose';
// import { animations } from 'react-animation';
import { easings } from "react-animation";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import "./mainImg.css";

const slideStyle = {
  animation: `slide-in ${easings.easeInOutBack} 1500ms forwards`
};
const popInStyle = {
  animation: `pop-in ${easings.easeInQuad} 1500ms backwards`
};
function MainImg() {
  return (
    <div id="heroImgDiv" className="container-fluid">
      <div className="row" id="headingRow">
        <div className="col-12 col-sm-12" id="mainPageHeadingsDiv">
          <h1 id="mainHeading" className="text-center" style={slideStyle}>
            Go Green
          </h1>
          <h2 className="text-center" style={popInStyle}>
            The Garden & Organic Store
          </h2>
          <h3 className="text-center" style={popInStyle}>
            Quality, Value and Service
          </h3>
        </div>
      </div>
      {/* <div id="mainPageHeadings" >
          <img src="./images/greenCircle.png"  id ="greenCircle" alt="greenCircle logo" />
        <h1 id="mainHeading" className="text-center"> Go Green</h1>
        <h2 className="text-center">The Garden & Organic Store</h2>
        <h3 className="text-center">Quality, Value and Service</h3>
      </div> */}
      <div className="row">
        <div className="col-12 col-sm-12" id="mainPageText">
          <ScrollAnimation animateIn="fadeInDown" duration="2">
            <h1 className="text-center" style={popInStyle}>
              Welcome To Go Green
            </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration="1">
            <p>
              Go Green” is your convenient source for premium quality organic
              food and garden supply. Most items are available as all natural,
              organic and handmade. We offer many choices of flavors, sizes, and
              combinations. Organic food is not only delicious, it is also
              bursting with great nutrition!
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default MainImg;
