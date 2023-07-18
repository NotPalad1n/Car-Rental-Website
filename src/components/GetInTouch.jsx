import React from "react";

import "../styling/GetInTouch.css";

const GetInTouch = () => {
  return (
    <div id="Get-in-Touch">
      <div className="get-in-touch">
        <p className="subtext">Contact</p>
        <h1 className="title">Get in touch</h1>
        <div className="form-and-info">
          <form>
            <div>
              <input type="text" name="" placeholder="Name" />
              <input type="email" name="" placeholder="Email" />
            </div>
            <input type="text" name="" placeholder="Subject" />
            <textarea
              type="text"
              name=""
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
