import React, { Fragment } from "react";
import App from "next/app";
import Head from "next/head";

// styled-components
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/styled-components/GlobalStyle";
import styled_components_theme from "../src/styles/styled-components/theme";

// config
import { SERVICE_NAME } from "../src/config";

// NProgress
import NProgress from "nprogress";
import "../src/styles/nprogress.css";

import Router from "next/router";

// global style
import "../src/styles/calendar.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Brauz - {SERVICE_NAME}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
        </Head>
        <StyledComponentsThemeProvider theme={styled_components_theme}>
          <Fragment>
            <GlobalStyle />
            <Component {...pageProps} />
          </Fragment>
        </StyledComponentsThemeProvider>
      </Fragment>
    );
  }
}

export default MyApp;
