import EmotionalToolbox from "@/components/EmotionalToolbox";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const EmotionalToolboxPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-aquarius-teal/10 via-aquarius-blue/10 to-aquarius-purple/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-xl font-bold bg-gradient-to-r from-aquarius-teal to-aquarius-blue bg-clip-text text-transparent">
              The Kid Decoder
            </h1>
            <div className="w-24" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <EmotionalToolbox />
    </div>
  );
};

export default EmotionalToolboxPage;