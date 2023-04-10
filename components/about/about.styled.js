import Image from 'next/image';
import styled from 'styled-components';
import { BaseContainer } from '../../styles/global';

export const ExternalLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export const Headshot = styled(Image)`
  max-width: 300px;
  height: auto;
  /* mix-blend-mode: lighten; */
`;

export const Text = styled.p`
  font-size: 1.125rem;
  margin: 1em 0;
  line-height: 1.6;
  font-weight: 300;
  color: ${({ theme }) => theme.textSecondary};
`;
export const TopText = styled.p`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.4;
  max-width: 550px;
`;
export const Body = styled.div`
  max-width: 600px;
  align-self: flex-end;
`;

export const SectionTitle = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 1.75rem;
  padding: 0.5em;
  margin-bottom: 1.5em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.accent};
  }

  @media (min-width: 900px) {
    display: none;
  }
`;
export const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section``;
