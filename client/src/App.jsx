import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './pages/Home';
import Footer from './components/Footer';
import AdvancedSearch from './pages/AdvancedSearch';
import TenderListingPage from './pages/TenderListingPage';
import ContactUsPage from './pages/ContactPage';
import Tender from './pages/Tender';
import Forms from './components/Forms';
import SubscribePage from './pages/Subscribe';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminForm from './Admin/AdminForm';
import Admin from "./Admin/Admin"
import TenderByCategaries from './pages/TenderByCategaries';
import DashboardUsers from './Admin/partials/dashboard/DashboardUsers';
import AllTendersSection from './Admin/partials/dashboard/DashboardTenders';
import AddUser from './Admin/AddUser';
import NotFound from './components/NotFound';
import DashboardHome from './Admin/partials/dashboard/DashboardHome';

const checkIfUserIsAdmin = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.userRole === 'admin') {
    return true;
  } else {
    return false;
  }
};

const PrivateRoute = ({ element: Component, ...rest }) => {
  // Check if the user is authenticated as an admin
  const isAdmin = checkIfUserIsAdmin();
  return isAdmin ? <Component {...rest} /> : <Navigate to="/" replace />;
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advance-search" element={<AdvancedSearch />} />
        <Route path="/category" element={<TenderByCategaries/>} />

        <Route path="/tenders" element={<TenderListingPage />} />
        <Route path="/tender/:referenceNo" element={<Tender />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={DashboardHome} />}
        />
        <Route
          path="/dashboard/users"
          element={<PrivateRoute element={DashboardUsers} />}
        />
        <Route
          path="/dashboard/addusers"
          element={<PrivateRoute element={AddUser} />}
        />
        <Route
          path="/dashboard/tenders"
          element={<PrivateRoute element={AllTendersSection} />}
        />
        <Route
          path="/dashboard/tender/forms"
          element={<PrivateRoute element={AdminForm} />}
        />
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
