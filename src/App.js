import Header from "./components/header";
import Login from "./components/login-form";
import Display from "./components/product-display";
import "./styles/app.css";

function App() {
  return (
    <>
      <Header />
      <Login />
      <div className="container">
        <Display />
      </div>
    </>
  );
}

export default App;
