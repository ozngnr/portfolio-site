import styled from "styled-components";

export const ExternalLink = styled.a`
  display: block;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.textTransparent};
`;

export const Text = styled.p`
  text-align: center;
  grid-column: 1 / -1;
  margin-bottom: 1em;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.25rem;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  right: 2em;
  z-index: 10;

  svg {
    margin: 0 0.5em;
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.accent};
    }
  }
`;
