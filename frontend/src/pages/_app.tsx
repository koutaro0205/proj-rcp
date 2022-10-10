import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const SITE_TITLE = "zuborecipes";
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
        <title key="title">{SITE_TITLE}</title>
        {/*
        <meta name="title" content={SITE_TITLE} key="meta:title" />
        <meta name="description" content={SITE_DESCRIPTION} key="meta:description" />
        <meta property="og:title" content={SITE_TITLE} key="meta:og:title" />
        <meta property="og:description" content={SITE_DESCRIPTION} key="meta:og:description" />
        <meta property="og:image" content={`${publicRuntimeConfig.domainUrl}/static/images/icon/icon-512.png`} key="meta:og:image" />
        <meta property="og:site_name" content={SITE_NAME} /> */}
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="556485011968079" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@truck2hand" /> */}
      </Head>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
