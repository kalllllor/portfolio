import React, { useState } from 'react';
import styles from '../styles/components/Contact.module.scss';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log('Form submitted:', { name, email, message });
    };

    return (
        <div className={styles.wrapper} id="contact">
            <div className={styles.content}>
                <h2>Contact Me!</h2>
                <div>
                    <h3>Contact Details</h3>
                    <p>Email: karolgren3@gmail.com</p>
                    <p>Phone: +48 883 230 811</p>
                </div>
                <div className={styles.form}>
                    <h3>Send us a message</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
