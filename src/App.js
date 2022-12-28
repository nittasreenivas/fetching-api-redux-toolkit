import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Products from "./redux/Products/Products";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Products />
      </div>
    </Provider>
  );
}
