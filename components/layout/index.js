import * as S from "./layout.styled";
import Header from "../common/header";
import Footer from "../common/footer";

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </S.Container>
  );
};

export default Layout;
