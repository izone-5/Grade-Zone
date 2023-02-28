import { Outlet, Navigate } from "react-router-dom"

const Protected= (props) => {
    
  return props.access ? <Outlet /> : <Navigate to='/' />
  
}

export default Protected
