import { useEffect, useState } from "react";
import "../styles/product-display.css";
import Card from "./product/card";

const product = (props) => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products.json")
      .then((res) => res.json())
      .then(
        (result) => {
          if (props.search === "") {
            setproducts(result);
          } else {
            const searchResult = result.filter(
              (product) => product.name.includes(props.search)
            );
            setproducts(searchResult);
          }
        },
        (error) => {
          alert("products not found");
        }
      );
  }, [props.search]);

  return (
    <div className="row " id="div">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};



export default Display;
