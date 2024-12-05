import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-neutral-dark mb-6">Tu Carrito</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">No tienes productos en tu carrito.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-neutral-light text-neutral-dark uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Producto</th>
                <th className="py-3 px-6 text-center">Precio</th>
                <th className="py-3 px-6 text-center">Cantidad</th>
                <th className="py-3 px-6 text-center">Total</th>
                <th className="py-3 px-6 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {cart.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left flex items-center">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="h-12 w-12 object-cover rounded mr-4"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="py-3 px-6 text-center">${item.price}</td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mt-4">
            <h2 className="text-2xl font-bold text-neutral-dark mb-4">
              Total: ${calculateTotal()}
            </h2>
            <button
              onClick={() => alert('¡Gracias por tu compra!')}
              className="bg-primary-light text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Proceder al Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
