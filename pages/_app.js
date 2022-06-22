import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
        <link rel="icon" href='/favicon-32x32.png'/>
      </Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
