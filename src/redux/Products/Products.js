import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProducts } from "./productSlice";
const Products = () => {
  const { Products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProducts());
  }, []);
  if (loading) {
    return (
      <div>
        <h3> LOADING...! </h3>
      </div>
    );
  }
  return (
    <div className="App">
      {Products.map((item) => {
        return (
          <div key={item.id}>
            <h4> {item.title} </h4>
            <img alt={item.title} src={item.image} width={100} />
            <p> {item.description} </p>
            <button> {item.price}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
