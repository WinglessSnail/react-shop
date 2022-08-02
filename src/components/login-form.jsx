import { useEffect, useState } from "react";


const Login = (props) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  const handleChange = e => {
    if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
  
    setMessage(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3000/users.json")
      .then((res) => res.json())
      .then(
        (result) => {

        },
        (error) => {
          alert("error");
        }
      );
  }, []);

  return (
    <div className="container my-4 py-3 bg-light">
        <div className="container mb-3">
            <label for="inputname">User name</label> 
            <input id="inputname" className="form-control" type="text" />
            <span></span>
        </div>
        <div className="container mb-3">
            <label for="message">Email address</label> 
            <input id="message" className="form-control" type="email" placeholder="example@email.com"  value={message} onChange={handleChange}/>
            {error && <span style={{color: 'red'}}>{error}</span>}
        </div>
        <div className="container">
            <button className="btn btn-outline-primary" type="submit">LOGIN</button> 
        </div>
    </div>
  );
};



export default Login