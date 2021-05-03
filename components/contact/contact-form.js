import { useState } from 'react';
import styled from './contact-form.module.css';

const ContactForm = () => {
    const [email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const details = {
            email,
            name,
            message
        };
       fetch('/api/emailNotification',{
            method:'POST',
            headers:{
                'Content-type':'Application/json'
            },
            body:JSON.stringify(details)
        })
        .then( response => response.json())
        .then(result => alert(result.message) )
        .catch(err => console.log(err.message));       
        setEmail('');
        setName('');
        setMessage('');
       
    }

    return (
        <section className={styled.contact}>
            <h1>How Can I Help You</h1>
            <form className={styled.form} onSubmit={handleSubmit}>
                <div className={styled.controls}>
                    <div className={styled.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input id="email" type='email' value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className={styled.control}>
                        <label htmlFor='name'>Your Name</label>
                        <input id="name" type='text' value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                </div>
                <div className={styled.control}>
                <label htmlFor='message'>Your Message</label>
                <textarea id='message' value={message} onChange={e => setMessage(e.target.value)} rows='5'></textarea>
                </div>
                <div className={styled.action}>
                    <button type='submit'>Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;