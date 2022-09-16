import React from 'react';
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import Head from "next/head";

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>{"联系我"}</title>
                <meta name="description" content="blog"/>
            </Head>
            <ContactForm/>
        </>
    );
};

export default ContactPage;