import React from 'react';
import App, { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';
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
          <PageTransition timeout={200} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </Layout>
        <style jsx global>
          {`
          .page-transition-enter {
            opacity: 0;
            transform: translateY(-20px);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translateY(0px);
            transition: opacity 200ms, transform 200ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
        `}

        </style>
      </Container>
    );
  }
}

export default MyApp;
