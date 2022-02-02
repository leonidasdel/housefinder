import React,{Component} from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './components/pages/homepage/homepage.component'
import Properties from './components/pages/properties/properties.component'

// REDUX configuration
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from './components/redux/reducers'
import Login from './components/pages/login/login.component';
import houseSubmit from './components/pages/houseSubmit/houseSubmit.component';
import AuthenticatedRoute from './components/services/AuthenticatedRoute'

const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

class App extends Component {
  
constructor(props){
  super(props)
}
  
  render(){
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Header />
    <Switch>
        <Route exact path='/' props={this.props} component={HomePage} />
        <AuthenticatedRoute exact path="/houses" props={this.props} component={Properties}/>
        <Route exact path="/login-register" history={this.props.history} props={this.props} component={Login}/>
        <AuthenticatedRoute  exact path="/sell-house" props={this.props} component={houseSubmit}/>
    </Switch>
    </BrowserRouter>
    </Provider>
  );
 }
}
export default App;
