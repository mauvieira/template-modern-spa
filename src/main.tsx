import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import("./mocks/browser").then(({ worker }) => {
  worker.start({ onUnhandledRequest: "bypass" });

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
