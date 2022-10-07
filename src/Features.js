import React from 'react';
import {
	Container,
	Row,
	Col
} from "reactstrap";
export default function features()
{
	return (
		<div>
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
					<h5><strong>Safety collabs&nbsp;:&nbsp;&nbsp;</strong>is a bot that make assigning roles easy and fast, the bot can do bulk assign of a specific role to a single or multiple members</h5>
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
					<h5><strong>daily mint &nbsp;:&nbsp;&nbsp;</strong>the bot can track all daily mints and display it to members, this way you can never miss a mint </h5>
					<h5><strong>check floor price&nbsp;:&nbsp;&nbsp;</strong>you can track down any collection FP from server with  a quick command</h5>
                    <br />
					<h5><strong>token prices&nbsp;:&nbsp;&nbsp;</strong>the bot  tracks the prices of any token, and can display on your server.</h5>
                    <br />
					<h5><strong>raid-to-earn&nbsp;:&nbsp;&nbsp;</strong>you can create a raid contest for members and reward them</h5>
                    <br />
                  </div>
                </Col>
              </Row>
            </Container>
		</div>
	);
}