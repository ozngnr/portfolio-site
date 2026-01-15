import { useRef } from 'react'
import * as S from './about.styled'
import { SectionTitle, MobileSectionTitle } from '../../styles/common'
import OutlinedText from '../common/outlinedText'
import useSectionInView from '../../hooks/useSectionInView'
import useFadeIn from '../../hooks/useFadeIn'

const About = () => {
  const ref = useRef()
  const { isInView } = useSectionInView(ref)
  const { fadeIn } = useFadeIn(0)

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
            My programming journey began with a classic case of “I’ll just do it
            myself.” I needed a website for my photography portfolio, but the
            templates out there felt… uninspiring. So I rolled up my sleeves and
            built my own. Was it perfect? Absolutely not. Was it the start of
            something awesome? Definitely.
          </S.Text>
          <S.Text>
            When the pandemic arrived, I suddenly had time—and I put it to good
            use. I went all in on learning how to code for real: devouring video
            tutorials, completing front-end challenges on{' '}
            <S.ExternalLink href="https://freecodecamp.org" target="_blank">
              freeCodeCamp
            </S.ExternalLink>
            , enrolling in{' '}
            <S.ExternalLink
              href="https://scrimba.com/learn/frontend"
              target="_blank"
            >
              Scrimba’s Front-End Developer Career Path
            </S.ExternalLink>
            , and building real-world projects with JavaScript and React. Trial,
            error, repeat. A lot.
          </S.Text>
          <S.Text>
            Since then, I’ve been on a constant quest to get better. I love
            crafting responsive, well-designed web apps and user interfaces that
            don’t just work—they wow. I keep up with the latest tools,
            techniques, and trends so my work stays modern, clean, and ahead of
            the curve.
          </S.Text>
          <S.Text>
            So if you’re tired of boring, cookie-cutter websites and want
            something with personality, polish, and performance—let’s make it
            happen. I build sites that look great, feel smooth, and behave
            exactly as they should. No weird glitches. No awkward layouts. Just
            solid, fun web experiences.
          </S.Text>
        </S.BottomText>
      </S.Container>
    </S.Section>
  )
}

export default About
