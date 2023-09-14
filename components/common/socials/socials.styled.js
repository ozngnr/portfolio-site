import styled from "styled-components";

export const ExternalLink = styled.a`
  display: block;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.textTransparent};
`;

export const Container = styled.div`
  display: flex;
  svg {
    margin: 0 0.5em;
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.accent};
    }
  }
`;
