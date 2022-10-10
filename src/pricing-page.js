import React from "react";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import Navbar from './Navbar';
import { Container } from "reactstrap";
import { useState } from "react";
import { Stepper, Button, Group, TextInput, PasswordInput, Code } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
	ListGroupItem,
	ListGroup,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Row,
	Col
} from "reactstrap";
export default function Pricing_page(){
	React.useEffect(() => {
		document.body.classList.toggle("landing-page");
		return function cleanup() {
		  document.body.classList.toggle("landing-page");
		};
	  }, []);
	const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      username: '',
      DiscordUsername: '',
      DiscordInvite: '',
      website: '',
      github: '',
    },
    validate: (values) => {
      if (active === 0) {
        return {
          username:
            values.username.trim().length < 4
              ? 'Username must include at least 4 characters'
              : values.username[0] !== '@'
			  ? 'Twitter username must begin with @'
			  : null,
          DiscordUsername:
            values.DiscordUsername.trim().length < 5
              ? 'DiscordUsername must include at least 5 characters'
			  : values.DiscordUsername.lastIndexOf("#") === -1
			  ? 'DiscordUsername must include #1234'
              : null,
        };
	}
      if (active === 1) {
        return {
          DiscordInvite: values.DiscordInvite.length < 6
		  	? 'Discord invite must include at least 6 characters'
			: /^(ftp|http|https):\/\/[^ "]+$/.test(values.DiscordInvite)
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
return (
	<>
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

			
			<Stepper active={active} breakpoint="sm">
				<Stepper.Step label="First step" description="Personal information">
					<TextInput label="Twitter Username"  placeholder="Twitter Username" {...form.getInputProps('username')} />
					<TextInput label="Discord Username" placeholder="Discord Username" {...form.getInputProps('DiscordUsername')} />
				</Stepper.Step>
				<Stepper.Step label="Second step" description="Discord server">
					<TextInput label="Discord invite" placeholder="Discord invite" {...form.getInputProps('DiscordInvite')} />
				</Stepper.Step>
				<Stepper.Step label="Final step" description="Payment">
					{/* <TextInput label="Website" placeholder="Website" {...form.getInputProps('website')} />
					<TextInput
						mt="md"
						label="GitHub"
						placeholder="GitHub"
						{...form.getInputProps('github')}
					/> */}
					
				</Stepper.Step>
				<Stepper.Completed>
					Completed! Form values:
					<Code block mt="xl">
						{JSON.stringify(form.values, null, 2)}
					</Code>
				</Stepper.Completed>
		</Stepper>

		<Group position="right" mt="xl">
			{active < 2 && (
			<Button variant="default" onClick={prevStep}>
				Back
			</Button>
			)}
			{active < 2 && <Button onClick={nextStep}>Next step</Button>}
			{active === 2 && <Button onClick={nextStep}>Buy</Button>}
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
      </div></>
);
}