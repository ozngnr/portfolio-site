import * as S from "./outlinedText.styled";

const OutlinedText = ({ children, ...restProps }) => {
  const letters = {
    visible: () => ({
      opacity: [1, 0.2, 1],
      transition: {
        delay: Math.random().toFixed(3),
        duration: 4,
        repeat: Infinity,
      },
    }),
  };

  const displayText = (str) => {
    return str.split("").map((letter, i) => (
      <S.Letter
        key={`${letter}-${i}`}
        custom={i}
        animate="visible"
        variants={letters}
      >
        <span>{letter}</span>
      </S.Letter>
    ));
  };

  return <S.Text {...restProps}>{displayText(children)}</S.Text>;
};

export default OutlinedText;
