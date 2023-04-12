import { useEffect, useRef, useState } from 'react';
import * as S from './intro.styled';
import Image from 'next/legacy/image';
import Link from 'next/link';
import OutlinedText from '../outlinedText';

const Intro = () => {
  return (
    <S.Section id="home">
      <S.Container>
        <OutlinedText>ozan</OutlinedText>
        <OutlinedText>guner.</OutlinedText>
        <S.Subtitle>creative software developer</S.Subtitle>
      </S.Container>
    </S.Section>
  );
};

export default Intro;
