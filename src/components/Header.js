import React from "react"; // You can use this to make the logo clickable for the homepage.

function Header() {
  return (
    <header className="header">
      <a href="/" className="logo-link">
        <img
          src="/logo/stavanaLogo.jpg"
          alt="Stavana Logo"
          className="logo left-logo"
        />
      </a>

      <a href="/" className="logo-link">
        <img
          src="/logo/stavanaLogoLink.jpg"
          alt="Stavana Logo"
          className="header-logo"
        />
      </a>

      <a href="/" className="logo-link">
        <img
          src="/logo/stavanaLogo2.jpg"
          alt="Stavana Logo 2"
          className="logo right-logo"
        />
      </a>
    </header>
  );
}

export default Header;
