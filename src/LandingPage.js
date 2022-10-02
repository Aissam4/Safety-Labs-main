import React from "react";
import './style.css'
import {
	ListGroupItem,
	ListGroup,
	Container,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Row,
	Col
} from "reactstrap";

import { VerticalTimeline, VerticalTimelineElement, SchoolIcon }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from "Navbar.js";
import Footer from "Footer.js";

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
      <Navbar />
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
				Safe servers and facilitate community managment  <br />
                </h1>
                <p className="text-white mb-3">
				Safety Labs provides a set of bots that help keep you server safe and CM easy!...
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
			  <h1  data-aos="fade-down"
				data-aos-offset="200"
				data-aos-delay="9"
				data-aos-duration="400"
				data-aos-easing="ease-in-out"
				data-aos-once="false" className="features text-center">FEATURES</h1>
			  <br/><br/><br/>
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container>
				<Row className="row-grid justify-content-between">
				<Col className="mb-5 text-center" lg="40" md="6">
                <img
				  data-aos="fade-down"
				  data-aos-delay="9"
    			  data-aos-duration="800"
                  alt="by fulvector on Freepik"
                  className="mb-5 pb-5 w-100 h-100 img-fuild"
                  src={require("./assets/images/finger-print.png")}
                />
              </Col>
                <Col md="6">
                  <div data-aos="fade-left" data-aos-delay="" data-aos-duration="900" className="pl-md-5">
                    <h1 className="bots" >PRE MINT BOTS</h1>
                    <p>Safety Labs provides a set of bots that help keep you server safe and CM easy! </p>
					<h5><strong>Safety collobs&nbsp;:&nbsp;&nbsp;</strong>is a bot that make assigning roles easy and fast, the bot can do bulk assign of a specific role to a single or multiple members</h5>
					<h5><strong>Purge inactive whitelist members&nbsp;:&nbsp;&nbsp;</strong>this bot can send message to your members and warn them about being active to keep a specified role also also the bot allows you to keep track of your active members on a dashboard</h5>
                    <br />
					<h5><strong>Wallets collector&nbsp;:&nbsp;&nbsp;</strong>you can collect wallet of your whitelisted members easy and quick and accurate inside your server!</h5>
                    <br />
					<h5><strong>Discord Lock&nbsp;:&nbsp;&nbsp;</strong>you can set a password and only members with password can get access to your server!</h5>
		
                    <br />
                  </div>
                </Col>
              </Row>
			  <br/>
			  <br/>
			  <Row className="flex-row-reverse">
				<Col className="mb-5 text-center" lg="40" md="6">
                <img
				  data-aos="fade-up-left"
				  data-aos-delay="9"
    			  data-aos-duration="800"
                  alt="by fulvector on Freepik"
                  className="mb-5 pb-5 w-100 h-100 img-fuild"
                  src={require("./assets/images/robot.png")}
                />
              </Col>
                <Col md="6">
                  <div data-aos="fade-right" data-aos-delay="11" data-aos-duration="1000" className="pl-md-5">
                    <h1 className="bots" >POST MINT BOTS</h1>
					<h5><strong>daily mint &nbsp;:&nbsp;&nbsp;</strong>the bot can track all daily mints and display it to members, this way u can never miss a mint </h5>
					<h5><strong>check floor price&nbsp;:&nbsp;&nbsp;</strong>u can track down any collection FP from server with  a quick command</h5>
                    <br />
					<h5><strong>token prices&nbsp;:&nbsp;&nbsp;</strong>the bot  tracks the prices of any token, and can display on your server.</h5>
                    <br />
					<h5><strong>raid-to-earn&nbsp;:&nbsp;&nbsp;</strong>u can create a raid contest for members and reward them</h5>
                    <br />
                  </div>
                </Col>
              </Row>
            </Container>
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
			<VerticalTimeline>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 01">
				<h4 className="vertical-timeline-element-title">- Launch our website, discord and twitter</h4>
				<h4 className="vertical-timeline-element-title">- Launch Safety Collabs BOT</h4>
				<h4 className="vertical-timeline-element-title">- Launch Purge inactive whitelist members BOT</h4>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 02">
				<h4 className="vertical-timeline-element-subtitle">- Launch Discord Lock BOT</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch Daily Mint BOT</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch Check Floor Price BOT</h4>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 03">
				<h4 className="vertical-timeline-element-subtitle">- Launch Raid-To-Earn BOT</h4>
				<h4 className="vertical-timeline-element-subtitle">- Invite huge communities to use our BOTs</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch our $STL Token</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch our raffle website</h4>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 04">
				<h4 className="vertical-timeline-element-subtitle">- Mint our Safety Labs Collection</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch staking to earn $SLT Token</h4>
				<h4 className="vertical-timeline-element-subtitle">- Offer To our holders Pre-sale of Huge/hyped Project</h4>
				<h4 className="vertical-timeline-element-subtitle">- Snipping Tool</h4>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 05">
				<h4 className="vertical-timeline-element-subtitle">- Invite Ambassador to our Project</h4>
				<h4 className="vertical-timeline-element-subtitle">- Launch our Merch</h4>
				<h4 className="vertical-timeline-element-subtitle">- Brand Collaborations</h4>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				contentStyle={{ background: 'rgba(33, 150, 243, 0)', color: '#fff', boxShadow: "none", border: "2px solid rgba(243, 83, 253, 0.5)"}}
				contentArrowStyle={{ borderRight: '7px solid  rgba(243, 83, 253, 0.5)' }}
				date="STEP 06">
				<h1 className="vertical-timeline-element-subtitle">Roadmap v2 Soon...</h1>
			</VerticalTimelineElement>
			</VerticalTimeline>
      </Container>
        </section>
        {/* <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png")}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/chester-wade.jpg")}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">Safe</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">573 K</CardTitle>
                        <p className="card-category text-white">
                          Satisfied customers
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">10 425</CardTitle>
                        <p className="card-category text-white">Business</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Getting Started</h3>
                  <p>
                    The design system comes with three pre-built pages to help
                    you get started faster. You can change the text and images
                    and you're good to go.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Choose the Bot{" "}
                  <span className="text-info">that fits your needs</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Light Coin</h4>
                        <span>Plan</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>50 messages</ListGroupItem>
                        <ListGroupItem>100 emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/etherum.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Dark Coin</h4>
                        <span>Plan</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>150 messages</ListGroupItem>
                        <ListGroupItem>1000 emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Bright Coin</h4>
                        <span>Plan</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>350 messages</ListGroupItem>
                        <ListGroupItem>10K emails</ListGroupItem>
                        <ListGroupItem>24/7 Support</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Get plan
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
