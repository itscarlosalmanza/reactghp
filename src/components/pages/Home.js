import React from "react";
import me from "../img/me.jpg";
import "./styles/homeStyles.css"

function Home() {
  return (
    <div class="me">
      <h1>Welcome,</h1>
      <h4>
        Hello, I'm Carlos Almanza a fullstack web-dev student at Denver University. Check me out and let's build together.
      </h4>
      <a href="" target="_blank">
      <div class="imageBox">
        <img src={me} alt="me"/>
    </div>
    </a>
    </div>
  );
}

export default Home;
