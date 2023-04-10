import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { BaseContainer } from '../../styles/global';

export const Section = styled.section``;

export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Subtitle = styled.h2`
  color: white;
  font-size: 3rem;
  /* mix-blend-mode: overlay; */
`;
