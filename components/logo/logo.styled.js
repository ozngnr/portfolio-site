import styled, { css } from 'styled-components';
import { device } from '../../styles/breakpoints';

export const Logo = styled.div`
  padding: 1em;
  font-family: var(--roxborough-font), serif;

  @media ${device.tablet} {
    grid-column: 2 / 3;
    justify-self: center;
  }

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;
