import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/auth'

export default function Private({children}) {
  const { signed, loading } = useContext(AuthContext)

  console.log(signed)
  if(loading) {
    return(
      <div><h1>oiii</h1></div>
    )
  }

  if (!signed) {
    return <Navigate to="/" />
  }
  return children;
}