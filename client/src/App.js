
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Product from './Components/Product/Product';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import PagenotFound from './Components/Pagenotfound/PagenotFound';
import toast, { Toaster } from 'react-hot-toast';
import ThankYou from './Components/ThankYou/ThankYou';

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/'  element={<Home />} />
    <Route path='/about'  element={<About />} />
    <Route path='/contact'  element={<Contact />} />
    <Route path='/product'  element={<Product />} />
    <Route path='/product/details/:_id'  element={<ProductDetails />} />
    <Route path='/thank-you'  element={<ThankYou />} />
    <Route path='/*'  element={<PagenotFound />} />
    {/* <Route path='/'  element={<Home />} /> */}
   </Routes>
   <Footer />
   <Toaster />
   </BrowserRouter>
   </>
  );
}

export default App;
