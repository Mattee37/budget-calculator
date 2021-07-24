import React, { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

import Error from "./Error";

const Form = ({ setGastoL, setCrearGasto }) => {
  //[estados, actualizador]
  const [gasto, setGasto] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //previene ele satdo default del form, valida, crea el gasto, actualzia estados y restablece el form
  const agregarGasto = e => {
    e.preventDefault();

    //valida los inputs del form
    if (cantidad < 1 || isNaN(cantidad) || gasto.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //crea el gasto
    const gastoObj = {
      gasto,
      cantidad,
      id: shortid.generate()
    };

    //envia el gasto a la lista y pone en true setCrearGasto()
    setGastoL(gastoObj);
    setCrearGasto(true);

    //restablece el form
    setGasto("");
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus datos aqui</h2>
      {error ? <Error message="Campos obligatorios" /> : null}
      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej.: Transporte"
          value={gasto}
          onChange={e => setGasto(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej.: 300"
          value={cantidad}
          onChange={e => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Form.propTypes = {
  setGastoL: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
};

export default Form;
