import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTeam } from '../context/TeamContext';

const HomePage = () => {
  const { addToCart, confirmationMessage } = useCart();
  const { setTeam } = useTeam();

  const products = [
    {
      id: 1,
      name: 'Camiseta River',
      price: 100,
      image: 'https://via.placeholder.com/150',
      team: 'river',
    },
    {
      id: 2,
      name: 'Bufanda River',
      price: 30,
      image: 'https://via.placeholder.com/150',
      team: 'river',
    },
    {
      id: 3,
      name: 'Camiseta Racing',
      price: 120,
      image: 'https://via.placeholder.com/150',
      team: 'racing',
    },
    {
      id: 4,
      name: 'Bufanda Racing',
      price: 40,
      image: 'https://via.placeholder.com/150',
      team: 'racing',
    },
    {
      id: 5,
      name: 'Camiseta Aldosivi',
      price: 90,
      image: 'https://via.placeholder.com/150',
      team: 'aldosivi',
    },
    {
      id: 6,
      name: 'Bufanda Aldosivi',
      price: 25,
      image: 'https://via.placeholder.com/150',
      team: 'aldosivi',
    },
    {
      id: 7,
      name: 'Camiseta Boca',
      price: 110,
      image: 'https://via.placeholder.com/150',
      team: 'boca',
    },
    {
      id: 8,
      name: 'Bufanda Boca',
      price: 35,
      image: 'https://via.placeholder.com/150',
      team: 'boca',
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-neutral-dark mb-6">
        Productos Destacados
      </h1>
      {confirmationMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded transition-opacity duration-300 ease-in-out">
          {confirmationMessage}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => setTeam(product.team)}
            className={`border rounded-lg shadow hover:shadow-lg transition-shadow p-4 ${
              product.team === 'boca'
                ? 'bg-boca-primary'
                : `bg-${product.team}-secondary`
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h2
              className={`text-lg font-bold ${
                product.team === 'boca'
                  ? 'text-boca-secondary'
                  : `text-${product.team}-primary`
              } mb-2`}
            >
              {product.name}
            </h2>
            <p
              className={`font-bold text-xl mt-2 ${
                product.team === 'boca'
                  ? 'text-boca-secondary'
                  : `text-${product.team}-primary`
              }`}
            >
              ${product.price}
            </p>
            <Link
              to={`/product/${product.id}`}
              className={`block font-semibold mt-4 transition-colors ${
                product.team === 'boca'
                  ? 'text-boca-secondary hover:text-boca-primary'
                  : `text-${product.team}-primary hover:text-${product.team}-secondary`
              }`}
            >
              Ver Detalles
            </Link>
            <button
              onClick={() => addToCart(product)}
              className={`mt-4 px-4 py-2 rounded-lg transition-colors ${
                product.team === 'boca'
                  ? 'bg-boca-secondary text-boca-primary hover:bg-boca-primary hover:text-boca-secondary'
                  : `bg-${product.team}-primary text-${product.team}-secondary hover:bg-${product.team}-secondary hover:text-${product.team}-primary`
              }`}
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
