import { useState } from "react";

function setClassNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

function ButtonScreen(props) {
  const extraClasses = props.extraContainerClasses;
  const defaultButtonClasses =
    "font-bold text-yellow-900 font-serif text-9xl select-none hover:text-yellow-500 transition-all duration-1000 ease-linear";

  const [isPressed, setIsPressed] = useState(false);

  const onButtonClickHandler = () => {
    setIsPressed(true);
    props.onButtonClick();
  };

  return (
    <div
      className={
        "text-center col-start-1 col-end-13 flex items-center justify-center h-screen" +
        extraClasses
      }
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
  );
}

export default ButtonScreen;
