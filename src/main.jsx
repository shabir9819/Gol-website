import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import PageState from "./context/Page/PageState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PageState>
      <App />
    </PageState>
  </BrowserRouter>
);
