import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="organic-shape w-96 h-96 top-10 -right-20 floating-element"></div>
      <div className="organic-shape w-64 h-64 bottom-20 -left-10 floating-element" style={{ animationDelay: '2s' }}></div>
      <div className="organic-shape w-80 h-80 top-1/2 left-1/3 floating-element" style={{ animationDelay: '4s' }}></div>
      
      {/* Header */}
      <header className="relative z-10 border-b border-ecosystem-teal/20 bg-background/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold gradient-text floating-element">
              🌿 The Kid Decoder
            </h1>
            <Button className="ecosystem-button text-ecosystem-navy font-semibold px-6 py-2">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="floating-element mb-8">
            <h2 className="text-6xl font-bold mb-6 gradient-text leading-tight">
              Decode Your Child's Behavior with Confidence
            </h2>
            <div className="w-24 h-1 bg-gradient-organic mx-auto mb-8 rounded-full"></div>
          </div>
          <p className="text-xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Understand challenging behaviors, discover evidence-based strategies, and build stronger connections with your child through research-backed insights.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link to="/emotional-toolbox">
              <Button size="lg" className="ecosystem-button text-ecosystem-navy font-semibold px-8 py-4 text-lg">
                🧰 Try Emotional Toolbox
              </Button>
            </Link>
            <Button size="lg" className="ecosystem-card border-ecosystem-teal/30 text-ecosystem-teal hover:text-ecosystem-navy px-8 py-4 text-lg bg-transparent">
              🌱 Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold gradient-text mb-4">🌊 Explore Our Living Ecosystem</h3>
          <p className="text-lg text-foreground/70">Discover tools that grow with your family's journey</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="ecosystem-card group floating-element">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-coral mb-4 flex items-center justify-center text-2xl">
                🧩
              </div>
              <CardTitle className="text-ecosystem-teal text-xl font-bold">Behavior Decoder</CardTitle>
              <CardDescription className="text-foreground/70">
                Understand what your child's challenging behaviors really mean
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Get insights into the underlying needs and emotions behind difficult behaviors with research-backed explanations.
              </p>
            </CardContent>
          </Card>

          <Card className="ecosystem-card group floating-element" style={{ animationDelay: '0.5s' }}>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-organic mb-4 flex items-center justify-center text-2xl">
                🔗
              </div>
              <CardTitle className="text-ecosystem-aqua text-xl font-bold">Chain Analysis</CardTitle>
              <CardDescription className="text-foreground/70">
                Identify triggers and patterns to prevent challenging moments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Track and analyze behavioral patterns to better predict and manage triggering situations.
              </p>
            </CardContent>
          </Card>

          <Card className="ecosystem-card group floating-element" style={{ animationDelay: '1s' }}>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-coral mb-4 flex items-center justify-center text-2xl">
                🤖
              </div>
              <CardTitle className="text-ecosystem-purple text-xl font-bold">AI Parenting Coach</CardTitle>
              <CardDescription className="text-foreground/70">
                Get personalized advice based on your specific situation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Chat with our AI coach for real-time support and evidence-based parenting strategies.
              </p>
            </CardContent>
          </Card>

          <Card className="ecosystem-card group floating-element" style={{ animationDelay: '1.5s' }}>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-organic mb-4 flex items-center justify-center text-2xl">
                📊
              </div>
              <CardTitle className="text-ecosystem-coral text-xl font-bold">Mood & Behavior Logs</CardTitle>
              <CardDescription className="text-foreground/70">
                Track your child's emotional patterns over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Keep detailed logs to identify trends and measure progress in your child's development.
              </p>
            </CardContent>
          </Card>

          <Card className="ecosystem-card group floating-element" style={{ animationDelay: '2s' }}>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-coral mb-4 flex items-center justify-center text-2xl">
                🌱
              </div>
              <CardTitle className="text-ecosystem-sage text-xl font-bold">Age-Based Guidance</CardTitle>
              <CardDescription className="text-foreground/70">
                Strategies tailored to your child's developmental stage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Access content organized by developmental milestones from infancy through adolescence.
              </p>
            </CardContent>
          </Card>

          <Card className="ecosystem-card group floating-element" style={{ animationDelay: '2.5s' }}>
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-organic mb-4 flex items-center justify-center text-2xl">
                🔬
              </div>
              <CardTitle className="text-ecosystem-teal text-xl font-bold">Evidence-Based Strategies</CardTitle>
              <CardDescription className="text-foreground/70">
                Solutions rooted in child development research
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Practical approaches based on attachment theory, neurodevelopment, and proven methodologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
