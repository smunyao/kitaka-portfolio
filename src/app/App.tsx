import { Route, Routes } from "react-router-dom";

import CaseStudyPage from "../pages/CaseStudyPage";
import HomePage from "../pages/HomePage";
import ScrollToTop from "../shared/ScrollToTop";

import "../App.css";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
      </Routes>
    </>
  );
}

export default App;
