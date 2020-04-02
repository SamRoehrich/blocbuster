import App, { Container } from 'next/app'
import Page from '../components/Page'
import { ApolloProvider } from '@apollo/react-hooks'
import { ThemeProvider } from 'styled-components'
import withData from '../lib/withData';

const theme = {
  black: "black"
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, apollo, pageProps } = this.props;

    console.log(apollo)

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);