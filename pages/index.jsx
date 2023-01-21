import React from "react";
import axios from "axios";
import Home1 from "../components/Home/Home1";
import Home2 from "../components/Home/Home2";
import Home3 from "../components/Home/Home3";
import Carousel from "../components/Home/Carousel";
import Home4 from "../components/Home/Home4";
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_APP_NAME } from "../utils/env";
import Header from "../components/Header";

export async function getStaticProps() {
  const response = await axios.get(`${NEXT_PUBLIC_API_URL}/skill/static`);
  const res = await axios.get(`${NEXT_PUBLIC_API_URL}/user/worker`);

  return {
    props: {
      data: response.data.data,
      worker: res.data.data,
    },
    revalidate: 10,
  };
}

const Landing = ({ data, worker }) => {
  return (
    <>
      <Header
        title="Profile"
        content={`Profile page for ${NEXT_PUBLIC_APP_NAME}`}
      />
      <Home1 />
      <Home2 />
      <Home3 data={data} />
      <Carousel worker={worker} />
      <Home4 />
    </>
  );
};

Landing.layout = "Layout";

export default Landing;
