const Header = (props) => {

  const handleChangeSearch = e=>{
    props.setSearch(e.target.value)
  }

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

      </ul>
          <span className="badge bg-info ms-3">{props.name}</span>
    </div>  
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChangeSearch}/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
  </div>
</nav>
  );
};

export default Header;
