import React, { Component } from 'react';


class Login extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: ""
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }
    handleClick() {
        alert(this.state.userName + ' ' + this.state.password)
    }
    handleUserName(event) {
        const name = event.target.value;
        this.setState({ userName: name })
    }
    handlePassword(event) {
const pass=event.target.value
        this.setState({ password: pass })
    }

    render() {
        return (
            <div>
                <h1>Hi</h1>
                <input onChange={this.handleUserName} value={this.state.userName} />
                <input onChange={this.handlePassword} value={this.state.password} />
                <button onClick={this.handleClick}>submit</button>

            </div>
        )
    }
}

export default Login