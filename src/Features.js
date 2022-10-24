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
					<div className='feature_content'>
						<p><strong><b>Safety collabs&nbsp;:&nbsp;&nbsp;</b></strong>This BOT is designed to make assigning roles convenient and quick. The BOT comes with a newly developed function that can “bulk-assign” a specific role to multiple members. The command only requires you to type the following: /assign-role (role) to list (winners#1111 winner2#1111 winner3#1111)</p>
						<br />
						<p><strong><b>Purge inactive whitelist members&nbsp;:&nbsp;&nbsp;</b></strong>This BOT sends messages to your community and reminds them to stay active in order to continue holding a specified role. Additionally, the BOT comes with a dashboard that allows you to keep track of active members</p>
						<br />
						<p><strong><b>Wallets collector&nbsp;:&nbsp;&nbsp;</b></strong>This BOT allows you to collect wallets from Whitelisted members automatically</p>
						<br />
						<p><strong><b>Discord Lock&nbsp;:&nbsp;&nbsp;</b></strong>This BOT allows you to set a password for your discord Server to provide added security measures</p>
						<br />
						<p><strong><b>Twitter Sales&nbsp;:&nbsp;&nbsp;</b></strong>This BOT tracks sales of your NFT Project and updates the selected twitter page with posts containing details of the sales</p>
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
					<div className='feature_content'>
						<p><strong><b>daily mint &nbsp;:&nbsp;&nbsp;</b></strong>This BOT tracks all daily mints and displays it on your discord. This allows you to never miss a mint again</p>
						<br />
						<p><strong><b>check floor price&nbsp;:&nbsp;&nbsp;</b></strong>This BOT allows you to track down any collection’s Floor Price with a simple command: /fp (collection-name)</p>
						<br />
						<p><strong><b>token prices&nbsp;:&nbsp;&nbsp;</b></strong>This BOT tracks the prices of any token(BTC, SOL, ETH, etc.) and displays it on your server</p>
						<br />
						<p><strong><b>raid-to-earn&nbsp;:&nbsp;&nbsp;</b></strong>This BOT allows you to create raid contests for members and reward them. Our system provides an easy set-up for task requirements, descriptions, mentions, and awards for completing tasks.</p>
						<br />
					</div>
                  </div>
                </Col>
              </Row>
            </Container>
		</div>
	);
}