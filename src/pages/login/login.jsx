import './login.css';
import * as React from 'react';
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="login">
      <h2>LOGIN</h2>
      <Link to ="/">Home</Link>
    </div>
  );
}
export default Login;
