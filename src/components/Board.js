import * as React from "react";
import BoardMember from "./BoardMember";

const Board = ({ props }) => (
  <div className="section has-text-centered">
    <div className="title is-2">Board Members</div>
    <nav class="level">
      <div class="level-item has-text-centered">
        <figure className="image is-300x300">
          <img src={props.groupImg}></img>
        </figure>
      </div>
    </nav>

    <div className="columns has-background-primary">
      <div className="column">
        <BoardMember props={props.president} />
      </div>
      <div className="column">
        <BoardMember props={props.vice} />
      </div>
      <div className="column">
        <BoardMember props={props.treasurer} />
      </div>
    </div>
  </div>
);

export default Board;
