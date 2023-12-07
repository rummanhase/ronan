import './App.css';
import NavBar from './components/NavBar';
import MyCarousel from './components/MyCarousel';
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage';
import CartPage from './components/CartPage';
import CustomerLoginPage from './components/CustomerLoginPage';
import NoPage from './components/NoPage';
import SideBar from './components/Products/SideBar';
import ItemDesciptionPage from './components/Products/ItemDesciptionPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='my-body'>
        <MyCarousel />
        <div className='my-flex content-wrapper'>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/log" element={<CustomerLoginPage />} />
            <Route path="/products/:productId" element={<ItemDesciptionPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        

      <Footer />
      </div>
    </div>
  );
}

export default App;