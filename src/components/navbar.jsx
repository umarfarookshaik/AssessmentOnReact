import React from "react";

let style = {
  resetBtn: {
    position: "fixed",
    top: "10px",
    left: "15%"
  }
};

const NavBar = ({ totalCounters, onReset }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Total Counters{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </span>
      <button
        style={style.resetBtn}
        onClick={onReset}
        className="btn btn-secondary ml-3"
      >
        Reset
      </button>
    </nav>
  );
};

export default NavBar;
