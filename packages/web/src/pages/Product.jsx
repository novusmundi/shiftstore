import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTeam } from '../context/TeamContext';

const ProductPage = () => {
  const { id } = useParams();
  const { team } = useTeam();
  const { addToCart, confirmationMessage } = useCart();

  const products = [
    { id: 1, name: 'Camiseta River', price: 100, image: 'https://via.placeholder.com/150', team: 'river', description: "lorem impsut" },
    { id: 2, name: 'Bufanda River', price: 30, image: 'https://via.placeholder.com/150', team: 'river', description: "lorem impsut" },
    { id: 3, name: 'Camiseta Racing', price: 120, image: 'https://via.placeholder.com/150', team: 'racing', description: "lorem impsut" },
    { id: 4, name: 'Bufanda Racing', price: 40, image: 'https://via.placeholder.com/150', team: 'racing', description: "lorem impsut" },
    { id: 5, name: 'Camiseta Aldosivi', price: 90, image: 'https://via.placeholder.com/150', team: 'aldosivi', description: "lorem impsut" },
    { id: 6, name: 'Bufanda Aldosivi', price: 25, image: 'https://via.placeholder.com/150', team: 'aldosivi', description: "lorem impsut" },
    { id: 7, name: 'Camiseta Boca', price: 110, image: 'https://via.placeholder.com/150', team: 'boca', description: "lorem impsut" },
    { id: 8, name: 'Bufanda Boca', price: 35, image: 'https://via.placeholder.com/150', team: 'boca', description: "lorem impsut" },
  ];

  const product = products.find((p) => p.id === parseInt(id));

  const relatedProducts = products.filter(
    (p) => p.team === product.team && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className={`bg-${team}-primary text-${team}-secondary min-h-screen p-6`}>
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
          <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto object-contain rounded-lg mb-6 md:mb-0 md:mr-6" />
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
      <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Productos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((related) => (
              <div
                key={related.id}
                className={`border rounded-lg shadow hover:shadow-lg transition-shadow p-4 bg-${related.team}-secondary`}
              >
                <img
                  src={related.image}
                  alt={related.name}
                  className="h-40 w-full object-cover rounded-lg mb-4"
                />
                <h3 className={`text-lg font-bold text-${related.team}-primary mb-2`}>
                  {related.name}
                </h3>
                <p className={`text-${related.team}-primary font-bold text-xl`}>
                  ${related.price}
                </p>
                <button className={`mt-4 bg-${related.team}-primary text-${related.team}-secondary px-4 py-2 rounded-lg hover:bg-${related.team}-secondary hover:text-${related.team}-primary transition-colors`}>
                  Ver Detalles
                </button>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default ProductPage;
