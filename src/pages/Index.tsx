import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-aquarius-teal/10 via-aquarius-blue/10 to-aquarius-purple/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-aquarius-teal to-aquarius-blue bg-clip-text text-transparent">
              The Kid Decoder
            </h1>
            <Button variant="outline">Sign In</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-aquarius-teal via-aquarius-blue to-aquarius-purple bg-clip-text text-transparent">
            Decode Your Child's Behavior with Confidence
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Understand challenging behaviors, discover evidence-based strategies, and build stronger connections with your child through research-backed insights.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-aquarius-teal hover:bg-aquarius-blue">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-aquarius-teal/20 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-aquarius-teal">Behavior Decoder</CardTitle>
              <CardDescription>
                Understand what your child's challenging behaviors really mean
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get insights into the underlying needs and emotions behind difficult behaviors with research-backed explanations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-aquarius-blue/20 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-aquarius-blue">Chain Analysis</CardTitle>
              <CardDescription>
                Identify triggers and patterns to prevent challenging moments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Track and analyze behavioral patterns to better predict and manage triggering situations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-aquarius-purple/20 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-aquarius-purple">AI Parenting Coach</CardTitle>
              <CardDescription>
                Get personalized advice based on your specific situation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Chat with our AI coach for real-time support and evidence-based parenting strategies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-aquarius-rose/20 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-aquarius-rose">Mood & Behavior Logs</CardTitle>
              <CardDescription>
                Track your child's emotional patterns over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Keep detailed logs to identify trends and measure progress in your child's development.
              </p>
            </CardContent>
          </Card>

          <Card className="border-aquarius-amber/20 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-aquarius-amber">Age-Based Guidance</CardTitle>
              <CardDescription>
                Strategies tailored to your child's developmental stage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access content organized by developmental milestones from infancy through adolescence.
              </p>
            </CardContent>
          </Card>

          <Card className="border-aquarius-teal/20 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-aquarius-teal">Evidence-Based Strategies</CardTitle>
              <CardDescription>
                Solutions rooted in child development research
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
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
