import { Route, Routes } from "react-router-dom";

import ArticlePage from "../pages/ArticlePage";
import CaseStudyPage from "../pages/CaseStudyPage";
import HomePage from "../pages/HomePage";
import HowIWorkPage from "../pages/HowIWorkPage";
import WritingPage from "../pages/WritingPage";
import ScrollToTop from "../shared/ScrollToTop";

import "../App.css";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-i-work" element={<HowIWorkPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/writing/:slug" element={<ArticlePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
      </Routes>
    </>
  );
}

export default App;
