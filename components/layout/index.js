import { useContext, useRef } from 'react';
import { Context } from '../../context/context';
import * as S from './layout.styled';
import { useScroll, useTransform } from 'framer-motion';

import Header from '../header';
import Footer from '../footer';
import SectionName from '../sectionName';
import Socials from '../socials';

const Layout = ({ children }) => {
  // const { sectionName, sectionInView } = useContext(Context);

  return (
    <S.Container>
      <Header />
      <Socials />
      <main>{children}</main>
      <Footer />
    </S.Container>
  );
};

export default Layout;
