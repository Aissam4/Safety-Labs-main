import { Container, LoadingOverlay } from '@mantine/core';
import Head from 'next/head';
import { HeaderAction } from '../components/dashboard/header';
import { Grid } from '@mantine/core';
import get_buyers from '../api/get_buyers';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
	const [buyers, setBuyers] = useState([]);
	const [loading, setLoading] = useState(true);
    const router = useRouter();

    const getbuyers = () => {
        get_buyers()
            .then((res) => {
                setBuyers(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err.response);
                if (err.response.status === 401) {
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
				<HeaderAction />
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

import { Card, Text, Badge, Button, Group } from '@mantine/core';
import { useEffect } from 'react';
import delete_buyer from '../api/delete_buyer';

function Card_buyer({ buyer, getbuyers }) {

    const deleteCardBuyer = (id) => {
        //console.log("delete: ", id);
        delete_buyer(id).then((res) => {
                console.log(res);
                getbuyers();
        }).catch((err) => {
            console.log(err.response);
        })
    }

	return (
		<Card shadow='sm' p='lg' radius='md' withBorder style={{overflowWrap: "break-word"}}>
			<Card.Section></Card.Section>

			<Group position='apart' mt='md' mb='xs'>
				<Text weight={500}>{new Date(buyer.createdAt).toUTCString()}</Text>
				<Badge color='violet' variant='light'>
					{buyer.id}
				</Badge>
			</Group>
			<Text size='sm' color='gray'> <Text span color='violet.9' weight={400}>Twitter username: </Text>{buyer.Twitterusername}</Text>
			<Text size='sm' color='gray'> <Text span color='violet.9' weight={400}>Discord username:</Text> {buyer.DiscordUsername}</Text>
			<Text size='sm' color='gray'> <Text span color='violet.9' weight={400}>Discord invite:</Text> {buyer.DiscordInvite}</Text>
			<Text size='sm' color='gray'> <Text span color='violet.9' weight={400}>Discord Bot:</Text> {buyer.DiscordBot}</Text>
			<Text size='sm' color='gray'> <Text span color='violet.9' weight={400}>Reference:</Text> {buyer.Reference}</Text>
			<Button variant='light' color='violet' fullWidth mt='md' radius='md' onClick={() => deleteCardBuyer(buyer.id)}>delete</Button>
		</Card>
	);
}
