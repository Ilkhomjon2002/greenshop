import { useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { FlowerContext, CartContext } from "../../context/context";
import { Column, Row, CartContainer, Grid } from "../../container";
import "./flower.css";
export const Carts = () => {
	const [flowers, setFlowers] = useContext(FlowerContext);
	const [type, setType] = useState("all");
	const [order, setOrder] = useContext(CartContext);
	const data = useParams();
	console.log(data);
	const addCart = (val) => {
		let i;
		if (
			order.find((elem, index) => {
				i = index;
				return elem.name === val.name;
			})
		) {
			let res = order;
			res[i].quantity += 1;
			setOrder([...res]);
		} else {
			val.quantity = 1;
			setOrder([...order, val]);
		}
	};
	return (
		<Column className="flower-cart">
			<Row className="search-types">
				<p
					className={type === "all" && "active-button"}
					onClick={() => setType("all")}
				>
					All plants
				</p>
				<p
					className={type === "new" && "active-button"}
					onClick={() => setType("new")}
				>
					New arrivals
				</p>
				<p
					className={type === "sale" && "active-button"}
					onClick={() => setType("sale")}
				>
					Sale
				</p>
			</Row>
			<Grid>
				{flowers //7
					.filter((val) => val.type === data.id.split("-").join(" ")) //1
					.filter((val) => (type !== "all" ? !!val[type] === true : val))
					.map((val) => {
						return (
							<React.Fragment key={val.id}>
								<CartContainer>
									<div className="img-container">
										<img src={val.src} alt="img-1" />
										{!!val.sale && <span>{val.sale}% OFF</span>}
									</div>
									<div className="info">
										<p> {val.name}</p>
										<Row className="price">
											<p>
												$
												{val.sale
													? val.price -
													  (val.price * (val.sale / 100)).toFixed(2)
													: val.price.toFixed(2)}
											</p>
											{!!val.sale && (
												<p className="real-price"> {val.price.toFixed(2)}$</p>
											)}
											<button onClick={() => addCart(val)}>Add Cart</button>
										</Row>
									</div>
								</CartContainer>
							</React.Fragment>
						);
					})}
			</Grid>
		</Column>
	);
};
