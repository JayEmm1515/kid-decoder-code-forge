import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BottomNav from "./BottomNav";

interface LayoutProps {
  children: React.ReactNode;
  currentPageName?: string;
  hideFooter?: boolean;
}

export default function Layout({ children, currentPageName, hideFooter = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer - hidden on mobile to make room for bottom nav */}
      {!hideFooter && (
        <div className="hidden md:block">
          <Footer />
        </div>
      )}
      
      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
