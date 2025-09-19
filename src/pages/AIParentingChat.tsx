import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Child } from "@/entities/all";
import { MessageCircle, Send, Bot, User, AlertCircle, Info, Heart } from "lucide-react";
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
  const [selectedChild, setSelectedChild] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    loadChildren();
    // Add welcome message
    setMessages([{
      id: '1',
      role: 'assistant',
      content: "Hello! I'm here to provide evidence-based parenting guidance tailored to your child's developmental needs. Please select your child from the dropdown to get personalized advice, or ask me any parenting question. Remember, I provide general guidance - for specific concerns, always consult qualified professionals.",
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

    // Simulate AI response delay
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
      <div className="bg-soft-coral-teal p-6 max-w-4xl mx-auto h-screen flex flex-col">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-primary" />
            AI Parenting Chat
          </h1>
          <p className="text-muted-foreground">Get personalized, evidence-based parenting guidance for your child's unique needs.</p>
        </div>

        {/* Child Selection */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <Label className="font-medium">Select Child (optional):</Label>
              <Select value={selectedChild} onValueChange={setSelectedChild}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Choose child" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">General Advice</SelectItem>
                  {children && children.length > 0 && children.map(child => (
                    <SelectItem key={child.id} value={child.id}>
                      {child.name} ({child.age_group})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedChild && (
                <Badge variant="secondary" className="ml-2">
                  <Heart className="w-3 h-3 mr-1" />
                  {getChildInfo(selectedChild)}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Chat Messages */}
        <Card className="flex-1 flex flex-col mb-4 min-h-0">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              Chat Session
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-lg ${
                    message.role === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <div className="flex items-start gap-2 mb-2">
                      {message.role === 'assistant' ? (
                        <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      ) : (
                        <User className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString()}
                        {message.childContext && getChildInfo(message.childContext) && (
                          <span className="ml-2">• {getChildInfo(message.childContext)}</span>
                        )}
                      </div>
                    </div>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-4 rounded-lg max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <Bot className="w-4 h-4" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="mt-4 flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask a parenting question..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={isLoading || !inputMessage.trim()}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-amber-800 mb-1">AI Guidance Disclaimer</p>
                <p className="text-amber-700">
                  This AI provides general parenting information based on evidence-based practices and should not replace professional advice. 
                  For specific concerns about your child's development, behavior, or wellbeing, please consult qualified healthcare professionals. 
                  In emergencies, call 000.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <label className={`text-sm font-medium ${className}`}>{children}</label>;
}