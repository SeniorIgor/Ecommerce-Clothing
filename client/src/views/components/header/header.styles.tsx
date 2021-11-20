import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    padding: 10px;
    margin-bottom: 20px;
    height: 60px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 45px;
    padding: 0;

    svg {
      width: 45px;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-transform: uppercase;
  flex-shrink: 0;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding: 10px 10px;
  }
`;
