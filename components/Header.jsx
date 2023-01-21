import Head from "next/head";
import { NEXT_PUBLIC_APP_NAME } from "../utils/env";

export default function Header({ title, content }) {
  return (
    <Head>
      <title>
        {NEXT_PUBLIC_APP_NAME} - {title}
      </title>
      <meta name="description" content={content} />
      <link rel="icon" href="/logo.ico" />
    </Head>
  );
}
