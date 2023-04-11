import { useRef } from 'react';
import * as S from './about.styled';
import { useInView } from 'framer-motion';
import headshot from '/public/images/portrait.webp';
import { SectionTitle } from '../../styles/common';
import OutlinedText from '../outlinedText';

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-50% 0% -50% 0%' });

  return (
    <S.Section id="about" ref={ref} style={{ border: '1px solid yellow' }}>
      <SectionTitle vertical as={OutlinedText} isInView={isInView}>
        about.
      </SectionTitle>
      <S.Container>
        {/* <S.SectionTitle>about.</S.SectionTitle> */}
        <S.TopText>
          Hi, I'm Ozan. A self-taught front end developer who is highly
          passionate about web development, innovation and creativity.
        </S.TopText>
        <S.Headshot src={headshot} />
        <S.Body>
          <S.Text>
            My interest in programming started years ago when I needed a website
            for my photography portfolio. I wasn't satisfied with the templates
            offered by website builders, so I decided to code my own site by
            copying and tweaking other developers' code. Although my first
            attempt didn't work out, it taught me a lot about the basics.
          </S.Text>{' '}
          <S.Text>
            When the pandemic hit, I decided to give programming another try and
            dedicated my free time to learning it properly. I watched video
            tutorials, completed front-end lessons on{' '}
            <S.ExternalLink href="https://freecodecamp.org" target="_blank">
              freeCodeCamp
            </S.ExternalLink>
            , and enrolled in Scrimba's{' '}
            <S.ExternalLink
              href="https://scrimba.com/learn/frontend"
              target="_blank"
            >
              Front-End Developer Career Path
            </S.ExternalLink>
            , where I built real-life projects using JavaScript and React.
          </S.Text>{' '}
          <S.Text>
            Since then, I've continued researching and learning to improve my
            programming skills. My focus has been on building well-designed,
            responsive web applications and user interfaces.
          </S.Text>
        </S.Body>
      </S.Container>
    </S.Section>
  );
};

export default About;
