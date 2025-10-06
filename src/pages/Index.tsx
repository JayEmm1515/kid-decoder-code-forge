import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Heart, Zap, Users, BookOpen, ArrowRight, Activity, MessageCircle, Brain, TrendingUp, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout currentPageName="Home">
      <div className="bg-[#DCE3EC] p-4">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link to="/being-with-exercise">
            <Card className="bg-white border-white hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#FFDA6C] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-[#002962]" />
                </div>
                <h3 className="text-[#002962] font-semibold text-lg mb-2">Being With Exercise</h3>
                <p className="text-[#002962]/70 text-sm">Explore your emotional patterns and get personalized parenting guidance</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/quizzes">
            <Card className="bg-white border-white hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#0062B8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[#002962] font-semibold text-lg mb-2">Neurodivergent Support</h3>
                <p className="text-[#002962]/70 text-sm">ADHD and Autism screening quizzes with gentle guidance</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/learn">
            <Card className="bg-white border-white hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#FFDA6C] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-[#002962]" />
                </div>
                <h3 className="text-[#002962] font-semibold text-lg mb-2">Learn</h3>
                <p className="text-[#002962]/70 text-sm">Short, practical videos for parents of neurodivergent children</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/tracking">
            <Card className="bg-white border-white hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#0062B8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[#002962] font-semibold text-lg mb-2">Enhanced Behavior Tracking</h3>
                <p className="text-[#002962]/70 text-sm">Track behaviors with sensory, diet, and routine context for deeper insights</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/parenting-chat">
            <Card className="bg-white border-white hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#FFDA6C] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-[#002962]" />
                </div>
                <h3 className="text-[#002962] font-semibold text-lg mb-2">AI Parenting Chat</h3>
                <p className="text-[#002962]/70 text-sm">Get personalized, evidence-based guidance</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/chain-analysis">
            <Card className="bg-white border-white hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#0062B8] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[#002962] font-semibold text-lg mb-2">Chain Analysis</h3>
                <p className="text-[#002962]/70 text-sm">Break down challenging behaviors step by step</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/boundary-barriers">
            <Card className="bg-white border-white hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#FFDA6C] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-[#002962]" />
                </div>
                <h3 className="text-[#002962] font-semibold text-lg mb-2">Boundary Barriers</h3>
                <p className="text-[#002962]/70 text-sm">Discover what gets in the way of setting healthy boundaries</p>
              </CardContent>
            </Card>
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