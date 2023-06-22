import styled, { css } from "styled-components";
import { device } from "../../../styles/breakpoints";
import { motion } from "framer-motion";

export const Text = styled.div`
  --text-fs: 7rem;
  display: flex;
  font-family: var(--title-font);
  font-size: var(--text-fs);
  margin-top: -1rem;

  @media ${device.tablet} {
    --text-fs: 12rem;
    margin-top: -2rem;
  }
  @media ${device.desktopL} {
    --text-fs: 16rem;
    margin-top: -2rem;
  }

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

export const Letter = styled(motion.div)`
  display: flex;
  color: transparent;
  font-weight: 900;
  height: calc(var(--text-fs) / 2);
  transition: color 1s ease-out 1s;
  -webkit-text-stroke: 1px ${({ theme }) => theme.accent};

  & span {
    pointer-events: none;
    min-height: 2rem;

    &::before {
      content: "";
      display: block;
      width: 0;
      height: 0;
      margin-top: calc((var(--text-fs) / -2));
    }
  }

  @media ${device.laptop} {
    &:hover {
      color: ${({ theme }) => theme.accentDark};
      transition: color 0s;
    }
  }
`;
