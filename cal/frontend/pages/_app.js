import "../styles/globals.css";

import { AuthProvider } from "./lib/authentication";
import StylesBase from "./primitives/StylesBase";
import Head from "next/head";
import Layout from "./components/Layout";
import { useApollo } from './lib/apolloClient';
import { ApolloProvider } from '@apollo/client';



// import {
// 	ApolloClient,
// 	InMemoryCache,
// 	ApolloProvider,
// 	useQuery,
// 	gql,
// } from "@apollo/client";
// const client = new ApolloClient({
// 	uri: "http://localhost:3000/api/graphql",
// 	cache: new InMemoryCache(),
// });

function MyApp({ Component, pageProps }) {
	const apolloClient = useApollo(pageProps.initialApolloState);
	return (
		<ApolloProvider client={apolloClient}>
		<AuthProvider>
			<Head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Calendly</title>
          </Head>
		  <StylesBase />
		  <Layout>
            <Component {...pageProps} />
		  </Layout>
		  </AuthProvider>
		</ApolloProvider>
	);
}
export default MyApp;
