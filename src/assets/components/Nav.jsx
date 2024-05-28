import React from "react";

function Nav({ cart }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!"></a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <div className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn "
                  id="navbarDropdown"
                >
                  Shop
                </button>
                <select
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  <option className="dropdown-item">All Products</option>
                  <option className="dropdown-item">Popular Items</option>
                  <option className="dropdown-item">New Arrivals</option>
                </select>
              </div>
            </ul>

            <form className="d-flex">
              <button className="btn btn-outline-dark">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cart}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
