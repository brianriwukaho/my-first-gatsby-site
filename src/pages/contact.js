import * as React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <Layout>
      <h2>Contact</h2>
      <p>Here's how you can reach me 😀</p>
      <ul className="contact-info">
        <li>
          <img src="/assets/contact/twitter.png" className="contact-me-icon" />
          <b>Twitter</b>:{" "}
          <b>
            <a href="/">@briwukaho</a>
          </b>
        </li>
        <li>
          <img src="/assets/contact/linkedin.png" className="contact-me-icon" />
          <b>Linkedin</b>:{" "}
          <b>
            <a href="/">Brian Riwu Kaho</a>
          </b>
        </li>
        <li>
          <img src="/assets/contact/github.png" className="contact-me-icon" />
          <b>Github</b>:{" "}
          <b>
            <a href="/">brianriwukaho</a>
          </b>
        </li>
        <li>
          <img src="/assets/contact/gmail.png" className="contact-me-icon" />
          <b>Email</b>:{" "}
          <b>
            <a href="/">brianriwukaho@gmail.com</a>
          </b>
        </li>
      </ul>
    </Layout>
  );
};

export default ContactPage;
