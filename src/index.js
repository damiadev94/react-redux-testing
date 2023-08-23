import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./app/store.js";
import { Provider } from "react-redux";
import "./styles/styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
