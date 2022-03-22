import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { ToastProvider } from "react-toast-notifications";
import { ApolloProvider } from "@apollo/client";
// import {Event} from '../components/googleAnalytics'
import { AuthProvider } from "../lib/authentication";

import StylesBase from "../primitives/StylesBase";
import { useApollo } from "../lib/apolloClient";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// export function reportWebVitals(metrics) {
//   console.log('metrics values', metrics)
//   console.log('metrics name', metrics.name);
//   const {id, name, label, value} = metrics;
//   if(window.GA_INITIALIZED) {
//     Event(`Next.js ${label} metric`, name, Math.round(name === "CLS" ? value * 1000 : value), id)
//   }
// }

const MyApp = ({ Component, pageProps}) => {

  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ToastProvider>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <title>Inventory</title>
          </Head>
          <StylesBase />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ApolloProvider>
    </ToastProvider>
  );
};

export default MyApp;
