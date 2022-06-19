import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { data } from "./data";
import { TableComponent } from "./table-component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TableComponent data={data}></TableComponent>
		{/* <Practise></Practise> */}
	</React.StrictMode>
);
