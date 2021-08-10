import React, { Component } from 'react';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            number: "",
            // id: Math.random().toString()
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.setState({
            name: "",
            email: "",
            number: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="gen">Number</label>
                    <input
                        type="text"
                        name="number"
                        value={this.state.gen}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-control">
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

export default UserForm;