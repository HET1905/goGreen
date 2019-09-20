import React from "react";
import "./about.css";

function About() {
  return (
    <div id="aboutUsPage" className="container-fluid">
      <div className="row" id="aboutRow">
        <div className="col-12 col-sm-5">
          <div id="imgDiv">
            <img id="aboutImg" src="images/about1.PNG" alt="aboutImg" />
          </div>
        </div>
        <div className="col-12 col-sm-7">
          <div id="heading">
            <h1>About Us</h1>
          </div>
          <div id="firstPara">
            <h2>Eat Clean, Live Healthy</h2>
            <p>
              Go Green the Garden and Organic store is an initiative to provide
              quality Organic food, Gardening and environment education related
              products at Ankleshwar area. The store is located at prime
              business hub on Valia road a fastest growing business location.
              Our main objective is to provide marketing outlets to farmers and
              rural producer engaged in organic food production and rural
              artisans to their handicrafts items along with the environment
              friendly gardening products.
            </p>
          </div>
          <div id="secondPara">
            <h2>Creating a Healthier Community</h2>
            <p>
              Go-Green is your one stop shop for a healthy lifestyle. We pride
              ourselves on not only stocking the highest quality organic food
              but also having eco friendly products and handmade decorative
              items. We ensure that you will find the best item for your
              specific needs
            </p>
            <p>
              We fill our shelves based on the demands of our customers and aim
              to have an extensive selection of products to ensure we are
              carrying the best product mix for a full range of diets, allergies
              and lifestyle choices.
            </p>
            <p>
              We evaluate every product to make sure that it meets our quality
              standards before putting it on the shelf. We will always strive to
              carry organic and local as often as possible. We also carry a wide
              selection of home and garden decorative articles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
