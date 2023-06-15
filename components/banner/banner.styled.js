import { motion } from "framer-motion";
import styled from "styled-components";

export const Banner = styled.div`
  position: relative;
  overflow: hidden;
  margin: 2em 0;
`;
export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  background: ${({ theme }) => `
    radial-gradient(
      circle,
      transparent 70%,
      ${theme.background} 100%
    )
  `};
`;
export const BannerBox = styled(motion.div)`
  display: flex;
`;

export const BannerTitle = styled.div`
  font-size: 5vw;
  font-family: var(--title-font);
  font-weight: 900;
  flex: 0 0 auto;
  width: 30vw;
  opacity: 0.1;
`;
