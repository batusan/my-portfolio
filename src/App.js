import "./App.css";
import BottomNavBar from "./Components/BottomNavBar";
import RightSide from "./Pages/RightSide";
import StickySide from "./Pages/StickySide";

function App() {
  return (
    <div className="container text-color opacity-anim">
      <div className="row">
        <StickySide />
        <RightSide />
        <BottomNavBar />
      </div>
    </div>
  );
}

export default App;
