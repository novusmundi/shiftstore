import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const HomePage = () => {
  const { addToCart, confirmationMessage } = useCart();

  const products = [
    {
      id: 1,
      name: 'Producto A',
      price: 20,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Producto B',
      price: 30,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Producto C',
      price: 25,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Producto D',
      price: 40,
      image: 'https://via.placeholder.com/150',
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
            className="border rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 bg-gray-100"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-primary-dark font-bold text-xl mt-2">${product.price}</p>
            <Link
              to={`/product/${product.id}`}
              className="block text-primary-light font-semibold mt-4 hover:text-primary-dark transition-colors"
            >
              Ver Detalles
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-primary-light text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
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
