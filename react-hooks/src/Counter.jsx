import React, { useState } from "react";

const Counter = props => {
  // const tableau = useState(1);
  // const compteur = tableau[0];
  // const setCompteur = tableau[1];

  const [compteur, setCompteur] = useState(1);

  const handleChange = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
      {compteur} <button onClick={handleChange}>Incrémenter</button>
    </div>
  );
};
export default Counter;
