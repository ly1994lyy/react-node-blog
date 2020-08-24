import Head from "next/head";
import Body from "../components/Body";
import { Container } from "@material-ui/core";


export default function Home() {
  return (
      <div>
        <Head>
          <title>Create Next App</title>
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

      <Body>
        <Container>
          woshi
        </Container>
      </Body>
      
      </div>
  );
}
