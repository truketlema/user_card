import React from "react";
function user_card({ name, email, age, bg_color }) {
  return (
    <div
      style={{
        backgroundColor: bg_color || "white",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        boxShadow: "2px 2px 10px gray",
      }}
    >
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default user_card;
