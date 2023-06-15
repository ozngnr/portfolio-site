import styled, { css } from 'styled-components';
import { device } from '../../../styles/breakpoints';

export const Logo = styled.div`
  padding: 1em;
  font-family: var(--title-font), serif;

  @media ${device.tablet} {
    grid-column: 2 / 3;
    justify-self: center;
  }

  @media ${device.desktop} {
    font-size: 1.25rem;
  }

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
`;
