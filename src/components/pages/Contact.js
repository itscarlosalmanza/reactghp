import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import dayPlanner from "../img/dayPlanner.png";
import gameBuzz from "../img/gameBuzz.png";
import onTrack from "../img/onTrack.png";
import passwordGenerator from "../img/passwordGenerator.png";
import weatherApp from "../img/weatherApp.png";
import "./styles/about.css"

function Contact(props) {
  return (
    <div>
      <h1 class="myWork">my work</h1>
      <a href="https://gentle-brook-68093.herokuapp.com/view" target="_blank">
      <div class="onTrack">
        <p>Degree plan tracker for students attending DU in the business analytics program.</p>
        <img src={onTrack} alt="onTrack"/>
    </div>
    </a>
    <a href="https://e-burton.github.io/Game-Buzz/" target="_blank">
    <div class="gameBuzz">
      <p>Fun quiz game that suggests a cocktail to pair with a vintage video game.</p>
      <img src={gameBuzz} alt="gameBuzz"/>
    </div>
    </a>
    <a href="https://itscarlosalmanza.github.io/weatherApp/" target="_blank">
    <div class="onTrack">
      <p>Local weather app with search capabilities.</p>
      <img src={weatherApp} alt="weatherApp"/>
    </div>
    </a>
    <a href="https://itscarlosalmanza.github.io/dayPlanner/" target="_blank">
    <div class="gameBuzz">
      <p>Easy to use workday planner that uses localStorage.</p>
      <img src={dayPlanner} alt="dayPlanner"/>
    </div>
    </a>
    <a href="https://itscarlosalmanza.github.io/passwordGenerator/" target="_blank">
    <div class="onTrack">
      <p>Keep passwords fresh with an easy to use PW generator that takes user input to set PW criteria.</p>
      <img src={passwordGenerator} alt="passwordGenerator"/>
    </div>
    </a>

      {/* <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link" target="_blank">
        contact me
      </Link>{" "} */}
      {/* <Link to="/contact" role="button" className="btn btn-link">
        hide
      </Link> */}
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
    </div>
  );
}

export default Contact;
