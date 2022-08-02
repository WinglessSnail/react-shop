const Header = () => {
  return (
<nav class="navbar navbar-expand-lg bg-light">

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
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">More...</a>

          <ul class="dropdown-menu">
                <li><a className="dropdown-item" href="#">Purchase</a></li>
                <li><a className="dropdown-item" href="#">Become a member</a></li>
                <li><a className="dropdown-item" href="#">Support</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Header;
