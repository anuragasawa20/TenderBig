import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdvancedSearch from './pages/AdvancedSearch';
import TenderListingPage from './pages/TenderListingPage';
import ContactUsPage from './pages/ContactPage';
import Tender from './pages/Tender';
import Forms from './components/Forms';
import SubscribePage from './pages/Subscribe';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TenderByCategaries from './pages/TenderByCategaries';
import NotFound from './components/NotFound';
import DashboardRoutes from './Routes/DashboardRoutes';
import EarnGems from './pages/EarnGems';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earngems" element={<EarnGems/>}></Route>
        <Route path="/advance-search" element={<AdvancedSearch />} />
        <Route path="/category" element={<TenderByCategaries />} />
        <Route path="/tenders" element={<TenderListingPage />} />
        <Route path="/tender/:referenceNo" element={<Tender />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
