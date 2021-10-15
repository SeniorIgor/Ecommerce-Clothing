import styled from 'styled-components';

import { ContainerProps, ImageProps } from './menu-item.types';

export const Container = styled.div<ContainerProps>`
  height: ${({ size }) => (size ? '380px' : '240px')};
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
      transition: opacity 0.3s ease;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

export const Background = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Content = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: #fff;
  opacity: 0.7;
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: uppercase;
`;

export const SubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  text-transform: uppercase;
`;
