import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
 
import { login } from '../redux/LoginReducer';

class Login extends Component {
constructor (props) {
    super(props);
    
    this.state = {
        username: '',
        password: '',
        login: true,
    }
}
    

    handleInput = (name, value) => {
        this.setState({
            [name]: value,
        })
    }

    handleNeverMind = () => {
        this.props.history.goBack()
    }

    handleLogin = () => {
    //console.log(this.state, this.state.username.length)
    //console.log(this.props)
        if (this.state.username.length === 0 || this.state.password.length === 0) {
            alert('Please fill in Username and Password input fields')
        } else {

            const { username, password } = this.state
            const body = { username, password }

            axios.post(`/auth/login`, body).then((res) => {
                //console.log(res)
                this.props.login()
                this.props.history.goBack()
            })
        }

    }

    render() {
        return (
            <div className="container is-fullhd">
                <br />
                <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <p className="subtitle is-5">
                                <strong> BAM!</strong>
                            </p>
                        </div>
                    </div>
                    <div className='navbar-end'>
                        <div className='navbar-item'>
                            <strong>
                                <p className='button is-danger is-outlined'
                                    onClick={() => this.handleNeverMind()}>
                                    <strong>Never Mind</strong>
                                </p>
                            </strong>
                        </div>
                    </div>
                </nav>
                <section className="hero is-medium is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Login to Spencer's Library
                            </h1>
                            <h2 className="subtitle">
                                yo!
                            </h2>
                        </div>
                    </div>
                </section>
                <br />
                <div className="container">
                    <div className="field is-horizontal">
                        <div className='field-label is normal'>
                            <label className="label">Username: </label>
                        </div>
                        <div className="field-body">
                            <div className='field'>
                                <p className='control'>
                                    <input className='input'
                                        placeholder='Username or Email'
                                        name='username'
                                        value={this.state.username}
                                        onChange={(e) => this.handleInput(e.target.name, e.target.value)}>
                                    </input>
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="container">
                        <div className="field is-horizontal">
                            <div className='field-label is normal'>
                                <label className="label">Password: </label>
                            </div>
                            <div className="field-body">
                                <div className='field'>
                                    <p className='control'>
                                        <input className='input'
                                            type='password'
                                            placeholder='Password'
                                            name='password'
                                            value={this.state.password}
                                            onChange={(e) => this.handleInput(e.target.name, e.target.value)}>
                                        </input>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="level-right">
                        <p className="button is-warning"
                            onClick={() => this.handleLogin()}>
                            <strong>Login</strong>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};



export default connect(null, { login })(Login);
