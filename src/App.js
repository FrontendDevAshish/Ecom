import './App.css';
import { BrowserRouter as Router,Routes ,Route } from "react-router-dom"
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Contact from './Views/Contact/Contact';
import Products from './Views/Products/Products';
import SingleProduct from './Views/SingleProduct/singleProduct';
import Cart from './Views/Cart/Cart';
import ErrorPage from './Views/Error/Error';
function App() {
  return(
    <Router>

    {/* These are the main routes */}

    <Routes>
      <Route path = '/' element = {<Home/>}/>
      {/* --Landing Page */}

      <Route path ='/about' element = {<About/>} />
      {/* --About page */}

      <Route path ='/contact' element = {<Contact/>} />
      {/* --Contact us */}

      <Route path ='/products' element = {<Products/>} />
      {/* --All Products */}

      <Route path ='/single-product' element = {<SingleProduct/>} />
      {/* Single Product */}

      <Route path ='/cart' element = {<Cart/>} />
      {/* Cart products */}

      <Route path ='*' element = {<ErrorPage/>} />
      {/* --This is the error page */}
    </Routes>

    
  </Router>
  );
}
// products
// contact
// singleproduct
// cart
// error

export default App;
