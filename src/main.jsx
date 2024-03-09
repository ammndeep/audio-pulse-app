import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import CartStore from "./app/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={CartStore}>
    <App />
  </Provider>
);
