import * as S from './logo.styled';
import Link from 'next/link';

const Logo = ({ children, ...restProps }) => {
  const firstChar = children.charAt(0);
  const subString = children.substring(1);

  return (
    // <S.Container {...restProps}>
    //   <S.Wrapper {...restProps}>
    //     <Link href="/" legacyBehavior>
    //       <a>
    //         <span>{firstChar}</span>
    //         <span>{subString}</span>
    //         <S.Dot {...restProps}></S.Dot>
    //       </a>
    //     </Link>
    //   </S.Wrapper>
    // </S.Container>
    <p>ozanguner.</p>
  );
};

Logo.defaultProps = {
  children: '',
};

export default Logo;
