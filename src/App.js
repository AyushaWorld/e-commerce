import './App.css';
import { Home } from './components/Home';
import Header from './components/layouts/header.components';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductListingComponents } from './components/products/ProductListing.components';
import { ProductDetailsComponents } from './components/products/ProductDetails.components';
import { FooterComponents } from './components/layouts/footer.components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListingComponents />} />
          <Route path='/products/:productId' element={<ProductDetailsComponents />} />
        </Routes>
        <FooterComponents />
      </Router>
    </div>
  );
}

export default App;
