import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import '../css/materialize.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
