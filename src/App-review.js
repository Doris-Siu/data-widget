import "./App.css";
import { Route, Routes } from "react-router-dom";

import Banner from "./components/Banner";
import Menu from "./components/Menu";
import ButtonList from "./components/ButtonList";
import Databoard from "./components/Databoard";

function App() {
  return (
    <div>
      <Banner />
      <Menu />
      <ButtonList />
      <Routes>
        <Route index element={<Databoard timekey="fh" />} />
        <Route path="/sh" element={<Databoard timekey="sh" />} />
        <Route path="/value" element={<Databoard timekey="value" />} />
      </Routes>
    </div>
  );
}

export default App;
