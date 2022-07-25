import { useScrollPosition } from "../../hooks/useScrollPosition";
import FullGridScreen from "./FullGridScreen";

function setClassNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

function TextScreen(props) {
  const scrollPosition = useScrollPosition();
  const defaultTextClasses =
    "text-gray-500 font-bold font-serif text-xl leading-loose transition-all duration-700";

  return (
    // <FullGridScreen>
      <div className="col-start-2 col-end-12 text-left flex items-center justify-cente h-screen">
        <p
          className={setClassNames(
            scrollPosition >
              ((3 + 4 * parseInt(props.textCount)) * window.innerHeight) / 4 &&
              scrollPosition <
                ((4 * (parseInt(props.textCount) + 1) + 1) / 4) *
                  window.innerHeight
              ? "opacity-90 text-4xl"
              : "opacity-0 text-xl",
            defaultTextClasses
          )}
        >
          {props.text}
        </p>
      </div>
    // </FullGridScreen>
  );
}
export default TextScreen;

//TODO: set the top and bottom limit for the opacity transition for the <p> element
