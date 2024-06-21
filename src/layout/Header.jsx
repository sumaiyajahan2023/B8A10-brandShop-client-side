import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export default function Header() {
  const { user, setUser, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(setUser(null))
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Electronics
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {user ? (
              <NavLink to="/add-product">Add Product</NavLink>
            ) : (
              <NavLink to="/login">Add Product</NavLink>
            )}
          </li>
          <li>
            <NavLink to="/cart">My Cart</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          // <p>{user.email}</p>
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              {user.email}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={handleSignOut}>Log Out</button>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink to="/login" className="btn">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}
