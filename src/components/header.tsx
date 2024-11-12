import React from 'react';

type HeaderProps = {
  onAccountClick: () => void;
  onCartClick: () => void;
  onSearchClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onAccountClick, onCartClick, onSearchClick }) => {
  // Adding default no-op functions in case they are not passed
  const handleAccountClick = onAccountClick || (() => console.warn("onAccountClick is not defined"));
  const handleCartClick = onCartClick || (() => console.warn("onCartClick is not defined"));
  const handleSearchClick = onSearchClick || (() => console.warn("onSearchClick is not defined"));

  return (
    <header>
      <button onClick={handleAccountClick}>Account</button>
      <button onClick={handleCartClick}>Cart</button>
      <button onClick={handleSearchClick}>Search</button>
    </header>
  );
};

export default Header;