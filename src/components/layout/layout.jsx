import React from 'react';
import {
  useLocation,
  Outlet
} from 'react-router-dom';
import Masthead from '../masthead/masthead';
import Sidemenu from '../sidemenu/sidemenu';

function Layout({ children }) {

  const location = useLocation();

  const getRouteColorFromLocation = location => ({
    intro: '#2e4066',
    skills: '#f05000',
    profile: '#2e4066',
    contact: '#9ca2ad'
  })[location];

  return (
    <div className="page-wrap">
      <Masthead />
      <main>
        <Sidemenu activeroute={location.pathname.substr(1)} routecolors={getRouteColorFromLocation}>
          <Outlet />
        </Sidemenu>
      </main>
    </div>
  );
}
export default Layout;