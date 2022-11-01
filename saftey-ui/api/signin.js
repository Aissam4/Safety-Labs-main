import axios from 'axios';
import { showNotification } from '@mantine/notifications';
import { BiError } from 'react-icons/bi';
import { API_URL } from './urls';

export default async function signin({ username, password }, form, setLoading) {
	let resp = false;
	await axios
		.post(API_URL.LOGIN, { username, password })
		.then((res) => {
			if (res.status == 200) {
				if (typeof window != undefined) {
					localStorage.setItem('token_safety_labs', res.data.jwt);
					if (localStorage.getItem('token_safety_labs'))
						return resp = '/dashboard';
				}
			}
			showNotification({
				title: 'Error',
				message: 'Something went wrong',
				icon: <BiError />,
				color: 'red',
			});
			setLoading(false);
		})
		.catch((err) => {
			if (err.response?.status == 403) {
				if (err.response?.data?.message?.username) {
					form.setFieldError('username', err.response?.data?.message?.username);
				}

				if (err.response.data?.message?.password) {
					form.setFieldError('password', err.response?.data?.message?.password);
				}
			} else {
				showNotification({
					title: 'Error ...',
					message: 'Something went wrong',
					color: 'red',
					duration: 5000,
					icon: <BiError />,
				});
			}
			setTimeout(() => {
				setLoading(false);
			}, 100);
		});
	return resp;
}
