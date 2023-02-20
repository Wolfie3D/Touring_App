import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="loading">
      <h1>
        <FaSpinner className="icon-spin" /> Loading...
      </h1>
    </div>
  );
};

export default Loading;
