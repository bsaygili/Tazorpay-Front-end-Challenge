import axios from "axios";
import { useEffect, useReducer } from "react";
import Card from "./components/Card";
import Products from "./components/Products";
import { cardReducer } from "./reducers/cardReducer";

function App() {
  const [state, dispatch] = useReducer(cardReducer, {
    products: [],
    card: [],
  });

  console.log("state", state);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    // Populate products array
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Products state={state} dispatch={dispatch} />
      <Card state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
