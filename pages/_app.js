import "@popperjs/core";
import "../styles/globals.css";
import { getCookie } from "cookies-next";
import React, { useEffect } from "react";
import { wrapper } from "../redux/store";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import NextNProgress from "nextjs-progressbar";
import LayoutTemplate from "../layouts/layout";
import { ToastContainer } from "react-toastify";

const layouts = {
  Layout: LayoutTemplate,
};

const NoLayout = ({ children }) => {
  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || NoLayout;

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <>
      <NextNProgress color="#5E50A1" />
      <ToastContainer />
      <Layout token={getCookie("token")} id={getCookie("id")}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
