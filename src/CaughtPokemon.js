import React, { useState } from "react";

function CaughtPokemon(props) {
  const [totalCaught, setTotalCaught] = useState(0);

  function incrementTotal() {
    setTotalCaught(totalCaught + 1);
  }

  return (
    <p>
      Caught {totalCaught} Pokemon on {props.date}
    </p>
  );
}

export default CaughtPokemon;
