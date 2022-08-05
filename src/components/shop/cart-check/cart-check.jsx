import React, { useContext } from "react";
import { Row } from "../../../container";
import "./cart-check.css";
import { CartContext } from "../../../context/context";

const Checkout = () => {
	const [data, setData] = useContext(CartContext);
	const subTotal =
		data.length > 0
			? data
					.map((val) =>
						val.sale > 0
							? (val.price - (val.sale / 100) * val.price) * val.quantity
							: val.quantity * val.price
					)
					.reduce((acc, curr) => acc + curr, 0)
					.toFixed(2)
			: 0;
	const shipping = (subTotal * 0.01).toFixed(2);
	return (
		<div className="coupon-container">
			<h2 className="checkout-title">Cart Totals</h2>
			<div className="coupon">
				<h3>Coupon apply</h3>
				<Row className="add-coupon">
					<input placeholder="Enter cuopon code here..." type="text" />
					<button>Apply</button>
				</Row>
				<Row className="space subtotal">
					<p>Subtotal</p>
					<h2>${subTotal}</h2>
				</Row>
				<Row className="space coupon-discount">
					<p>Cuopon Discount</p>
					<h2>(-)00.00</h2>
				</Row>
				<Row className="space shipping">
					<p>Shipping</p>
					<h2>${shipping}</h2>
				</Row>
				<Row className="space total">
					<p>Total</p>
					<h2>${(+subTotal + +shipping).toFixed(2)}</h2>
				</Row>
				<button className="checkout-btn">Proceed To Checkout</button>
				<button className="checkout-btn continue">Continue Shopping</button>
			</div>
		</div>
	);
};

export default Checkout;
