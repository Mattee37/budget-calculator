import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import Error from "./Error";

const Question = ({ setPresupuesto, setRestante, setPregunta }) => {
  //[estados, actualizador]
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //crea el presupuesto y pasa la cantidad
  const crearPresupuesto = e => {
    setCantidad(parseInt(e.target.value, 10));
  };

  //previene el comportamiento defualt del form, valida y actualzia estados
  const handlePresupuesto = e => {
    e.preventDefault();

    //valida la cantidad
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    //actualiza los estados
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloque su presupuesto</h2>
      {error ? <Error message="El presupuesto es incorrecto" /> : null}
      <form onSubmit={handlePresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloque su presupuesto"
          onChange={crearPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setPregunta: PropTypes.func.isRequired
};

export default Question;
