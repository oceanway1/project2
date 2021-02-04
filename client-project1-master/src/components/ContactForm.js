import React, { useState } from 'react';
import './views/contact.css';
import { db } from "./firebase";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
            .then(() => {
                alert('message has been submitted');
                setLoader(false);
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("")
        setEmail("")
        setMessage("")
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact form </h1>

            <label>Name</label>
            <input placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea className="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
            
            <button type="submit" style={{ background: loader ? "#ccc" : "linear-gradient(#ff0000e3,#5f2424, #320f0f)" }}
            >Submit
            </button>
            
        </form>
    )
}
export default Contact;