import { useState } from "react";
import { FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ResumeMatcher = () => {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState<null | { score: number; keywords: string[]; improvements: string[] }>(null);

  const analyze = () => {
    const lower = resume.toLowerCase();
    const atsKeywords = ["experience", "skills", "education", "projects", "achievements", "leadership", "teamwork", "communication", "problem-solving", "results"];
    const found = atsKeywords.filter(k => lower.includes(k));
    const missing = atsKeywords.filter(k => !lower.includes(k));
    setResult({
      score: Math.round((found.length / atsKeywords.length) * 100),
      keywords: found,
      improvements: missing.map(m => `Add "${m}" section or mention`),
    });
  };

  return (
    <div>
      <div className="module-header">
        <div className="flex items-center gap-3 mb-1">
          <div className="dashboard-card-icon bg-card-resume"><FileText className="w-6 h-6 text-primary-foreground" /></div>
          <h1 className="module-title">Resume Matcher</h1>
        </div>
        <p className="module-subtitle">Paste your resume text for ATS score and improvement suggestions.</p>
      </div>
      <div className="max-w-2xl space-y-4">
        <Textarea placeholder="Paste your resume content here..." value={resume} onChange={e => setResume(e.target.value)} className="min-h-[200px] bg-card" />
        <Button onClick={analyze} disabled={!resume.trim()}><Upload className="w-4 h-4 mr-2" />Analyze Resume</Button>
        {result && (
          <div className="space-y-4 mt-6">
            <div className="dashboard-card">
              <h3 className="font-semibold text-foreground mb-2">ATS Score</h3>
              <div className="text-4xl font-bold text-primary">{result.score}%</div>
              <div className="h-3 rounded-full bg-secondary mt-3 overflow-hidden">
                <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${result.score}%` }} />
              </div>
            </div>
            <div className="dashboard-card">
              <h3 className="font-semibold text-foreground mb-3">Found Keywords</h3>
              <div className="flex flex-wrap gap-2">{result.keywords.map(k => <span key={k} className="text-xs px-2 py-1 rounded-full bg-card-placed/10 text-card-placed font-medium">{k}</span>)}</div>
            </div>
            <div className="dashboard-card">
              <h3 className="font-semibold text-foreground mb-3">Improvements</h3>
              <ul className="space-y-2">{result.improvements.map(imp => <li key={imp} className="text-sm text-muted-foreground">• {imp}</li>)}</ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeMatcher;
