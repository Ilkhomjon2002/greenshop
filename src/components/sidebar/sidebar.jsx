import { useContext } from "react";
import { Container, SideBarContainer } from "../../container";
import { SideBarContext } from "../../context/context";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { useEffect } from "react";
export const Sidebar = () => {
	const [data, setData] = useContext(SideBarContext);
	const navigate = useNavigate();
	useEffect(() => navigate("/home/House-Plants"), []);
	return (
		<Container>
			<SideBarContainer>
				<h1>Categories</h1>
				<div className="categories">
					{data.map((val) => {
						return (
							<NavLink
								key={val.name}
								className={({ isActive }) =>
									isActive ? "activeSideBar" : "notActiveSideBar"
								}
								to={"/home/" + val.name.split(" ").join("-")}
							>
								<p>{val.name}</p>
								<p>({val.quantity})</p>
							</NavLink>
						);
					})}
				</div>
			</SideBarContainer>
			<Outlet></Outlet>
		</Container>
	);
};
