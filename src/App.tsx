import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import AccountModal from './components/AccountModal';
import CartModal from './components/CartModal';
import SearchModal from './components/SearchModal';

const App: React.FC = () => {
  const [isAccountModalOpen, setAccountModalOpen] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implement your search logic here, e.g., fetch search results from API
    setSearchModalOpen(false);  // Close the modal after search
  };

  return (
    <Router>
      <Header
        onAccountClick={() => setAccountModalOpen(true)}
        onCartClick={() => setCartModalOpen(true)}
        onSearchClick={() => setSearchModalOpen(true)}  // Open search modal
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />

      {isAccountModalOpen && <AccountModal onClose={() => setAccountModalOpen(false)} />}
      {isCartModalOpen && <CartModal onClose={() => setCartModalOpen(false)} />}
      {isSearchModalOpen && <SearchModal onClose={() => setSearchModalOpen(false)} onSearch={handleSearch} />}
    </Router>
  );
};

export default App;