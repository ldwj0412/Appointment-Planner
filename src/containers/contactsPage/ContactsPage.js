import React, {useEffect, useState} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from '../../components/tileList/TileList';


export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [id,setId] = useState('');
  const [duplicate, isDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if(!duplicate){
      props.addContact(name,phone, email,Date.now());
      setName('');
      setPhone('');
      setEmail('');
      setId('');
    }else{
      alert(`Contact ${name} already exists`);
    }


  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  const contactExists = (arr, contact)=>{
    return arr.some(ele => ele.name === contact);

  }

  const removeItem = (idToRemove) => {
    props.setContacts(prev => (prev.filter(item => item.id !== idToRemove)));
    
  };

  useEffect(() => {
    if (contactExists(props.contacts, name)) {
      isDuplicate(true);
    } else {
      isDuplicate(false);
    }
  }, [props.contacts, name]);


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts} removeItem={removeItem} />
      </section>
    </div>
  );
};
