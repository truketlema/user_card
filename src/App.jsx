import React from "react";
import UserCard from "./component/user_card"; // Uppercase import name

function App() {
  return (
    <div style={{ display: "flex", margin: 0 }}>
      <UserCard
        name="Sisay Dagne"
        email="sisaydagne@gmail.com"
        age={50}
        bg_color="lightblue"
      />
      <UserCard
        name="Lema Haile"
        email="lemahaile@gmail.com"
        age={60}
        bg_color="lightgreen"
      />
      <UserCard name="Truket Lema" email="truketlema@gmail.com" age={20} />
    </div>
  );
}

export default App;
