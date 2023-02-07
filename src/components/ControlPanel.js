import React, { useState } from "react";

const ControlPanel = (props) => {
  return (
    <div>
      <h3>Select Data:</h3>
      <ul>
        {props.checkboxes.map((checkbox, index) => {
          return (
            <li key={index}>
              <div>
                <input
                  type="checkbox"
                  id={checkbox.name}
                  name={checkbox.name}
                  value={checkbox.name}
                  onChange={() => props.onCheckboxChangeHandler(checkbox.name)}
                />
                <label htmlFor={checkbox.name}>{checkbox.name}</label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ControlPanel;
