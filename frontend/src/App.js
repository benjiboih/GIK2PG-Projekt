import "./App.css";
import logo from "./images/dalavintage-low-resolution-logo-color-on-transparent-background_2.png";
import AppProductList from "./AppProductList";
//import ProductScreen from './screens/ProductScreen';
import {Routes, Route, Outlet, Link} from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {
  return (
      <Routes>
        {/* Casual customer */}
        <Route index element={<ProductScreen/>} />
        <Route path="/product/*" element={<NoMatch/>}/>
        <Route path="/search/*" element={<NoMatch/>}/>
        <Route path="/deals" element={<NoMatch/>}/>
        <Route path="/new" element={<NoMatch/>}/>
        
        {/* Logged in customer */}
        <Route path="/product/*/review" element={<NoMatch/>}/>
        <Route path="/order/" element={<NoMatch/>}/>
        <Route path="/payment/" element={<NoMatch/>}/>
        <Route path="/login/" element={<NoMatch/>}/>
        <Route path="/product/*/create-review" element={<NoMatch/>}/>
        <Route path="/favorites" element={<NoMatch/>}/>
        <Route path="/order-history" element={<NoMatch/>}/>
        <Route path="/account" element={<NoMatch/>}/>
        <Route path="/logout" element={<NoMatch/>}/>

        {/* Admin */}
        <Route path="/admin" element={<NoMatch/>}/>
        <Route path="/admin/product/*" element={<NoMatch/>}/>
        <Route path="/admin/deals" element={<NoMatch/>}/>
        <Route path="/admin/customers" element={<NoMatch/>}/>
        <Route path="/admin/review/*" element={<NoMatch/>}/>

        {/* 404 error */}
        <Route path="*" element={<NoMatch/>}/>
      </Routes>

  );
}

function ProductScreen() {
  return (

    <div className="App">
      <Helmet>
        <title>DalaVintage Vintage Bookstore</title>
      </Helmet>
      {/* <img src={logo} alt="Logo" className="App-logo" /> */}
      <ul className="App-categories">
        <a href="#new">NEW</a>
        <a href="#deals">DEALS</a>
        <a href="#books" className="Activecategory">BOOKS</a>
        <a href="#newspapers">NEWSPAPERS</a>
      </ul>
      <AppProductList />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <Helmet>
        <title>404 Error</title>
      </Helmet>
      <h1>404 Error</h1>
      <p>Page not found</p>
    </div>
  )
}

export default App;
