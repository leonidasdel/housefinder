import axios from 'axios'


class AuthenticationService {

    registerSuccessfulLoginForJwt(username, token,firstName,lastName) {
        sessionStorage.setItem("authenticatedUser", username)
        sessionStorage.setItem("firstName",firstName)
        sessionStorage.setItem("lastName",lastName)
        sessionStorage.setItem("token",this.createJWTToken(token))
    }
    createJWTToken(token) {
        return 'Bearer ' + token
    }

    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
    
    isUserLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser")
       
        if (user === null) return false
        return true
    }

    getLoggedInUser(){
        let user = sessionStorage.getItem("authenticatedUser")
        let token = sessionStorage.getItem("token")

        return {"user":user,"token":token}
    }

    logout() {
        sessionStorage.removeItem("authenticatedUser");
        sessionStorage.removeItem("firstname");
        sessionStorage.removeItem("lastname");
        sessionStorage.removeItem("token");
        window.location = `${window.location.origin}/login-register`
    }

}

export default new AuthenticationService();