import emailjs from '@emailjs/browser';
import {useRef, useState} from 'react';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null!);
    const message = useRef<HTMLTextAreaElement>(null!);
   
    const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_pmfv9nm','template_m68eqct',form.current,'XJ6wIMDe9lpdEMCi0')
        .then((result)=>{
            console.log('sended message');
            message.current.value = "";
        },(error) => {
            console.log(error);
        });
    }
    console.log(message);
    return(
        <div id="Contact_container">
            <h1>Contact</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Message</label>
                <textarea ref={message} name="message" onChange={(e) => {
                    message.current.value = e.target.value;
                }}/>
                <input type="submit" value="Send"/>
            </form>
        </div>
    )
}
export default Contact;