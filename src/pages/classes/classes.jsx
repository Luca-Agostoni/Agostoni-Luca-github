import './classes.css';
import * as React from 'react';
import { Link } from "react-router-dom";


function Classes() {
  return (
    <div className="classes">
      <h2>Classes</h2>
      <Link to ="/">Home</Link>
    </div>
  );
}
export default Classes;
