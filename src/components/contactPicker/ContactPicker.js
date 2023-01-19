import React from "react";

export const ContactPicker = (props) => {

  const contactDetail =  props.contacts.map( (contact,index) => <option key={index} value={contact.name}> {contact.name} </option> )
  
  return (
    <select onChange={props.onChange} > 

      <option value={""} key="default" selected="selected" >Please select contact</option>
      {contactDetail}
     </select>
  );
};
