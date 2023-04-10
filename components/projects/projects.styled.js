import styled from 'styled-components';
import { BaseContainer } from '../../styles/global';

export const Stack = styled.div`
  color: ${({ theme }) => theme.textTransparent};
  font-size: 1.5em;

  svg {
    margin-left: 4px;
  }
`;
export const Link = styled.a`
  display: inline-block;
  margin-right: 1em;
  padding: 0.25em 0;
  transition: color 0.3s;
  color: ${({ theme }) => theme.textTransparent};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;
export const Links = styled.div`
  font-size: 0.825em;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Description = styled.div`
  font-weight: 400;
  margin: 1.5em 0;
`;
export const ProjectTitle = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  padding-bottom: 0.5em;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid;
  text-transform: uppercase;
  span {
    margin-right: 1em;
  }
`;
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: ${({ theme }) => theme.textSecondary};

  @media (min-width: 900px) {
    padding: 2em 1.5em;
    &:hover {
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
    }
  }
`;
export const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1em;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 1.75rem;
  padding: 0.5em 0;
  margin-bottom: 2em;
  margin-left: 0.5em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -0.5em;
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.accent};
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Container = styled(BaseContainer)``;

export const Section = styled.section`
  svg {
    position: relative;
    margin-bottom: -2px;
  }
`;
