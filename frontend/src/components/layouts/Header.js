import React from "react";
import Search from "./Search";

export default function Header() {
  return (
    <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <img width="130px" alt='Greenscart Logo' src="/images/logo.png" />
          {/* <h3 style={{color:"green", fontWeight:"800"}}>GreensCart</h3> */}
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
      <Search/>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <button className="btn" id="login_btn">
          Login
        </button>

        <span id="cart" className="ml-3">
          Cart
        </span>
        <span className="ml-1" id="cart_count">
          2
        </span>
      </div>
    </nav>
  );
}
