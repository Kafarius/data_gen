import React from "react";

const TextOutput = (props) => {
  let text = JSON.stringify(props.usersToGenerate).replaceAll(",", ",\n");
  let text2 = text.replaceAll("},", "},\n");

  return (
    <div>
      <label htmlFor="textarea">Results:</label>
      <br />
      <textarea
        value={text2}
        id="textarea"
        // placeholder="Generated Text.."
      ></textarea>
    </div>
  );
};

export default TextOutput;
