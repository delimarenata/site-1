import styled from 'styled-components';

export const IDAContent = styled.li`
  align-self: end;
  justify-self: end;
`;

export const Navigation = styled.ul`
  display: ${(props) => {
    const { column } = props;
    return column ? 'grid' : 'inline-flex';
  }};
  align-items: center;
`;

export const NavigationItem = styled.li`
  margin-right: ${(props) => {
    const { column } = props;
    return column ? '0' : '24px';
  }};
  text-transform: uppercase;
  text-align: ${(props) => {
    const { column } = props;
    return column ? 'center' : 'left';
  }};
  padding-bottom: ${(props) => {
    const { column } = props;
    return column ? '30px' : '0';
  }};

  > a {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => {
      const { column } = props;
      return column ? '18px' : '16px';
    }};
    line-height: 19px;
    color: ${({ theme }) => theme.brandColor.fourtiary.medium};
  }
`;
