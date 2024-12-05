import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { useTeam } from '../context/TeamContext';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import PropTypes from 'prop-types';

const searchClient = algoliasearch(import.meta.env.VITE_API_KEY, import.meta.env.VITE_SEARCH_API_KEY);

const Hit = ({ hit }) => {
  const navigate = useNavigate();

const handleClick = () => {
  navigate(`/product/${hit.id}`);
};

return (
  <div className="p-4 border-b hover:bg-gray-100" onClick={handleClick}>
    <h2 className="text-lg font-bold">{hit.name}</h2>
    <p className="text-sm">Precio: ${hit.price}</p>
    <p className="text-sm">Equipo: {hit.team}</p>
  </div>
)};

Hit.propTypes = {
  hit: {
    name: PropTypes.string,
    price: PropTypes.number,
    team: PropTypes.string,
  }
};

const Navbar = () => {
  const { team } = useTeam();
  const [isFocused, setIsFocused] = useState(false);

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

        <div className="relative bg-white text-black">
          <InstantSearch indexName="products" searchClient={searchClient}>
            <SearchBox
              className="w-52 md:w-64 text-black px-4 py-2 border rounded-md shadow focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-primary-light"
              translations={{
                placeholder: 'Buscar...',
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 150)} // Retraso para manejar clics en los resultados
            />
            {isFocused && (
              <div className="absolute left-0 right-0 bg-white text-black mt-1 rounded shadow-lg max-h-48 overflow-y-auto z-10">
                <Hits hitComponent={Hit} />
              </div>
            )}
          </InstantSearch>
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
