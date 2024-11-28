import axios from 'axios';
function Login({ email , setemail , password , setpassword }) {
    function HandleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:8081/login',
            {email ,password}).then(res=>console.log(res))
            .catch(err=>console.log(err));    }
    return(
<div className="body">
    <section className="container">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                <h1 className="opacity">LOGIN</h1>
                <form onSubmit={HandleSubmit}>
                    <input type="email" placeholder="Email"
                    onChange={e=>(setemail(e.target.value))} />
                    <input type="password" placeholder="PASSWORD"
                     onChange={e=>(setpassword(e.target.value))}/>
                    <button className="opacity">SUBMIT</button>
                </form>
                <div className="register-forget opacity">
                    <a href="">Sign-Up</a>
                    <a href="">FORGOT PASSWORD</a>
                </div>
            </div>
            <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
    </section>
</div>
    )
}
export default Login;