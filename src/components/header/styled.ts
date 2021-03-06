import styled from 'styled-components';
import { Container, Cell } from '../grid';
import { media } from '../theme';

export const Wrapper = styled(Container)`
  flex-direction: column;
  flex-grow: 0;
`;

export const HeaderSection = styled(Cell)`
  justify-content: center;
  text-align: center;
  padding: 1rem;

  ${media.vertical`
    padding: 1rem 1rem 0;
  `}
`;
