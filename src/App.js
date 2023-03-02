import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CheckinForm from "./components/CheckinForm";
import CheckinList from "./components/CheckinList";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  const [checkins, setCheckins] = useState([]);

  const handleCheckin = (checkin) => {
    setCheckins([...checkins, { id: Date.now(), ...checkin }]);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkin" element={<CheckinForm />} />
        <Route path="/checkinList" element={<CheckinList />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
