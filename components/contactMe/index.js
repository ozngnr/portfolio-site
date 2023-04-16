import * as S from './contactMe.styled';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Formik, Form } from 'formik';
import { AiOutlineSend } from 'react-icons/ai';
import { SectionTitle, MobileSectionTitle } from '../../styles/common';
import OutlinedText from '../outlinedText';
import useSectionInView from '../../hooks/useSectionInView';
import useFadeIn from '../../hooks/useFadeIn';

const ContactMe = () => {
  const ref = useRef();
  const { isInView } = useSectionInView(ref);
  const { fadeIn } = useFadeIn(0);

  return (
    <S.Section id="contact" ref={ref}>
      <SectionTitle as={OutlinedText} vertical={true} isInView={isInView}>
        contact me.
      </SectionTitle>
      <S.Container {...fadeIn}>
        <MobileSectionTitle>Contact Me.</MobileSectionTitle>
        <S.Body>
          <S.Text>Have a project in mind?</S.Text>
          <S.Text>Let's get to work!</S.Text>
        </S.Body>

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
            <S.FieldGroup>
              <S.Row>
                <S.Field id="fullName" name="fullName" placeholder="name" />
                <S.Field id="email" name="email" placeholder="email" />
                <S.Field id="subject" name="subject" placeholder="subject" />
              </S.Row>
              <S.Field
                style={{ resize: 'none' }}
                as="textarea"
                placeholder="message"
                rows={8}
              ></S.Field>
            </S.FieldGroup>

            <S.Button type="submit">
              <S.PaperPlane />
            </S.Button>
          </S.Form>
        </Formik>
      </S.Container>
    </S.Section>
  );
};

export default ContactMe;
