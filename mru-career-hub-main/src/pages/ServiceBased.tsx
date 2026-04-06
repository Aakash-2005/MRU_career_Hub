import { Briefcase } from "lucide-react";

const companies = [
  { name: "TCS", pattern: "Mass hiring, aptitude-heavy", aptitude: 70, coding: 30, roles: ["Developer", "Analyst", "Consultant"] },
  { name: "Infosys", pattern: "Regular campus drives", aptitude: 60, coding: 40, roles: ["SDE", "Systems Engineer", "Consultant"] },
  { name: "Wipro", pattern: "Quarterly hiring cycles", aptitude: 65, coding: 35, roles: ["Project Engineer", "Developer", "Analyst"] },
  { name: "Cognizant", pattern: "Off-campus + on-campus", aptitude: 55, coding: 45, roles: ["Programmer Analyst", "Associate"] },
  { name: "HCL Tech", pattern: "Consistent campus hiring", aptitude: 60, coding: 40, roles: ["Software Engineer", "Analyst"] },
];

const ServiceBased = () => (
  <div>
    <div className="module-header">
      <div className="flex items-center gap-3 mb-1">
        <div className="dashboard-card-icon bg-card-service"><Briefcase className="w-6 h-6 text-primary-foreground" /></div>
        <h1 className="module-title">Service-Based Companies</h1>
      </div>
      <p className="module-subtitle">Hiring patterns, aptitude vs coding weight, and typical roles.</p>
    </div>
    <div className="grid gap-4">
      {companies.map((c) => (
        <div key={c.name} className="dashboard-card">
          <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{c.pattern}</p>
          <div className="mt-3 flex gap-4">
            <div className="flex-1">
              <div className="text-xs text-muted-foreground mb-1">Aptitude ({c.aptitude}%)</div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full bg-card-service" style={{ width: `${c.aptitude}%` }} />
              </div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground mb-1">Coding ({c.coding}%)</div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full bg-card-product" style={{ width: `${c.coding}%` }} />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {c.roles.map(r => <span key={r} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">{r}</span>)}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ServiceBased;
