import React, { ReactElement } from 'react';
import Location from 'react-app-location';
import { useSelector } from 'react-redux';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout/DashboardLayout';
import { ProfileState } from 'src/ducks/profile/types';
import { NewRequestLocation } from 'src/modules/request/pages/routes/NewRequestRoute/constants';

import modules from '../modules';
import NotFoundRoute from './routes/NotFoundRoute';
import ProtectedRoute from './routes/ProtectedRoute';

// TODO change locations
const mockSiteLocations = {
  logout: new Location('/requests/logout'),
  contact: new Location('/requests/contact'),
  map: new Location('/requests/map'),
  notifications: new Location('/requests/notifications'),
};

const MasterPage = (): ReactElement => {
  const profileState = useSelector(
    ({ profile }: { profile: ProfileState }) => profile,
  );
  const userProfile = profileState.profile;

  const renderLayout = routeModule => {
    if (routeModule.layout === 'dashboard' && userProfile) {
      return (
        <DashboardLayout
          menuItems={routeModule.menuItems}
          profileData={userProfile}
          siteLocations={mockSiteLocations}
        >
          <Route path={routeModule.path} component={routeModule.component} />
        </DashboardLayout>
      );
    }
    return <routeModule.component />;
  };

  const renderModules = () =>
    Object.keys(modules).map(moduleName => {
      const routeModule = modules[moduleName];

      return routeModule.protected ? (
        <ProtectedRoute
          key={moduleName}
          path={routeModule.path}
          component={() => renderLayout(routeModule)}
        />
      ) : (
        <Route
          key={moduleName}
          path={routeModule.path}
          component={() => renderLayout(routeModule)}
        />
      );
    });
  return (
    <Router>
      <Switch>
        {renderModules()}
        {/* TEMPORARY - Redirect to new request so that people don't see a 404 page */}
        <Route path="/" exact>
          <Redirect
            to={{
              pathname: NewRequestLocation.path,
            }}
          />
        </Route>
        <Route path="*" component={NotFoundRoute} />
      </Switch>
    </Router>
  );
};
export default MasterPage;
