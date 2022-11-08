import { Container, LoadingOverlay } from '@mantine/core';
import Head from 'next/head';
import { HeaderAction } from '../components/dashboard/header';
import { Grid, Text } from '@mantine/core';
import get_buyers from '../api/get_buyers';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Card_buyer from '../components/dashboard/card_buyer';
import { useEffect } from 'react';

import get_me from '../api/get_me';

export default function Setting() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const router = useRouter();

	useEffect(() => {
		get_me().then((res) => {
			if (res.data) {
				setUser(res.data);
				setLoading(false);
			} else {
				router.push('/login');
			}
		}
		).catch((err) => {
			console.log(err.response);
		});
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
				<ChangePasswordForm user={user} />
			</Container>
		</div>
	);
}

// {id, password, newPassword}
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import ChangePassword from '../api/change_password';
import { showNotification } from '@mantine/notifications';
import { IconBug } from '@tabler/icons';

function ChangePasswordForm({ user }) {
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

	const HandleSubmit = async (values) => {
		setLoading(true);
		const data = values;

		ChangePassword(data, user.data.id).then((res) => {
			if (res.data) {
				showNotification({
					title: 'Success',
					message: 'Password changed successfully',
					color: 'green',
				});
				// clear form
				form.reset();
				setLoading(false);
			} else {
				console.log(res.data);
				setLoading(false);
			}
		}
		).catch((err) => {
			console.log(err.response);
			setLoading(false);
			showNotification({
				title: 'Error',
				message: err.response.data.message,
				color: 'red',
				icon: <IconBug />,
				position: 'top-right',
			})
		}
		);
	};

	return (
		<Box sx={{ maxWidth: 300 }} mx='auto'>
			<LoadingOverlay visible={loading} overlayBlur={2} loaderProps={{ size: 'sm', color: 'violet', variant: 'bars' }} />
			<form onSubmit={form.onSubmit((values) => HandleSubmit(values))}>
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
