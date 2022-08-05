import React from "react";
import { NavBarContainer } from "../../container";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/context";
export const Navbar = () => {
	const [data, setData] = useContext(CartContext);
	let quantity = data.reduce((acc, curr) => acc + curr.quantity, 0);

	return (
		<>
			<NavBarContainer>
				<div className="logo">GREENSHOP</div>
				<div className="links">
					<NavLink
						className={({ isActive }) => (isActive ? "link-2" : "link")}
						to={"/home"}
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? "link-2" : "link")}
						to={"/shop"}
					>
						Shop
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? "link-2" : "link")}
						to={"/about"}
					>
						Plant Care
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? "link-2" : "link")}
						to={"/students"}
					>
						Blogs
					</NavLink>
				</div>
				<div className="buttons">
					<NavLink to={"/shop"} data="40px" className="cart">
						<FontAwesomeIcon className="icon" icon={faCartShopping} />
						{quantity > 0 && <span className="quantity">{quantity}</span>}
					</NavLink>
					<button className="login">
						<FontAwesomeIcon
							className="icon"
							icon={faSignIn}
							style={{ margin: "0 5px 0 0" }}
						/>
						Login
					</button>
				</div>
			</NavBarContainer>
			<Outlet></Outlet>
		</>
	);
};
