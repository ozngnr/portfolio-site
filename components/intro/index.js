import { useEffect, useRef, useState } from 'react';
import * as S from './intro.styled';
import Image from 'next/legacy/image';
import Link from 'next/link';
import OutlinedText from '../outlinedText';
import profileImage from '../../assets/headshot.webp';
import { useScroll, useTransform } from 'framer-motion';

const Intro = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], ['0px', '300px']);

  return (
    <S.Section id="home">
      <S.Container>
        <S.ImageContainer
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          style={{ y }}
        >
          <S.ImageOverlay></S.ImageOverlay>
          <S.MyImage
            src={profileImage}
            priority={true}
            alt="ozan guner headshot"
          />
        </S.ImageContainer>

        <OutlinedText>ozan</OutlinedText>
        <OutlinedText>guner.</OutlinedText>
        <S.Subtitle>creative software developer</S.Subtitle>
      </S.Container>
    </S.Section>
  );
};

export default Intro;
