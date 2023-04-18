import '@/css/styles.css';
import { UserProvider } from '@/utils/UserContext';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
	return (
		<UserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserProvider>
	);
}
