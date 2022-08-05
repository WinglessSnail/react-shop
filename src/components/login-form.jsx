import { useEffect, useState } from "react";

const Login = (props) => {
  const [error, setError] = useState(null);
  const [users, setusers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError("Email format is invalid");
    } else {
      setError(null);
    }

    setUserEmail(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3000/users.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setusers(result);
        },
        (error) => {
          alert("error");
        }
      );
  }, []);

  function handleClickLogin(porps) {
    fetch("http://localhost:3000/users.json")
      .then((res) => res.json())
      .then(
        (users) => {
          //legacy code
          // for (let i = 0; i < users.length; i++) {
          //   if (users[i].name === userName && users[i].email === userEmail) {
          //     props.setname(users[i].name);
          //   } else {
          //     console.log("user does not exist");
          //   }
          // }
          const user = users.find(
            (u) => u.name === userName && u.email === userEmail
          );
          if (user) {
            props.setname(user.name);
          } else {
            alert("user does not exist");
          }
        },
        (error) => {
          alert("error");
        }
      );
  }
  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="container my-4 py-3 bg-light">
      <div className="container mb-3">
        <label for="inputname">User name</label>
        <input
          id="inputname"
          className="form-control"
          type="text"
          value={props.name}
          onChange={handleChangeName}
        />
        <span></span>
      </div>
      <div className="container mb-3">
        <label for="message">Email address</label>
        <input
          id="message"
          className="form-control"
          type="email"
          placeholder="example@email.com"
          onChange={handleChange}
        />
        {error && <span style={{ color: "red" }}>{error}</span>}
      </div>
      <div className="container">
        <button
          className="btn btn-outline-primary"
          onClick={handleClickLogin}
          type="submit"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
