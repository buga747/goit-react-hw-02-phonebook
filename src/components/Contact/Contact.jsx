
import { AiFillDelete } from 'react-icons/ai';
import { Wrapper, Button } from './Contact.styled';
const Contact = ({id, name, number, deleteUser}) => {
    return <li key={id} >
        <Wrapper>
            <p>{name}: <span>{number}</span></p>
            <Button id={id} onClick={()=>{deleteUser(id)}} type="button"><AiFillDelete /></Button></Wrapper></li>
}

export default Contact