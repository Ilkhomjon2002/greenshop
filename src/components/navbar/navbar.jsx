import React from "react";
import { NavBarContainer } from "../../container";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	return (
		<NavBarContainer>
			<div className="logo">GREENSHOP</div>
			<div className="links">
				<NavLink
					className={(isActive) => (isActive ? "link-2" : "link")}
					to={"/home"}
				>
					Home
				</NavLink>
				<NavLink
					className={(isActive) => (isActive ? "link-2" : "link")}
					to={"/shop"}
				>
					Shop
				</NavLink>
				<NavLink
					className={(isActive) => (isActive ? "link-2" : "link")}
					to={"/about"}
				>
					Plant Care
				</NavLink>
				<NavLink
					className={(isActive) => (isActive ? "link-2" : "link")}
					to={"/students"}
				>
					Blogs
				</NavLink>
			</div>
			<div className="buttons">
				<button className="login">Login</button>
			</div>
		</NavBarContainer>
	);
};
