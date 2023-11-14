import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  ErrorMsg,
  LabelWrapper,
  LabelForm,
  StyledField,
  AddContactBtn,
} from './PhoneBookForm.styled';

import { HiOutlineUser, HiOutlinePhone } from 'react-icons/hi';

const FormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('This field is required!'),
  number: Yup.number().min(2, 'Too Short!').required('This field is required!'),
});

const PhonebookForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <LabelWrapper>
          Name
          <LabelForm>
            <HiOutlineUser />
            <StyledField name="name" placeholder="Type the NAME" />
          </LabelForm>
          <ErrorMsg name="name" component="p" />
        </LabelWrapper>

        <LabelWrapper>
          Number
          <LabelForm>
            <HiOutlinePhone />
            <StyledField
              type="tel"
              name="number"
              placeholder="Type the NUMBER"
            />
          </LabelForm>
          <ErrorMsg name="number" component="p" />
        </LabelWrapper>

        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </StyledForm>
    </Formik>
  );
};
export default PhonebookForm;
