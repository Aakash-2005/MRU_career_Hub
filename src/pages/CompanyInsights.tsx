import { useState } from "react";
import { LineChart as LineChartIcon, Building2, Users, IndianRupee, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";

const companies = [
  {
    name: "TCS",
    logo: "T",
    color: "hsl(var(--card-product))",
    hiringTrend: [
      { year: "2020", hires: 45 }, { year: "2021", hires: 60 }, { year: "2022", hires: 80 },
      { year: "2023", hires: 70 }, { year: "2024", hires: 95 }, { year: "2025", hires: 120 },
    ],
    roles: [
      { name: "Developer", value: 45 }, { name: "Analyst", value: 25 }, { name: "Consultant", value: 20 }, { name: "Tester", value: 10 },
    ],
    salary: [
      { range: "3-4 LPA", count: 30 }, { range: "4-5 LPA", count: 45 }, { range: "5-7 LPA", count: 20 }, { range: "7+ LPA", count: 5 },
    ],
    stats: { avgPackage: "4.5 LPA", totalHires: 470, topRole: "Developer", growthRate: "+18%" },
  },
  {
    name: "Infosys",
    logo: "I",
    color: "hsl(var(--card-service))",
    hiringTrend: [
      { year: "2020", hires: 35 }, { year: "2021", hires: 50 }, { year: "2022", hires: 65 },
      { year: "2023", hires: 55 }, { year: "2024", hires: 72 }, { year: "2025", hires: 85 },
    ],
    roles: [
      { name: "SDE", value: 40 }, { name: "Systems Eng.", value: 30 }, { name: "Consultant", value: 20 }, { name: "Analyst", value: 10 },
    ],
    salary: [
      { range: "3-4 LPA", count: 20 }, { range: "4-5 LPA", count: 35 }, { range: "5-8 LPA", count: 30 }, { range: "8+ LPA", count: 15 },
    ],
    stats: { avgPackage: "5.2 LPA", totalHires: 362, topRole: "SDE", growthRate: "+15%" },
  },
  {
    name: "Wipro",
    logo: "W",
    color: "hsl(var(--card-placed))",
    hiringTrend: [
      { year: "2020", hires: 25 }, { year: "2021", hires: 35 }, { year: "2022", hires: 50 },
      { year: "2023", hires: 42 }, { year: "2024", hires: 55 }, { year: "2025", hires: 60 },
    ],
    roles: [
      { name: "Project Eng.", value: 50 }, { name: "Developer", value: 25 }, { name: "Analyst", value: 15 }, { name: "Other", value: 10 },
    ],
    salary: [
      { range: "3-4 LPA", count: 35 }, { range: "4-5 LPA", count: 40 }, { range: "5-6.5 LPA", count: 20 }, { range: "6.5+ LPA", count: 5 },
    ],
    stats: { avgPackage: "4.1 LPA", totalHires: 267, topRole: "Project Engineer", growthRate: "+12%" },
  },
  {
    name: "Cognizant",
    logo: "C",
    color: "hsl(var(--card-jd))",
    hiringTrend: [
      { year: "2020", hires: 20 }, { year: "2021", hires: 28 }, { year: "2022", hires: 40 },
      { year: "2023", hires: 35 }, { year: "2024", hires: 42 }, { year: "2025", hires: 45 },
    ],
    roles: [
      { name: "Programmer Analyst", value: 55 }, { name: "Associate", value: 25 }, { name: "Developer", value: 15 }, { name: "Other", value: 5 },
    ],
    salary: [
      { range: "4-5 LPA", count: 25 }, { range: "5-6 LPA", count: 40 }, { range: "6-8 LPA", count: 25 }, { range: "8+ LPA", count: 10 },
    ],
    stats: { avgPackage: "5.8 LPA", totalHires: 210, topRole: "Programmer Analyst", growthRate: "+10%" },
  },
  {
    name: "Accenture",
    logo: "A",
    color: "hsl(var(--card-ai))",
    hiringTrend: [
      { year: "2020", hires: 18 }, { year: "2021", hires: 30 }, { year: "2022", hires: 45 },
      { year: "2023", hires: 40 }, { year: "2024", hires: 50 }, { year: "2025", hires: 55 },
    ],
    roles: [
      { name: "Analyst", value: 35 }, { name: "Developer", value: 30 }, { name: "Consultant", value: 25 }, { name: "Other", value: 10 },
    ],
    salary: [
      { range: "4-5 LPA", count: 15 }, { range: "5-7 LPA", count: 35 }, { range: "7-9 LPA", count: 35 }, { range: "9+ LPA", count: 15 },
    ],
    stats: { avgPackage: "6.5 LPA", totalHires: 238, topRole: "Analyst", growthRate: "+22%" },
  },
  {
    name: "Deloitte",
    logo: "D",
    color: "hsl(var(--card-insights))",
    hiringTrend: [
      { year: "2020", hires: 8 }, { year: "2021", hires: 12 }, { year: "2022", hires: 18 },
      { year: "2023", hires: 15 }, { year: "2024", hires: 20 }, { year: "2025", hires: 22 },
    ],
    roles: [
      { name: "Consultant", value: 45 }, { name: "Analyst", value: 30 }, { name: "Associate", value: 20 }, { name: "Other", value: 5 },
    ],
    salary: [
      { range: "7-9 LPA", count: 20 }, { range: "9-11 LPA", count: 35 }, { range: "11-14 LPA", count: 30 }, { range: "14+ LPA", count: 15 },
    ],
    stats: { avgPackage: "10.5 LPA", totalHires: 95, topRole: "Consultant", growthRate: "+8%" },
  },
];

const PIE_COLORS = [
  "hsl(var(--primary))", "hsl(var(--card-placed))", "hsl(var(--card-service))", "hsl(var(--card-jd))",
];

const CompanyInsights = () => {
  const [selected, setSelected] = useState(0);
  const company = companies[selected];

  return (
    <div>
      <div className="module-header">
        <div className="flex items-center gap-3 mb-1">
          <div className="dashboard-card-icon bg-card-insights">
            <LineChartIcon className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="module-title">Company Insights</h1>
        </div>
        <p className="module-subtitle">Select a company to explore hiring trends, salary data, and role distribution.</p>
      </div>

      {/* Company selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {companies.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setSelected(i)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
              selected === i
                ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-[1.02]"
                : "bg-card text-foreground border-border hover:border-primary/40 hover:shadow-sm"
            }`}
          >
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0"
              style={{ background: c.color }}
            >
              {c.logo}
            </span>
            {c.name}
          </button>
        ))}
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Avg Package", value: company.stats.avgPackage, icon: IndianRupee, accent: "bg-card-placed/10 text-card-placed" },
          { label: "Total Hires", value: company.stats.totalHires.toString(), icon: Users, accent: "bg-primary/10 text-primary" },
          { label: "Top Role", value: company.stats.topRole, icon: Building2, accent: "bg-card-service/10 text-card-service" },
          { label: "YoY Growth", value: company.stats.growthRate, icon: TrendingUp, accent: "bg-card-jd/10 text-card-jd" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.accent}`}>
                <s.icon className="w-4 h-4" />
              </div>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
            <p className="text-xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-semibold text-foreground mb-4 text-sm">Hiring Trend — {company.name}</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={company.hiringTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="year" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 13 }} />
              <Line type="monotone" dataKey="hires" stroke={company.color} strokeWidth={2.5} dot={{ fill: company.color, r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <h3 className="font-semibold text-foreground mb-4 text-sm">Role Distribution — {company.name}</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={company.roles} cx="50%" cy="50%" outerRadius={95} innerRadius={50} dataKey="value" paddingAngle={3} label={({ name, value }) => `${name} ${value}%`}>
                {company.roles.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 13 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Salary distribution */}
      <div className="rounded-xl border border-border bg-card p-5">
        <h3 className="font-semibold text-foreground mb-4 text-sm">Salary Distribution — {company.name}</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={company.salary}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="range" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} unit="%" />
            <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 13 }} />
            <Bar dataKey="count" fill={company.color} radius={[6, 6, 0, 0]} name="Percentage" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CompanyInsights;
