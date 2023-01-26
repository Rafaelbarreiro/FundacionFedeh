import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import N from "./NavBar/NavBar.module.css"


export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className={N.botonLogin}  onClick={() => loginWithRedirect()}>
      Login
    </button>
  );
};
