import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-neutral-light text-neutral-dark p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y Título */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="ShiftStore Logo" className="h-10 w-auto" />
          <Link to="/" className="text-2xl font-bold text-primary-dark hover:text-primary-light">
            ShiftStore
          </Link>
        </div>
        {/* Enlaces */}
        <div className="space-x-6">
          <Link
            to="/"
            className="text-neutral-dark hover:text-primary-dark transition-colors"
          >
            Inicio
          </Link>
          <Link
            to="/cart"
            className="bg-primary-light text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
          >
            Carrito
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
