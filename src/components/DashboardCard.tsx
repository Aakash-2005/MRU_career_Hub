import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  delay: number;
}

export function DashboardCard({ title, description, icon: Icon, href, color, delay }: DashboardCardProps) {
  return (
    <Link
      to={href}
      className="dashboard-card group animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Colored accent strip at top */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${color} opacity-80 group-hover:opacity-100 transition-opacity`} />

      <div className="flex items-start justify-between">
        <div className={`dashboard-card-icon ${color}`}>
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
          <ArrowRight className="w-4 h-4 text-foreground" />
        </div>
      </div>

      <h3 className="font-semibold text-foreground text-lg mb-1 mt-1">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

      {/* Background glow */}
      <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full ${color} opacity-[0.04] group-hover:opacity-[0.08] transition-opacity blur-2xl`} />
    </Link>
  );
}
