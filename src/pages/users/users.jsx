import './users.css';
import * as React from 'react';
import { Link } from "react-router-dom";


function Users() {
  return (
    <div className="users">
      <h2>Users</h2>
      <Link to ="/">Home</Link>
    </div>
  );
}
export default Users;
