import "../styles/login form.css"

const Login = () => {
  return (
    <div className="container my-4 py-3 bg-light">
        <div className="container mb-3">
            <label for="inputname">User name</label> 
            <input id="inputname" className="form-control" type="text" />
        </div>
        <div className="container mb-3">
            <label for="inputemail">Email address</label> 
            <input id="inputemail" className="form-control" type="email" placeholder="example@email.com"/>
        </div>
        <div className="container">
            <button className="btn btn-outline-primary" type="submit">LOGIN</button> 
        </div>
    </div>
  );
};


export default Login