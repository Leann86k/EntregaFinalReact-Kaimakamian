import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cart, removeItem, getTotalPrice } = useContext(CartContext);

	if (cart.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
				<p className="text-xl font-semibold">No hay items en el carrito</p>
				<Link
					to="/"
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					Volver a la tienda
				</Link>
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto p-4">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{cart.map((item) => (
					<div
						key={item.id}
						className="flex flex-col p-4 border rounded-lg shadow w-full max-w-sm"
					>
						<img
							src={item.imagen}
							alt={item.title}
							className="w-full h-48 object-cover rounded"
						/>
						<div className="flex-1 mt-4">
							<h3 className="text-lg font-semibold">{item.title}</h3>
							<p className="text-gray-600">Cantidad: {item.quantity}</p>
							<p className="text-gray-600">
								Precio: ${item.price * item.quantity}
							</p>
						</div>
						<button
							onClick={() => removeItem(item.id)}
							className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mt-4"
						>
							Eliminar
						</button>
					</div>
				))}
			</div>

			<div className="mt-8 flex flex-col items-end gap-4">
				<p className="text-xl font-bold">Total: ${getTotalPrice()}</p>
				<Link
					to="/checkout"
					className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
				>
					Finalizar compra
				</Link>
			</div>
		</div>
	);
};

export default Cart;
