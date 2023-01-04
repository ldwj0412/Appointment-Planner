import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={handleName}
        placeholder='Enter name'
      />
      <input
        type='tel'
        name='phone'
        value={phone}
        onChange={handlePhone}
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        placeholder='Phone number: ###-###-####'
      />
      <input
        type='email'
        name='email'
        value={email}
        onChange={handleEmail}
        placeholder='Enter email'
      />
      <input type='submit' value='ADD CONTACT' />

    </form>
  );
};
