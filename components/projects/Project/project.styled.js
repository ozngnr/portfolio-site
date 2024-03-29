import styled from "styled-components";
import { motion } from "framer-motion";

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
  margin: 1.5em 0;
  max-width: 600px;
`;
export const ProjectTitle = styled.h3`
  letter-spacing: 1px;
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
