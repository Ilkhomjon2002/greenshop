import React from "react";
import "./app.css";
class TableRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selected: props.row };
	}
	trigger(e) {
		this.props.parentCallback(this.state.selected);
	}

	onChangeInput({ target: { value, name } }) {
		this.setState({ selected: { ...this.state.selected, [name]: value } });
	}
	render() {
		return (
			<tr className="table-data">
				<td>{this.props.row.id}</td>
				<td>
					{this.props.selected ? (
						<input
							value={this.state.selected.name}
							onChange={this.onChangeInput.bind(this)}
							name="name"
						></input>
					) : (
						this.props.row.name
					)}
				</td>
				<td>
					{this.props.selected ? (
						<input
							onChange={this.onChangeInput.bind(this)}
							value={this.state.selected.age}
							name="age"
						></input>
					) : (
						this.props.row.age
					)}
				</td>
				<td>
					{this.props.selected ? (
						<input
							onChange={this.onChangeInput.bind(this)}
							value={this.state.selected.address}
							name="address"
						></input>
					) : (
						this.props.row.address
					)}
				</td>
				<td>
					{this.props.selected ? (
						<input
							onChange={this.onChangeInput.bind(this)}
							value={this.state.selected.status}
							name="status"
						></input>
					) : (
						this.props.row.status
					)}
				</td>
				<td className="buttons">
					{this.props.children}
					{this.props.selected ? (
						<button onClick={() => this.trigger()}>Save</button>
					) : (
						<button onClick={() => this.trigger()}>Edit</button>
					)}
				</td>
			</tr>
		);
	}
}

export { TableRow };
