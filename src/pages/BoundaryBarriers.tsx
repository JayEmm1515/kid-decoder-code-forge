import BoundaryBarrierCards from "@/components/BoundaryBarrierCards";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const BoundaryBarriers = () => {
  const navigate = useNavigate();

  const handleFinish = (results: Array<{ id: string; title: string; resonate: boolean }>) => {
    console.log("Boundary Barriers Results:", results);
    // You can navigate to a results page or dashboard
    // navigate("/dashboard");
  };

  return (
    <div className="min-h-screen p-4" style={{ background: '#DCE3EC' }}>
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Button variant="outline" style={{ background: 'white', borderColor: '#0062B8', color: '#002962' }} className="hover:bg-white/90">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl font-bold" style={{ color: '#002962' }}>
            Boundary Barriers
          </h1>
          <div className="w-32" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 text-center">
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#002962' }}>
            Discover what gets in the way of setting healthy boundaries with your child. 
            Swipe right on cards that resonate, left on those that don't.
          </p>
        </div>

        <BoundaryBarrierCards onFinish={handleFinish} />
      </div>
    </div>
  );
};

export default BoundaryBarriers;
