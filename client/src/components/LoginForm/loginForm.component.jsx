import React,{useEffect, useState} from 'react';
import "./loginForm.styles.scss"
import axios from 'axios'
import AuthenticationService from '../services/AuthenticationService';
import { withRouter } from "react-router-dom";
import { BASE_URL } from '../../Constants'

function LoginForm(props){
    
    const [flagWrongLogin,setFlagWrongLogin] = useState(false)
    const [flagLoggedIn,setflagLoggedIn] = useState(true)
    const [flagSuccessRegister,setFlagSuccessRegister] = useState(false)
    
    useEffect(() => {
        if(props.location.state){
            setflagLoggedIn(false)}
        
        
    },[])

    //  animation gia to login kai register
    const movelement = (e) => {
        document.getElementById('clicky').setAttribute('style', 'animation: opposite  1s forwards;');
        // document.getElementById('signupalert').setAttribute('style', 'display:none')
        document.getElementById('mprosta').setAttribute('style', 'animation: mprosta 1s forwards;display: flex;')
        document.getElementById('signinalert').setAttribute('style', 'animation: signinalert 1.3s forwards;display: flex;')
        document.getElementById('signup').setAttribute('style', 'animation: signup 1s forwards ;' )
        document.getElementById('login').setAttribute('style','animation: periergi 1s forwards')
        
    }
    const movelementtwo = () => {
        // document.getElementById('clicky').style.removeProperty("animation")
        document.getElementById('clicky').setAttribute('style', 'animation: opposite2  1s forwards;');
        // document.getElementById('signupalert').setAttribute('style', 'display:none')
        document.getElementById('mprosta').setAttribute('style', 'animation: mprosta2 1s forwards;display: flex;')
        document.getElementById('signinalert').setAttribute('style', 'animation: signinalert2 1.3s forwards;display: flex;')
        document.getElementById('signup').setAttribute('style', 'animation: signup2 1s forwards ;' )
        document.getElementById('login').setAttribute('style','animation: periergi2 1s forwards;')
    }

    // http request gia syndesh enos xrhsth

    const login = (e) => {
        console.log("hi")
        e.preventDefault()
      
        let tempEmail = document.getElementById("email").value
        let tempPassword = document.getElementById("password").value
        const json = JSON.stringify({ email: tempEmail,password:tempPassword });
        
       
        return axios.post(`${BASE_URL}/users/login`,  json,{headers:{
           
            "Content-Type": "application/json"
        }})
        
        .then(response => response)
        .then(response => {
            console.log(response.headers)
            AuthenticationService.registerSuccessfulLoginForJwt(response.headers.username,response.headers.token,response.headers.firstname,response.headers.lastname)
           
        })
        .then(response => {
            console.log("hi")
            window.location = window.location.origin;
        })
            
            .catch(err => 
                {console.log("hi")
                setFlagWrongLogin(true)}
                )

        }


    const register = (e) => {
        e.preventDefault()
        let tempEmail = document.getElementById("email-register").value
        let tempPassword = document.getElementById("password-register").value
        let tempFirstName = document.getElementById("first_name").value
        let tempLastName = document.getElementById("last_name").value
        const json = JSON.stringify({ email: tempEmail,password:tempPassword, firstName: tempFirstName,lastName: tempLastName });
        console.log(json)
        return axios.post(`${BASE_URL}/users`, json,{headers:{
           
            "Content-Type": "application/json"}
        })
        .then(response => response)
        .then(response => {
           console.log(response,response.headers);
           setFlagSuccessRegister(true)
        })
            
            .catch(err => console.log(err))

        }
        




    
    return(
       
            
        <section className="container_page">
            { !flagLoggedIn && <div className="alert">
                
                <h5 className="alert_text">You need to be logged in to access this link</h5>
                <span className="closebtn" onClick={(e) => {
                    document.getElementsByClassName("alert")[0].style.opacity ='0'
                    setTimeout(() => {  document.getElementsByClassName("alert")[0].style.display = "none"; },600)
                 } } >&times;</span>
            </div>   }
        <section className="container_page_form">
            <div id="clicky" className="container_page_form_moving-element"></div>
            <div className="container_page_form_login-signup">
                <div id="login" className="container_page_form_login-signup_login index">
                    <h2 className="container_page_form_login-signup_login_text login-signup">Sign in</h2>
                    <h6 id="alertwrongpassword" className="alertwrongpassword">""</h6>
   

                   <div className="form-container">
                       <form onSubmit={(e) => login(e)} className="col s12">


                       <div className="flexible-thing">
                       <div className="input-field marginclass col s12">
                           <input id="email" type="text" className="input-field_text" placeholder="Email"/>
                           <label className="input-field_label" htmlFor="email" >Email</label>
                       </div> 
                       </div>
                       <div className=" flexible-thing">
                           <div className="input-field marginclass col s12">
                               <input id="password" type="password" className="input-field_text" placeholder="Password"/>
                               <label className="input-field_label" htmlFor="password">Password</label>
                           </div>
                       </div>
                       <div className="login-button-div">
                   <button type="submit"  id="signinbutton" className="login-button">Sign In</button>
                        </div>
                       </form>
                        
                   </div>
                   { flagWrongLogin &&  
                        <div className="alert" id="wrong-creds">
                
                        <h5 className="alert_text"  >Wrong email and/or password</h5>
                        <span className="closebtn" onClick={(e) => {
                            document.getElementById("wrong-creds").style.opacity ='0'
                            setTimeout(() => {  document.getElementById("wrong-creds").style.display = "none"; },600)
                         } } >&times;</span>
                    </div> }


                   </div>
                <div id="signup" className="Signup">
                <div className="Login">
                    <h2 className="signin login-signup">Sign up</h2>
                    
   

                   <div className="">
                       <form className="col s12" onSubmit={(e) => register(e)}>


                       <div className="flexible-thing">
                           <div className="input-field marginclass col s12">
                               <input id="email-register" type="email" className="input-field_text" placeholder="Email"/>
                               <label className="input-field_label" htmlFor="email-register">Email</label>
                               {/* <span class="helper-text"  data-error="✖" data-success="🗸"></span> */}
                           </div>
                       </div>
                       <div className="flexible-thing">
                           <div className="input-field marginclass col s12">
                               <input id="password-register" type="password" className="input-field_text" placeholder="Password" />
                               <label className="input-field_label" htmlFor="password">Password</label>
                           </div>
                       </div>
                       <div className="flexible-thing">
                       <div className="input-field marginclass col s12">
                           <input id="first_name" type="text" className="input-field_text" placeholder="First Name"/>
                           <label className="input-field_label" htmlFor="first_name">First Name</label>
                       </div> 
                       </div>
                       <div className="flexible-thing">
                       <div className="input-field marginclass col s12">
                           <input id="last_name" type="text" className="input-field_text" placeholder="Last Name"/>
                           <label className="input-field_label" htmlFor="last_name">Username</label>
                       </div> 
                       </div>
                       <div className="login-button-div">
                   <button type="submit"  id="signupbutton" className="login-button">Sign up</button>
                   </div>
                       </form>
                       { flagSuccessRegister &&  
                        <div className="alert" id="success-register">
                
                        <h5 className="alert_text"  >Registration successful! You can now login.</h5>
                        <span className="closebtn" onClick={(e) => {
                            document.getElementById("success-register").style.opacity ='0'
                            setTimeout(() => {  document.getElementById("success-register").style.display = "none"; },600)
                         } } >&times;</span>
                    </div> }
                   </div>
                   </div>
                </div>
                <div id="mprosta" className="Signupalert">
                    <h4 className="SignupHeader">Δες είστε εγεγγραμένος χρήστης?</h4>
                    <h5  className="SignupSub">Εγγραφείτε τώρα!</h5>
                    <div className="login-button-div">
                       <button onClick={()=> movelement()} id="signupalert"  className="signup-button mrg-bg">Sign up</button>
                    </div>

                </div>

                <div id="signinalert" className="Signinalert">
                <h4 className="SignupHeader">Έχετε ήδη εγγραφει;</h4>
                    <h5  className="SignupSub">Συνδεθείτε τώρα!</h5>
                    <div className="login-button-div">
                       <button onClick={()=>movelementtwo(  )}   className="signup-button mrg-bg">Sign in</button>
                </div>
               
                </div>
               
            </div>
        </section>
    </section>
       
      
    )
}
export default withRouter(LoginForm);