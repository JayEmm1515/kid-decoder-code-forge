import { Link } from "react-router-dom";
import { ChevronLeft, MoreHorizontal } from "lucide-react";

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  backPath?: string;
  showOptions?: boolean;
  subtitle?: string;
}

export default function PageHeader({ 
  title, 
  showBack = true, 
  backPath = "/",
  showOptions = false,
  subtitle
}: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        {showBack && (
          <Link 
            to={backPath}
            className="w-10 h-10 rounded-2xl glass-card flex items-center justify-center hover:bg-white/10 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-white/80" strokeWidth={1.5} />
          </Link>
        )}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white">{title}</h1>
          {subtitle && (
            <p className="text-sm text-white/50 mt-0.5">{subtitle}</p>
          )}
        </div>
      </div>
      
      {showOptions && (
        <button className="w-10 h-10 rounded-2xl glass-card flex items-center justify-center hover:bg-white/10 transition-all">
          <MoreHorizontal className="w-5 h-5 text-white/80" strokeWidth={1.5} />
        </button>
      )}
      
      {!showOptions && (
        <Link to="/children">
          <button className="btn-pill text-xs px-4 py-2">
            My Account
          </button>
        </Link>
      )}
    </header>
  );
}
