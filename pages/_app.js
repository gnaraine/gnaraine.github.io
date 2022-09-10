// This default export is required in a new `pages/_app.js` file.

import "../styles/style.css";
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
