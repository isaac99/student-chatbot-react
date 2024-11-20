import styled from '@emotion/styled/macro';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useKeycloak } from 'keycloak-react-web';

const StyledButton = styled.button`
  padding: 10px 30px;
  border-radius: 100px;
  background-color: var(--color-charcoal);
  color: var(--color-white);
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const SignInButton = ({ setShowErrorMessage }) => {
  const navigate = useNavigate();
  const { keycloak } = useKeycloak();

  const handleLogin = async () => {
    try {
      keycloak.login();
      navigate('/');
    } catch (error) {
      console.log(error);
      setShowErrorMessage(true);
    }
  };

  return <StyledButton onClick={() => handleLogin()}>Sign In</StyledButton>;
};
