import React,{ useEffect} from 'react';
import "./loginForm.styles.scss"

function LoginForm(props){


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
        e.preventDefault()
        // return MyApiClient.post('login', {username:document.getElementById("usernamelogin").value,password:document.getElementById("passwordlogin").value})
        //     .then(res => {
        //         if(res.data !==""){
                    
        //             window.location= "/"
        //         }
        //         else{
        //             alert("Wrong combination of username and password")
        //         }
        //     } )
            
        //     .catch(err => console.log(err))

        }

     const hello = (e) => {
        e.preventDefault()
       let username = document.getElementById("last_name").value
       let password = document.getElementById("password").value
        // return MyApiClient.post('register', {name:username,password:password,password2:password,username:username,email:document.getElementById("email").value})
        // .then(res => {
        //     if(res.data !==""){
        //         MyApiClient.post('login', {username:username,password:password})
        //         .then(() =>  window.location= "/" )
               
        //     }
        //     else{
        //         alert("Wrong combination of username and password")
        //     }
        // } )
        
        // .catch(err => console.log(err))
         
    }

    
    return(
       
            
        <section className="container_page">
        <section className="container_page_form">
            <div id="clicky" className="container_page_form_moving-element"></div>
            <div className="container_page_form_login-signup">
                <div id="login" className="container_page_form_login-signup_login index">
                    <h2 className="container_page_form_login-signup_login_text login-signup">Sign in</h2>
                    <h6 id="alertwrongpassword" className="alertwrongpassword">""</h6>
   

                   <div className="form-container">
                       <form onSubmit={() => login()} className="col s12">


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



                   </div>
                <div id="signup" className="Signup">
                <div className="Login">
                    <h2 className="signin login-signup">Sign up</h2>
                    
   

                   <div className="">
                       <form className="col s12">


                       <div className="flexible-thing">
                           <div className="input-field marginclass col s12">
                               <input id="email" type="email" className="input-field_text" placeholder="Email"/>
                               <label className="input-field_label" htmlFor="email">Email</label>
                               {/* <span class="helper-text"  data-error="✖" data-success="🗸"></span> */}
                           </div>
                       </div>
                       <div className="flexible-thing">
                           <div className="input-field marginclass col s12">
                               <input id="password" type="password" className="input-field_text" placeholder="Password" />
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
                   <button type="submit" onClick={() => hello()} id="signupbutton" className="login-button">Sign up</button>
                   </div>
                       </form>
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
export default LoginForm;