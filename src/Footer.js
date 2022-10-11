import React from "react";
import { Link } from "react-router-dom";
import './assets/css/style.css'
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer({index}) {
	let scrollToFeatures = () =>
  	{
		if (index === 1)
			window.location.href = "#empty";
		else if (index === 2)
			window.location.href = "/#empty";
	}
	let scrollToRoadmap = () =>
	{
		if (index === 1)
			window.location.href = "#empty-roadmap";
		else if (index === 2)
			window.location.href='/#empty-roadmap'
	}
	let scrollToPricing = () =>
	{
		if (index === 1)
			window.location.href = "#empty-pricing";
		else if (index === 2)
			window.location.href='/#empty-pricing'
	}
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="4">
		  <a href="/"><img className="Safety-logo-footer" alt="Safety-Labs-Logo" src={require("./assets/images/Safety-Labs-logo.png")}/></a>
          </Col>
          <Col md="2">
            <Nav>
            <NavItem>
              <NavLink tag={Link} onClick={scrollToFeatures}>
                Features
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} onClick={scrollToRoadmap}>
                Roadmap
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} onClick={scrollToPricing}>
                Pricing
              </NavLink>
            </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="#">
				Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  About Us
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://twitter.com/Safetylabs_"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="#"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-discord" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
