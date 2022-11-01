import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

import { Container } from '@mantine/core';
import { TextInput, Button, Group, Box, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/form';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import signin from '../api/signin';
import { useRouter } from 'next/router';

export default function Login() {
	
	const [Loading, setLoading] = useState(false);
	const router = useRouter();

	const form = useForm({
		initialValues: {
			username: '',
			password: '',
		},

		validate: {
			username: (value) => {
				return value?.length > 0 ? null : 'Invalid Username';
			},
			password: (value) => {
				return value?.length > 0 ? null : 'Invalid Password';
			},
		},
	});

	const handle_submit = (e) => {
		setLoading(true);
		signin(e, form, setLoading).then((res) => {
			console.log(res);
			if (res) {
				router.push(res);
			}
		});
		//console.log(res)
		//if (res) router.push(res);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>SafetyLabs · admin</title>
				<meta name='description' content='' />
				<link rel='icon' href='/Safety-Labs-logo.png' />
			</Head>

			<Container
				size='lg'
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<Box
					mx='auto'
					style={{
						width: '400px',
						height: '300px',
						padding: '40px',
						paddingTop: '60px',
						borderRadius: '10px',
						boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.3)',
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<LoadingOverlay visible={Loading} overlayBlur={2} loaderProps={{ size: 'sm', color: 'violet', variant: 'bars' }} />
					<form onSubmit={form.onSubmit((values) => handle_submit(values))}>
						<TextInput
							radius='lg'
							label='Username'
							icon={<AiOutlineUser />}
							placeholder='admin'
							{...form.getInputProps('username')}
							styles={() => ({
								input: {
									'&:focus': {
										borderColor: '#7048E8',
									},
								},
							})}
						/>
						<TextInput
							radius='lg'
							label='Password'
							icon={<RiLockPasswordLine />}
							placeholder='*********'
							type='password'
							{...form.getInputProps('password')}
							styles={() => ({
								input: {
									'&:focus': {
										borderColor: '#7048E8',
									},
								},
							})}
						/>

						<Group position='right' mt='md'>
							<Button radius='lg' color='violet' type='submit'>Log in</Button>
						</Group>
					</form>
				</Box>
			</Container>
		</div>
	);
}
