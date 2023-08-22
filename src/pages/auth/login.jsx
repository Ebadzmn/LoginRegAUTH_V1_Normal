import React, {useState} from 'react';
import {loginUser} from "../../apicall/api.jsx";
import {useAuth} from "../../helper/auth.jsx";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const data = await loginUser(email, password);
            if(data.error){
                console.log(data.error);
            }
            else{
                localStorage.setItem("auth", JSON.stringify(data));
                setAuth({ ...auth, user: data.user });
                navigate("/home");
            }
        }
        catch(error){
            console.log(error);
        }
    }




    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                    <p className="mt-3 text-center">
                        Don't have an account? <Link to="/">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};



export default Login;