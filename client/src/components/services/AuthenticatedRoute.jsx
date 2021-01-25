import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.jsx'

class AuthenticatedRoute extends Component {
    render() {
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Redirect   to={{pathname:"/login-register",state:{isNotLoggedIn:true}}} />
        }

    }
}

export default AuthenticatedRoute