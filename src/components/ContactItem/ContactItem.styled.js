import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  margin: 0;
  gap: 20px;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;

export const ContactInform = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  svg {
    color: green;
    font-size: large;
  }
`;

export const ContactBtn = styled.button`
  background-color: #dae1e6;
  width: 50px;
  height: 30px;
  border-width: 1px;
  border-radius: 5px;
  padding: 2px;
  cursor: pointer;
`;

export const BtnWrapper = styled.div`
  :hover {
    background-color: #8d9093;
    color: white;
    border: none;
  }
`;

export const Info = styled.p`
  font-weight: ${props => {
    switch (props.type) {
      case 'name':
        return 'bolder';
      case 'number':
        return 'bold';
      default:
        return 'bolder';
    }
  }};
`;
