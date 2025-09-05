import EmotionalPresenceExercise from "@/components/EmotionalPresenceExercise";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EmotionalPresencePage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex items-center justify-between max-w-5xl mx-auto">
          <Link to="/emotional-toolbox">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Toolbox
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-foreground">
            Emotional Presence Exercise
          </h1>
          <div className="w-32" /> {/* Spacer for centering */}
        </div>
      </header>

      <div className="pt-20">
        <EmotionalPresenceExercise />
      </div>
    </div>
  );
};

export default EmotionalPresencePage;