import './repos.css';
import * as React from 'react';
import { Body } from '../../components/body/body';
import { Outlet } from 'react-router-dom';
import UserContext from '../../context/userContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Repos() { 
  
  const {session} = useContext(UserContext);
  
  const navigate = useNavigate();
  
  if (session === false) {
    navigate('/login');
  }

  return (
    <>
      <Body>
      <Outlet/>
      </Body>
    </>
  );
}
export default Repos;
