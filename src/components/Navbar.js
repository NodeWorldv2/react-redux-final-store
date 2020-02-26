import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
            <div>
                <ul >
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to='/about'>about</Link></li>
                    <li><Link to='/profile'>profile</Link></li>
                    <li><Link to='/contact'>contact</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <hr></hr>
                    <li>{this.props.login_status}</li>
                   
                        
                </ul>

            </div>
        );
    }
}


export default Navbar;