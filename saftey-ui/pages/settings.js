import { Container, LoadingOverlay } from '@mantine/core';
import Head from 'next/head';
import { HeaderAction } from '../components/dashboard/header';
import { Grid, Text } from '@mantine/core';
import get_buyers from '../api/get_buyers';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Card_buyer from '../components/dashboard/card_buyer';
import { useEffect } from 'react';

export default function Setting() {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const id = router.query.id;

	useEffect(() => {
		//if (typeof window != undefined) {
		//	getbuyers();
		//} else {
		//	setLoading(true);
		//}
	}, [loading]);

	return (
		<div>
			<Head>
				<title>SafetyLabs · admin</title>
				<meta name='description' content='' />
				<link rel='icon' href='/Safety-Labs-logo.png' />
			</Head>
			<Container size='lg' style={{ height: '100vh' }}>
				<LoadingOverlay
					visible={loading}
					overlayBlur={2}
					loaderProps={{ size: 'sm', color: 'violet', variant: 'bars' }}
				/>
				<HeaderAction />
				<ChangePasswordForm id={id} />
			</Container>
		</div>
	);
}

// {id, password, newPassword}
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import ChangePassword from '../api/change_password';

function ChangePasswordForm({ id }) {
	const [loading, setLoading] = useState(false);
	const form = useForm({
		initialValues: {
			password: '',
			NewPassword: '',
		},

		validate: {
			password: (value) => (value?.length > 1 ? null : 'Please enter a valid password'),
			NewPassword: (value) => (value?.length > 7 ? null : 'Password must be at least 8 characters'),
		},
	});

	const onSubmit = async () => {
		setLoading(true);
		const data = await form.submit();
		ChangePassword(data, id);
	};

	return (
		<Box sx={{ maxWidth: 300 }} mx='auto'>
			<LoadingOverlay visible={loading} overlayBlur={2} loaderProps={{ size: 'sm', color: 'violet', variant: 'bars' }} />
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<TextInput
					withAsterisk
					styles={() => ({
						input: {
							'&:focus': {
								borderColor: '#7048E8',
							},
						},
					})}
					label='Password'
					placeholder='********'
					{...form.getInputProps('password')}
				/>
				<TextInput
					styles={() => ({
						input: {
							'&:focus': {
								borderColor: '#7048E8',
							},
						},
					})}
					withAsterisk
					label='New Password'
					placeholder='********'
					{...form.getInputProps('NewPassword')}
				/>

				<Group position='right' mt='md'>
					<Button type='submit' color='violet'>
						save
					</Button>
				</Group>
			</form>
		</Box>
	);
}
