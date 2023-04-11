import { useEffect, useRef, useState } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import * as S from './intro.styled';
import OutlinedText from '../outlinedText';
import { useBackgroundAnimation } from '../../hooks/useBackgroundAnimation';
import Background from '../background';

const Intro = () => {
  const ref = useRef(null);
  const { backgroundAnimations } = useBackgroundAnimation(ref);

  return (
    <>
      <Background animations={backgroundAnimations} />
      <S.Section id="home" ref={ref}>
        <S.Container>
          <OutlinedText
            style={{
              fontSize: '12rem',
              marginBottom: '-25px',
              // fontStyle: 'italic',
            }}
          >
            ozan
          </OutlinedText>
          <OutlinedText style={{ fontSize: '12rem', marginBottom: '50px' }}>
            guner.
          </OutlinedText>
          <S.Subtitle>creative software developer</S.Subtitle>
        </S.Container>
      </S.Section>
    </>
  );
};

export default Intro;
