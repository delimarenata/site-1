import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 46px;
  border-radius: 10px;
  background-color: #404040;
  border: 2px solid #000000;
  box-shadow: 0px 2px 0px #000000;
  padding: 0 16px;
  color: #ffffff;

  &:focus {
    padding: 0 16px;
    border: 2px solid #000000;
    box-shadow: 0px 2px 0px #000000;
  }
`;