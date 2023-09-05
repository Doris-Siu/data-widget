import React from "react";
import { Link } from "react-router-dom";

export default function ButtonList() {
  return (
    <div className="button-panel">
      <div>
        <b>General</b>
      </div>

      <nav className="buttons">
        <button>
          <Link to="/value">Full Time</Link>
        </button>
        <button>
          <Link to="/">1st Half</Link>
        </button>
        <button>
          <Link to="/sh">2nd Half</Link>
        </button>
      </nav>
    </div>
  );
}
