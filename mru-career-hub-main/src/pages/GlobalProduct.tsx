import { Globe, Star, DollarSign, Code, BarChart } from "lucide-react";

const companies = [
  { name: "Google", roles: ["SDE", "Data Scientist", "Product Manager"], salary: "₹25-60 LPA", skills: ["DSA", "System Design", "ML"], difficulty: "Hard" },
  { name: "Microsoft", roles: ["SDE", "Cloud Engineer", "PM"], salary: "₹20-50 LPA", skills: ["DSA", "Azure", "System Design"], difficulty: "Hard" },
  { name: "Amazon", roles: ["SDE", "Data Engineer", "DevOps"], salary: "₹22-55 LPA", skills: ["DSA", "AWS", "Distributed Systems"], difficulty: "Hard" },
  { name: "Meta", roles: ["SDE", "ML Engineer", "Research Scientist"], salary: "₹30-65 LPA", skills: ["DSA", "ML/AI", "React"], difficulty: "Very Hard" },
  { name: "Apple", roles: ["iOS Engineer", "SDE", "Hardware Engineer"], salary: "₹25-55 LPA", skills: ["Swift", "System Design", "DSA"], difficulty: "Hard" },
  { name: "Adobe", roles: ["SDE", "UX Engineer", "Data Analyst"], salary: "₹15-40 LPA", skills: ["DSA", "JavaScript", "Design"], difficulty: "Medium" },
];

const difficultyColor: Record<string, string> = {
  "Medium": "text-card-placed",
  "Hard": "text-card-jd",
  "Very Hard": "text-card-skills",
};

const GlobalProduct = () => (
  <div>
    <div className="module-header">
      <div className="flex items-center gap-3 mb-1">
        <div className="dashboard-card-icon bg-card-product"><Globe className="w-6 h-6 text-primary-foreground" /></div>
        <h1 className="module-title">Global Product Companies</h1>
      </div>
      <p className="module-subtitle">Top product companies with roles, salary ranges, and required skills.</p>
    </div>
    <div className="grid gap-4">
      {companies.map((c) => (
        <div key={c.name} className="dashboard-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {c.roles.map(r => <span key={r} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{r}</span>)}
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-1 text-sm">
              <span className="flex items-center gap-1 text-muted-foreground"><DollarSign className="w-3 h-3" />{c.salary}</span>
              <span className={`font-medium ${difficultyColor[c.difficulty]}`}>{c.difficulty}</span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {c.skills.map(s => <span key={s} className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GlobalProduct;
