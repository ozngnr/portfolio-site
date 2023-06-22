import styled from "styled-components";
import { device } from "./breakpoints";

export const SectionTitle = styled.div`
  display: none !important;

  @media ${device.laptop} {
    display: flex !important;
    position: fixed;
    font-size: 7rem !important;
    top: 50%;
    transform: ${({ isInView }) =>
      isInView ? "translate(0, -45%)" : "translate(-100%, -45%)"};
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 10;
  }
`;

export const MobileSectionTitle = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 1.75rem;
  padding: 0.5em;
  margin-bottom: 1.5em;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: ${({ theme }) => theme.accent};
  }

  @media ${device.laptop} {
    display: none;
  }
`;
