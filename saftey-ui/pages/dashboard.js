import { Container, LoadingOverlay } from '@mantine/core';
import Head from 'next/head';
import { HeaderAction } from '../components/dashboard/header';
import { Grid, Text } from '@mantine/core';
import get_buyers from '../api/get_buyers';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Card_buyer from '../components/dashboard/card_buyer';
import { useEffect } from 'react';

export default function Dashboard() {
	const [buyers, setBuyers] = useState([]);
	const [userid, setUserid] = useState('');
	const [loading, setLoading] = useState(true);
    const router = useRouter();
	const data = router.query;

    const getbuyers = () => {
        get_buyers()
            .then((res) => {
                setBuyers(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                if (err?.response?.status === 401) {
                    router.push("/");
                }
            });
    }

	useEffect(() => {
		if (typeof window != undefined) {
			getbuyers();
		} else {
			setLoading(true);
		}
	}, [loading]);

	return (
		<div>
			<Head>
				<title>SafetyLabs · admin</title>
				<meta name='description' content='' />
				<link rel='icon' href='/Safety-Labs-logo.png' />
			</Head>
			<Container size='lg' style={{ height: '100vh' }}>
                <LoadingOverlay visible={loading} overlayBlur={2} loaderProps={{ size: 'sm', color: 'violet', variant: 'bars' }}/>
				<HeaderAction id={data.id} />
                <Text size='xl' weight={700} px={10} mt='md' mb={"sm"}>Buyers</Text>
				<Grid justify='center' px={10}>
					{buyers?.map((buyer) => {
						return (
							<Grid.Col xs={12} sm={6} md={4} key={buyer.id}>
								<Card_buyer getbuyers={getbuyers} buyer={buyer} />
							</Grid.Col>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
}
