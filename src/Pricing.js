import React,{useState,useEffect} from 'react';
import './assets/css/style.css'
import {
	ListGroupItem,
	ListGroup,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Row,
	Col
} from "reactstrap";
import { toast } from 'react-toastify';
import { clusterApiUrl, Connection, SystemProgram, Transaction } from '@solana/web3.js';
export default function Pricing()
{
	const [price,setPrice] = useState('')
	useEffect(()=> {
		fetchPrice()
	},[])
	const getProvider = () => {
		if ('phantom' in window) {
			const provider = window.phantom?.solana;
			if (provider?.isPhantom)
				return provider;
		}
		window.open('https://phantom.app/', '_blank');
	};
	const fetchPrice = async() => {
		await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd')
		.then((response) => response.json()).then((data) => setPrice(data.solana.usd));
	}
	async function buy() {
		let oneUsd = 1 / price;
		let packagePrice = oneUsd * 0.02 * 1000000000;
		let packagePriceInt = parseInt(packagePrice)
		const provider = getProvider()
		const message = `To avoid digital dognappers, sign below to authenticate with Safety Labs`;
		const encodedMessage = new TextEncoder().encode(message);
		await provider.signMessage(encodedMessage, "utf8");
		const network = clusterApiUrl("mainnet-beta");
		const connection = new Connection(network);
		let blockhash = (await connection.getLatestBlockhash("finalized")).blockhash;
		let transaction = new Transaction({
			recentBlockhash:blockhash,
			feePayer:provider.publicKey
		});
		transaction.add(
			SystemProgram.transfer({	
				fromPubkey: provider.publicKey,
				toPubkey: '71ayYExpAaobk5YmWVcbyWqSr2QPtBhzMjJ6ZaHPuu87',
				lamports: packagePriceInt,
			})
		);
		const { signature } = await provider.signAndSendTransaction(transaction);
		return (await connection.getSignatureStatus(signature));
	}
	function MakeTransaction(){
		buy().then((res, err) => {
			if (err === undefined && !res.value){
				toast.success('Transaction Succefully', {theme: "dark"});
				return ;
			}
			}).catch(() => {toast.error('Transaction Failed', {theme: "dark"},);})
	}
	return (
		<div className='w-75'>
			 <h1 className="features text-center">PRICING</h1>
            <Row>
              <Col xs="12" sm="12" md="12" xl="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/robot-search.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" >
                        <h4 className="text-uppercase">Wallet collector</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup className='card-text'>
                        <ListGroupItem>Collect whitelisted members wallet</ListGroupItem>
                        <ListGroupItem>Accurate inside your server</ListGroupItem>
                        <ListGroupItem>Easy and quick</ListGroupItem>
                        <ListGroupItem><p className='price'><br /><b>25$/</b>month</p></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button onClick={() => {MakeTransaction()}} className="btn btn-simple" color="primary">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
				<div className="space-between"></div>
              </Col>
              <Col xs="12" sm="12" md="12" xl="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/robot-money.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">FP/Token checker</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup  className='card-text'>
                        <ListGroupItem>Track any collection Floor price</ListGroupItem>
                        <ListGroupItem>Tracks the prices of any token</ListGroupItem>
                        <ListGroupItem>Display the prices on your server</ListGroupItem>	
                        <ListGroupItem><p className='price'><br /><b>25$/</b>month</p></ListGroupItem>	
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  onClick={() => {MakeTransaction()}} className="btn-simple" color="success">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
				<div className="space-between"></div>
              </Col>
              <Col xs="12" sm="12" md="12" xl="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/robot-message.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Purge inactive wl members</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup className='card-text'>
                        <ListGroupItem>Tracking your active members</ListGroupItem>
                        <ListGroupItem>Warn your members about being active</ListGroupItem>
                        <ListGroupItem>send messages to your community</ListGroupItem>
                        <ListGroupItem><p className='price'><br /><b>50$/</b>month</p></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  onClick={() => {MakeTransaction()}} className="btn-simple" color="info">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
				<div className="space-between"></div>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col xs="12" sm="12" md="12" xl="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/robot-send.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Safety collabs</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup className='card-text'>
                        <ListGroupItem>assigning roles convenient and quick</ListGroupItem>
                        <ListGroupItem>Bulk assign of a specific role</ListGroupItem>
                        <ListGroupItem>Quick Collabs</ListGroupItem>
                        <ListGroupItem><p className='price'><br /><b>80$/</b>month</p></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  onClick={() => {MakeTransaction()}} className="btn-simple" color="primary">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
				<div className="space-between"></div>
              </Col>
              <Col xs="12" sm="12" md="12" xl="4">
                <Card 
					className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/lock-robot.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Discord Lock</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup className='card-text'>
                        <ListGroupItem>Set a password of your discord bot</ListGroupItem>
                        <ListGroupItem>provide added security measures</ListGroupItem>
                        <ListGroupItem>Secure your discord server</ListGroupItem>
                        <ListGroupItem><p className='price'><br /><b>80$/</b>month</p></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button onClick={() => {MakeTransaction()}} className="btn-simple" color="success">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
				<div className="space-between"></div>
              </Col>
              <Col xs="12" sm="12" md="12" xl="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/robot-hi.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Daily mint</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup className='card-text'> 
                        <ListGroupItem>Track all daily mints</ListGroupItem>
                        <ListGroupItem>Display daily mints on your discord</ListGroupItem>
                        <ListGroupItem>You can never miss a mint</ListGroupItem>
                        <ListGroupItem><p className='price'><br /><b>25$/</b>month</p></ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button onClick={() => {MakeTransaction()}} className="btn-simple" color="info">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
			<div className="space-between"></div>
			<Row className='last-card-container'>
			  <Col xs="12" sm="12" md="12" xl="4">
                <Card className="card-coin card-plain">
					<CardHeader>
					<img
						alt="..."
						className="img-center img-fluid"
						src={require("assets/robots/lock-sales.png")}
					/>
					</CardHeader>
					<CardBody>
						<Row>
							<Col className="text-center" md="12">
								<h4 className="text-uppercase">Twitter Sales</h4>
								<hr className="line-info" />
							</Col>
							<ListGroup className='card-text'>
								<ListGroupItem>Tweet sales details of your NFT Project</ListGroupItem>
								<ListGroupItem>help you to grow your community</ListGroupItem>
								<ListGroupItem>You can Set any twitter page</ListGroupItem>
								<ListGroupItem><p className='price'><br /><b>80$/</b>month</p></ListGroupItem>
							</ListGroup>
						</Row>
					</CardBody>
					<CardFooter className="text-center">
					<Button onClick={() => {MakeTransaction()}} className="btn-simple" color="info">
						Buy
					</Button>
					</CardFooter>
				</Card>
			<div className="space-between"></div>
			</Col>
			  <Col xs="12" sm="12" md="12" xl="4">
                <Card className="card-coin card-plain">
					<CardHeader>
					<img
					alt="..."
					className="img-center img-fluid"
					src={require("assets/robots/robot-earn.png")}
					/>
					</CardHeader>
					<CardBody>
						<Row>
							<Col className="text-center" md="12">
								<h4 className="text-uppercase">Raid to earn</h4>
								<hr className="line-info" />
							</Col>
							<ListGroup className='card-text'>
								<ListGroupItem>Create a raid contest for members</ListGroupItem>
								<ListGroupItem>Reward your members for The raid</ListGroupItem>
								<ListGroupItem>Provide an easy set-up for tasks</ListGroupItem>
								<ListGroupItem><p className='price'><br /><b>80$/</b>month</p></ListGroupItem>
							</ListGroup>
						</Row>
					</CardBody>
					<CardFooter className="text-center">
					<Button onClick={() => {MakeTransaction()}} className="btn-simple" color="info">
						Buy
					</Button>
					</CardFooter>
				</Card>
			</Col>
			</Row>
		</div>
	);
}
