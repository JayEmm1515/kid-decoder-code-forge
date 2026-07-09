import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import EmotionalToolboxPage from "./pages/EmotionalToolbox";
import EmotionalPresencePage from "./pages/EmotionalPresence";
import NotFound from "./pages/NotFound";
// Import all new pages
import Children from "./pages/Children";
import ParentingChat from "./pages/ParentingChat";
import Tracking from "./pages/Tracking";
import ChainAnalysis from "./pages/ChainAnalysis";
import UnderstandingBehaviour from "./pages/UnderstandingBehaviour";
import BehaviourList from "./pages/BehaviourList";
import BehaviourDetail from "./pages/BehaviourDetail";
import EarlyYears from "./pages/EarlyYears";
import Preschool from "./pages/Preschool";
import SchoolAge from "./pages/SchoolAge";
import Teens from "./pages/Teens";
import BeingWithExercise from "./pages/BeingWithExercise";
import EmotionalBlueprint from "./pages/EmotionalBlueprint";
import Quizzes from "./pages/Quizzes";
import Learn from "./pages/Learn";
import BoundaryBarriers from "./pages/BoundaryBarriers";
import BehaviourGuides from "./pages/BehaviourGuides";
import HandMeDownToolbox from "./pages/HandMeDownToolbox";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/emotional-toolbox" element={<EmotionalToolboxPage />} />
          <Route path="/emotional-presence" element={<EmotionalPresencePage />} />
          <Route path="/children" element={<Children />} />
          <Route path="/parenting-chat" element={<ParentingChat />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/chain-analysis" element={<ChainAnalysis />} />
          <Route path="/understanding-behaviour" element={<UnderstandingBehaviour />} />
          <Route path="/behaviourlist" element={<BehaviourList />} />
          <Route path="/behaviourdetail" element={<BehaviourDetail />} />
          <Route path="/early-years" element={<EarlyYears />} />
          <Route path="/preschool" element={<Preschool />} />
          <Route path="/school-age" element={<SchoolAge />} />
          <Route path="/teens" element={<Teens />} />
          <Route path="/being-with-exercise" element={<BeingWithExercise />} />
          <Route path="/emotional-blueprint" element={<EmotionalBlueprint />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/boundary-barriers" element={<BoundaryBarriers />} />
          <Route path="/behaviour-guides" element={<BehaviourGuides />} />
          <Route path="/hand-me-down-toolbox" element={<HandMeDownToolbox />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
