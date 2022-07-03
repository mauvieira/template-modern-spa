import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const prepare = async (): Promise<void> => {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    worker.start();
  }
};

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
