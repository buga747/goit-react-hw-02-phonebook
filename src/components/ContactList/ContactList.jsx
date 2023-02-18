import PropTypes from 'prop-types';
import { List, Wrapper, Button, ListWrapper, Text} from "./ContactList.styled";
import { AiFillDelete } from 'react-icons/ai';

const ContactList = ({ contacts, deleteUser}) => {
    return (
        <ListWrapper>
        <List>
            {contacts.map(({ id, name, number }) =>
               <li key={id} >
        <Wrapper>
            <Text>{name}: <span>{number}</span></Text>
            <Button id={id} onClick={()=>{deleteUser(id)}} type="button"><AiFillDelete /></Button></Wrapper></li>
           )}
            </List>
            </ListWrapper>
)
}

ContactList.propTypes = {
    deleteUser: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
}


export default ContactList;