import BoundaryBarrierCards from "@/components/BoundaryBarrierCards";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { useNavigate } from "react-router-dom";

const BoundaryBarriers = () => {
  const navigate = useNavigate();

  const handleFinish = (results: Array<{ id: string; title: string; resonate: boolean }>) => {
    console.log("Boundary Barriers Results:", results);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-6xl mx-auto space-y-6">
          
          <PageHeader 
            title="Boundary Barriers" 
            subtitle="Discover what gets in the way"
          />

          {/* Instructions Card */}
          <div className="glass-card p-6 text-center">
            <p className="text-white/70">
              Swipe <span className="text-pink font-medium">right</span> on cards that resonate, 
              <span className="text-teal font-medium"> left</span> on those that don't.
            </p>
          </div>

          {/* Cards Component */}
          <BoundaryBarrierCards onFinish={handleFinish} />
        </div>
      </div>
    </Layout>
  );
};

export default BoundaryBarriers;
