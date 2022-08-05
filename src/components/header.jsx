const Header = (props) => {

  return (
<nav class="navbar navbar-expand bg-light">

  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hall</a>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">More...</a>

          <ul class="dropdown-menu">
                <li><a className="dropdown-item" href="#">Purchase</a></li>
                <li><a className="dropdown-item" href="#">Become a member</a></li>
                <li><a className="dropdown-item" href="#">Support</a></li>
          </ul>
        </li>
      </ul>
          <span className="badge bg-info ms-3">{props.name}</span>
    </div>  
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
  </div>
</nav>
  );
};

export default Header;
