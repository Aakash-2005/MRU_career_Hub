import { BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const skillData = [
  { skill: "React", demand: 92, student: 65 },
  { skill: "Python", demand: 88, student: 70 },
  { skill: "SQL", demand: 85, student: 60 },
  { skill: "AWS", demand: 78, student: 25 },
  { skill: "Docker", demand: 72, student: 20 },
  { skill: "TypeScript", demand: 70, student: 40 },
  { skill: "System Design", demand: 68, student: 15 },
  { skill: "ML/AI", demand: 65, student: 30 },
];

const recommendations = [
  { skill: "AWS", priority: "High", reason: "53% gap — most in-demand cloud platform" },
  { skill: "System Design", priority: "High", reason: "53% gap — critical for senior roles" },
  { skill: "Docker", priority: "High", reason: "52% gap — essential for DevOps" },
  { skill: "ML/AI", priority: "Medium", reason: "35% gap — growing demand in analytics" },
  { skill: "TypeScript", priority: "Medium", reason: "30% gap — standard in modern frontend" },
];

const priorityColor: Record<string, string> = { High: "text-card-skills", Medium: "text-card-jd" };

const SkillsGap = () => (
  <div>
    <div className="module-header">
      <div className="flex items-center gap-3 mb-1">
        <div className="dashboard-card-icon bg-card-skills"><BarChart3 className="w-6 h-6 text-primary-foreground" /></div>
        <h1 className="module-title">Skills Gap Analysis</h1>
      </div>
      <p className="module-subtitle">Compare student skills vs job market demand.</p>
    </div>
    <div className="dashboard-card mb-6">
      <h3 className="font-semibold text-foreground mb-4">Market Demand vs Student Proficiency</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={skillData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="skill" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
          <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
          <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
          <Bar dataKey="demand" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} name="Market Demand" />
          <Bar dataKey="student" fill="hsl(var(--card-placed))" radius={[4, 4, 0, 0]} name="Student Level" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="dashboard-card">
      <h3 className="font-semibold text-foreground mb-4">Learning Recommendations</h3>
      <div className="space-y-3">
        {recommendations.map(r => (
          <div key={r.skill} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
            <span className={`text-xs font-bold mt-0.5 ${priorityColor[r.priority]}`}>{r.priority}</span>
            <div>
              <span className="font-medium text-foreground">{r.skill}</span>
              <p className="text-sm text-muted-foreground">{r.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkillsGap;
