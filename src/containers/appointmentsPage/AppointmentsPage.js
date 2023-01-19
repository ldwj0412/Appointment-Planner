import React ,{useEffect, useState}from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm.js";
import { TileList } from "../../components/tileList/TileList.js";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const [currentTitle, setCurrentTitle] = useState('');
  const [currentContact, setCurrentContact] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.addAppointments(currentTitle,currentContact,currentDate,currentTime);
    setCurrentTitle('');
    setCurrentContact('');
    setCurrentDate('');
    setCurrentTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {<AppointmentForm 
          contacts={props.contacts}
          title={currentTitle}
          setTitle={setCurrentTitle}
          contact={currentContact}
          setContact={setCurrentContact}
          date={currentDate}
          setDate={setCurrentDate}
          time={currentTime}
          setTime={setCurrentTime}
          handleSubmit={handleSubmit}
       
        />}
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {<TileList object={props.appointments} />}
      </section>
    </div>
  );
};
