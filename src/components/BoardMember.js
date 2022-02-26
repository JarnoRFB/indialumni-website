import * as React from "react";
import ReactCardFlip from "react-card-flip";

const BoardMember = ({ props }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const { img, name, title, profession, statement } = props;

  const CardStyle = {
    width: "100%",
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div onMouseEnter={() => setIsFlipped(true)} style={CardStyle}>
        <figure className="image is-128x128">
          <img className="is-rounded" alt={name} src={img}></img>
        </figure>
        <div className="has-text-centered">
          <div>{name}</div>
          <div>{title}</div>
          <div>{profession}</div>
        </div>
      </div>
      <div onMouseLeave={() => setIsFlipped(false)} style={CardStyle}>
        <div>{statement}</div>
      </div>
    </ReactCardFlip>
  );
};

export default BoardMember;
