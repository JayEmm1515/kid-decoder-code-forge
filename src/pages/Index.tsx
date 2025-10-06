import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Heart, Zap, Users, BookOpen, ArrowRight, Activity, MessageCircle, Brain, TrendingUp, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout currentPageName="Home">
      <div className="bg-[#153b3e] p-4">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" style={{ background: '#153b3e' }}>
          <Link to="/being-with-exercise">
            <Button variant="poly-coral" className="w-full aspect-square flex flex-col items-center justify-center gap-3 p-6 h-auto">
              <Heart className="w-10 h-10" />
              <span className="text-base font-semibold text-center leading-tight">Being With Exercise</span>
            </Button>
          </Link>

          <Link to="/quizzes">
            <Button variant="poly-teal" className="w-full aspect-square flex flex-col items-center justify-center gap-3 p-6 h-auto">
              <Brain className="w-10 h-10" />
              <span className="text-base font-semibold text-center leading-tight">Neurodivergent Support</span>
            </Button>
          </Link>

          <Link to="/learn">
            <Button variant="poly-purple" className="w-full aspect-square flex flex-col items-center justify-center gap-3 p-6 h-auto">
              <BookOpen className="w-10 h-10" />
              <span className="text-base font-semibold text-center leading-tight">Learn</span>
            </Button>
          </Link>

          <Link to="/tracking">
            <Button variant="poly-mint" className="w-full aspect-square flex flex-col items-center justify-center gap-3 p-6 h-auto">
              <Activity className="w-10 h-10" />
              <span className="text-base font-semibold text-center leading-tight">Behavior Tracking</span>
            </Button>
          </Link>

          <Link to="/parenting-chat">
            <Button variant="poly-pink" className="w-full aspect-square flex flex-col items-center justify-center gap-3 p-6 h-auto">
              <MessageCircle className="w-10 h-10" />
              <span className="text-base font-semibold text-center leading-tight">AI Parenting Chat</span>
            </Button>
          </Link>

          <Link to="/chain-analysis">
            <Button variant="poly-coral" className="w-full aspect-square flex flex-col items-center justify-center gap-3 p-6 h-auto">
              <Brain className="w-10 h-10" />
              <span className="text-base font-semibold text-center leading-tight">Chain Analysis</span>
            </Button>
          </Link>

          <Link to="/boundary-barriers">
            <Button variant="poly-teal" className="w-full aspect-square flex flex-col items-center justify-center gap-3 p-6 h-auto">
              <Shield className="w-10 h-10" />
              <span className="text-base font-semibold text-center leading-tight">Boundary Barriers</span>
            </Button>
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