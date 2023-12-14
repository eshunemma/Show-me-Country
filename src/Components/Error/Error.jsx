import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorlink">
      <img src="404png.jpg" alt="hello" />
      <Link className="error-li" to="/">Back To Home</Link>
    </div>
  );
};

export default Error;
