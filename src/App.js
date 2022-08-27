import { useState } from "react";
import Header from "./components/header";
import Login from "./components/login";
import Product from "./components/product";
import "./styles/app.css";

function App() {
  const [name, setname] = useState("");
  const [search, setSearch] = useState("");

  return (
    <>
      <Header name={name} setSearch={setSearch} />
      {name ? (
        <div className="container">
          <Product search={search} />
        </div>
      ) : (
        <Login setname={setname} /> 
      )}
    </>
  );
}

export default App;
