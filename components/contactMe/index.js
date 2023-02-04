import * as S from './contactMe.styled';
import { useSectionInView } from '../../hooks/useSectionInView';
import { Formik } from 'formik';

const ContactMe = () => {
  const { sectionRef } = useSectionInView();

  return (
    <S.Section id="contact-me" name="contact." ref={sectionRef}>
      <S.Container>
        <Formik>
          <S.Form>
            <S.Label htmlFor="firstName">Name</S.Label>
            <S.Field id="firstName" name="firstName" />

            <S.Label htmlFor="lastName">Email</S.Label>
            <S.Field id="email" name="email" />

            <S.Label htmlFor="lastName">Email</S.Label>
            <S.Field as="textarea" />

            <S.Button>Send Message</S.Button>
          </S.Form>
        </Formik>
      </S.Container>
    </S.Section>
  );
};

export default ContactMe;
