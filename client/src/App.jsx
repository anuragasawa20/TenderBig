import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdvancedSearch from './pages/AdvancedSearch';
import TenderListingPage from './pages/TenderListingPage';
import ContactUsPage from './pages/ContactPage';
import Tender from './pages/Tender';
import TenderForm from './components/Forms';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TenderByCategaries from './pages/TenderByCategaries';
import NotFound from './components/NotFound';
import DashboardRoutes from './Routes/DashboardRoutes';
import EarnGems from './pages/GemRegistration';
import CareerAndManpower from './pages/sub-pages/CareerAndManpower';
import Employer from './pages/sub-pages/Employer';
import Seeker from './pages/sub-pages/Seeker';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/employer' element={<Employer/>}></Route>
        <Route path='/seeker' element={<Seeker/>}></Route>
        <Route path='/careerandmanpower' element={<CareerAndManpower/>}></Route>
        <Route path="/gemregistration" element={<EarnGems/>}></Route>
        <Route path="/advance-search" element={<AdvancedSearch />} />
        <Route path="/category" element={<TenderByCategaries />} />
        <Route path="/tenders" element={<TenderListingPage />} />
        <Route path="/tender/:referenceNo" element={<Tender />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/forms" element={<TenderForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
