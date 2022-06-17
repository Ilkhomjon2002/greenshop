import React from "react";

class TableRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.row.id}</td>
				<td>{this.props.row.name}</td>
				<td>{this.props.row.age}</td>
				<td>{this.props.row.address}</td>
				<td>{this.props.row.status}</td>
			</tr>
		);
	}
}

export { TableRow };
