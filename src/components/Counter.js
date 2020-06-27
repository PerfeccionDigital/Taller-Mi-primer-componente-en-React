import React, { useState } from "react";

const layoutStyles = {
  display: "flex",
};

const largeButton = {
  border: 0,
  backgroundColor: "#00e0ff",
  width: 150,
  height: 150,
  fontSize: 100,
  borderRadius: 20,
  color: "white",
  outline: "none",
};

const largeLabel = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 100,
  width: 200,
  height: 150,
  fontWeight: 700,
};

const smallButton = {
  width: 80,
  height: 80,
  fontSize: 50,
  borderRadius: 10,
  border: 0,
  backgroundColor: "#00e0ff",
  color: "white",
  outline: "none",
};

const smallLabel = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 50,
  width: 120,
  height: 80,
  fontWeight: 700,
};

function Counter({ valorInicial, size }) {
  const [valorDelContador, setValorDelContador] = useState(valorInicial);

  const aumentar = () => {
    setValorDelContador(valorDelContador + 1);
  };

  const disminuir = () => {
    setValorDelContador(valorDelContador - 1);
  };

  return (
    <div style={layoutStyles}>
      <button
        onClick={disminuir}
        style={size === "small" ? smallButton : largeButton}
      >
        -
      </button>

      <span style={size === "small" ? smallLabel : largeLabel}>
        {valorDelContador}
      </span>

      <button
        onClick={aumentar}
        style={size === "small" ? smallButton : largeButton}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
