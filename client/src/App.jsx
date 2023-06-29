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
import RegAndCert from './pages/sub-pages/RegAndCert';
import Registration from './pages/sub-pages/Registration';
import Certification from './pages/sub-pages/Certification';
import AuctionMaterial from './pages/sub-pages/AuctionMaterial';
import JointVenture from './pages/sub-pages/JointVenture';
import TenderFilling from './pages/sub-pages/TenderFilling';
import TenderFillingOffline from './pages/sub-pages/TenderFillingOffline';
import Gems from './pages/sub-pages/Gems';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gems" element={<Gems />} />
        <Route path='/employer' element={<Employer/>}></Route>
        <Route path='/tenderfilling' element={<TenderFilling/>}></Route>
        <Route path='/tenderfillingoffline' element={<TenderFillingOffline/>}></Route>
        <Route path='/regandcert' element={<RegAndCert/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        <Route path='/auctionmaterial' element={<AuctionMaterial/>}></Route>
        <Route path='/jointventure' element={<JointVenture/>}></Route>
        <Route path='/certification' element={<Certification/>}></Route>
        <Route path='/regandcert' element={<RegAndCert/>}></Route>
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
