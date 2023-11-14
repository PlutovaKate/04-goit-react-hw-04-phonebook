import {
  ContactInform,
  ListItem,
  ContactBtn,
  BtnWrapper,
  Info,
} from './ContactItem.styled';

import { HiTrash, HiOutlinePhoneOutgoing } from 'react-icons/hi';

const ContactItem = ({ name, id, number, deleteContact }) => {
  return (
    <ListItem id={id}>
      <ContactInform>
        <HiOutlinePhoneOutgoing />
        <Info type="name">{name}:</Info>
        <Info type="number">{number}</Info>
      </ContactInform>
      <BtnWrapper>
        <ContactBtn type="button" onClick={() => deleteContact(id)}>
          {/* Delete */}
          <HiTrash />
        </ContactBtn>
      </BtnWrapper>
    </ListItem>
  );
};

export default ContactItem;
