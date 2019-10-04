import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./about.css";

function About() {
  return (
    <div className="container-fluid">
      <div id="aboutUsPageHeroDiv" className="row">
        <div className="col-12">
          <h1 className="text-center">About Us</h1>
          <span className="text-center seperatorLine"></span>
        </div>
      </div>
      <div className="row" id="carousel">
        <div className="col-12">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/organic1-large.JPG?text=First slide&bg=373940"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/organic3.JPG?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/organic4.PNG?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="row" id="aboutRow">
        <div className="col-12 col-sm-5">
          <div id="imgDiv" className="card">
            <img id="aboutImg" src="images/about1.PNG" alt="aboutImg" />
          </div>
        </div>
        <div className="col-12 col-sm-7">
          {/* <div id="heading">
            <h1>About Us</h1>
          </div> */}
          <div id="firstPara">
            <h2>Eat Clean, Live Healthy</h2>
            <p>
              <strong>Go Green </strong> the Garden and Organic store is an
              initiative to provide quality Organic food, Gardening and
              environment education related products at Ankleshwar area. The
              store is located at prime business hub on Valia road a fastest
              growing business location. Our main objective is to provide
              marketing outlets to farmers and rural producer engaged in organic
              food production and rural artisans to their handicrafts items
              along with the environment friendly gardening products.
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
