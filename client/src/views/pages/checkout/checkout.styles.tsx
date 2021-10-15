import styled from 'styled-components';

export const Container = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderColumn = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  text-transform: uppercase;
`;

export const Message = styled.a`
  margin: 40px 0 50px;
  padding: 20px 30px;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: rgba(255, 0, 0, 0.748);
  border: 1px solid rgba(255, 0, 0, 0.748);
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
  }
`;
