import styled, { css } from 'styled-components';

export const Text = styled.div`
  --text-fs: ${({ style }) => (style ? style.fontSize : '1rem')};

  display: flex;
  font-family: var(--roxborough-font);
  -webkit-text-stroke: 1px black;
  mix-blend-mode: overlay;

  ${({ vertical }) =>
    vertical &&
    css`
      writing-mode: vertical-lr;
      text-orientation: mixed;

      ${Letter} {
        height: auto;
      }
    `}
`;

export const Letter = styled.div`
  display: flex;
  color: transparent;
  font-weight: 900;
  height: calc(var(--text-fs) / 2);
  transition: color 1s ease-out 1s;

  &:hover {
    color: ${({ theme }) => theme.background};
    color: blanchedalmond;
    transition: color 0s;
  }

  & span {
    pointer-events: none;

    &::before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      margin-top: calc((var(--text-fs) / -2));
    }
  }
`;
