import React from 'react';
import {
	Container,
	Row,
	Col
} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function features()
{
	AOS.init();
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
                  <div data-aos="fade-left" data-aos-duration="900" className="pl-md-5">
                    <h1 className="bots" >PRE MINT BOTS</h1>
					<div className='feature_content'>
						<p><strong><b>Safety collabs&nbsp;:&nbsp;&nbsp;</b></strong>is a bot that make assigning roles easy and fast, the bot can do bulk assign of a specific role to a single or multiple members</p>
						<br />
						<p><strong><b>Purge inactive whitelist members&nbsp;:&nbsp;&nbsp;</b></strong>this bot can send message to your members and warn them about being active to keep a specified role also also the bot allows you to keep track of your active members on a dashboard</p>
						<br />
						<p><strong><b>Wallets collector&nbsp;:&nbsp;&nbsp;</b></strong>you can collect wallet of your whitelisted members easy and quick and accurate inside your server!</p>
						<br />
						<p><strong><b>Discord Lock&nbsp;:&nbsp;&nbsp;</b></strong>you can set a password and only members with password can get access to your server!</p>
					</div>
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
					<div className='feature_content'>
						<p><strong><b>daily mint &nbsp;:&nbsp;&nbsp;</b></strong>the bot can track all daily mints and display it to members, this way you can never miss a mint </p>
						<p><strong><b>check floor price&nbsp;:&nbsp;&nbsp;</b></strong>you can track down any collection FP from server with  a quick command</p>
						<br />
						<p><strong><b>token prices&nbsp;:&nbsp;&nbsp;</b></strong>the bot  tracks the prices of any token, and can display on your server.</p>
						<br />
						<p><strong><b>raid-to-earn&nbsp;:&nbsp;&nbsp;</b></strong>you can create a raid contest for members and reward them</p>
						<br />
					</div>
                  </div>
                </Col>
              </Row>
            </Container>
		</div>
	);
}