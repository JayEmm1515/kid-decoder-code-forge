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
          <div className="min-h-screen flex w-full bg-white text-ink">
            <Sidebar className="border-r border-slate-300 bg-white">
              <SidebarHeader className="border-b border-slate-200 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-grad-cta rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-ink text-lg">The Kid Decoder</h2>
                    <p className="text-xs text-muted">by The Big Enough Project</p>
                  </div>
                </div>
              </SidebarHeader>
             
              <SidebarContent className="p-3">
                <SidebarGroup>
                  <SidebarGroupLabel className="text-xs font-bold text-slate-700 uppercase tracking-wider px-3 py-2">
                    Main Tools
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {navigationItems.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            className={`hover:bg-slate-200 transition-all duration-200 rounded-xl mb-1 ${
                              location.pathname === item.url ? 'bg-slate-900 text-white font-semibold shadow-sm' : 'text-slate-900'
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
                  <SidebarGroupLabel className="text-xs font-bold text-slate-700 uppercase tracking-wider px-3 py-2">
                    Age-Specific Strategies
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {ageGroupPages.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            className={`hover:bg-slate-200 transition-all duration-200 rounded-xl mb-1 ${
                              location.pathname === item.url ? 'bg-slate-900 text-white font-semibold shadow-sm' : 'text-slate-900'
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

              <SidebarFooter className="border-t border-slate-200 p-4">
                <div className="text-center">
                  <p className="text-xs text-slate-400 mb-2">
                    <strong>Disclaimer:</strong> This app provides general parenting information and is not a substitute for professional advice.
                    Always consult qualified health professionals for specific concerns. Call 000 for emergencies.
                  </p>
                </div>
              </SidebarFooter>
            </Sidebar>

            <main className="flex-1 flex flex-col">
              <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 px-6 py-4 md:hidden">
                <div className="flex items-center gap-4">
                  <SidebarTrigger className="hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200" />
                  <h1 className="text-xl font-semibold text-ink">The Kid Decoder</h1>
                </div>
              </header>

              <div className="flex-1 overflow-auto pb-24">
                {children}
              </div>
            </main>
          </div>
          <BottomNav />
        </SidebarProvider>
      </div>
    </>
  );
}