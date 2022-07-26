import { useScrollPosition } from "../../../hooks/useScrollPosition";
import FullGridScreen from "../screenLayout/FullGridScreen";

function setClassNames(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

function LogoScreen() {
  const scrollPosition = useScrollPosition();
  const defaultHeaderClasses =
    "text-gray-400 font-bold font-serif text-9xl select-none hover:text-gray-100 transition-all duration-1000 ease-linear";

  return (
    <div className="text-center col-start-3 col-end-11 flex items-center justify-center h-screen">
      <h1
        className={setClassNames(
          scrollPosition > window.innerHeight / 4 ? "opacity-0" : "opacity-100",
          defaultHeaderClasses
        )}
      >
        adtimokhin
      </h1>
    </div>
  );
}

export default LogoScreen;
