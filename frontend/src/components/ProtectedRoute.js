import React from 'react';
import { useKeycloak } from 'keycloak-react-web';

const defaultUri = 'http://localhost:3000/';

const isLocalhost =
  window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const isInContainer = window.location.port === '';

const redirectUri = !isLocalhost
  ? `${window.location.protocol}//${window.location.hostname}/`
  : isInContainer
  ? 'http://localhost/'
  : defaultUri;

const loginOptions = {
  redirectUri: redirectUri,
};

export const ProtectedRoute = ({ element, ...rest }) => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    // Optionally, render a loading indicator while initializing
    return <div>Loading...</div>;
  }

  if (!keycloak.authenticated) {
    keycloak.login(loginOptions);
    return null; // Prevent rendering anything before redirect
  }

  // Check if 'element' is a valid React element
  if (React.isValidElement(element)) {
    return element;
  }

  // If 'element' is a component class or function, instantiate it
  if (typeof element === 'function') {
    const Component = element;
    return <Component {...rest} />;
  }

  // If 'element' is neither, handle as needed (e.g., render null or throw an error)
  console.error('ProtectedRoute: Invalid element prop');
  return null;
};
