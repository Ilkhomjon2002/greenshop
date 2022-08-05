/* eslint-disable import/no-anonymous-default-export */
import { Container, Row } from "../../container";
import { useContext } from "react";
import { CartContext } from "../../context/context";
import ShopCartElement from "./shop-cart/shop-cart";
import "./shop.css";
import Checkout from "./cart-check/cart-check";
export default () => {
	const [order, setOrder] = useContext(CartContext);
	return (
		<Container>
			<Row
				style={{
					justifyContent: "space-between",
					alignItems: "flex-start",
					width: "100%",
				}}
			>
				<div className="orders">
					{order.length > 0 && (
						<table>
							<tr className="table-header">
								<th>Products</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Total</th>
							</tr>
							{order.map((val, i) => (
								<ShopCartElement index={i}></ShopCartElement>
							))}
						</table>
					)}
					{order.length == 0 && <h1>You haven`t chosen any product yet.</h1>}
				</div>

				<Checkout></Checkout>
			</Row>
		</Container>
	);
};
