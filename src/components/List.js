import React from "react";
import PropTypes from "prop-types";

import Expenditure from "./Expenditure";

const List = ({ gastos }) => {
  return (
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {gastos.map(gasto => (
        <Expenditure key={gasto.id} gasto={gasto} />
      ))}
    </div>
  );
};

List.propTypes = {
  gastos: PropTypes.array.isRequired
};

export default List;
