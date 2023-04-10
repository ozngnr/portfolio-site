import * as S from './background.styled';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { useBackgroundAnimation } from '../../hooks/useBackgroundAnimation';

const Background = ({ animations }) => {
  const { circleRight, circleLeft } = animations;

  return (
    <S.Background>
      <S.CircleLeft style={circleLeft} />
      <S.CircleRight style={circleRight} />
    </S.Background>
  );
};

export default Background;
