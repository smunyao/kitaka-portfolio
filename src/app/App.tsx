import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ScrollToTop from "../shared/ScrollToTop";

import "../App.css";

const HomePage = lazy(() => import("../pages/HomePage"));
const HowIWorkPage = lazy(() => import("../pages/HowIWorkPage"));
const CaseStudyPage = lazy(() => import("../pages/CaseStudyPage"));

function App() {
  return (
    <>
      <ScrollToTop />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-i-work" element={<HowIWorkPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
