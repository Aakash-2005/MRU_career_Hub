import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DashboardLayout } from "@/components/DashboardLayout";
import Index from "./pages/Index";
import GlobalProduct from "./pages/GlobalProduct";
import ServiceBased from "./pages/ServiceBased";
import TopPlaced from "./pages/TopPlaced";
import JdAnalyzer from "./pages/JdAnalyzer";
import SkillsGap from "./pages/SkillsGap";
import CompanyInsights from "./pages/CompanyInsights";
import ResumeMatcher from "./pages/ResumeMatcher";
import AiAssistant from "./pages/AiAssistant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/global-product" element={<GlobalProduct />} />
            <Route path="/service-based" element={<ServiceBased />} />
            <Route path="/top-placed" element={<TopPlaced />} />
            <Route path="/jd-analyzer" element={<JdAnalyzer />} />
            <Route path="/skills-gap" element={<SkillsGap />} />
            <Route path="/company-insights" element={<CompanyInsights />} />
            <Route path="/resume-matcher" element={<ResumeMatcher />} />
            <Route path="/ai-assistant" element={<AiAssistant />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
