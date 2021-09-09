import styled, { css } from 'styled-components';
import { ButtonProps } from './button.types';

const darkThemeStyles = css`
  color: white;
  background-color: black;
  border: 1px solid black;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const lightThemeStyles = css`
  color: black;
  border: 1px solid white;
  background-color: white;

  &:hover {
    color: white;
    border: 1px solid black;
    background-color: black;
  }
`;

const googleThemeStyles = css`
  color: #fff;
  border: 1px solid #4285f4;
  background-color: #4285f4;

  &:hover {
    border: 1px solid #357ae8;
    background-color: #357ae8;
  }
`;

const getButtonStyles = ({ theme }: ButtonProps) => {
  switch (theme) {
    case 'light':
      return lightThemeStyles;

    case 'google':
      return googleThemeStyles;

    default:
      return darkThemeStyles;
  }
};

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  transition: all 0.3s;

  ${getButtonStyles}
`;
