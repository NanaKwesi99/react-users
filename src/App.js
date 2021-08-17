import React, { Component } from "react";
import UserList from "./Components/UserList";
import UserForm from "./Components/UserForm";

class App extends Component {
  handleAddUser = (newUser) => {
    newUser.id = Math.random().toString();
    this.setState({
      users: [newUser, ...this.state.users],
    });
  };

  handleDeleteUser = (userId) => {
    const savedUsers = this.state.users.filter((user) => {
      return user.id !== userId;
    });
    this.setState({ users: savedUsers });
  };

  handleEditUser = (updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <UserForm />
          </div>
          <div className="col">
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;