import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Bell } from "lucide-react";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center justify-between border-b border-border/60 bg-card/80 backdrop-blur-md px-4 sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="h-5 w-px bg-border" />
              <h1 className="text-sm font-semibold text-foreground tracking-tight">MRU Placement & Career Dashboard</h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Notifications"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
              >
                <Bell className="w-4 h-4" />
              </button>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                S
              </div>
            </div>
          </header>
          <main className="page-container">{children}</main>
          <footer className="px-4 py-3 border-t border-border/60 bg-card/60 text-center text-xs text-muted-foreground">
            Developed by Aakash Kumar Jha
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
