import { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    return user ? children : <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;