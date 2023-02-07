import React from "react";

const Form = (props) => {
  return (
    <form>
      <label htmlFor="quant">Users quantity (1-20):</label>
      <br />
      <input
        onChange={(e) => props.onUsersChangeHandler(e.target.value)}
        type="number"
        id="quant"
        defaultValue="1"
        min="1"
        max="20"
      />
      <br />
    </form>
  );
};

export default Form;
