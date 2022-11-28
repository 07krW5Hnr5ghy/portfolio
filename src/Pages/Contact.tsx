import emailjs from '@emailjs/browser';
import {useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

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
            toast.success('message succesfully sent',{
                position:toast.POSITION.TOP_RIGHT,
                className:'toast'
            });
        },(error) => {
            toast.error('can\'t send message try again later',{
                position:toast.POSITION.TOP_RIGHT,
                className:'toast',
            });
        });
        message.current.value = "";
        email.current.value = "";
        name.current.value = "";
    }

    return(
        <div id="Contact_container">
            <h1>Contact me</h1>
            <form ref={form} onSubmit={(e) => sendEmail(e)}>
                <label>Name</label>
                <input ref={name} type="text" name="name" required/>
                <label>E-mail</label>
                <input ref={email} type="email" name="email" required/>
                <label>Message</label>
                <textarea ref={message} name="message" required onChange={(e) => {
                    message.current.value = e.target.value;
                }}/>
                <input type="submit" value="Send"/>
            </form>
            <ToastContainer/>
            <div id="Contact_social">
                <a href="https://www.linkedin.com/in/juan-pablo-romero-poveda-477514253">
                    <img src={linkedin} alt="linkedin" loading='lazy'/>
                </a>
                <a href="https://github.com/07krW5Hnr5ghy">
                    <img src={github} alt="github" loading='lazy'/>
                </a>
            </div>
        </div>
    )
}
export default Contact;