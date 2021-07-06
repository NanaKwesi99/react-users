import React, { Component } from 'react';
import User from './Components/User';
import UserForm from './Components/UserForm';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    handleAddUser = (newUser) => {
        this.setState({ 
            users: [newUser, ...this.state.users] 
        })
    }

    render() {
        const users = this.state.users.map((user, index) => {
            return (
               <User user={user} index={index}/>
            )
        })

        return (
            <div style={{ margin: "50px" }}>
                <UserForm addUser={this.handleAddUser} />
                {users}
            </div>
        );
    }
}

export default App;