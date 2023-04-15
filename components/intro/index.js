import { useEffect, useRef, useState } from 'react';
import * as S from './intro.styled';
import Image from 'next/legacy/image';
import Link from 'next/link';
import OutlinedText from '../outlinedText';
import profileImage from '../../assets/headshot.png';

const Intro = () => {
  return (
    <S.Section id="home">
      <S.Container>
        <S.ImageContainer
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
        >
          <S.ImageOverlay></S.ImageOverlay>
          <S.MyImage src={profileImage} />
        </S.ImageContainer>
        <OutlinedText>ozan</OutlinedText>
        <OutlinedText>guner.</OutlinedText>
        <S.Subtitle>creative software developer</S.Subtitle>
      </S.Container>
    </S.Section>
  );
};

export default Intro;
