import React from "react";
import PropTypes from "prop-types";

const Expenditure = ({ gasto }) => {
  return (
    <li className="gastos">
      <p>
        {gasto.gasto}
        <span className="gasto">${gasto.cantidad}</span>
      </p>
    </li>
  );
};

Expenditure.propTypes = {
  gasto: PropTypes.object.isRequired
};

export default Expenditure;
