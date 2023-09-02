import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="px-10">
      <h3 className="text-3xl py-1 text-center dark:text-white font-burtons">
        Contact me
      </h3>

      <ContactForm />
    </section>
  );
}

export default Contact;
