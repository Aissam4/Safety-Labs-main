import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

function MyApp({ Component, pageProps }) {
	return (
		<NotificationsProvider position="top-left">

			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: 'light',
				}}
			>
				<Component {...pageProps} />
			</MantineProvider>

		</NotificationsProvider>
	);
}

export default MyApp;
