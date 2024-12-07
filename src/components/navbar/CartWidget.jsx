import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
	const { getTotalQuantity } = useContext(CartContext);

	return (
		<Link className="nav-link" to="/cart">
			<svg
				width="24px"
				height="24px"
				viewBox="0 -2.55 20.094 20.094"
				xmlns="http://www.w3.org/2000/svg"
				fill="#FFD700"
				stroke="#FFD700"
				strokeWidth="1.5"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0" />

				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>

				<g id="SVGRepo_iconCarrier">
					{" "}
					<path
						id="Path_15"
						data-name="Path 15"
						d="M518.8,829.36c-.678,1.556-1.213,2.66-2.709,2.66h-8.128a2.664,2.664,0,0,1-2.71-2.66l-.8-7.36h-3.484v-1h4.375l.361,3.014h15.358Zm-12.556,0a1.874,1.874,0,0,0,1.72,1.633H516.1c.9,0,1.271-.72,1.657-1.633l1.837-4.382H505.8Zm1.225,3.64a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,507.474,833Zm-.531,1.969h1V834h-1ZM515.474,833a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,515.474,833Zm-.531,1.969h1V834h-1Z"
						transform="translate(-500.973 -821)"
						fill="#FFD700"
					/>{" "}
				</g>
			</svg>

			<span style={{ color: "#FFD700" }}>{getTotalQuantity()}</span>
		</Link>
	);
};

export default CartWidget;
