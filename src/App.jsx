import LogoScreen from "./LogoScreen";
import TextScreen from "./TextScreen";
import "./App.css";

function App() {
  return (
    <div>
      <LogoScreen />
      <TextScreen
        text="This is a website where I list my little projects."
        textCount="0"
      />
      <TextScreen
        text="I made this website solely for my own amusement and I do not want to show off what I do with my free time. In fact, I don't know what you are doing on this website..."
        textCount="1"
      />

      <TextScreen
        text="Here you'll be able to read a short description of projects that I have completed and that, I think, deserve a special acknowledgement from me. I just do not what to forget what I do with my free time :)"
        textCount="2"
      />
    </div>
  );
}

export default App;
