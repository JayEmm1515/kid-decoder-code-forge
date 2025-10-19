import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Brain, ArrowRight, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout currentPageName="Home">
      <div className="min-h-screen bg-cover bg-center bg-no-repeat p-6" style={{ backgroundImage: 'url(/dashboard-bg.png?v=2)' }}>
        <div className="max-w-2xl mx-auto pt-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 bg-[#0062B8] rounded-3xl flex items-center justify-center shadow-lg">
                <Heart className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold text-[#002962]">The Kid Decoder</h1>
                <p className="text-[#0062B8] text-lg font-medium">by The Big Enough Project</p>
              </div>
            </div>
            <p className="text-[#002962] text-xl max-w-xl mx-auto mb-8 leading-relaxed">
              Evidence-based tools for understanding and supporting your child's emotional development
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-[#0062B8] text-white hover:bg-[#004a8f] gap-2 px-10 py-6 text-lg rounded-3xl shadow-xl">
                <TrendingUp className="w-6 h-6" />
                Get Started
                <ArrowRight className="w-6 h-6" />
              </Button>
            </Link>
          </div>

          {/* Main Action Buttons */}
          <div className="grid grid-cols-2 gap-6 px-4">
            <Link to="/being-with-exercise">
              <div className="aspect-square flex flex-col items-center justify-center gap-4 p-8 rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all bg-gradient-to-br from-[#FFB5A7]/90 to-[#FEC5BB]/90 backdrop-blur-sm">
                <Heart className="w-16 h-16 text-[#002962]" strokeWidth={2} />
                <span className="text-xl font-bold text-[#002962] text-center">Being With</span>
              </div>
            </Link>

            <Link to="/quizzes">
              <div className="aspect-square flex flex-col items-center justify-center gap-4 p-8 rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all bg-gradient-to-br from-[#FFB5A7]/90 to-[#FEC5BB]/90 backdrop-blur-sm">
                <Brain className="w-16 h-16 text-[#002962]" strokeWidth={2} />
                <span className="text-xl font-bold text-[#002962] text-center">Neurodivergent</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
