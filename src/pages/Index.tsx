import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Heart, Zap, Users, BookOpen, ArrowRight, Activity, MessageCircle, Brain, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-coral-bottom p-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-white">The Kid Decoder</h1>
              <p className="text-white/80 text-lg">by The Big Enough Project</p>
            </div>
          </div>
          <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">
            Evidence-based tools for understanding and supporting your child's emotional development
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 gap-2 px-8 py-4 text-lg">
              <TrendingUp className="w-6 h-6" />
              Get Started
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link to="/being-with-exercise">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-rose-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Being With Exercise</h3>
                <p className="text-white/70 text-sm">Explore your emotional patterns and get personalized parenting guidance</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/quizzes">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Neurodivergent Support</h3>
                <p className="text-white/70 text-sm">ADHD and Autism screening quizzes with gentle guidance</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/learn">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Learn</h3>
                <p className="text-white/70 text-sm">Short, practical videos for parents of neurodivergent children</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/tracking">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-teal-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Enhanced Behavior Tracking</h3>
                <p className="text-white/70 text-sm">Track behaviors with sensory, diet, and routine context for deeper insights</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/parenting-chat">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">AI Parenting Chat</h3>
                <p className="text-white/70 text-sm">Get personalized, evidence-based guidance</p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/chain-analysis">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Chain Analysis</h3>
                <p className="text-white/70 text-sm">Break down challenging behaviors step by step</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Understanding Your Child Section */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-white">Understanding Your Child</h2>
            </div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Evidence-based insights for understanding children's complex behaviour patterns 
              and developmental needs at every stage
            </p>
            <Link to="/understanding-behaviour">
              <Button size="lg" className="bg-white/20 text-white hover:bg-white/30 gap-2">
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
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer p-4">
              <Home className="w-6 h-6 text-white mx-auto" />
            </Card>
          </Link>
          <Link to="/emotional-presence">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer p-4">
              <Zap className="w-6 h-6 text-white mx-auto" />
            </Card>
          </Link>
          <Link to="/children">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all cursor-pointer p-4">
              <Users className="w-6 h-6 text-white mx-auto" />
            </Card>
          </Link>
        </div>

        {/* Safety Disclaimer */}
        <Card className="mt-8 bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-white" />
              <h3 className="text-lg font-semibold text-white">Important Notice</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              <strong>This app provides general parenting information and is not a substitute for professional advice.</strong><br/>
              Always consult qualified health professionals for specific concerns about your child's development or wellbeing.<br/>
              <strong>In emergencies, call 000.</strong>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;