import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import "./index.css";
import App from "./App";

//redux
import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Auth0Provider
    domain="dev-ibf6aac7bajrka4r.us.auth0.com"
    clientId="hJasE2KgvT9XWTRun3wkGmowxz99gGex"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <App />
  </Auth0Provider>
  </Provider>
);
