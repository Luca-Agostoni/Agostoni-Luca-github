import './logout.css';
import * as React from 'react';
import { Link } from "react-router-dom";


function Logout() {
  return (
    <div className="logout">
      <h2>logout</h2>
      <Link to ="/">Home</Link>
    </div>
  );
}
export default Logout;
