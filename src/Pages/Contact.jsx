import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import close from "../../public/icons/close-mail.png";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to submit the form data
    // For this example, let's just log the form values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };
  function handleMail() {
    window.location.href = `mailto:${"ntadingi5@gmail.com"}`;
  }
  return (
    <div>
      <Navigation />
      <div className="contact--home">
      <div className="contact--container">
        <h3 className="contact--title">Contact</h3>
      <form onSubmit={handleSubmit} className="contact-form" autoComplete="off">
      <div className="form-group">
        {/* <label htmlFor="name">Name:</label> */}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Name"
        />
      </div>

      <div className="form-group">
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
      </div>

      <div className="form-group">
        {/* <label htmlFor="message">Message:</label> */}
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Message"
        ></textarea>
      </div>
      

      <button type="submit" className="contact--button">
      <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
      </svg>
    </div>
    </div>
    <span className="send--text">Send</span>
      </button>
    </form>
    </div>
    </div>

      <div className="copyright--card">
        <h2 className="copyright--title">Copyright</h2>
        <p className="copyright--para">
          All the pictures and ebooks featured on my website have been sourced
          from the internet. I would like to make it clear that I do not claim
          any ownership or copyright over these materials. They are used solely
          for informational and educational purposes on my website. I am
          grateful to the original creators for sharing their work online, and I
          have made every effort to credit and acknowledge their contributions
          wherever possible. If any copyright holder believes that their rights
          have been violated, kindly contact me so that I can promptly address
          the concern.
        </p>
        <div>
          <a href="" onClick={handleMail}>
            <img src={close} alt="" className="mail-icon" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
