import { useContext } from "react";
import { Container, SideBarContainer } from "../../container";
import { SideBarContext } from "../../context/context";

import { NavLink, Route, Switch } from "react-router-dom";
import "./sidebar.css";
import { Carts } from "../flower-cart/flower";
export const Sidebar = () => {
	const [data, setData] = useContext(SideBarContext);
	return (
		<Container>
			<SideBarContainer>
				<h1>Categories</h1>
				<div className="categories">
					{data.map((val) => {
						return (
							<NavLink
								key={val.name}
								className={(isActive) =>
									isActive ? "activeSideBar" : "notActiveSideBar"
								}
								to={"/home/" + val.name}
							>
								<p>{val.name}</p>
								<p>({val.quantity})</p>
							</NavLink>
						);
					})}
				</div>
			</SideBarContainer>

			<Route path={"/home/:id"}>
				<Carts></Carts>
			</Route>
		</Container>
	);
};
