import Header from '../header';
import * as S from './layout.styled';
import { useContext } from 'react';
import { Context } from '../../context/context';
import Footer from '../footer';
import SectionName from '../sectionName';
import Socials from '../socials';

const Layout = ({ children }) => {
  const { sectionName, sectionInView } = useContext(Context);

  return (
    <S.Container>
      <Header />
      <SectionName name={sectionName} active={sectionInView} />
      <Socials />
      <main>{children}</main>
      <Footer />
    </S.Container>
  );
};

export default Layout;
