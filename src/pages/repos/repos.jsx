import './repos.css';
import * as React from 'react';
import { Body } from '../../components/body/body';
import { Outlet } from 'react-router-dom';
import SessionContext from '../../context/context';
import { useNavigate } from 'react-router-dom';

function Repos() {
  let navigate = useNavigate(); 

  return (
    <>
    <SessionContext.Provider value={true}>
      <div onLoad={() => {
        navigate("/login");
      }}/>
    </SessionContext.Provider>
    <Body>
    <Outlet/>
    </Body>
    </>
  );
}
export default Repos;
