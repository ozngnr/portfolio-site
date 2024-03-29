import styled from "styled-components";
import { BaseContainer } from "../../styles/global";
import { motion } from "framer-motion";
import Image from "next/image";
import { device } from "../../styles/breakpoints";

export const Section = styled.section``;

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.5rem;
  margin-top: 1rem;
  font-family: var(--outfit-font);
  text-align: center;
  z-index: 800;
`;

export const MyImage = styled(Image)`
  object-fit: contain;
  object-position: bottom;
  mix-blend-mode: luminosity;
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  margin-bottom: -50px;
  width: 90%;
  min-width: 400px;
  height: 40vh;
  background-color: ${({ theme }) => theme.background};

  @media ${device.tablet} {
    height: 50vh;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  background: linear-gradient(
    transparent 70%,
    ${({ theme }) => theme.background}
  );
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
