
import { Card, Text, Badge, Button, Group } from '@mantine/core';
import delete_buyer from '../../api/delete_buyer';
import { useState } from 'react';
import { LoadingOverlay } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

function Card_buyer({ buyer, getbuyers}) {
	const [loading, setLoading] = useState(false);

    const deleteCardBuyer = (id) => {
		setLoading(true);
        delete_buyer(id).then((res) => {
                getbuyers();
		}).catch((err) => {
			setLoading(false);
            console.log(err.response);
			// push notification
			showNotification({
				title: 'Error',
				message: err.response.data.message,
				type: 'error',
				duration: 5000,
				color: 'red',
			});
        })
    }

	return (
		<Card shadow='sm' p='lg' radius='md' withBorder style={{overflowWrap: "break-word"}}>
			<LoadingOverlay visible={loading} overlayBlur={2} loaderProps={{ size: 'sm', color: 'violet', variant: 'bars' }}/>
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

export default Card_buyer;