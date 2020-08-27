import Head from "next/head";
import Main from "../components/Main";
import { CssBaseline } from "@material-ui/core";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Code Life</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <CssBaseline />
      <Main>
        我是首页
      </Main>
      
    </div>
  );
}
