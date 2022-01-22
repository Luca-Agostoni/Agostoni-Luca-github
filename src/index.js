import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/login/login';
import Logout from './pages/logout/logout';
import Users from './pages/users/users';
import Classes from './pages/classes/classes';
import NotFound from './pages/notFound/notFound';
import reportWebVitals from './reportWebVitals';
import Repos from './pages/repos/repos';
import Details from './pages/details/details';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="users" element={<Users />} />
          <Route path="classes" element={<Classes />} />
          <Route path="repos" element={<Repos />}>
            <Route path=":repoName" element={<Details />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
