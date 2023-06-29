import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import DashboardHome from '../Admin/partials/dashboard/DashboardHome';
//Tenders
import AllTendersSection from '../Admin/partials/dashboard/tenders/DashboardTenders';
import Subcontractor from '../Admin/partials/dashboard/tenders/SubcontractorTenders';
import Contractor from '../Admin/partials/dashboard/tenders/ContractorTenders';
import AdminForm from '../Admin/partials/dashboard/tenders/AdminTenderForm';
import DashboardTenderDetail from '../Admin/partials/dashboard/tenders/DashboardTenderDetail';

//Users
import AddAdmin from '../Admin/partials/dashboard/users/AddAdmin';
import AddEmployee from '../Admin/partials/dashboard/users/AddEmployee';
import AddHR from '../Admin/partials/dashboard/users/Addhr';

import AllAdmin from '../Admin/partials/dashboard/users/AllAdmin';
import AllEmployee from '../Admin/partials/dashboard/users/AllEmployee';
import AllHR from '../Admin/partials/dashboard/users/AllHR';
import DashboardUsers from '../Admin/partials/dashboard/users/DashboardUsers';
import DashboardUserDetail from '../Admin/partials/dashboard/users/DashboardUserDetail';

import DashboardCurrentTenders from '../Admin/partials/dashboard/DashboardCurrentTenders'

//Contact Requests
import CareerManPower from '../Admin/partials/dashboard/requests/Career&ManPower';
import AuctionMaterial from '../Admin/partials/dashboard/requests/Auction-Material';
import JointVenture from '../Admin/partials/dashboard/requests/Joint-Venture';
import License from '../Admin/partials/dashboard/requests/License';
import OnlineBidding from '../Admin/partials/dashboard/requests/Online-Bidding';
import RegistrationCertification from '../Admin/partials/dashboard/requests/RegistrationCertificate';
import TenderResult from '../Admin/partials/dashboard/requests/Tender-Result';


const DashboardRoutes = () => {
  return (
    <Routes>
      {/* <Route
        path="/admin"
        element={<PrivateRoute element={DashboardHome} />}
      /> */}
      <Route
        path="/users"
        element={<PrivateRoute element={DashboardUsers} />}
      />
      <Route
        path="/user/:userId"
        element={<PrivateRoute element={DashboardUserDetail} />}
      />
      <Route
        path="/alladmin"
        element={<PrivateRoute element={AllAdmin} />}
      />
      <Route
        path="/allhr"
        element={<PrivateRoute element={AllHR} />}
      />
      <Route
        path="/allemployee"
        element={<PrivateRoute element={AllEmployee} />}
      />
      <Route
        path="/addadmin"
        element={<PrivateRoute element={AddAdmin} />}
      />
      <Route
        path="/addhr"
        element={<PrivateRoute element={AddHR} />}
      />
      <Route
        path="/addemployee"
        element={<PrivateRoute element={AddEmployee} />}
      />
      <Route
        path="/tenders"
        element={<PrivateRoute element={AllTendersSection} />}
      />
      <Route
        path="/contractor"
        element={<PrivateRoute element={Contractor} />}
      />
      <Route
        path="/subcontractor"
        element={<PrivateRoute element={Subcontractor} />}
      />
      <Route
        path="/tenders/currenttenders"
        element={<PrivateRoute element={DashboardCurrentTenders} />}
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
        path="/career&manpower"
        element={<PrivateRoute element={CareerManPower} />}
      />
      <Route
        path="/actionmaterial"
        element={<PrivateRoute element={AuctionMaterial} />}
      />
      <Route
        path="/jointventure"
        element={<PrivateRoute element={JointVenture} />}
      />
      <Route
        path="/license"
        element={<PrivateRoute element={License} />}
      />
      <Route
        path="/onlinebidding"
        element={<PrivateRoute element={OnlineBidding} />}
      />
      <Route
        path="/regcert"
        element={<PrivateRoute element={RegistrationCertification} />}
      />
      <Route
        path="/tenderresult"
        element={<PrivateRoute element={TenderResult} />}
      />      
    </Routes>
  );
};

export default DashboardRoutes;
