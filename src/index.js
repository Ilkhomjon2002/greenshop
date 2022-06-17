import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TableRow } from "./App";
import { data } from "./data";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<div className="table-container">
			<table>
				<tr className="table-header">
					<th>ID</th>
					<th>Name</th>
					<th>Age</th>
					<th>Address</th>
					<th>Status</th>
				</tr>

				{data.map((val) => {
					return <TableRow row={val} />;
				})}
			</table>
		</div>
	</React.StrictMode>
);
