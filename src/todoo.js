import React from "react";
import "./App.css";

class Todoo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoo: [],
      value: "",
    };
  }
  add_todo = () => {
    if (this.state.value !== "") {
      let obj = { key: this.state.value };
      this.setState({ todoo: [...this.state.todoo, obj], value: "" });
    }
  };
  delete_todoo = (index) => {
    this.state.todoo.splice(index, 1);
    this.setState({
      todoo: this.state.todoo,
    });
  };
  edit_todoo(index, val) {
    this.state.todoo[index].edit = true;
    this.setState({
      todoo: this.state.todoo,
    });
  }
  changeH = (e, index) => {
    this.state.todoo[index].key = e.target.value;
    this.setState({
      todoo: this.state.todoo,
    });
  };
  update = (index) => {
    this.state.todoo[index].edit = false;
    this.setState({
      todoo: this.state.todoo,
    });
  };
  render() {
    let { todoo, value } = this.state;
    return (
      <div className="main">
        <input
          className="input"
          type="text"
          placeholder="Todoo"
          value={value}
          onChange={(e) => {
            this.setState({ value: e.target.value });
          }}
        ></input>
        <button className="addBtn" onClick={this.add_todo}>
          Add
        </button>
        <ul className="list">
          {todoo.map((v, i) => {
            return (
              <li key={i}>
                {v.edit ? (
                  <input
                    className="edit-input"
                    value={v.key}
                    type="text"
                    onChange={(e) => this.changeH(e, i)}
                  />
                ) : (
                  v.key
                )}
                {v.edit ? (
                  <button className="btn" onClick={() => this.update(i)}>
                    Update
                  </button>
                ) : (
                  <button
                    className="btn"
                    onClick={() => this.edit_todoo(i, v.key)}
                  >
                    Edit
                  </button>
                )}
                <button className="btn" onClick={() => this.delete_todoo(i)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Todoo ;
