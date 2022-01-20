import './notFound.css';
import * as React from 'react';
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="notFound">
      <h2>notFound</h2>
      <Link to ="/">Home</Link>
    </div>
  );
}
export default NotFound;
