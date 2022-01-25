import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {useSelector} from 'react-redux'
import AuthenticationService from './AuthenticationService.jsx'

function AuthenticatedRoute(props) {

        const searchTerm  =  useSelector(state => state.searchReducer)
        switch(props.path) {
            case '/houses':
                if(searchTerm != "") {
                    return <Route {...props} />
                } else {
                    return <Redirect   to={{pathname:"/", state:{wrongSearch:true}}} />
                }
            
            default:
                if (AuthenticationService.isUserLoggedIn()) {
                    return <Route {...props} />
                } else {
                    return <Redirect   to={{pathname:"/login-register",state:{isNotLoggedIn:true}}} />
                }
        }


    }

export default AuthenticatedRoute