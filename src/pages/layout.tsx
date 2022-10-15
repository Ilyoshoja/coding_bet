import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
        <Link to="register">sdfssdfd</Link>

      <Outlet />
    </div>
  );
}

export default Layout;
