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
      <button disabled={props.disabled } onClick={() => props.handleClick(props.id, props.di)}><img src={props.flipped ? props.backgroundImage : props.back} height="120px" width='120px'></img></button>
    </div>
  );
}

export default Card;
