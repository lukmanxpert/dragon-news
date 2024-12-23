import { useContext, useState } from 'react';
import Nav from '../components/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';

const Register = () => {
    const navigate = useNavigate();
    const [err, setErr] = useState("");
    const { signUpUser, setUser, updateAuthProfile } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (name.length < 3) {
            return setErr("Password must be at least 3 character")
        }
        signUpUser(email, password)
            .then(res => {
                setUser(res.user)
                updateAuthProfile({ displayName: name, photoURL: photo })
                    .then((res) => {
                    })
                    .catch(err => {
                        alert("ERROR", err)
                    })
                navigate('/')
            })
            .catch(err => setErr(err.code))
    }
    return (
        <div>
            <Nav></Nav>
            <div className="card bg-base-100 w-full max-w-xl my-24 mx-auto shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter Your Full Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <p className="label-text-alt text-center text-red-700">{err && err}</p>
                        </label>
                        <label className="label">
                            <p className="label-text-alt text-center">Already Have Account? <Link to='/login' className="text-red-600">Login</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-gray-600 hover:bg-gray-400 hover:text-white border-none">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;