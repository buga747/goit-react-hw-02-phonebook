import React, { Component } from "react";
import { Form, Label, LabelName, Input, Button} from "./ContactForm.styled";
import PropTypes from 'prop-types';


class ContactForm extends Component {
state = {
    name: '',
   number: '',
    }

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number)
    this.resetForm();
  };

handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  resetForm() {
    this.setState({ name: '',
   number: '', });
  };
  

    render() {
        const { name, number } = this.state;
        return (
        <Form onSubmit={this.handleSubmit}>
            <Label>
              <LabelName>Name</LabelName>
             <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
           />
           </Label>

           <Label> <LabelName>Number</LabelName>
           <Input
  type="tel"
               name="number"
               value={number}
               onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
           </Label> 
           <Button type='submit'>Add contact</Button>
         </Form>
        )
    }
}


ContactForm.propTyres = {
  addContact: PropTypes.func.isRequired,
}
export default ContactForm;