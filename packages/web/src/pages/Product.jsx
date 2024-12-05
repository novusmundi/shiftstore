import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart, confirmationMessage } = useCart();

  // Simulando datos del producto (puedes reemplazar esto con datos reales o una API)
  const product = {
    id,
    name: 'Producto Ejemplo',
    description: 'Esta es una descripción detallada del producto.',
    price: 45,
    image: 'https://via.placeholder.com/600',
  };

  return (
    <div className="container mx-auto py-6">
      <Link to="/" className="text-primary-light hover:text-primary-dark mb-4 inline-block">
        &larr; Volver a Inicio
      </Link>
      {confirmationMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
          {confirmationMessage}
        </div>
      )}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full object-cover rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-neutral-dark">{product.name}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-primary-light font-bold text-2xl mt-6">${product.price}</p>
          <button onClick={() => addToCart(product)} className="mt-4 bg-primary-light text-white px-6 py-3 rounded hover:bg-primary-dark transition-colors">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
