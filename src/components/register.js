import React, { Component } from "react"
import {connect } from 'react-redux'
import {register} from '../store/actions/authActions'

class Register extends Component{

    state = {
        name: '',
        email: '',
        username: '',
        password: '',
        error :{}
    }

    changeHandler = event => {
        //console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event =>{
        event.preventDefault()
        let { username, email, password} = this.state

        this.props.register({username, email, password})
        
    }

    render(){
        let {name, email, username, password} = this.state
        return(
            <div className="container">
                <div className="col-md-3">
                    <h1>Register </h1>
                    <form method="post" onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input name="name" type="text" 
                                    className="form-control-xs" 
                                    id="name"
                                    value = {name}
                                    onChange = {this.changeHandler}
                                    />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input name="email" type="email"
                                    className="form-control-xs"
                                    id="email"
                                    value = {email}
                                    onChange = {this.changeHandler}
                                    />
                            </div>

                            <div className="form-group">
                                <label htmlFor="username">user name</label>
                                <input name="username" type="text" 
                                    className="form-control-xs" 
                                    id="username"
                                    value = {username}
                                    onChange = {this.changeHandler}
                                 />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" 
                                    className="form-control-xs" 
                                    id="password"
                                    value = {password}
                                    onChange = {this.changeHandler}
                                    />
                            </div>
                          
                            <button type="submit" className="btn btn-primary">Register Now</button>
                    </form>
                    <hr>
                    </hr>
                    <br></br>
                </div>
            </div>
        )
    }
}

//map state props, here state is from store that is driven to this register
//as a props

export default connect(null,{register})(Register)