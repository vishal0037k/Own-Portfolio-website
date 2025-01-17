import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './Contact.css';
import emailImage from '../../Assets/images/E-mail.jpg'; 
import locationImage from '../../Assets/images/location.jpg'; 
import phoneImage from '../../Assets/images/phone.jpg'; 


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // EmailJS configuration
        const serviceID = 'service_5pneoup';
        const templateID = 'template_fxmrct3';
        const publicKey = 'dxRM6XPUVIkh6JWNL';

        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
                // Clear the form
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again.');
            });
    };

    return (
        <>
 <div className="main">
        <h1 className='get'>Get In Touch</h1>
        <div className="main-flex">



        <div className="contact-img">
            <div className="two">
                <p className='c-para'>
                You can reach out to me at [@vishalchaudhary97123@gmail.com] or connect with me directly on [+91 9015060481]. I’m also available on [platforms like LinkedIn or GitHub ], where you can explore my work and get in touch for collaborations or queries.</p>
            </div>
  <div className="one">
        <img className='email' src={emailImage} alt="Description of the image"></img>
        <p><a href="#">vishalchaudhary97123@gmail.com</a></p>
    </div>
    <div className="one">
        <img className='location' src={locationImage} alt="Description of the image"></img>
        <p><a href="https://maps.app.goo.gl/E1haSqb186n5ufuG7" target='_blank'>Palampur, HP</a></p>
    </div> 
    <div className="one">
        <img className='phone' src={phoneImage} alt="Description of the image"></img>
        <p><a href="#">+91 9015060481</a></p>
    </div> 
  </div>  




        <div className='contact-form'>
            <p className='together'>If you have any suggestion, project or even you want to say Hello... please fill out the form below and i will reply you shortly.</p>
            <form id="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input
                placeholder='Enter Your name *'
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email"></label>
                <input
                placeholder='Enter your email *'
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="message"></label>
                <textarea
                placeholder='Your message *'
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <br />
                <button className='sub' type="submit">Send</button>
            </form>
        </div>

   
</div>
</div>
        </>
    );
};

export default Contact;