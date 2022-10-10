import React from "react";
import './style.css'
import {
	Container,
	Button,
	Row,
	Col
} from "reactstrap";

import 'react-vertical-timeline-component/style.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "Navbar.js";
import Footer from "Footer.js";
import Roadmap from "Roadmap.js";
import Features from "Features.js";
import Pricing from "Pricing.js";
export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  AOS.init();
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
          <div className="Landing-page w-100 ">
            <Row className="row-grid text-left mb-5">
              <Col className="Safe-text" lg="6.5" md="6">
                <h1 className="text-white">
					Safe servers and facilitate community managment
                </h1>
                <p className="text-white mb-3">
					Safety Labs provides a set of bots that help keep your server safe and CM easy!...
                </p>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-discord" />
                    </Button>
                  </div>
                </div>
              </Col >
              <Col className="block mb-5" lg="40" md="6">
                <img
                  alt="by fulvector on Freepik"
                  className="blockchain mb-5 pb-5 w-100 img-fluid"
                  src={require("./assets/images/Blockchian.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
		<div id="empty"></div>
        <section id="features">
          <section>
			  <Features />
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
			  <Roadmap />
      </Container>
        </section>
         <section className="d-flex align-items-center flex-column pricing-redirection section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
			<Pricing />
        </section>
        <Footer />
      </div>
    </>
  );
}
