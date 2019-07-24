import React from "react";

function Card(props) {
  let cardStyle = {
    backgroundImage: `url(${props.backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="card">
      <button onClick={() => props.handleClick(props.id)}><img src={props.backgroundImage} height="80px" width='80px'></img></button>
    </div>
  );
}

export default Card;
