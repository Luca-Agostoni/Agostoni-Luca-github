import './repos.css';
import * as React from 'react';
import { Body } from '../../components/body/body';
import { Outlet } from 'react-router-dom';


function Repos() {
  return (
    <>
    <Body>
      <Outlet/>
    </Body>
    </>
  );
}
export default Repos;
