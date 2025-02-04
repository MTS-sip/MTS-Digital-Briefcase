import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white text-center p-4 text-xl font-bold">
      <nav className="flex justify-center space-x-4">
        <Link to="/" className="hover:underline">About Me</Link>
        <Link to="/portfolio" className="hover:underline">Portfolio</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/resume" className="hover:underline">Resume</Link>
      </nav>
    </header>
  );
}

export default Header;