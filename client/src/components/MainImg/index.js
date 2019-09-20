import React from "react";
import "./mainImg.css";

function MainImg() {
  return (
    <div id="heroImgDiv" className="container-fluid">
      <div className="row" id="headingRow">
        <div className="col-12 col-sm-12" id="mainPageHeadings">
          <h1 id="mainHeading" className="text-center">
            {" "}
            Go Green
          </h1>
          <h2 className="text-center">The Garden & Organic Store</h2>
          <h3 className="text-center">Quality, Value and Service</h3>
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
          <p>
            Go Green” is your convenient source for premium quality organic food
            and garden supply. Most items are available as all natural, organic
            and handmade. We offer many choices of flavors, sizes, and
            combinations. Organic food is not only delicious, it is also
            bursting with great nutrition!
          </p>
        </div>
      </div>
      {/* <div id="mainPageText">
        <p>
          Go Green” is your convenient source for premium quality organic food
          and garden supply. Most items are available as all natural, organic
          and handmade. We offer many choices of flavors, sizes, and
          combinations. Organic food is not only delicious, it is also bursting
          with great nutrition!
        </p>
      </div> */}
    </div>
  );
}

export default MainImg;
