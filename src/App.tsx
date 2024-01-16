import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { FlashCardSection } from "./components/FlashCardSection";
import { FaqSection } from "./components/FaqSection";
import { NavigationBreadcrumb } from "./components/NavigationBreadcrumb";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-start  w-[100%]">
        <Navbar />
        <NavigationBreadcrumb />
        <FlashCardSection />
        <FaqSection />
      </div>
    </BrowserRouter>
  );
}

export default App;
