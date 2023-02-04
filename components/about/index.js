import * as S from './about.styled';
import { useSectionInView } from '../../hooks/useSectionInView';

const About = () => {
  const { sectionRef } = useSectionInView();

  return (
    <S.Section id="about" name="about." ref={sectionRef}>
      <S.Container>
        <S.SectionTitle>about.</S.SectionTitle>
        <S.TopText>
          I'm Ozan. A self-taught front end developer who is highly passionate
          about web development, innovation and creativity.
        </S.TopText>
        <S.Body>
          <S.Text>
            My interest in programming first started years ago when I needed a
            website for my photography portfolio. I wasn't happy with any of the
            templates that website builders offered at the time, so I decided to
            code my own site instead. I started copying parts of other
            developer's code and tweaking them to suit my needs. It didn't work
            but I learned a lot about the basics.
          </S.Text>{' '}
          <S.Text>
            When the pandemic started, I decided to give it another go and
            invested my free time into learning how to code properly. I've
            watched video tutorials, completed front end lessons on{' '}
            <S.ExternalLink href="https://freecodecamp.org" target="_blank">
              freeCodeCamp
            </S.ExternalLink>
            , signed up to Scrimba and enrolled in their{' '}
            <S.ExternalLink
              href="https://scrimba.com/learn/frontend"
              target="_blank"
            >
              Front End Developer Career Path
            </S.ExternalLink>{' '}
            where I built real life projects mainly using JavaScript and React.
          </S.Text>{' '}
          <S.Text>
            Ever since, I've been researching, learning and looking for ways to
            improve my programming skills. Focusing on building well designed,
            responsive web applications and user interfaces.
          </S.Text>
        </S.Body>
      </S.Container>
    </S.Section>
  );
};

export default About;
