import React from 'react';

type HeaderProps = {
  onAccountClick: () => void;
  onCartClick: () => void;
  onSearchClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onAccountClick, onCartClick, onSearchClick }) => {
  return (
    <header>
      <button onClick={onAccountClick}>Account</button>
      <button onClick={onCartClick}>Cart</button>
      <button onClick={onSearchClick}>Search</button>
    </header>
  );
};

export default Header;