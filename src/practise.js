import React from "react";
import { data } from "./data";

class Practise extends React.Component {
	constructor(props) {
		super(props);
		this.state = { students: data, selected: {} };
	}
	render() {
		const onChange = ({ target: { value, name } }) => {
			let res = data.filter((val) =>
				`${val[name]}`.toLowerCase().includes(value.toLowerCase())
			);
			this.setState({ students: res });
			!value.length && this.setState({ students: data });
			value === "Status" && this.setState({ students: data });
		};

		const onDelete = (value) => {
			let res = this.state.students.filter((val) => val.id !== value);
			this.setState({ students: res });
		};
		const onEdit = (element) => {
			this.setState({ selected: element });
		};
		const onSave = () => {
			let res = this.state.students.map((value) =>
				value.id === this.state.selected.id ? this.state.selected : value
			);
			this.setState({ students: res, selected: {} });
		};
		const onChangeInput = ({ target: { value, name } }) => {
			this.setState({ selected: { ...this.state.selected, [name]: value } });
		};
		return (
			<div>
				<input
					name="id"
					type="number"
					onChange={onChange}
					placeholder="ID"
				></input>
				<input name="name" onChange={onChange} placeholder="Name"></input>
				<select onChange={onChange} name="status">
					<option value={"Status"}>Status</option>
					<option value={"IT"}>IT</option>
					<option value={"BS"}>BS</option>
					<option value={"CS"}>CS</option>
				</select>
				{this.state.students.map((val) => {
					return (
						<h1>
							{val.id}
							{this.state.selected.id === val.id ? (
								<input
									name="name"
									value={this.state.selected.name}
									onChange={onChangeInput}
								></input>
							) : (
								val.name
							)}
							{this.state.selected.id === val.id ? (
								<input
									name="status"
									value={this.state.selected.status}
									onChange={onChangeInput}
								></input>
							) : (
								val.status
							)}
							<button onClick={onDelete.bind(null, val.id)}>Delete</button>

							{this.state.selected.id === val.id ? (
								<button onClick={onSave.bind(null, val)}>Save</button>
							) : (
								<button onClick={onEdit.bind(null, val)}>Edit</button>
							)}
						</h1>
					);
				})}
			</div>
		);
	}
}

export { Practise };
