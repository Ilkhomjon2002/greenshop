import React, { createContext, useState } from "react";
import { data as flowers, content as sidebarContent } from "../data";

export const FlowerContext = createContext();
export const SideBarContext = createContext();
export const CartContext = createContext();

export const Context = ({ children }) => {
	let [data, setData] = useState(flowers);
	let [content, setContent] = useState(sidebarContent);
	let [cart, setCart] = useState([]);
	return (
		<FlowerContext.Provider value={[data, setData]}>
			<SideBarContext.Provider value={[content, setContent]}>
				<CartContext.Provider value={[cart, setCart]}>
					{children}
				</CartContext.Provider>
			</SideBarContext.Provider>
		</FlowerContext.Provider>
	);
};
