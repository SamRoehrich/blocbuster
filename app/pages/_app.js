import React from "react";  
import Head from "next/head";  
import { ApolloProvider } from "@apollo/react-hooks";  
import withData from "../lib/apollo";

import Page from '../components/Page'

const App = ({ Component, pageProps, apollo }) => {  
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>Bloc Buster UI</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
};

// Wraps all components in the tree with the data provider
export default withData(App);