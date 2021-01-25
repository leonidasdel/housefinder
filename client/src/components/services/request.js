import authenticationService from "./AuthenticationService"
import axios from 'axios'
const request = axios.create({
    baseURL: ''
})

request.interceptors.request.use(config => {
    const currentUser = authenticationService.getLoggedInUser() //You can get the user directly from the cookie or session storage...
    if(currentUser.user) {
        config.headers.Authorization = currentUser.token
    }
return config
}, err => {
   console.log(err)
return Promise.reject(err)
})

export default request