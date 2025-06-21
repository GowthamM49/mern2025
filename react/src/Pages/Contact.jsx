import React from "react";
import { Context } from "../Hooks/Context";

const Contact = () => {
  return (
    <div>
      <Context.Consumer>
        {user =>
          user ? (
            <div>
              <h1>Welcome, {user.name}!</h1>
              <p>Your age is {user.age}.</p>
            </div>
          ) : (
            <div>
              <h1>No user found.</h1>
            </div>
          )
        }
      </Context.Consumer>
      <h1>Contact Page</h1>
      <p>This is the contact page of our application.</p>
    </div>
  );
};

export default Contact;
