import * as S from './outlinedText.styled';

const OutlinedText = ({ children, ...restProps }) => {
  const displayText = (str) => {
    return str.split('').map((letter, i) => (
      <S.Letter key={`${letter}-${i}`}>
        <span>{letter}</span>
      </S.Letter>
    ));
  };

  return <S.Text {...restProps}>{displayText(children)}</S.Text>;
};

export default OutlinedText;
