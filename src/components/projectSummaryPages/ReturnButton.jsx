// TODO: Add focus on element with id screen__overlay__container after the button was pressed.
import React from "react";
import { Link } from "react-router-dom";

function getButtonColours(colourScheme) {
  switch (colourScheme) {
    case "wds":
      return "text-wds-800 bg-wds-50 hover:bg-wds-500 active:bg-wds-900";

    case "sss":
      return "text-sss-800 bg-sss-50 hover:bg-sss-500 active:bg-sss-900";

    default:
      return "text-gray-800 bg-gray-50 hover:bg-gray-500 active:bg-gray-900";
  }
}

function ReturnButton(props) {
  const onButtonPress = props.onButtonPress;
  const colourScheme = props.colourScheme;

  return (
    <div className="col-span-12 text-center p-4 mt-20">
      <button
        onClick={onButtonPress}
        className={
          "m-5 p-9 font-serif text-xl rounded-xl " +
          getButtonColours(colourScheme) +
          " transition-all duration-300 select-none"
        }
      >
        Return Back
      </button>
    </div>
  );
}

export default ReturnButton;
