import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
// will remove later
//import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children }) => {
  //const { myUser } = useUserContext();
  //console.log(myUser);
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default PrivateRoute;
