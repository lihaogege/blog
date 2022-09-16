import React, {useEffect, useState} from 'react';
import classes from "./ContactForm.module.less"
import Notification from "../../ui/Notification/Notification"
import { FormattedMessage,FormattedDate } from 'react-intl';

type contactDetailsType = {
    email:string,
    name:string,
    message:string
}

const sendContactData = async (contactDetails:contactDetailsType) =>{
    const response = await fetch("/api/contact",{
        method:"POST",
        body:JSON.stringify(contactDetails),
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    const data =await response.json()
    if(response.status === 201){
        return data;
    }
}
const ContactForm = () => {
    const [enterdEmail, setEnterdEmail] = useState('')
    const [enterdName, setEnterdName] = useState('')
    const [enterdMessage, setEnterdMessage] = useState('')
    const [requestStatus,setRequestStatus] = useState<string | null>() // pending success error

    useEffect(()=>{
        if(requestStatus === 'sucess' || requestStatus === 'error'){
           const timer = setTimeout(()=>{
                setRequestStatus(null)
            },3000)
            return () => {
                clearTimeout(timer)
            }
        }
    },[requestStatus])
    const sendMessageHandler = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setRequestStatus('pending')

        try {
               await sendContactData({
                   email:enterdEmail,
                   name:enterdName,
                   message:enterdMessage
               })
               setRequestStatus('sucess')
        }catch (error){
            setRequestStatus('error')
        }

    }

    let notification;
    if(requestStatus === 'pending'){
        notification = {
            status:'pending',
            title:'Sending message...',
            message:'Your message is on its way!'
        }
    }

    if(requestStatus === 'sucess'){
        notification = {
            status:'success',
            title:'Sucess',
            message:'sucessfully!'
        }
    }

    if(requestStatus === 'error'){
        notification = {
            status:'error',
            title:'Error',
            message:'error!'
        }
    }


    return (
       <section className={classes.contact}>
           <h1><FormattedMessage id="intl.name"　defaultMessage={'hello'} /></h1>
           <form className={classes.form} onSubmit={sendMessageHandler}>
               <div className={classes.controls}>
                   <div className={classes.control}>
                       <label htmlFor="email">Your Email</label>
                       <input type="email"
                              id="email"
                              value={enterdEmail}
                              onChange={(e) => setEnterdEmail(e.target.value)}
                              required/>
                   </div>
                   <div className={classes.control}>
                       <label htmlFor="name">Your Name</label>
                       <input type="text" id="name"
                              value={enterdName}
                              onChange={(e) => setEnterdName(e.target.value)}
                              required/>
                   </div>
               </div>
               <div className={classes.control}>
                   <label htmlFor="message">Your Message</label>
                   <textarea id={"message"} rows={5}
                             value={enterdMessage}
                             onChange={(e) => setEnterdMessage(e.target.value)}
                             required
                   />
               </div>

               <div className={classes.actions}>
                  <button>Send Message</button>
               </div>
           </form>
           {notification && <Notification title={notification.title} status={notification.status} message={notification.message}/>}
       </section>
    );
};

export default ContactForm;