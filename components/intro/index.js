import * as S from "./intro.styled";
import OutlinedText from "../common/outlinedText";
import profileImage from "../../assets/headshot.webp";
import { useScroll, useTransform } from "framer-motion";

const Intro = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], ["0px", "300px"]);

  return (
    <S.Section id="home">
      <S.Container>
        <S.ImageContainer
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          style={{ y }}
        >
          <S.MyImage
            src={profileImage}
            priority={true}
            alt="ozan guner headshot"
            fill
          />
          <S.ImageOverlay></S.ImageOverlay>
        </S.ImageContainer>
        <OutlinedText style={{ fontStyle: "italic" }} fontSize={7}>
          ozan
        </OutlinedText>
        <OutlinedText fontSize={7}>guner.</OutlinedText>
        <S.Subtitle>creative software developer</S.Subtitle>
      </S.Container>
    </S.Section>
  );
};

export default Intro;
