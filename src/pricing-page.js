import React, {useMemo} from "react";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import { Container } from "reactstrap";
// import axios from "axios";
import { useState } from "react";
import { Stepper, Image, Button, Group, TextInput, Card, Text, Badge} from '@mantine/core';
import Navbar from './Navbar';
import './assets/css/style.css'
import { useForm } from '@mantine/form';
import Footer from "Footer";

import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    GlowWalletAdapter,
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import 'react-vertical-timeline-component/style.min.css';
require('@solana/wallet-adapter-react-ui/styles.css');


export default function Pricing_page()
{
	const solNetwork = WalletAdapterNetwork.Mainnet;
    const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);
	// const { connection } = useConnection();
	// const { publicKey, sendTransaction } = useWallet();
	const [active, setActive] = useState(0);
	let BotName = "";
	let BotImage = "";
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ solNetwork }),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter(),
            new SolletExtensionWalletAdapter(),
            new SolletWalletAdapter(),
        ],
        [solNetwork]
    );
	// function post_data(data) {
	// 	axios.post("http://localhost:1337/api/orders", {"data": data}).then(res => {
	// 		console.log(res)
	// 	}).catch(err => {
	// 		console.log(err)
	// 	})
	// }
	React.useEffect(() => {
		document.body.classList.toggle("landing-page");
		return function cleanup() {
		  document.body.classList.toggle("landing-page");
		};
	  }, []);
	const form = useForm({
		initialValues: {
			Twitterusername: '',
			DiscordUsername: '',
			DiscordInvite: '',
			DiscordBot: '',
			Reference:'',
		},
		validate: (values) => {
			if (active === 0) {
				return {
					Twitterusername:
					values.Twitterusername.trim().length < 4
					? 'Username must include at least 4 characters'
					: values.Twitterusername[0] !== '@'
					? 'Twitter username must begin with @'
					: null,
					DiscordUsername:
					values.DiscordUsername.trim().length < 5
					? 'DiscordUsername must include at least 5 characters'
					: values.DiscordUsername.lastIndexOf("#") === -1 || !(/[0-9]{4,}$/.test(values.DiscordUsername))
					? 'DiscordUsername must end with #1234'
					: null
				};
			}
			if (active === 1) {
				return {
					DiscordInvite: values.DiscordInvite.length < 6
					? 'Discord invite must include at least 6 characters'
					: /^(ftp|http|https):\/\/discord.gg\/[^ "]+$/.test(values.DiscordInvite)
					? null
					: 'Discord invite must be https://discord.gg/id',
				};
			}
			return {};
		},
	});
	const nextStep = () =>
		setActive((current) => {
			if (form.validate().hasErrors) {
				return current;
			}
			return current < 3 ? current + 1 : current;
	});
	const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
		if (window.location.hash === '#WalletCollector')
		{
			form.values.DiscordBot = BotName = "Wallet collector";
			BotImage = "robot-search.png"
		}
		else if (window.location.hash === '#TokenChecker')
		{	
			form.values.DiscordBot = BotName = "FP/Token checker";
			BotImage = "robot-money.png"
		}
		else if (window.location.hash === '#purgeInactiveMembers')
		{
			form.values.DiscordBot = BotName = "Purge inactive members";
			BotImage = "robot-message.png"
		}
		else if (window.location.hash === '#SafetyCollabs')
		{
			form.values.DiscordBot = BotName = "Safety collabs";
			BotImage = "robot-send.png"
		}
		else if (window.location.hash === '#DiscordLock')
		{
			form.values.DiscordBot = BotName = "Discord Lock";
			BotImage = "lock-robot.png"
		}
		else if (window.location.hash === '#DailyMint')
		{
			form.values.DiscordBot = BotName = "Daily mint";
			BotImage = "robot-hi.png"
		}
		else if (window.location.hash === '#RaidToEarn')
		{
			form.values.DiscordBot = BotName = "Raid to earn";
			BotImage = "robot-earn.png"
		}
		else if (window.location.hash === '#TwitterSales')
		{
			form.values.DiscordBot = BotName = "Twitter Sales"
			BotImage = "lock-"
		}
		else
			window.location.href = "404";
	return (
	<>
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets}>
				<WalletModalProvider>
					<Navbar index={2} />
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
							className="shapes wave"
							src={require("assets/img/waves.png")}
						/>
						<img
							alt="..."
							className="shapes circle"
							src={require("assets/img/cercuri.png")}
							/>
					<div className="Landing-page w-100 ">
						<Stepper color="cyan.3" active={active} breakpoint="sm">
							<Stepper.Step className="step-container" label="First step" description="Personal information">
								<TextInput label="Twitter Username"  placeholder="@Safetylabs" {...form.getInputProps('Twitterusername')} />
								<TextInput label="Discord Username" placeholder="Safety#0000" {...form.getInputProps('DiscordUsername')} />
							</Stepper.Step>
							<Stepper.Step className="step-container" label="Second step" description="Discord server">
								<TextInput label="Discord invite" placeholder="https://discord.gg/ID" {...form.getInputProps('DiscordInvite')} />
								<TextInput label="Referred by" placeholder="Optional" {...form.getInputProps('Reference')} />
							</Stepper.Step>
							<Stepper.Step className="step-container" label="Final step" description="Payment">
								<Card shadow="sm" p="lg" radius="md" withBorder>
									<Card.Section className="d-flex justify-content-center">
											<Image className="form-bot" height={200} width={150} alt="" src={require(`./assets/robots/${BotImage}`)} />
									</Card.Section>
									<Group position="apart" mt="md" mb="xs">
										<Text weight={500}>{`Twitter Username : ${form.values.Twitterusername}`}</Text>
										<Badge color="pink" variant="light">
										On Sale
										</Badge>
									</Group>
									<Group position="apart" mt="md" mb="xs">
										<Text weight={500}>{`Discord Username : ${form.values.DiscordUsername}`}</Text>
									</Group>
									<Group position="apart" mt="md" mb="xs">
										<Text weight={500}>{`Discord invite : ${form.values.DiscordInvite}`}</Text>
									</Group>
									<Group position="apart" mt="md" mb="xs">
										<Text weight={500}>{`Discord Bot : ${BotName} Bot`}</Text>
									</Group>
									<Group position="apart" mt="md" mb="xs">
									</Group>
									<Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={nextStep}>
										Confirm
									</Button>
								</Card>
							</Stepper.Step>
							<Stepper.Completed>
								<Group className="cnw">
									<WalletMultiButton />
								</Group>
							</Stepper.Completed>
					</Stepper>
					<Group position="right" mt="xl">
						{active < 2 && active > 0 && (
							<Button variant="default" onClick={prevStep}>
								Back
							</Button>
						)}
						{active < 2 && <Button className="next-step-container" onClick={nextStep}>Next step</Button>}
					</Group>
						</div>
					</div>
					<section></section>
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
				</Container>
					</section>
					<section className="d-flex align-items-center flex-column pricing-redirection section section-lg section-coins">
					<img
						alt="..."
						className="path"
						src={require("assets/img/path3.png")}
					/>
					</section>
					<Footer index={2} />
				</div>
			</WalletModalProvider>
		</WalletProvider>
		</ConnectionProvider>
	  </>
);
}
