import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Row } from "../../../container";
import { CartContext } from "../../../context/context";
import "./shop-cart.css";

const ShopCartElement = ({ index }) => {
	const [data, setData] = useContext(CartContext);
	const inc = () => {
		let result = data;
		result[index].quantity += 1;
		setData([...result]);
	};
	const dec = () => {
		let result = data;
		if (result[index].quantity > 0) {
			result[index].quantity -= 1;
			setData([...result]);
		}
	};
	const delCart = () => {
		let result = data.filter((val, i) => i !== index);
		setData([...result]);
	};
	useEffect(() => {
		data[index].quantity === 0 && delCart();
	}, [data]);
	return (
		<tr className="table-row">
			<td>
				<Row style={{ alignItems: "center" }}>
					<img src={data[index].src} alt="" style={{ width: "100px" }} />

					<h1 className="info">{data[index].name}</h1>
				</Row>
			</td>
			<td className="price">
				<h1>
					$
					{(!!data[index].sale
						? data[index].price - data[index].price * (data[index].sale / 100)
						: data[index].price
					).toFixed(2)}
				</h1>
			</td>
			<td>
				<Row className="inc-dec">
					<button className="increament" onClick={inc}>
						+
					</button>
					<h1 className="quantity">{data[index].quantity}</h1>
					<button onClick={dec} className="decreament">
						-
					</button>
				</Row>
			</td>
			<td className="total">
				$
				{(
					(!!data[index].sale
						? data[index].price - data[index].price * (data[index].sale / 100)
						: data[index].price) * +data[index].quantity
				).toFixed(2)}
			</td>
			<td>
				<button className="del" onClick={delCart}>
					<FontAwesomeIcon icon={faTrashCan} />
				</button>
			</td>
		</tr>
	);
};

export default ShopCartElement;
