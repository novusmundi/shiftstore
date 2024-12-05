import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTeam } from '../context/TeamContext';

const Navbar = () => {
  const { team } = useTeam();


  return (
    <nav className={`bg-${team}-primary text-${team}-secondary p-4 sticky top-0 z-50`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y Título */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="ShiftStore Logo" className="h-10 w-auto" />
          <Link to="/" className={`text-2xl font-bold text-${team}-secondary hover:text-neutral-dark`}>
            ShiftStore
          </Link>
        </div>

        <div className="flex items-center space-x-6">

          {/* Enlaces */}
          <Link
            to="/"
            className={`text-${team}-secondary hover:text-neutral-dark transition-colors`}
          >
            Inicio
          </Link>
          <Link
            to="/cart"
            className={`bg-${team}-secondary text-${team}-primary px-4 py-2 rounded hover:bg-opacity-90 transition-colors`}
          >
            Carrito
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
