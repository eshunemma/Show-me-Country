import "./App.css";
import { Header } from "./Components/Header/Header";
import { MainContent } from "./Components/MainContent/MainContent";
import CountryPage from "./pages/CountryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDark() {
    setDarkMode((prev) => !prev);
  }
  return (
    <BrowserRouter>
      <Header handleClick={toggleDark} darkmode={darkMode} />
      <Routes>
        <Route path="/" element={<MainContent darkmode={darkMode} />} />
        <Route
          path="country-details/:name"
          element={<CountryPage darkmode={darkMode} />}
        />
        <Route path="*" element={<ErrorPage darkmode={darkMode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
