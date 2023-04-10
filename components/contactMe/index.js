import * as S from './contactMe.styled';
import { Formik, Form } from 'formik';
import { AiOutlineSend } from 'react-icons/ai';
import { SectionTitle } from '../../styles/common';
import OutlinedText from '../OutlinedText';

const ContactMe = () => {
  return (
    <S.Section id="contact">
      <SectionTitle as={OutlinedText} vertical>
        contact.
      </SectionTitle>
      <S.Container>
        <S.SectionTitle>Let's talk.</S.SectionTitle>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            message: '',
            subject: '',
          }}
          onSubmit={() => {
            console.log('form submitted');
          }}
        >
          <S.Form>
            <S.Row>
              {/* <S.Label htmlFor="fullName">Name</S.Label> */}
              <S.Field id="fullName" name="fullName" placeholder="name" />

              {/* <S.Label htmlFor="email">Email</S.Label> */}
              <S.Field id="email" name="email" placeholder="email" />
              {/* <S.Label htmlFor="email">Subject</S.Label> */}
              <S.Field id="subject" name="subject" placeholder="subject" />
            </S.Row>

            {/* <S.Label htmlFor="lastName" >Message</S.Label> */}
            <S.Field
              style={{ resize: 'none' }}
              as="textarea"
              placeholder="message"
              rows={8}
            ></S.Field>

            <S.Button type="submit">
              <AiOutlineSend />
              send
            </S.Button>
          </S.Form>
        </Formik>
      </S.Container>
    </S.Section>
  );
};

export default ContactMe;
