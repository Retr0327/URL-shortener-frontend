import Head from 'next/head';
import { getCookie } from 'cookies-next';
import type { AppProps } from 'next/app';
import { ColorScheme } from '@mantine/core';
import { GetServerSidePropsContext } from 'next';
import DarkThemeContext from '@context/DarkTheme';

function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps, colorScheme } = props;

  return (
    <>
      <Head>
        <title>URL shortener</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <DarkThemeContext colorScheme={colorScheme}>
        <Component {...pageProps} />
      </DarkThemeContext>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

export default App;
