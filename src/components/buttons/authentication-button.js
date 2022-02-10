import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";

export const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};
