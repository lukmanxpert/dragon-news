import { useContext } from 'react';
import { AuthContext } from '../Context/Context';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    return user ? children : <Navigate to='/login'></Navigate>
};

export default PrivateRoute;