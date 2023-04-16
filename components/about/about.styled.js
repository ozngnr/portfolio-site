import styled from 'styled-components';
import { BaseContainer } from '../../styles/global';
import { device } from '../../styles/breakpoints';
import { motion } from 'framer-motion';

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const Text = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};
`;
export const TopText = styled(motion.p)`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.4;
  max-width: 550px;
  margin-bottom: 2rem;

  @media {device.tablet} {
    font-size: 2rem;
  }
`;

export const BottomText = styled(motion.div)`
  max-width: 600px;
  align-self: flex-end;
`;
export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
`;
export const Section = styled.section`
  padding-top: 100px;
`;
