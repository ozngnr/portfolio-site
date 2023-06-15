import * as S from './logo.styled';
import Link from 'next/link';

const Logo = () => {
  return (
    <S.Logo>
      <Link href="/">ozanguner.</Link>
    </S.Logo>
  );
};

Logo.defaultProps = {
  children: '',
};

export default Logo;
