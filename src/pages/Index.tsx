import { Button } from "@/components/ui/button";
import { LayeredCard, LayeredCardHeader, LayeredCardTitle, LayeredCardActions } from "@/components/ui/layered-card";
import { FloatingBlobs } from "@/components/ui/floating-blobs";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="kd-app">
      <div className="kd-bg"></div>
      <FloatingBlobs />
      
      <div className="kd-stack">
        {/* Hero Section */}
        <LayeredCard depth={3} className="text-center">
          <LayeredCardHeader>
            <div className="w-full">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                🧰 Emotional Wellness Toolkit
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover tools to understand and nurture emotional intelligence in yourself and your children
              </p>
            </div>
          </LayeredCardHeader>
          
          <LayeredCardActions className="justify-center">
            <Link to="/emotional-toolbox">
              <button className="kd-btn kd-btn--primary text-lg px-8 py-4">
                Try Emotional Toolbox
              </button>
            </Link>
            <button className="kd-btn text-lg px-8 py-4">
              Learn More
            </button>
          </LayeredCardActions>
        </LayeredCard>

        {/* Feature Overview */}
        <LayeredCard depth={2} size="small">
          <LayeredCardHeader>
            <LayeredCardTitle size="h3">🌟 Key Features</LayeredCardTitle>
            <div className="flex gap-2">
              <button className="kd-pill">Interactive</button>
              <button className="kd-pill kd-pill--alt">Research-Based</button>
            </div>
          </LayeredCardHeader>
          
          {/* Feature chart visualization */}
          <div className="flex items-end gap-4 h-40 mb-6">
            <div 
              className="w-12 bg-gradient-organic rounded-t-3xl rounded-b-2xl shadow-glow transform translate-z-6"
              style={{ height: '60%', boxShadow: '0 12px 22px hsl(var(--ecosystem-teal) / 0.35), inset 0 1px 0 rgba(255,255,255,0.8)' }}
            ></div>
            <div 
              className="w-12 rounded-t-3xl rounded-b-2xl transform translate-z-6"
              style={{ 
                height: '80%', 
                background: 'linear-gradient(180deg, hsl(var(--ecosystem-purple)), hsl(var(--ecosystem-coral)))',
                boxShadow: '0 12px 22px hsl(var(--ecosystem-purple) / 0.35), inset 0 1px 0 rgba(255,255,255,0.85)' 
              }}
            ></div>
            <div 
              className="w-12 bg-gradient-organic rounded-t-3xl rounded-b-2xl shadow-glow transform translate-z-6"
              style={{ height: '45%', boxShadow: '0 12px 22px hsl(var(--ecosystem-teal) / 0.35), inset 0 1px 0 rgba(255,255,255,0.8)' }}
            ></div>
            <div 
              className="w-12 rounded-t-3xl rounded-b-2xl transform translate-z-6"
              style={{ 
                height: '70%', 
                background: 'linear-gradient(180deg, hsl(var(--ecosystem-aqua)), hsl(var(--ecosystem-sage)))',
                boxShadow: '0 12px 22px hsl(var(--ecosystem-aqua) / 0.35), inset 0 1px 0 rgba(255,255,255,0.85)' 
              }}
            ></div>
            <div 
              className="w-12 bg-gradient-organic rounded-t-3xl rounded-b-2xl shadow-glow transform translate-z-6"
              style={{ height: '90%', boxShadow: '0 12px 22px hsl(var(--ecosystem-teal) / 0.35), inset 0 1px 0 rgba(255,255,255,0.8)' }}
            ></div>
          </div>
          
          <LayeredCardActions>
            <button className="kd-btn">View Analytics</button>
            <button className="kd-btn kd-btn--primary">Get Started</button>
          </LayeredCardActions>
        </LayeredCard>

        {/* Quick Actions */}
        <LayeredCard depth={1} size="small">
          <LayeredCardHeader>
            <LayeredCardTitle size="h3">✨ Quick Actions</LayeredCardTitle>
          </LayeredCardHeader>
          
          <ul className="list-none p-0 m-0 grid gap-3 mb-6">
            <li className="flex items-center">
              <span 
                className="inline-block w-3 h-3 rounded-full mr-3 shadow-organic"
                style={{ background: 'hsl(var(--ecosystem-teal))' }}
              ></span>
              Emotional Safety Assessment
            </li>
            <li className="flex items-center">
              <span 
                className="inline-block w-3 h-3 rounded-full mr-3 shadow-organic"
                style={{ background: 'hsl(var(--ecosystem-purple))' }}
              ></span>
              Family Wellness Tools
            </li>
            <li className="flex items-center">
              <span 
                className="inline-block w-3 h-3 rounded-full mr-3 shadow-organic"
                style={{ background: 'hsl(var(--ecosystem-coral))' }}
              ></span>
              Growth Tracking
            </li>
          </ul>
          
          <LayeredCardActions layout="grid">
            <button className="kd-chip">Start Journey</button>
            <button className="kd-chip">Learn More</button>
            <button className="kd-chip">Share</button>
          </LayeredCardActions>
        </LayeredCard>
      </div>

    </div>
  );
};

export default Index;
