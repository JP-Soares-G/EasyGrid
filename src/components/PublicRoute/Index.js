import {
    Outlet,
    Navigate
  } from 'react-router-dom';
  
  function PublicRoute({ children, isAuthenticated, ...rest }) {
    if(!isAuthenticated) return <Outlet />
    
    return <Navigate to={'/dashboard'} />
  }
  
  export default PublicRoute;