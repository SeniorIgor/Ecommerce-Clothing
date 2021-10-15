import styled from 'styled-components';

import { Button as CustomButton } from '../button';

export const Container = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 60px;
  right: 0;
  z-index: 5;
`;

export const Message = styled.span`
  display: block;
  font-size: 18px;
  margin: 50px auto;
  text-align: center;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  width: 100%;
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled(CustomButton)`
  margin-top: auto;
  width: 100%;
`;
