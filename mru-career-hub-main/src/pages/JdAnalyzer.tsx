import { useState } from "react";
import { Search, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const JdAnalyzer = () => {
  const [jd, setJd] = useState("");
  const [result, setResult] = useState<null | { skills: string[]; matched: string[]; missing: string[]; score: number }>(null);

  const analyze = () => {
    const keywords = ["react", "javascript", "typescript", "python", "node", "sql", "aws", "docker", "git", "java", "css", "html", "api", "rest", "agile", "mongodb", "kubernetes", "ci/cd", "linux", "machine learning"];
    const jdLower = jd.toLowerCase();
    const found = keywords.filter(k => jdLower.includes(k));
    const studentSkills = ["react", "javascript", "html", "css", "git", "python", "sql"];
    const matched = found.filter(s => studentSkills.includes(s));
    const missing = found.filter(s => !studentSkills.includes(s));
    setResult({ skills: found, matched, missing, score: found.length > 0 ? Math.round((matched.length / found.length) * 100) : 0 });
  };

  return (
    <div>
      <div className="module-header">
        <div className="flex items-center gap-3 mb-1">
          <div className="dashboard-card-icon bg-card-jd"><Search className="w-6 h-6 text-primary-foreground" /></div>
          <h1 className="module-title">JD Analyzer</h1>
        </div>
        <p className="module-subtitle">Paste a job description to extract skills and get a match score.</p>
      </div>
      <div className="max-w-2xl space-y-4">
        <Textarea placeholder="Paste the job description here..." value={jd} onChange={e => setJd(e.target.value)} className="min-h-[200px] bg-card" />
        <Button onClick={analyze} disabled={!jd.trim()}>Analyze JD</Button>
        {result && (
          <div className="space-y-4 mt-6">
            <div className="dashboard-card">
              <h3 className="font-semibold text-foreground mb-2">Match Score</h3>
              <div className="text-4xl font-bold text-primary">{result.score}%</div>
              <div className="h-3 rounded-full bg-secondary mt-3 overflow-hidden">
                <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${result.score}%` }} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="dashboard-card">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4 text-card-placed" />Matched Skills</h3>
                <div className="flex flex-wrap gap-2">{result.matched.map(s => <span key={s} className="text-xs px-2 py-1 rounded-full bg-card-placed/10 text-card-placed font-medium">{s}</span>)}</div>
              </div>
              <div className="dashboard-card">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2"><XCircle className="w-4 h-4 text-card-skills" />Missing Skills</h3>
                <div className="flex flex-wrap gap-2">{result.missing.map(s => <span key={s} className="text-xs px-2 py-1 rounded-full bg-card-skills/10 text-card-skills font-medium">{s}</span>)}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JdAnalyzer;
