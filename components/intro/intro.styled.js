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

export const Title = styled.div``;
export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.5rem;
  margin-top: 1rem;
  font-family: var(--outfit-font);
  text-align: center;
  text-transform: capitalize;
`;
