import * as S from "./layout.styled";
import Header from "../common/header";
import Footer from "../common/footer";
import Socials from "../common/socials";

const Layout = ({ children }) => {
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
