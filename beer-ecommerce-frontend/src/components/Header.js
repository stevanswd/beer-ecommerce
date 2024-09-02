import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A React component that displays the header of the application, 
 * with different layouts depending on whether a product is being displayed.
 *
 * @param {object} product - The product object, used to determine the layout.
 * @return {JSX.Element} The JSX element representing the header.
 */
const Header = ({ product }) => {
  return (
    <header>
      {!product ? (
        <div className="header-content header-content--home">
          <img src="/images/menu-icon.png" alt="Menu icon" className="menu" />
          <img src="/images/user.jpeg" alt="User ID Placeholder" className="user" />
        </div>
      ) : (
        <div className="header-content header-content--product">
          <Link to={`/products`}>
            <img src="/images/back-icon.png" alt="Back icon" className="menu" />
          </Link>
          <p className='detail'>Detail</p>
          <img src="/images/icon-dots.png" alt="Dots icon" className="menu" />
        </div>
      )}
    </header>
  );
};

export default Header;
