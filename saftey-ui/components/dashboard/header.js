import { createStyles, Center, Header, Container, Group, Button, Text, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { Menu, Burger, Divider } from '@mantine/core';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
	inner: {
		height: HEADER_HEIGHT,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		cursor: 'pointer',
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},
	},

	linkLabel: {
		marginRight: 5,
	},
}));

export function HeaderAction({id}) {
	const router = useRouter();
	const { classes } = useStyles();
	const [opened, { toggle }] = useDisclosure(false);

	const links = [
		//{ label: 'Dashboard', link: '/dashboard' },
		//{ label: 'Users', link: '/users' },
		//{ label: 'Reports', href: '/reports' },
		{ label: 'Settings', href: `/settings` },
	];

	const items = links?.map((link) => {
		return (
			<a
				key={link.label}
				href={link.href}
				className={classes.href}
				onClick={(event) => (event.preventDefault(), router.push(link.href))}
			>
				{link.label}
			</a>
		);
	});

	const logout = () => {
		localStorage.removeItem('token_safety_labs');
		window.location.href = '/';
	};

	return (
		<Header height={HEADER_HEIGHT} sx={{ borderBottom: 0, width: '100%' }} mb={20}>
			<Container className={classes.inner} fluid>
				<Group>
					<Menu shadow='md' width={200}>
						<Menu.Target>
							<Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />
						</Menu.Target>

						<Menu.Dropdown>
							{items.map((item) => {
								return <Menu.Item key={item.key}>{item}</Menu.Item>;
							})}
						</Menu.Dropdown>
					</Menu>
					<Center>
						<Image src='Safety-Labs-logo.png' width='50px' style={{cursor: 'pointer'}} onClick={() => {
							router.push('/dashboard');
						}} />
					</Center>
				</Group>
				<Center>
					<Group spacing={5} className={classes.links}>
						{items}
					</Group>
					<Button
						radius='lg'
						color='violet'
						sx={{ height: 40 }}
						onClick={logout}
						styles={{
							root: {
								'&:hover': {
									backgroundColor: '#6b46c1',
								},
								'&:active': {
									backgroundColor: '#6b46c1',
								},
								marginLeft: "20px",
							},
						}}
					>
						Logout
					</Button>
				</Center>
			</Container>
			<Divider color={'gray.2'} />
		</Header>
	);
}
