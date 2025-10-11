import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Heart, Zap, Users, BookOpen, ArrowRight, Activity, MessageCircle, Brain, TrendingUp, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout currentPageName="Home">
      <div className="bg-[#153b3e] p-4 min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/dashboard-bg.png?v=2)' }}>
        <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-[#0062B8] rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-[#002962]">The Kid Decoder</h1>
              <p className="text-[#0062B8] text-lg">by The Big Enough Project</p>
            </div>
          </div>
          <p className="text-[#002962] text-xl max-w-3xl mx-auto mb-8">
            Evidence-based tools for understanding and supporting your child's emotional development
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-[#0062B8] text-white hover:bg-[#002962] gap-2 px-8 py-4 text-lg">
              <TrendingUp className="w-6 h-6" />
              Get Started
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <Link to="/being-with-exercise">
            <div className="w-full aspect-square flex flex-col items-center justify-center gap-4 p-8 bg-[#F5F1E8] rounded-[2.5rem] shadow-lg hover:shadow-xl transition-shadow">
              <Heart className="w-12 h-12 text-[#002962]" strokeWidth={1.5} />
              <span className="text-base font-semibold text-[#002962] text-center leading-tight">Being With</span>
            </div>
          </Link>

          <Link to="/quizzes">
            <div className="w-full aspect-square flex flex-col items-center justify-center gap-4 p-8 bg-[#F5F1E8] rounded-[2.5rem] shadow-lg hover:shadow-xl transition-shadow">
              <Brain className="w-12 h-12 text-[#002962]" strokeWidth={1.5} />
              <span className="text-base font-semibold text-[#002962] text-center leading-tight">Neurodivergent</span>
            </div>
          </Link>

          <Link to="/learn">
            <div className="w-full aspect-square flex flex-col items-center justify-center gap-4 p-8 bg-[#F5F1E8] rounded-[2.5rem] shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="w-12 h-12 text-[#002962]" strokeWidth={1.5} />
              <span className="text-base font-semibold text-[#002962] text-center leading-tight">Learn</span>
            </div>
          </Link>

          <Link to="/tracking">
            <div className="w-full aspect-square flex flex-col items-center justify-center gap-4 p-8 bg-[#F5F1E8] rounded-[2.5rem] shadow-lg hover:shadow-xl transition-shadow">
              <Activity className="w-12 h-12 text-[#002962]" strokeWidth={1.5} />
              <span className="text-base font-semibold text-[#002962] text-center leading-tight">Tracking</span>
            </div>
          </Link>

          <Link to="/parenting-chat">
            <div className="w-full aspect-square flex flex-col items-center justify-center gap-4 p-8 bg-[#F5F1E8] rounded-[2.5rem] shadow-lg hover:shadow-xl transition-shadow">
              <MessageCircle className="w-12 h-12 text-[#002962]" strokeWidth={1.5} />
              <span className="text-base font-semibold text-[#002962] text-center leading-tight">AI Chat</span>
            </div>
          </Link>

          <Link to="/chain-analysis">
            <div className="w-full aspect-square flex flex-col items-center justify-center gap-4 p-8 bg-[#F5F1E8] rounded-[2.5rem] shadow-lg hover:shadow-xl transition-shadow">
              <Brain className="w-12 h-12 text-[#002962]" strokeWidth={1.5} />
              <span className="text-base font-semibold text-[#002962] text-center leading-tight">Chain Analysis</span>
            </div>
          </Link>

          <Link to="/boundary-barriers">
            <div className="w-full aspect-square flex flex-col items-center justify-center gap-4 p-8 bg-[#F5F1E8] rounded-[2.5rem] shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-[#002962]" strokeWidth={1.5} />
              <span className="text-base font-semibold text-[#002962] text-center leading-tight">Boundaries</span>
            </div>
          </Link>
        </div>

        {/* Understanding Your Child Section */}
        <Card className="bg-white border-white mb-8">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-[#0062B8]" />
              <h2 className="text-3xl font-bold text-[#002962]">Understanding Your Child</h2>
            </div>
            <p className="text-[#002962]/80 text-lg max-w-2xl mx-auto mb-6">
              Evidence-based insights for understanding children's complex behaviour patterns 
              and developmental needs at every stage
            </p>
            <Link to="/understanding-behaviour">
              <Button size="lg" className="bg-[#0062B8] text-white hover:bg-[#002962] gap-2">
                <BookOpen className="w-5 h-5" />
                Explore Behavior Guides by Age
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Footer Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <Link to="/">
            <Card className="bg-white border-white hover:shadow-lg transition-all cursor-pointer p-4">
              <Home className="w-6 h-6 text-[#0062B8] mx-auto" />
            </Card>
          </Link>
          <Link to="/emotional-presence">
            <Card className="bg-white border-white hover:shadow-lg transition-all cursor-pointer p-4">
              <Zap className="w-6 h-6 text-[#0062B8] mx-auto" />
            </Card>
          </Link>
          <Link to="/children">
            <Card className="bg-white border-white hover:shadow-lg transition-all cursor-pointer p-4">
              <Users className="w-6 h-6 text-[#0062B8] mx-auto" />
            </Card>
          </Link>
        </div>

        {/* Safety Disclaimer */}
        <Card className="mt-8 bg-white border-white">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-[#0062B8]" />
              <h3 className="text-lg font-semibold text-[#002962]">Important Notice</h3>
            </div>
            <p className="text-[#002962]/80 text-sm leading-relaxed">
              <strong>This app provides general parenting information and is not a substitute for professional advice.</strong><br/>
              Always consult qualified health professionals for specific concerns about your child's development or wellbeing.<br/>
              <strong>In emergencies, call 000.</strong>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
    </Layout>
  );
};

export default Index;