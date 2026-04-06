import {
  Globe, Briefcase, TrendingUp, Search, BarChart3, LineChart, FileText, Bot, LayoutDashboard, GraduationCap
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, useSidebar,
} from "@/components/ui/sidebar";

const modules = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Global Product Companies", url: "/global-product", icon: Globe },
  { title: "Service-Based Companies", url: "/service-based", icon: Briefcase },
  { title: "Top MRU Placed", url: "/top-placed", icon: TrendingUp },
  { title: "JD Analyzer", url: "/jd-analyzer", icon: Search },
  { title: "Skills Gap Analysis", url: "/skills-gap", icon: BarChart3 },
  { title: "Company Insights", url: "/company-insights", icon: LineChart },
  { title: "Resume Matcher", url: "/resume-matcher", icon: FileText },
  { title: "AI Assistant", url: "/ai-assistant", icon: Bot },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-bold text-sidebar-foreground">MRU Placements</span>
              <span className="text-xs text-sidebar-foreground/60">Career Dashboard</span>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/50">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {modules.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
