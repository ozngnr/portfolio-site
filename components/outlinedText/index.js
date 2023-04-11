import * as S from './outlinedText.styled';

const OutlinedText = ({ children, ...restProps }) => {
  const displatText = (str) => {
    return str.split('').map((letter, i) => (
      <S.Letter key={`${letter}-${i}`}>
        <span>{letter}</span>
      </S.Letter>
    ));
  };
};

export default OutlinedText;
