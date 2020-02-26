import React, { Component } from 'react';
import { connect } from 'react-redux'


class about extends Component {
    render() {
        return (
            <div>
                <h1>This is from about js</h1>
                <hr/>
                {
                this.props.auth.isAuthenticated?
                <button>ok i am </button>:
                <button>not I am </button>
            }
            {this.props.auth.user.name}
         
                <hr/>
            </div>
        );
    }
}

const mapStateToProps =state =>({
    auth:state.auth
})

export default connect(mapStateToProps)(about);