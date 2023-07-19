import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

import "../styling/GetInTouch.css";

const GetInTouch = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('car_rental', 'template_dwk6rhm', form.current, 'l1_TnfwGwEjpzlB6s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  
  return (
    <div id="Get-in-Touch">
      <div className="get-in-touch">
        <p className="subtext">Contact</p>
        <h1 className="title">Get in touch</h1>
        <div className="form-and-info">
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
            </div>
            <input type="text" name="subject" placeholder="Subject" />
            <textarea
              type="text"
              name="message"
              placeholder="How can we help you"
              className="message"
            />
            <button>Send message</button>
          </form>
          <div className="info">
            <div>
              <h1>Address</h1>
              <p>
                9400 S Normandie Ave #14
                <br />
                Los Angeles, California(CA), 90044
              </p>
            </div>
            <div>
              <h1>Phone</h1>
              <p>(323) 242-8258</p>
            </div>
            <div>
              <h1>Hours</h1>
              <p>Mon-Sat 8am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
