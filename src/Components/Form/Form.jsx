import React, { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import './Form.css';
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Confeti from "../Confeti/Confeti";
import useScrollToRef from "../../Hooks/useScrollToRef";
import { RefsContext } from "../../Context/RefsProvider";

const Form = () => {

    const form = useRef();
    const [confetti, showConfetti] = useState(false);
    const { goToRef } = useScrollToRef();
    const { aboutMeRef } = useContext(RefsContext);

    const showConfettiOnAction = () => {
        showConfetti(true);
        setTimeout(() => {
            showConfetti(false);
        }, 7000);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6uzr60r', 'template_t3ed7om', form.current, 'WdbfKTzfRhujfSyX_')
            .then((result) => {
                showConfettiOnAction();
                goToRef(aboutMeRef);
                form.current.reset();
            }, (error) => {
                alert("Ha ocurrido un error: ", error.text);
            });
    };

    return(
        <form ref={form} onSubmit={sendEmail} className="contact-form" action="" autoComplete="off">
            {confetti ? <Confeti /> : <></>}
            <div className="contact-form-group">
                <Input text="Name" name="user_name"/>
                <Input text="Email" name="user_email"/>
            </div>
            <TextArea text="Message" name="message"/>
            <button className="form-button">Send</button>
        </form>
    )
}

export default Form;