import emailjs from '@emailjs/browser';
import {useRef} from 'react';


const Contact = () => {
    const serviceId : string = process.env.REACT_APP_SERVICE_ID!;
    const templateId : string = process.env.REACT_APP_TEMPLATE_ID!;
    const apiKey : string = process.env.REACT_APP_API_KEY!;
    
    const form = useRef<HTMLFormElement>(null!);
    const name = useRef<HTMLInputElement>(null!);
    const email = useRef<HTMLInputElement>(null!);
    const message = useRef<HTMLTextAreaElement>(null!);
   
    const sendEmail  = (e : React.FormEvent)  => {
        e.preventDefault();
        emailjs.sendForm(serviceId,templateId,form.current,apiKey)
        .then((result)=>{
            console.log('sended message');
            message.current.value = "";
            email.current.value = "";
            name.current.value = "";
        },(error) => {
            console.log(error);
        });
    }

    return(
        <div id="Contact_container">
            <h1>Contact</h1>
            <form ref={form} onSubmit={(e) => sendEmail(e)}>
                <label>Name</label>
                <input ref={name} type="text" name="name"/>
                <label>E-mail</label>
                <input ref={email} type="email" name="email"/>
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