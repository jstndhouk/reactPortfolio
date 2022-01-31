import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers'

// Here we import a helper function that will check if the email is valid
// import {validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleNonImput =(e)=>{
    if (e.target.value.length===0)
    {
      alert('All fields must be entered before submitting')
    }
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      alert('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  }

  return (
    <div>
      <p>Guest, please fill out this form and press the submit button at the bottom when you are done.  This will send me an email and I will respond as soon as I can.</p>
      <form className="form">
      <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleNonImput}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleNonImput}
          type="email"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleNonImput}
          type="message"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form;
