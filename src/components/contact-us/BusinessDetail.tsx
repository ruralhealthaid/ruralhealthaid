// BusinessDetail.js
import React from "react";

const BusinessDetail = () => {
  return (
    <div style={{ padding: "10px" }}>
      <h4>My Business</h4>
      <p>123 Main St, Your City</p>
      <p>Phone: +123 456 7890</p>
      <p>
        Website:{" "}
        <a
          href="https://mybusiness.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          mybusiness.com
        </a>
      </p>
    </div>
  );
};

export default BusinessDetail;
