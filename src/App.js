import { useState } from "react";
import Header from "./components/header";
import Login from "./components/login-form";
import Display from "./components/product-display";
import "./styles/app.css";

function App() {
  const [name, setname] = useState("");

  return (
    <>
      <Header name={name} />
      {name ? (
        <div className="container">
          <Display />
        </div>
      ) : (
        <Login setname={setname} />
      )}
    </>
  );
}

export default App;
