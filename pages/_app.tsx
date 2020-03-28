import GlobalStyles from "../components/atoms/globalstyle";
// import "react-image-lightbox/style.css";

function AliceApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default AliceApp;
