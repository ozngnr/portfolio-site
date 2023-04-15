import styled from 'styled-components';
import { BaseContainer } from '../../styles/global';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
  font-weight: 300;
  margin-top: 1rem;
  font-family: var(--outfit-font);
  text-align: center;
`;

export const MyImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  margin-bottom: -50px;
  mix-blend-mode: luminosity;
  opacity: 0;
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
