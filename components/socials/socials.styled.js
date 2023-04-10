import styled from 'styled-components';

export const EmailLink = styled.a`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: ${({ theme }) => theme.text};
  margin-top: 3em;

  &:before,
  &:after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 100px;
    margin: 1em 0;
    margin-right: 5px;
    background-color: ${({ theme }) => theme.text};
  }
`;
export const ExternalLink = styled.a`
  display: block;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textTransparent};
`;

export const Container = styled.div`
  display: none;
  position: fixed;
  right: 2em;
  bottom: 0;
  z-index: 10;

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
    flex-direction: column;
    justify-content: flex-end;
  }
`;
