import React, { Component } from 'react';
import About from './about'
import Contact from './contact'

class subapp extends Component {
    render() {
        return (
            <div>
                <About/>
                <Contact/>
            </div>
        );
    }
}

export default subapp;