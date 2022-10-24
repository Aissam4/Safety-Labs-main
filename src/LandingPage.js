import React from "react";
import './assets/css/style.css'
import {
	Button,
	Row,
	Col
} from "reactstrap";
import 'react-vertical-timeline-component/style.min.css';
import Navbar from "Navbar.js";
import Footer from "Footer.js";
import Roadmap from "Roadmap.js";
import Features from "Features.js";
import Pricing from "Pricing.js";
export default function LandingPage() {
	window.Buffer = window.Buffer || require("buffer").Buffer;
	React.useEffect(() => {
		document.body.classList.toggle("landing-page");
		return function cleanup() {
			document.body.classList.toggle("landing-page");
		};}, []);
	return (
    <> 
      <Navbar index={1} />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="Landing-page w-100">
            <Row className="row-grid text-left mb-5">
              <Col className="Safe-text" lg="6.5" md="6">
                <h1 className="text-white">
					Safe servers and facilitate community managment
                </h1>
                <p className="text-white mb-3">
					Safety Labs provides a set of bots that help keep your server safe and community managment easy
                </p>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
					  href="https://twitter.com/Safetylabs_"
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
					  target="_blank">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
					  href="https://docs.safetylabs.io/"
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
					  target="_blank">
                      <i className="fa fa-book" />
                    </Button>
                  </div>
                </div>
              </Col >
              <Col className="block mb-5">
                <img
                  alt="by fulvector on Freepik"
                  className="blockchain mb-5 pt-4 img-fluid"
                  src={require("./assets/images/Blockchian1.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
		<div id="empty"></div>
        <section id="features">
			  <Features />
        </section>
        <section className="section section-lg">
          <img
            alt=""
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt=""
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt=""
            className="path3"
            src={require("assets/img/path2.png")}
          />
		<Roadmap />
        </section>
         <section className="d-flex align-items-center flex-column pricing-redirection section section-lg section-coins pt-0">
			<img
				alt=""
				className="path"
				src={require("assets/img/path3.png")}
			/>
			<div id="empty-pricing"></div>
			<Pricing />
        </section>
        <Footer index={1}/>
      </div>
    </>
  );
}
