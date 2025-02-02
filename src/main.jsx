import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Provider } from "react-redux";
import store from "./app/store.js";
import GoogleTranslate from "./components/GoogleTranslate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <GoogleTranslate />
  </Provider>
);
