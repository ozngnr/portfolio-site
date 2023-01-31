import Image from 'next/image';
import Link from 'next/link';
import * as S from './intro.styled';
import { useSectionInView } from '../../hooks/useSectionInView';
import profileImg from '../../public/images/portrait.webp';

const Intro = () => {
  const [sectionRef] = useSectionInView();

  return (
    <S.Section id="home" name="" ref={sectionRef}>
      <S.Content>
        <S.ImgWrapper>
          <Image
            src={profileImg}
            alt="self portrait"
            layout="fill"
            sizes="50vw"
            objectFit="cover"
            objectPosition="top"
            priority={true}
          />
          <S.Overlay />
        </S.ImgWrapper>
        <S.Body>
          <S.Title>Bringing ideas to life.</S.Title>
          <S.Text>
            Creative front end developer based in <strong>London</strong>.
          </S.Text>
          <Link href={'#projects.'} passHref>
            <S.SectionLink>View Projects</S.SectionLink>
          </Link>
        </S.Body>
      </S.Content>
    </S.Section>
  );
};

export default Intro;
