import { css } from 'styled-components';
import styled from 'styled-components/native';

type TContainer = {
  isFirstRow?: boolean;
  isLastRow?: boolean;
};

export const Container = styled.View<TContainer>`
  flex-direction: row;
  border-left-width: 1px;
  border-right-width: 1px;
  border-colr: #0d1b2a;

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
