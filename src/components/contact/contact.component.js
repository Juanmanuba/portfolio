import React from 'react';
import ContactButton from '../contact-button/contact-button.component';
import styles from './contact.component.module.css';
import contactInfo from './contact-info';
import Title from '../title/title.component';
import Paragraph from '../paragraph/paragraph.component';
import Button from '../button/button.component';

export default function Contact() {
  const services = contactInfo.map((item, index) => {
    return <ContactButton key={index} {...item} />;
  });

  return (
    <section className={styles.contactSection}>
      <div className={styles.sectionTitle}>
        <Title>Contact Me</Title>
        <Paragraph>or else</Paragraph>
      </div>
      <div className={styles.sectionContent}>
        <div className={styles.contactButtons}>
          <h2 className={styles.contactButtonsTitle}>Talk to me</h2>
          {services}
        </div>
        <div className={styles.contactForm}>
          <h2 className={styles.contactButtonsTitle}>
            Tell me about your project
          </h2>

          <form className={styles.contactForm}>
            <div className={styles.formItem}>
              <label className={styles.contactFormTag}>Name</label>
              <input
                type="text"
                name="name"
                className={styles.contactFormInput}
                placeholder="Insert your name"
              />
            </div>
            <div className={styles.formItem}>
              <label className={styles.contactFormTag}>Mail</label>
              <input
                type="email"
                name="email"
                className={styles.contactFormInput}
                placeholder="Insert your email"
              />
            </div>
            <div className={`${styles.formItem} ${styles.contactFormArea}`}>
              <label className={styles.contactFormTag}>Project</label>
              <textarea
                name="project"
                className={styles.contactFormInput}
                placeholder="Write about your project"
              ></textarea>
            </div>
            <Button>
              Send Message <span />
              <span />
              <i className={`uil uil-message ${styles.nav__icon}`}></i>
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
