import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "", description: "" };
  }

  handleSubmit = event => {
    this.props.add(this.state.title, this.state.description);
    this.setState({
      title: "",
      description: ""
    });

    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            className="form-control"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary "
          style={{ fontWeight: "bold" }}
        >
          Add
        </button>
      </form>
    );
  }
}
