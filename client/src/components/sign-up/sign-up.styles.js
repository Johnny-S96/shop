import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 380px) {
    width: 330px;
  }

  @media screen and (max-width: 350px) {
    width: 300px;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;