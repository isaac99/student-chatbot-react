import React, { useEffect, useState } from 'react';
import { SignInButton } from './SignInButton';

import styled from '@emotion/styled/macro';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { callApi } from '../store/api/utils';
// import { receivedFlags } from '../store/api/actions';
import headshot from '../images/justin_picture.jpeg';


const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginBox = styled.div`
  position: relative;
  height: 500px;
  width: 400px;
  border-radius: 5px;
  background-color: var(--color-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 5px -3px var(--color-darkest);
`;

const StyledHeader = styled.span`
  font-size: 2rem;
`;

const LogoBox = styled.div`
  width: 200px;
  text-align: center;
  margin: 30px auto;
  & svg {
    width: 200px;
    height: 70px;
  }
`;

const HelperText = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 30px 20px;
`;

const StyledErrorMessage = styled.p`
  position: absolute;
  font-size: 1rem;
  top: -50px;
  color: var(--color-red);
`;

const oldAuth = {
  auth: {
    clientId: 'c04a747d-3203-4265-a650-afb69864b9a7',
  },
  system: {
    allowRedirectInIframe: false,
  },
};
// const isLocalhost =
//   window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

export const Login = () => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      // if (isAuthenticated) {
      //   localStorage.clear();
      //   msal.logoutRedirect({
      //     onRedirectNavigate: () => {
      //       //return false to stop navigation after logout
      //       return false;
      //     },
      //   });
      // }
      const data = await callApi('messages/message-history');
      if (data.response.ENABLE_AUTH) {
        // dispatch(receivedFlags(data.response));
        console.log('here')
      } else {
        navigate('/');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowErrorMessage(false);
    }, 45 * 1000);
  }, [showErrorMessage]);

  return (
    <StyledWrapper>
      <LoginBox>
        {showErrorMessage && <StyledErrorMessage>Login Could Not Be Completed</StyledErrorMessage>}
        <LogoBox>
            <img src={headshot} className="App-logo" alt="logo" />
        </LogoBox>
        <StyledHeader>Sign in</StyledHeader>
        <HelperText>Sign in with your user account.</HelperText>
        <SignInButton setShowErrorMessage={setShowErrorMessage} />
      </LoginBox>
    </StyledWrapper>
  );
};
