import axios from "axios";

const SERVER_URL="http://localhost:8081"

const signupuser=(data)=>{
return axios.post(SERVER_URL+'/signup',data);
}

const loginupuser=(data)=>{
    return axios.post(SERVER_URL+'/login',data);
}

const AuthServices={
    loginupuser,
    signupuser
}
export default AuthServices;