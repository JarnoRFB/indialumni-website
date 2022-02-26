import * as React from "react";

const Mission = ({ text, img }) => (
  <div className="section">
    <div className="title is-2 has-text-centered">Mission</div>
    <div className="columns">
      <div className="column">{text}</div>
      <div className="column">
        <img src={img}></img>
      </div>
    </div>
  </div>
);

export default Mission;
