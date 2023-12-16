import './App.css';
import NavBar from './components/NavBar';
import MyCarousel from './components/MyCarousel';
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage';
import CartPage from './components/Cart/CartPage';
import CustomerLoginPage from './components/CustomerLoginPage';
import NoPage from './components/NoPage';
import SideBar from './components/Products/SideBar';
import ItemDesciptionPage from './components/Products/ItemDesciptionPage';
import Footer from './components/Footer';
import LandingPage from './components/Landing/LandingPage';
import PaymentStripe from './components/Cart/PaymentStripe';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='my-body'>
        <MyCarousel />
        <div className='my-flex content-wrapper'>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/categories/:category" element={<MainPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/log" element={<CustomerLoginPage />} />
            <Route path="/products/:productId" element={<ItemDesciptionPage />} />
            <Route path="/payment" element={<PaymentStripe />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        

      <Footer />
      </div>
    </div>
  );
}

export default App;