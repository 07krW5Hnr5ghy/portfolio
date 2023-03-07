import emailjs from '@emailjs/browser';
import {useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LinkedIn,GitHub } from '@mui/icons-material';
import { useTranslation } from "react-i18next";

const Contact = () => {
    const {t} = useTranslation();
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
        <div className="contact-container">
            <h1 className="contact-title">{t('contact')}</h1>
            <form ref={form} onSubmit={(e) => sendEmail(e)} className="contact-form">
                <label className="contact-label">{t('name')}</label>
                <input className="contact-input" ref={name} type="text" name="name" required/>
                <label className="contact-label">E-mail</label>
                <input className="contact-input" ref={email} type="email" name="email" required/>
                <label className="contact-label">{t('message')}</label>
                <textarea className="contact-input" ref={message} name="message" required onChange={(e) => {
                    message.current.value = e.target.value;
                }}/>
                <div className="submit-container">
                    <button className="contact-submit" type="submit">{t('send')}</button>
                </div>
            </form>
            <ToastContainer/>
            <div className="social-container">
                <a href="https://www.linkedin.com/in/juan-pablo-romero-poveda-477514253">
                    <LinkedIn className='social-icons' style={{
                        fontSize:"40pt",
                    }}/>
                </a>
                <a href="https://github.com/07krW5Hnr5ghy">
                    <GitHub className='social-icons' style={{
                        fontSize:"40pt",
                    }}/>
                </a>
            </div>
        </div>
    )
}
export default Contact;