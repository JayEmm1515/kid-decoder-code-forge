import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  backPath?: string;
  subtitle?: string;
  showOptions?: boolean; // kept for backwards compatibility
}

export default function PageHeader({ 
  title, 
  showBack = true, 
  backPath = "/",
  subtitle
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      {showBack && (
        <Link 
          to={backPath}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      )}
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground mt-1">{subtitle}</p>
      )}
    </div>
  );
}
