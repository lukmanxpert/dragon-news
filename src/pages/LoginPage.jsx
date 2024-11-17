import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { useContext } from "react";
import { AuthContext } from "../Context/Context";
const LoginPage = () => {
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext)
    const {signInUser} = useContext(AuthContext)
    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(res => {
            setUser(res.user)
            navigate('/')
        })
        .catch(err => alert(err.code))
    }
    return (
        <div>
            <Nav></Nav>
            <div className="card bg-base-100 w-full max-w-xl my-24 mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleSignIn} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <p className="label-text-alt text-center">Don't Have an Account? <Link to='/register' className="text-red-600">Register</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-gray-600 hover:bg-gray-400 hover:text-white border-none">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;