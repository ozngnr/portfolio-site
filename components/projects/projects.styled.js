import styled from "styled-components";
import { BaseContainer } from "../../styles/global";
import { motion } from "framer-motion";
import { device } from "../../styles/breakpoints";

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
  margin-top: auto;
`;
export const Description = styled.div`
  font-weight: 300;
  margin: 1.5em 0;
  max-width: 600px;
`;
export const ProjectTitle = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;

  span {
    margin-right: 20px;
  }
`;
export const Project = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.textTransparent};
  border-radius: 2px;
  color: ${({ theme }) => theme.textSecondary};
  background-color: ${({ theme }) => theme.bgLight};
  padding: 1.5em;
`;
export const Projects = styled(motion.div)`
  display: grid;
  gap: 1em;
  margin: 0 auto;

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(410px, 1fr));
  }
`;
export const SectionTitle = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 1.75rem;
  padding: 0.5em 0;
  margin-bottom: 2em;
  margin-left: 0.5em;

  &::before {
    content: "";
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

  @media ${device.laptop} {
    padding: 6rem 0;
  }
`;
