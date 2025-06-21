import React, { useContext } from "react";
import Reducer from "../Hooks/Reducer";
import { Context } from "../Hooks/Context";

const About = () => {
  const user = useContext(Context);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Your age is {user.age}.</p>
        </div>
      ) : (
        <div>
          <h1>No user found.</h1>
        </div>
      )}
      <h1>About Page</h1>
      <p>This is the about page of our application.</p>
    </div>
  );
};

export default About;