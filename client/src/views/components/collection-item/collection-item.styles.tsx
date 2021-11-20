import styled from 'styled-components';

import { Button as CustomButton } from '../button';

interface ImageProps {
  image: string;
}

export const Image = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: 5px;
  transition: opacity 0.3s;
  background-image: ${({ image }: ImageProps) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Button = styled(CustomButton)`
  display: none;
  position: absolute;
  top: 255px;
  width: 80%;
  opacity: 0.7;

  @media screen and (max-width: 800px) {
    display: block;
    padding: 0 10px;
    opacity: 0.9;
    min-width: unset;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${Button} {
      display: flex;
      opacity: 0.85;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      ${Image} {
        opacity: unset;
      }

      ${Button} {
        opacity: unset;
      }
    }
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.div`
  width: 10%;
`;
