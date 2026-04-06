import { Globe, Briefcase, TrendingUp, Search, BarChart3, LineChart, FileText, Bot, Sparkles } from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";

const dashboardItems = [
  {
    title: "Global Product Companies",
    description: "Top product companies, roles, salaries, and required skills",
    icon: Globe,
    href: "/global-product",
    color: "bg-card-product",
  },
  {
    title: "Service-Based Companies",
    description: "TCS, Infosys, Wipro — hiring patterns and typical roles",
    icon: Briefcase,
    href: "/service-based",
    color: "bg-card-service",
  },
  {
    title: "Top MRU Placed Companies",
    description: "Real placement insights with packages and hiring counts",
    icon: TrendingUp,
    href: "/top-placed",
    color: "bg-card-placed",
  },
  {
    title: "JD Analyzer",
    description: "Paste a job description to extract skills and match score",
    icon: Search,
    href: "/jd-analyzer",
    color: "bg-card-jd",
  },
  {
    title: "Skills Gap Analysis",
    description: "Compare your skills vs market demand with recommendations",
    icon: BarChart3,
    href: "/skills-gap",
    color: "bg-card-skills",
  },
  {
    title: "Company Insights",
    description: "Hiring trends, salary distribution, and role demand charts",
    icon: LineChart,
    href: "/company-insights",
    color: "bg-card-insights",
  },
  {
    title: "Resume Matcher",
    description: "Upload resume for ATS score and keyword suggestions",
    icon: FileText,
    href: "/resume-matcher",
    color: "bg-card-resume",
  },
  {
    title: "AI Assistant",
    description: "Chat-based assistant for interview prep and career advice",
    icon: Bot,
    href: "/ai-assistant",
    color: "bg-card-ai",
  },
];

const Index = () => {
  return (
    <div>
      <div className="module-header">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">Dashboard</span>
        </div>
        <h1 className="module-title text-3xl">Welcome back, Student 👋</h1>
        <p className="module-subtitle mt-2">Explore placement tools, career insights, and AI-powered recommendations.</p>
      </div>

      {/* Quick stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Companies", value: "150+", color: "text-card-product" },
          { label: "Avg Package", value: "₹6.2 LPA", color: "text-card-placed" },
          { label: "Students Placed", value: "1,200+", color: "text-card-service" },
          { label: "Hiring Partners", value: "45", color: "text-card-jd" },
        ].map((stat) => (
          <div key={stat.label} className="stat-card text-center">
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {dashboardItems.map((item, i) => (
          <DashboardCard key={item.href} {...item} delay={i * 80} />
        ))}
      </div>
    </div>
  );
};

export default Index;
