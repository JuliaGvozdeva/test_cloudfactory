import { css } from 'styled-components';
import styled from 'styled-components/native';

type TContainer = {
  isFirstRow?: boolean;
  isLastRow?: boolean;
};

type TCell = {
  first?: boolean;
};

export const Container = styled.View<TContainer>`
  flex-direction: row;
  border-left-width: 1px;
  border-right-width: 1px;

  ${({ isLastRow }) =>
    isLastRow &&
    css`
      border-bottom-width: 1px;
    `}

  ${({ isFirstRow }) =>
    isFirstRow &&
    css`
      border-top-width: 1px;
    `}
`;

export const Cell = styled.View<TCell>`
  width: 20%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: grey;
  border: 1px solid black;

  ${({ first }) =>
    first &&
    css`
      width: 40%;
      background-color: pink;
    `}
`;

export const CellText = styled.Text`
  text-align: center;
`;
