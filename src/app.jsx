import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	useRoutes,
} from "react-router-dom";
import { Context } from "./context/context";
import { Navbar } from "./components/navbar/navbar";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import React from "react";
import { Carts } from "./components/flower-cart/flower";
const App = () => {
	return (
		<Context>
			<Routes>
				<Route element={<Navbar></Navbar>}>
					<Route path={"/"} element={<Navigate to={"/home"} />} />
					<Route path={"/home"} element={<Home />}>
						<Route path={":id"} element={<Carts></Carts>}></Route>
					</Route>
					<Route path={"/shop"} element={<Shop />} />
					<Route path={"/about"}></Route>
					<Route path={"/students"}></Route>
					<Route path={"*"} element={<h1>Not Found</h1>}></Route>
				</Route>
			</Routes>
		</Context>
	);
};

export default App;
