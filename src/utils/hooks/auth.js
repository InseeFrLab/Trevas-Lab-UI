import { useContext } from "react";
import { AuthTypeContext } from "index";
import { useReactOidc } from "@axa-fr/react-oidc-context";

export const useAuth = () => {
  const authType = useContext(AuthTypeContext);
  if (authType === "NONE") return { authType, name: "Fake User" };
  if (authType === "OIDC") {
    /**
     * Assume this conditional hook does not break anything
     */
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { oidcUser, login, logout } = useReactOidc();
    return { authType, oidcUser, login, logout };
  }
  throw new Error(`Auth type ${authType} is nor recognized`);
};
