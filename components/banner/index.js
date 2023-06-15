import * as S from "./banner.styled";
import PropTypes from "prop-types";

const Banner = ({ title }) => {
  return (
    <S.Banner>
      <S.BannerBox
        animate={{
          x: "-30vw",
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        <S.BannerTitle>{title}</S.BannerTitle>
        <S.BannerTitle>{title}</S.BannerTitle>
        <S.BannerTitle>{title}</S.BannerTitle>
        <S.BannerTitle>{title}</S.BannerTitle>
        <S.BannerTitle>{title}</S.BannerTitle>
      </S.BannerBox>
      <S.BannerOverlay />
    </S.Banner>
  );
};

export default Banner;

Banner.propTypes = {
  title: PropTypes.string.isRequired,
};
