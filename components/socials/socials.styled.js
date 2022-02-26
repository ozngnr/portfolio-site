import styled from "styled-components"

export const ExternalLink = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textTransparent};
`

export const Container = styled.div`
  position: fixed;
  right: 1em;
  top: 50%;
  transform: translateY(-50%);
  display: none;
  flex-direction: column;

  svg {
    margin-bottom: 0.5em;
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.accent};
    }
  }

  @media (min-width: 900px) {
    display: flex;
  }
`
