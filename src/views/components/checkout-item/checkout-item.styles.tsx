import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const Quantity = styled(TextContainer)`
  display: flex;

  .arrow {
    cursor: pointer;
    user-select: none;
  }

  .value {
    margin: 0 10px;
    min-width: 16px;
    text-align: center;
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  user-select: none;
`;
