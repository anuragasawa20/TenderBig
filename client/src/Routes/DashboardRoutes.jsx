import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import DashboardHome from '../Admin/partials/dashboard/DashboardHome';
import DashboardUsers from '../Admin/partials/dashboard/DashboardUsers';
import AllTendersSection from '../Admin/partials/dashboard/DashboardTenders';
import AddUser from '../Admin/partials/dashboard/AddUser';
import AdminForm from '../Admin/partials/dashboard/AdminTenderForm';
import DashboardTenderDetail from '../Admin/partials/dashboard/DashboardTenderDetail';
import DashboardUserDetail from '../Admin/partials/dashboard/DashboardUserDetail';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={<PrivateRoute element={DashboardHome} />}
      />
      <Route
        path="/users"
        element={<PrivateRoute element={DashboardUsers} />}
      />
      <Route
        path="/addusers"
        element={<PrivateRoute element={AddUser} />}
      />
      <Route
        path="/tenders"
        element={<PrivateRoute element={AllTendersSection} />}
      />
      <Route
        path="/tender/forms"
        element={<PrivateRoute element={AdminForm} />}
      />
      <Route
        path="/tender/:tenderId"
        element={<PrivateRoute element={DashboardTenderDetail} />}
      />
      <Route
        path="/user/:userId"
        element={<PrivateRoute element={DashboardUserDetail} />}
      />
    </Routes>
  );
};

export default DashboardRoutes;
