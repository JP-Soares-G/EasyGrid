import {
    Outlet,
    Navigate
  } from 'react-router-dom';
  
  function PrivateRoute({ isAuthenticated, ...rest }) {
    if(isAuthenticated) return <Outlet />
    
    return <Navigate to={'/'} />
  }
  
  export default PrivateRoute;