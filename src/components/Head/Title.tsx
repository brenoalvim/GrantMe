interface TitleProps {
  name: string;
}

import Head from "next/head";

export default function Title(props: TitleProps) {
  return (
    <>
      <Head>
        <title>{props.name} • GrantMe</title>
      </Head>
    </>
  );
}
