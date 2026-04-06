import { TrendingUp } from "lucide-react";

const placements = [
  { company: "TCS", package: "3.6 - 7 LPA", roles: "Developer, Analyst", hires: 120 },
  { company: "Infosys", package: "3.6 - 8 LPA", roles: "SDE, Systems Engineer", hires: 85 },
  { company: "Wipro", package: "3.5 - 6.5 LPA", roles: "Project Engineer", hires: 60 },
  { company: "Cognizant", package: "4 - 8 LPA", roles: "Programmer Analyst", hires: 45 },
  { company: "Accenture", package: "4.5 - 9 LPA", roles: "Analyst, Developer", hires: 55 },
  { company: "Deloitte", package: "7 - 14 LPA", roles: "Consultant, Analyst", hires: 20 },
  { company: "HCL Tech", package: "3.5 - 6 LPA", roles: "Software Engineer", hires: 40 },
  { company: "Capgemini", package: "3.8 - 7.5 LPA", roles: "Associate Consultant", hires: 35 },
];

const TopPlaced = () => (
  <div>
    <div className="module-header">
      <div className="flex items-center gap-3 mb-1">
        <div className="dashboard-card-icon bg-card-placed"><TrendingUp className="w-6 h-6 text-primary-foreground" /></div>
        <h1 className="module-title">Top MRU Placed Companies</h1>
      </div>
      <p className="module-subtitle">Real placement data with packages, roles, and hiring counts.</p>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Company</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Package</th>
            <th className="text-left py-3 px-4 font-medium text-muted-foreground">Roles</th>
            <th className="text-right py-3 px-4 font-medium text-muted-foreground">Hires</th>
          </tr>
        </thead>
        <tbody>
          {placements.map((p) => (
            <tr key={p.company} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
              <td className="py-3 px-4 font-medium text-foreground">{p.company}</td>
              <td className="py-3 px-4 text-card-placed font-medium">{p.package}</td>
              <td className="py-3 px-4 text-muted-foreground">{p.roles}</td>
              <td className="py-3 px-4 text-right font-semibold text-foreground">{p.hires}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TopPlaced;
