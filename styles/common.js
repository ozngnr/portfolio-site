import styled from 'styled-components';

export const SectionTitle = styled.h2`
  position: fixed;
  font-size: 7rem;
  top: 50%;
  border: 1px solid red;
  transform: ${({ isInView }) =>
    isInView ? 'translate(0, -50%)' : 'translate(-100%, -50%)'};
  transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  z-index: 10;
`;
