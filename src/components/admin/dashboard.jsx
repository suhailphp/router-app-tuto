import React from "react";
import { Route, Link } from "react-router-dom";
import Users from "./users";
import Posts from "./posts";

const Dashboard = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <ul>
        <li>
          <Link to="/admin/users">User</Link>
        </li>
        <li>
          <Link to="/admin/posts">Posts</Link>
        </li>
      </ul>

      <Route path="/admin/users" component={Users} />
      <Route path="/admin/posts" component={Posts} />
    </div>
  );
};

export default Dashboard;
