import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";

const bottlePromise = fetch("./bottles.json").then((res) => res.json());

function App() {
  return (
    <>
      <h1 style={{ color: "#000" }}>Buy Awesome water bottles</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
