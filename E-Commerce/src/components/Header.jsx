import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="logo">First E-commerce Store</a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;