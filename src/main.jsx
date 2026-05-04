import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Context from "./Context/FoodContext";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Context>
      <Auth0Provider
        domain='https://turbo-taste1.vercel.app/'
        clientId='fB67lF9wH7e27fokhODdyhBfBbdxUZhx'
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </Context>
  </React.StrictMode>,
);
