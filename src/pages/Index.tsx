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
              <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-teal-200 bg-clip-text text-transparent">
                🧰 Emotional Wellness Toolkit
              </h1>
              <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
                Discover tools to understand and nurture emotional intelligence in yourself and your children
              </p>
            </div>
          </LayeredCardHeader>
          
          <LayeredCardActions className="justify-center gap-4">
            <Link to="/emotional-toolbox">
              <button className="kd-btn kd-btn--primary text-base px-8 py-4">
                Try Emotional Toolbox
              </button>
            </Link>
            <button className="kd-btn text-base px-8 py-4">
              Learn More
            </button>
          </LayeredCardActions>
        </LayeredCard>

        {/* Feature Overview */}
        <LayeredCard depth={2} size="small">
          <LayeredCardHeader>
            <LayeredCardTitle size="h3" className="text-white/90">🌟 Key Features</LayeredCardTitle>
            <div className="flex gap-2">
              <button className="kd-pill">Interactive</button>
              <button className="kd-pill kd-pill--alt">Research-Based</button>
            </div>
          </LayeredCardHeader>
          
          {/* Enhanced glass chart visualization */}
          <div className="flex items-end gap-3 h-32 mb-6 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div 
              className="w-8 rounded-t-2xl rounded-b-xl backdrop-blur-sm border border-white/20"
              style={{ 
                height: '60%', 
                background: 'linear-gradient(180deg, hsl(var(--ecosystem-teal) / 0.6), hsl(var(--ecosystem-teal) / 0.8))',
                boxShadow: 'var(--shadow-glow-teal), inset 0 1px 0 rgba(255,255,255,0.3)'
              }}
            ></div>
            <div 
              className="w-8 rounded-t-2xl rounded-b-xl backdrop-blur-sm border border-white/20"
              style={{ 
                height: '80%', 
                background: 'linear-gradient(180deg, hsl(var(--ecosystem-purple) / 0.6), hsl(var(--ecosystem-coral) / 0.8))',
                boxShadow: 'var(--shadow-glow-purple), inset 0 1px 0 rgba(255,255,255,0.3)'
              }}
            ></div>
            <div 
              className="w-8 rounded-t-2xl rounded-b-xl backdrop-blur-sm border border-white/20"
              style={{ 
                height: '45%', 
                background: 'linear-gradient(180deg, hsl(var(--ecosystem-aqua) / 0.6), hsl(var(--ecosystem-teal) / 0.8))',
                boxShadow: 'var(--shadow-glow-teal), inset 0 1px 0 rgba(255,255,255,0.3)'
              }}
            ></div>
            <div 
              className="w-8 rounded-t-2xl rounded-b-xl backdrop-blur-sm border border-white/20"
              style={{ 
                height: '70%', 
                background: 'linear-gradient(180deg, hsl(var(--ecosystem-aqua) / 0.6), hsl(var(--ecosystem-sage) / 0.8))',
                boxShadow: 'var(--shadow-glow-teal), inset 0 1px 0 rgba(255,255,255,0.3)'
              }}
            ></div>
            <div 
              className="w-8 rounded-t-2xl rounded-b-xl backdrop-blur-sm border border-white/20"
              style={{ 
                height: '90%', 
                background: 'linear-gradient(180deg, hsl(var(--ecosystem-teal) / 0.6), hsl(var(--ecosystem-purple) / 0.8))',
                boxShadow: 'var(--shadow-glow-purple), inset 0 1px 0 rgba(255,255,255,0.3)'
              }}
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
            <LayeredCardTitle size="h3" className="text-white/90">✨ Quick Actions</LayeredCardTitle>
          </LayeredCardHeader>
          
          <ul className="list-none p-0 m-0 grid gap-4 mb-6">
            <li className="flex items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <span 
                className="inline-block w-4 h-4 rounded-full mr-4 backdrop-blur-sm border border-white/20"
                style={{ 
                  background: 'linear-gradient(45deg, hsl(var(--ecosystem-teal)), hsl(var(--ecosystem-aqua)))',
                  boxShadow: 'var(--shadow-glow-teal)'
                }}
              ></span>
              <span className="text-white/80 text-sm">Emotional Safety Assessment</span>
            </li>
            <li className="flex items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <span 
                className="inline-block w-4 h-4 rounded-full mr-4 backdrop-blur-sm border border-white/20"
                style={{ 
                  background: 'linear-gradient(45deg, hsl(var(--ecosystem-purple)), hsl(var(--ecosystem-coral)))',
                  boxShadow: 'var(--shadow-glow-purple)'
                }}
              ></span>
              <span className="text-white/80 text-sm">Family Wellness Tools</span>
            </li>
            <li className="flex items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <span 
                className="inline-block w-4 h-4 rounded-full mr-4 backdrop-blur-sm border border-white/20"
                style={{ 
                  background: 'linear-gradient(45deg, hsl(var(--ecosystem-coral)), hsl(var(--ecosystem-sunset)))',
                  boxShadow: 'var(--shadow-glow-coral)'
                }}
              ></span>
              <span className="text-white/80 text-sm">Growth Tracking</span>
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
