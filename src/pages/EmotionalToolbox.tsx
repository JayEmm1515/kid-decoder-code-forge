import EmotionalToolbox from "@/components/EmotionalToolbox";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EmotionalToolboxPage = () => {
  return (
    <div className="bg-soft-coral-teal dreamy-app">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <button className="dreamy-button flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </button>
          </Link>
          <h1 className="text-xl font-bold text-[hsl(var(--foreground))]">
            Emotional Wellness Toolkit
          </h1>
          <div className="w-32" /> {/* Spacer for centering */}
        </div>
      </header>

      <EmotionalToolbox />
    </div>
  );
};

export default EmotionalToolboxPage;