import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <h1>En helt bestemt applikation</h1>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/contact">Kontakt</Link>
        <Link to="/about">Om applikationen</Link>
      </nav>
    </header>
  );
};

export default Nav;
