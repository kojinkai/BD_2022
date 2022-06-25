import React from 'react';
import {
  useLocation,
  Outlet
} from 'react-router-dom';
import Masthead from '../masthead/masthead';
import Sidemenu from '../sidemenu/sidemenu';

function Layout({ children }) {

  const location = useLocation();

  const routeColors = {
    intro: '#2e4066',
    skills: '#f05000',
    profile: '#2e4066',
    contact: '#9ca2ad'
  };

  const currentRouteColor = routeColors[location.pathname.substr(1)];

  return (
    <div className="page-wrap">
      <Masthead />
      <main>
        <Sidemenu backgroundColor={currentRouteColor}>
          <Outlet />
        </Sidemenu>
      </main>
    </div>
  );
}
export default Layout;