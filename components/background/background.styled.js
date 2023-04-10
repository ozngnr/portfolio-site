import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  filter: blur(15vh);
`;

export const CircleLeft = styled(motion.div)`
  position: absolute;
  width: 80vw;
  height: 105%;
  top: -10%;
  left: -10%;
  background-color: rgb(52, 244, 228);
  border-radius: 100%;
`;
export const CircleRight = styled(motion.div)`
  position: absolute;
  width: 70vw;
  height: 100vh;
  right: 0%;
  bottom: -10%;
  background-color: hsl(207, 50%, 34%);
  border-radius: 100%;
`;
