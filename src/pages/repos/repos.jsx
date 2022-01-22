import './repos.css';
import * as React from 'react';
import { Body } from '../../body/body';
import { Outlet } from 'react-router-dom';


function Repos() {
  return (
    <>
    <Outlet />
    <Body/>
    </>
  );
}
export default Repos;
