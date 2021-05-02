import "../styles/globals.css";

import { Provider } from "react-redux";
import React from "react";

import { useStore } from "../redux_tools/store";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
