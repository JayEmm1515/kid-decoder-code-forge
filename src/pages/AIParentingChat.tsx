import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Child } from "@/entities/all";
import { Send, Bot, User, AlertCircle, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  childContext?: string;
};

const sampleResponses = {
  default: "I understand you're looking for guidance with your child. While I can provide evidence-based parenting strategies, I want to remind you that every child is unique. Based on child development research, here are some approaches that may help...",
  tantrum: "Tantrums are a normal part of child development, especially in younger children. Research by Dr. Dan Siegel suggests 'naming it to tame it' - helping children identify and express their emotions. Stay calm, validate their feelings, and set gentle boundaries. Remember, connection before correction.",
  sleep: "Sleep challenges are very common. Creating predictable routines and a calm environment can help. Consider your child's age-appropriate sleep needs and any underlying factors like anxiety or overstimulation. If sleep issues persist, consult your pediatrician.",
  behavior: "Understanding the function of behavior is key. Ask yourself: Is your child seeking attention, avoiding something, expressing a need, or feeling overwhelmed? Use positive reinforcement for desired behaviors and natural consequences for challenging ones.",
  attachment: "Building secure attachment involves being emotionally available, responsive, and consistent. The Circle of Security approach emphasizes being a safe haven when your child needs comfort and a secure base for exploration."
};

export default function AIParentingChatPage() {
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState("general");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadChildren();
    setMessages([{
      id: '1',
      role: 'assistant',
      content: "Hello! I'm here to provide evidence-based parenting guidance tailored to your child's developmental needs. Please select your child from the dropdown to get personalized advice, or ask me any parenting question.",
      timestamp: new Date()
    }]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadChildren = async () => {
    try {
      const data = await Child.list();
      setChildren(data);
    } catch (error) {
      console.error('Error loading children:', error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getAIResponse = (userMessage: string, childContext?: any) => {
    const message = userMessage.toLowerCase();
    
    let contextualResponse = "";
    if (childContext) {
      contextualResponse = `For ${childContext.name} (age ${childContext.age_group}): `;
    }

    if (message.includes('tantrum') || message.includes('meltdown')) {
      return contextualResponse + sampleResponses.tantrum;
    } else if (message.includes('sleep') || message.includes('bedtime')) {
      return contextualResponse + sampleResponses.sleep;
    } else if (message.includes('behavior') || message.includes('acting out')) {
      return contextualResponse + sampleResponses.behavior;
    } else if (message.includes('attachment') || message.includes('bonding')) {
      return contextualResponse + sampleResponses.attachment;
    } else {
      return contextualResponse + sampleResponses.default;
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage,
      timestamp: new Date(),
      childContext: selectedChild
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    setTimeout(() => {
      const childContext = children.find(c => c.id === selectedChild);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(inputMessage, childContext),
        timestamp: new Date(),
        childContext: selectedChild
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getChildInfo = (childId: string) => {
    const child = children.find(c => c.id === childId);
    return child ? `${child.name} (${child.age_group})` : null;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-airy p-4 md:p-6 pb-24 flex flex-col max-w-4xl mx-auto">
        
        <PageHeader 
          title="AI Coach" 
          subtitle="Evidence-based parenting guidance"
          showOptions={true}
        />

        {/* Child Selection */}
        <div className="glass-card p-4 mb-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-white/70 text-sm font-medium">Select Child:</span>
            <Select value={selectedChild} onValueChange={setSelectedChild}>
              <SelectTrigger className="w-48 bg-white/5 border-white/10 text-white rounded-xl">
                <SelectValue placeholder="Choose child" />
              </SelectTrigger>
              <SelectContent className="glass-card border-white/10 text-white rounded-xl">
                <SelectItem value="general" className="text-white/80 focus:bg-white/10 focus:text-white rounded-lg">General Advice</SelectItem>
                {children && children.length > 0 && children.map(child => (
                  <SelectItem key={child.id} value={child.id} className="text-white/80 focus:bg-white/10 focus:text-white rounded-lg">
                    {child.name} ({child.age_group})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedChild && getChildInfo(selectedChild) && (
              <span className="status-badge status-badge-pink">
                <Heart className="w-3 h-3" />
                {getChildInfo(selectedChild)}
              </span>
            )}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="glass-card flex-1 flex flex-col min-h-0 mb-4">
          <div className="p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="icon-box icon-box-teal w-8 h-8">
                <Bot className="w-4 h-4 text-teal" />
              </div>
              <span className="font-medium text-white">Chat Session</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl ${
                  message.role === 'user' 
                    ? 'bg-gradient-to-br from-teal to-mint text-white' 
                    : 'stat-card text-white/80'
                }`}>
                  <div className="flex items-start gap-2 mb-2">
                    {message.role === 'assistant' ? (
                      <Bot className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal" />
                    ) : (
                      <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="text-xs opacity-60">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                  <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="stat-card text-white/60 p-4 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-teal" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-teal rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-teal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a parenting question..."
                disabled={isLoading}
                className="flex-1 bg-white/5 border-white/10 text-white rounded-xl placeholder:text-white/40"
              />
              <button 
                onClick={handleSendMessage} 
                disabled={isLoading || !inputMessage.trim()}
                className="btn-pill-teal w-12 h-12 rounded-xl flex items-center justify-center p-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="glass-card-pink p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-pink flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-pink mb-1">AI Guidance Disclaimer</p>
              <p className="text-white/60 text-xs">
                This AI provides general parenting information and should not replace professional advice. 
                For specific concerns, please consult qualified healthcare professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
