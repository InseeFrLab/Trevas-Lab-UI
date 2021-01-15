import React, { useContext } from "react";
import { AuthTypeContext } from "index";
import { OidcSecure } from "@axa-fr/react-oidc-context";

const secure = (WrappedComponent) => {
  const Component = (props) => {
    const authType = useContext(AuthTypeContext);
    const { otherProps } = props;
    const ReturnedComponent = <WrappedComponent {...otherProps} />;
    if (authType === "NONE") return ReturnedComponent;
    if (authType === "OIDC")
      return <OidcSecure>{ReturnedComponent}</OidcSecure>;
    return <div>{`Auth type ${authType} is nor recognized`}</div>;
  };
  return Component;
};

export default secure;
