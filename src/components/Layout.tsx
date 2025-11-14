import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Home,
  Users,
  Brain,
  MessageCircle,
  TrendingUp,
  BookOpen,
  Baby,
  ToyBrick,
  GraduationCap,
  Heart,
  Zap,
  Search,
  Shield
} from "lucide-react";
import BottomNav from "@/components/BottomNav";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: createPageUrl("Dashboard"),
    icon: Home,
    color: "text-white"
  },
  {
    title: "Understand Behaviour",
    url: createPageUrl("UnderstandingBehaviour"),
    icon: Search,
    color: "text-blue-400"
  },
  {
    title: "Being With Exercise",
    url: "/being-with-exercise",
    icon: Heart,
    color: "text-rose-400"
  },
  {
    title: "Neurodivergent Support",
    url: "/quizzes",
    icon: Brain,
    color: "text-purple-400"
  },
  {
    title: "Learn",
    url: "/learn",
    icon: BookOpen,
    color: "text-green-400"
  },
  {
    title: "Track Behavior",
    url: createPageUrl("Tracking"),
    icon: Zap,
    color: "text-teal-400"
  },
  {
    title: "Chain Analysis",
    url: createPageUrl("ChainAnalysis"),
    icon: Brain,
    color: "text-purple-400"
  },
  {
    title: "Boundary Barriers",
    url: createPageUrl("BoundaryBarriers"),
    icon: Shield,
    color: "text-blue-400"
  },
  {
    title: "AI Parenting Chat",
    url: createPageUrl("ParentingChat"),
    icon: MessageCircle,
    color: "text-orange-400"
  },
  {
    title: "My Children",
    url: createPageUrl("Children"),
    icon: Users,
    color: "text-pink-400"
  }
];

const ageGroupPages = [
  {
    title: "Early Years (0-2)",
    url: createPageUrl("EarlyYears"),
    icon: Baby,
  },
  {
    title: "Preschool (3-5)",
    url: createPageUrl("Preschool"),
    icon: ToyBrick,
  },
  {
    title: "School Age (6-12)",
    url: createPageUrl("SchoolAge"),
    icon: BookOpen,
  },
  {
    title: "Teens (13-18)",
    url: createPageUrl("Teens"),
    icon: GraduationCap,
  }
];

export default function Layout({ children, currentPageName }: { children: React.ReactNode; currentPageName?: string }) {
  const location = useLocation();

  return (
    <>
      <div id="kid-theme" className="kid-theme">
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-pastel-gradient text-foreground">
            <Sidebar className="border-r border-sidebar-border bg-sidebar shadow-clay-medium">
              <SidebarHeader className="border-b border-sidebar-border p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-clay-light">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-sidebar-foreground text-lg">The Kid Decoder</h2>
                    <p className="text-xs text-muted-foreground">by The Big Enough Project</p>
                  </div>
                </div>
              </SidebarHeader>
             
              <SidebarContent className="p-3">
                <SidebarGroup>
                  <SidebarGroupLabel className="text-xs font-bold text-sidebar-foreground/70 uppercase tracking-wider px-3 py-2">
                    Main Tools
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {navigationItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            className={`hover:shadow-clay-light transition-all duration-200 rounded-2xl mb-1 ${
                              location.pathname === item.url ? 'shadow-clay-inset bg-white/50 font-semibold' : 'bg-transparent'
                            }`}
                          >
                            <Link to={item.url} className="flex items-center gap-3 px-3 py-3">
                              <item.icon className="w-5 h-5" />
                              <span className="font-medium">{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="mt-4">
                  <SidebarGroupLabel className="text-xs font-bold text-sidebar-foreground/70 uppercase tracking-wider px-3 py-2">
                    Age-Specific Strategies
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {ageGroupPages.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            className={`hover:shadow-clay-light transition-all duration-200 rounded-2xl mb-1 ${
                              location.pathname === item.url ? 'shadow-clay-inset bg-white/50 font-semibold' : 'bg-transparent'
                            }`}
                          >
                            <Link to={item.url} className="flex items-center gap-3 px-3 py-2">
                              <item.icon className="w-4 h-4" />
                              <span className="font-medium text-sm">{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>

              <SidebarFooter className="border-t border-sidebar-border p-4">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-2">
                    <strong>Disclaimer:</strong> This app provides general parenting information and is not a substitute for professional advice.
                  </p>
                </div>
              </SidebarFooter>
            </Sidebar>

            <main className="flex-1 overflow-auto">
              {children}
            </main>
          </div>

          {/* Mobile header with sidebar trigger */}
          <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar/95 backdrop-blur-md border-b border-sidebar-border shadow-clay-light">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <h1 className="text-lg font-bold text-sidebar-foreground">The Kid Decoder</h1>
              </div>
            </div>
          </header>

          <BottomNav />
        </SidebarProvider>
      </div>
    </>
  );
}