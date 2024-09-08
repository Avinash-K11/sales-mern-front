import './contact.css';

import { useState } from 'react';

const Contact = () => {

    const [ customer, setCustomer ] = useState({
        name: "",
        subject: "",
        email: "",
        country:"",
        message: ""
    });

    const handleInputs = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setCustomer({...customer, [name]: value, });
    }

    const postData = async (e) => {
        e.preventDefault();

        const apiUrl = 'https://sales-mern-back.onrender.com';

        try {
          const response = await fetch(apiUrl + '/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(customer), 
          });
    
          if (response.ok) {
            console.log('Data submitted successfully');
            const data = await response.json();
            console.log('Response:', data);
          } else {
            console.error('Error submitting data');
          }
        } catch (error) {
          console.error('Network error:', error);
        }
    }

    return(
        <>
        
        <h3 className='title'>Contact</h3>

        <div className='maintext'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsam recusandae quos dignissimos autem ab quo totam aut, quia repellat assumenda corrupti magnam quae distinctio voluptatem accusamus natus eligendi veniam.
        </div>

        <div className='contact-container'>
            <form  onSubmit={postData}>
                <label htmlFor="name">Full Name</label>
                <input type='text' name='name' className='content' placeholder='full name' value={customer.name} onChange={handleInputs} required />

                <label htmlFor="subject">Subject</label>
                <input type='subject' name='subject' className='content' placeholder='issue/suggestion' value={customer.subject} onChange={handleInputs} required />

                <label htmlFor="email">Email</label>
                <input type='email' name='email' className='content' placeholder='name@example.com' 
                value={customer.email} onChange={handleInputs} required />

                <label htmlFor="country">Country</label>
                <select name="country" id="country" className='content' value={customer.country} onChange={handleInputs} >
                    <option value="">Select a country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="China">China</option>
                    <option value="Australia">Australia</option>
                </select>

                <label htmlFor="message">Message</label>
                <textarea name='message' id='message' className='content' cols='30' rows='10' placeholder='issue/suggestion' value={customer.message} onChange={handleInputs}> </textarea>

                <button type="submit" className='submit-btn' >Submit</button>

            </form>

            <div className='map'>
                <iframe title='pinned_location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.113494800261!2d76.10606117490259!3d10.41255988971495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f35d634bd445%3A0x9979751b3295dd4d!2sY%20Mall!5e0!3m2!1sen!2sin!4v1713961117717!5m2!1sen!2sin' width='100%' height='450' allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade'> </iframe>
            </div>

        </div>
        </>
    );
    
};

export default Contact;