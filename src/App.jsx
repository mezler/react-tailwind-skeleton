import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <div className="p-2 text-4xl text-green-100 rounded-lg bg-stone-500">
      <div className="flex justify-center">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo" alt="Vite logo" />
      </div>
      Welcome to react-tailwind skeleton!
    </div>
  );
}

export default App;
