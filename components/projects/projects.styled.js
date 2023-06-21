import styled from "styled-components";
import { BaseContainer } from "../../styles/global";
import { motion } from "framer-motion";
import { device } from "../../styles/breakpoints";

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
