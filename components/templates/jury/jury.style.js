import styled from 'styled-components';

export const JuryContainer = styled.div`
  position: relative;
  min-height: 100vh;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url('/static/images/jury-bg.png');
    background-size: content;
    background-position: 0% 0%;
    background-repeat: no-repeat;
    z-index: 1;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      360deg,
      #1d1d1d 67.71%,
      rgba(29, 29, 29, 0) 100%
    );
    z-index: 2;
  }
`;

export const JuryLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  position: relative;
  z-index: 10;
`;

export const OasiLogo = styled.img`
  height: 50px;
  vertical-align: bottom;
`;

export const BackIcon = styled.img`
  width: 16px;
  vertical-align: middle;
  margin-right: 8px;
`;

export const JuryHeader = styled.header`
  padding: 32px;
`;

export const JuryTitle = styled.h1`
  display: inline-block;
  margin-top: 24px;
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  color: #ffffff;
  text-transform: uppercase;

  @media (min-width: 768px) {
    margin-left: 40px;
    margin-top: 0px;
  }
`;

export const JuryDescription = styled.p`
  margin-top: 32px;
  padding-left: 32px;
  padding-right: 32px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  color: #ffffff;
  max-width: 1024px;
`;

export const JuryList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px; 
  padding: 32px;
`;
