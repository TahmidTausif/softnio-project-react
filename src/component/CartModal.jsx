

const CartModal = ({ cart, showModal, setShowModal }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setShowModal(false);
    console.log("Proceeding to checkout with:", cart);
  };
  

  return (
    <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center ${showModal ? "" : "hidden"}`}>
      <div className="bg-white rounded-lg shadow-lg w-1/2 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Cart</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600">
              <th>Image</th>
              <th>Item</th>
              <th>Color</th>
              <th>Size</th>
              <th>Qnt</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(({ item, color, size, quantity, price, image }, index) => (
              <tr key={index}>
                <td><img src={image} alt={color} className="w-16 h-16 object-contain" /></td>
                <td>{item}</td>
                <td>{color}</td>
                <td>{size}</td>
                <td>{quantity}</td>
                <td>${price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-medium">Total: ${totalPrice}</span>
          <div className="flex gap-4">
            <button onClick={() => setShowModal(false)} className="px-4 py-2 border border-gray-300 rounded">Continue Shopping</button>
            <button onClick={handleCheckout} className="bg-purple-600 text-white px-4 py-2 rounded shadow hover:bg-purple-700">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
