import React, { useState } from "react";
import "./App.css";

function App() {
  const [password, setPasword] = useState("");
  const [tiene6ComoMinimo, setTiene6ComoMinimo] = useState(false);
  const [tieneMayusculas, setTieneMayusculas] = useState(false);
  const [tieneNumero, setTieneNumero] = useState(false);

  const cambiosEnElInput = (event) => {
    const passwordActual = event.target.value;
    setTiene6ComoMinimo(passwordActual.length > 5);
    setTieneMayusculas(!!passwordActual.match(/[A-Z]/));
    setTieneNumero(!!passwordActual.match(/\d/));
    setPasword(passwordActual);
  };

  return (
    <div className="container">
      <section>
        <label className="label">Password</label>
        <div className="input-wrapper">
          <input onChange={cambiosEnElInput} type="text" value={password} />
        </div>
        <ul className="list">
          <li className={`item ${tiene6ComoMinimo ? "completed" : ""}`}>
            6 characters minimum.
          </li>
          <li className={`item ${tieneMayusculas ? "completed" : ""}`}>
            At least 1 uppercase character.
          </li>
          <li className={`item ${tieneNumero ? "completed" : ""}`}>
            At least 1 number character.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
