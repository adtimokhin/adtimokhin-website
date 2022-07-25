import FullGridScreen from "./FullGridScreen";
import { useState } from "react";

function setClassNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

function ButtonScreen() {
  const defaultButtonClasses =
    "text-yellow-900 font-bold font-serif text-9xl hover:text-yellow-500 transition-all duration-1000 ease-linear";

  const [isPressed, setIsPressed] = useState(false);

  const onButtonClickHandler = () => {
    setIsPressed(true);

    // Deleting a button afterwards
    var button = document.getElementById("text-based__button");
    var buttonConntainer = document.getElementById("button__container");

    // waiting until animation had played before deleting the button
    window.setTimeout(() => {
      buttonConntainer.removeChild(button);
    }, 1000);
  };

  return (
    <FullGridScreen>
      <div
        className="text-center col-start-1 col-end-13 flex items-center justify-center"
        id="button__container"
      >
        <button
          className={setClassNames(
            isPressed ? "opacity-0 cursor-not-allowed" : "opacity-100",
            defaultButtonClasses
          )}
          onClick={onButtonClickHandler}
          id="text-based__button"
        >
          Start
        </button>
      </div>
    </FullGridScreen>
  );
}

export default ButtonScreen;
