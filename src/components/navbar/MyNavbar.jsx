import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Ecotienda
        </Link>{" "}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-warning"
                to="/category/ubicacion"
              >
                Ubicación
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-warning" to="/category/plantas">
                Plantas y semillas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-warning"
                to="/category/libros"
              >
                Libros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-warning"
                to="/category/macetas"
              >
                Macetas
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-warning"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kits Iniciales
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/category/kit-cesped">
                    Kit de Cesped
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category/kit-rosas">
                    Kit de Rosas
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <CartWidget />

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light text-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;
