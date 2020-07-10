import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul>
      <li>
        <Link to="/admin/users">User</Link>
      </li>
      <li>
        <Link to="/admin/posts">Posts</Link>
      </li>
    </ul>
  );
};

export default SideBar;
