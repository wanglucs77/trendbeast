import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Philosophy } from "./pages/Philosophy";
import { DailyReview } from "./pages/DailyReview";
import { PositionSizing } from "./pages/PositionSizing";
import { TradingPsychology } from "./pages/TradingPsychology";
import { KnowledgeCards } from "./pages/KnowledgeCards";
import { CaseLibrary } from "./pages/CaseLibrary";
import { MindMap } from "./pages/MindMap";
import { Simulation } from "./pages/Simulation";

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/daily-review" element={<DailyReview />} />
          <Route path="/position-sizing" element={<PositionSizing />} />
          <Route path="/trading-psychology" element={<TradingPsychology />} />
          <Route path="/knowledge-cards" element={<KnowledgeCards />} />
          <Route path="/case-library" element={<CaseLibrary />} />
          <Route path="/mind-map" element={<MindMap />} />
          <Route path="/simulation" element={<Simulation />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}