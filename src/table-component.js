import React from "react";
import { TableRow } from "./App";

class TableComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { students: props.data, selected: {} };
	}
	onChange({ target: { value, name } }) {
		let res = this.props.data.filter((val) =>
			`${val[name]}`.toLowerCase().includes(value.toLowerCase())
		);
		this.setState({ students: res });
		!value.length && this.setState({ students: this.props.data });
	}
	onDelete(id) {
		let res = this.state.students.filter((val) => val.id !== id);
		this.setState({ students: res });
	}
	onEdit(element) {
		this.setState({ selected: element });
	}
	onSave(element) {
		let res = this.state.students.map((value) =>
			value.id === element.id ? element : value
		);
		this.setState({ students: res, selected: {} });
	}
	render() {
		return (
			<div>
				<div className="table-container">
					<table>
						<tr className="table-header">
							<th>ID</th>
							<th>Name</th>
							<th>Age</th>
							<th>Address</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
						<div className="table-body">
							{this.state.students.map((val) => {
								return (
									<TableRow
										key={val.id}
										row={val}
										selected={val.id === this.state.selected.id ? true : false}
										parentCallback={
											val.id === this.state.selected.id
												? this.onSave.bind(this)
												: this.onEdit.bind(this)
										}
									>
										<button onClick={() => this.onDelete(val.id)}>
											Delete
										</button>
									</TableRow>
								);
							})}
						</div>
					</table>
				</div>
				<div className="inputs">
					<input
						placeholder="Search by Id"
						onChange={this.onChange.bind(this)}
						type={"text"}
						name="id"
					></input>
					<input
						placeholder="Search by Name"
						onChange={this.onChange.bind(this)}
						type={"text"}
						name="name"
					></input>
					<input
						placeholder="Search by Address"
						type={"text"}
						name="address"
						onChange={this.onChange.bind(this)}
					></input>
					<input
						placeholder="Search by Status"
						type={"text"}
						name="status"
						onChange={this.onChange.bind(this)}
					></input>
				</div>
			</div>
		);
	}
}
export { TableComponent };
