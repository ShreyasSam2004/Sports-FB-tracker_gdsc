import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 sticky top-0" data-theme="dark">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/fixtures">Fixtures</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/results">Results</Link>
            </li>
            
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          LiveScores
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/fixtures">
            <li className="my-2">
              Fixtures
            </li>
          </Link>
          <li tabIndex={0}>
            <Link to="/results">Results</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/Topscorer">TopScorer</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/Player">Players</Link>
          </li>
          
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">LOGIN</Link>
      </div>
    </div>
  );
}
