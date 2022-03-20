import { AppProps } from 'next/app';
import '../styles/globals.css';
import  Head  from 'next/head';

function MyApp({ Component, pageProps}:AppProps):JSX.Element {
  return <>
        <Head>
          <title>Example</title>
          <link rel="stylesheet" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,regular,500,700,900&display=swap" />
        </Head>
    
         <Component {...pageProps}/> 
    </>
}

export default MyApp
