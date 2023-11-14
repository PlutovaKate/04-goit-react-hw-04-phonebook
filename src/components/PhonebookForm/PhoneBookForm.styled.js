import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 7px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 14px;

  @media (max-width: 800px) {
    color: green;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelForm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledField = styled(Field)`
  width: 400px;
`;

export const AddContactBtn = styled.button`
  margin-top: 32px;
`;
