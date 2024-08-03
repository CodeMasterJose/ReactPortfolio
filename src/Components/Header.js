import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Breadcrumb from "./Breadcrumb";
import Leftbar from "./Leftbar";
import React, { useState, useEffect } from "react";

function Header(props) {
  const location = useLocation();
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "/portfolio" },
  ];
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const paths = location.pathname.split("/").filter((path) => path);
    const newBreadcrumbs = paths.map((path, index) => {
      const label = path.charAt(0).toUpperCase() + path.slice(1);
      const pathTo = `/${paths.slice(0, index + 1).join("/")}`;
      return { label, path: pathTo };
    });

    setBreadcrumbs([{ label: "Home", path: "/" }, ...newBreadcrumbs]);
  }, [location]);

  return (
    <div>
      <div className="bg-stone-950">
        <div className="grid grid-cols-3 items-stretch p-4">
          {/* <div className="bg-gray-500">
        <p>Hello World</p>
      </div> */}
          <h1 className="col-span-1 text-white">CodeMasterJose</h1>
          <nav className=" col-span-1 text-white flex justify-center">
            <ul className="flex">
              {navItems.map((item) => (
                <NavItem
                  key={item.path}
                  label={item.label}
                  path={item.path}
                  active={location.pathname === item.path}
                />
              ))}
            </ul>
          </nav>
          <h1 className="col-span-1 text-white text-right">
            Another hello world
          </h1>
        </div>
      </div>
      {/* <div className="inline-block h-40 bg-gray-900 text-white">
        <Leftbar />
      </div>
      <div className="inline-block bg-gray-900">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <div className="inline-block">{props.children}</div> */}
      <div className="flex items-start">
        <div className="min-h-screen w-1/4 bg-zinc-900 left-bar">
          <Leftbar />
        </div>
        <div className="min-h-screen w-3/4 bg-zinc-900 right-side">
          <div>
            <Breadcrumb breadcrumbs={breadcrumbs} />
          </div>
          <div className="p-6">
            <div className="">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
const NavItem = ({ label, path, active }) => {
  return (
    <li className={`nav-item ${active ? " nav-line animate-pulse" : ""}`}>
      <Link to={path} className="nav-text">
        {label}
      </Link>
    </li>
  );
};
export default Header;
