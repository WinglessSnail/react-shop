import { useEffect, useState } from "react";
import "../styles/product-display.css"

const Display = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setproducts(result)
        },
        (error) => {
          alert("products not found");
        }
      );
  }, []);

  return (
    <div className="row p-3" id="div">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
const Card = (props) => {
  const { product } = props;

  return (
    <div className="card col-3 m-1 bg-light" id="card">
      <img src={product.img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, laudantium enim error consequuntur optio officia.</p>
        <h6>{product.price}</h6>
        <button id="btn" class="btn btn-outline-warning">More details</button>
      </div>
    </div>
  );
};


export default Display