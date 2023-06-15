import { useRef } from "react";
import * as S from "./about.styled";
import { SectionTitle, MobileSectionTitle } from "../../styles/common";
import OutlinedText from "../common/outlinedText";
import useSectionInView from "../../hooks/useSectionInView";
import useFadeIn from "../../hooks/useFadeIn";

const About = () => {
  const ref = useRef();
  const { isInView } = useSectionInView(ref);
  const { fadeIn } = useFadeIn(0);

  return (
    <S.Section id="about" ref={ref}>
      <SectionTitle vertical="true" as={OutlinedText} isInView={isInView}>
        about.
      </SectionTitle>
      <S.Container>
        <MobileSectionTitle>about.</MobileSectionTitle>
        <S.TopText {...fadeIn}>
          Hi, I'm Ozan. A self-taught front end developer who is highly
          passionate about web development, innovation and creativity.
        </S.TopText>
        <S.BottomText {...fadeIn}>
          <S.Text>
            My interest in programming started years ago when I needed a website
            for my photography portfolio. I wasn't satisfied with the templates
            offered by website builders, so I decided to code my own site.
            Although my first attempt was far from perfect, it taught me a lot
            about the basics.
          </S.Text>{" "}
          <S.Text>
            When the pandemic hit, I saw an opportunity to improve my skills and
            invested my free time into learning how to code properly. I watched
            video tutorials, completed front-end lessons on{" "}
            <S.ExternalLink href="https://freecodecamp.org" target="_blank">
              freeCodeCamp
            </S.ExternalLink>
            ,enrolled in the{" "}
            <S.ExternalLink
              href="https://scrimba.com/learn/frontend"
              target="_blank"
            >
              Front-End Developer Career Path
            </S.ExternalLink>
            on Scrimba, and built real-life projects using JavaScript and React.
          </S.Text>{" "}
          <S.Text>
            Since then, I've made it my mission to continue improving my
            programming skills by building well-designed, responsive web
            applications and user interfaces that stand out. I stay up-to-date
            with the latest tools and techniques, and keep an eye on industry
            trends to stay ahead of the game.
          </S.Text>
          <S.Text>
            So, if you're looking for a website that's anything but basic, let
            me put my skills to work for you. I'm passionate about creating
            sites that not only look great, but also function flawlessly.
          </S.Text>
        </S.BottomText>
      </S.Container>
    </S.Section>
  );
};

export default About;
