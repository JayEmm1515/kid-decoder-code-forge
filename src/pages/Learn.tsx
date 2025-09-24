import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Play, Clock, Search, Star, BookOpen, Brain, Heart, Users } from 'lucide-react';

type VideoCategory = 'autism-basics' | 'adhd-basics' | 'emotional-regulation' | 'parenting-strategies';
type QuizType = 'adhd' | 'autism';

interface Video {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  duration: string; // in format "2:30"
  featured: boolean;
  tags: string[];
  relatedQuizzes: QuizType[];
  thumbnailColor: string;
}

interface QuizResult {
  id: string;
  quizType: QuizType;
  ageGroup: string;
  score: number;
  totalQuestions: number;
  date: string;
}

const VIDEOS: Video[] = [
  // Autism Basics
  {
    id: 'autism-1',
    title: 'What is Autism Spectrum Disorder?',
    description: 'Simple explanation of autism and why it\'s called a "spectrum"',
    category: 'autism-basics',
    duration: '2:45',
    featured: true,
    tags: ['autism', 'basics', 'diagnosis'],
    relatedQuizzes: ['autism'],
    thumbnailColor: 'bg-blue-500'
  },
  {
    id: 'autism-2',
    title: 'Understanding Sensory Differences',
    description: 'How children with autism experience the world differently through their senses',
    category: 'autism-basics',
    duration: '3:15',
    featured: false,
    tags: ['sensory', 'autism', 'daily-life'],
    relatedQuizzes: ['autism'],
    thumbnailColor: 'bg-green-500'
  },
  {
    id: 'autism-3',
    title: 'What\'s a Sensory Meltdown?',
    description: 'Recognising and understanding sensory overload in autistic children',
    category: 'autism-basics',
    duration: '2:20',
    featured: true,
    tags: ['meltdown', 'sensory', 'behaviour'],
    relatedQuizzes: ['autism'],
    thumbnailColor: 'bg-orange-500'
  },
  {
    id: 'autism-4',
    title: 'Communication Without Words',
    description: 'Supporting non-speaking autistic children and alternative communication',
    category: 'autism-basics',
    duration: '3:00',
    featured: false,
    tags: ['communication', 'non-verbal', 'support'],
    relatedQuizzes: ['autism'],
    thumbnailColor: 'bg-purple-500'
  },

  // ADHD Basics
  {
    id: 'adhd-1',
    title: 'What is ADHD?',
    description: 'Understanding attention deficit hyperactivity disorder in simple terms',
    category: 'adhd-basics',
    duration: '2:30',
    featured: true,
    tags: ['adhd', 'basics', 'diagnosis'],
    relatedQuizzes: ['adhd'],
    thumbnailColor: 'bg-red-500'
  },
  {
    id: 'adhd-2',
    title: 'ADHD in Girls vs Boys',
    description: 'How ADHD presents differently in girls and why it\'s often missed',
    category: 'adhd-basics',
    duration: '2:50',
    featured: true,
    tags: ['adhd', 'girls', 'diagnosis'],
    relatedQuizzes: ['adhd'],
    thumbnailColor: 'bg-pink-500'
  },
  {
    id: 'adhd-3',
    title: 'The Three Types of ADHD',
    description: 'Inattentive, hyperactive, and combined types explained',
    category: 'adhd-basics',
    duration: '2:15',
    featured: false,
    tags: ['adhd', 'types', 'symptoms'],
    relatedQuizzes: ['adhd'],
    thumbnailColor: 'bg-yellow-500'
  },
  {
    id: 'adhd-4',
    title: 'ADHD and Executive Function',
    description: 'How ADHD affects planning, organisation, and daily tasks',
    category: 'adhd-basics',
    duration: '3:20',
    featured: false,
    tags: ['executive-function', 'organisation', 'daily-life'],
    relatedQuizzes: ['adhd'],
    thumbnailColor: 'bg-indigo-500'
  },

  // Emotional Regulation
  {
    id: 'emotion-1',
    title: 'Big Feelings, Little Bodies',
    description: 'Understanding emotional overwhelm in neurodivergent children',
    category: 'emotional-regulation',
    duration: '2:40',
    featured: true,
    tags: ['emotions', 'regulation', 'overwhelm'],
    relatedQuizzes: ['autism', 'adhd'],
    thumbnailColor: 'bg-teal-500'
  },
  {
    id: 'emotion-2',
    title: 'Co-Regulation vs Self-Regulation',
    description: 'How to help your child learn to manage emotions step by step',
    category: 'emotional-regulation',
    duration: '3:10',
    featured: false,
    tags: ['co-regulation', 'emotional-support', 'development'],
    relatedQuizzes: ['autism', 'adhd'],
    thumbnailColor: 'bg-cyan-500'
  },
  {
    id: 'emotion-3',
    title: 'When Emotions Feel Too Big',
    description: 'Supporting children through intense emotional moments',
    category: 'emotional-regulation',
    duration: '2:55',
    featured: false,
    tags: ['intense-emotions', 'support', 'comfort'],
    relatedQuizzes: ['autism', 'adhd'],
    thumbnailColor: 'bg-emerald-500'
  },

  // Parenting Strategies
  {
    id: 'parenting-1',
    title: 'When to Seek Professional Help',
    description: 'Signs it\'s time to talk to a professional about your child\'s development',
    category: 'parenting-strategies',
    duration: '2:25',
    featured: true,
    tags: ['professional-help', 'assessment', 'support'],
    relatedQuizzes: ['autism', 'adhd'],
    thumbnailColor: 'bg-violet-500'
  },
  {
    id: 'parenting-2',
    title: 'Creating Predictable Routines',
    description: 'Why routines matter and how to build them flexibly',
    category: 'parenting-strategies',
    duration: '3:05',
    featured: false,
    tags: ['routines', 'structure', 'predictability'],
    relatedQuizzes: ['autism', 'adhd'],
    thumbnailColor: 'bg-rose-500'
  },
  {
    id: 'parenting-3',
    title: 'Positive Behaviour Support',
    description: 'Focus on what works rather than what doesn\'t',
    category: 'parenting-strategies',
    duration: '2:35',
    featured: false,
    tags: ['positive-behaviour', 'support', 'encouragement'],
    relatedQuizzes: ['autism', 'adhd'],
    thumbnailColor: 'bg-amber-500'
  },
  {
    id: 'parenting-4',
    title: 'Explaining Neurodiversity to Others',
    description: 'How to talk to family, teachers, and friends about your child\'s needs',
    category: 'parenting-strategies',
    duration: '2:50',
    featured: false,
    tags: ['advocacy', 'explaining', 'support-network'],
    relatedQuizzes: ['autism', 'adhd'],
    thumbnailColor: 'bg-lime-500'
  }
];

const CATEGORY_INFO = {
  'autism-basics': {
    title: 'Autism Basics',
    description: 'Understanding autism spectrum disorder and how it affects daily life',
    icon: Brain,
    color: 'text-blue-600'
  },
  'adhd-basics': {
    title: 'ADHD Basics', 
    description: 'Learn about attention deficit hyperactivity disorder and its presentations',
    icon: Star,
    color: 'text-red-600'
  },
  'emotional-regulation': {
    title: 'Emotional Regulation',
    description: 'Supporting your child through big feelings and emotional moments',
    icon: Heart,
    color: 'text-rose-600'
  },
  'parenting-strategies': {
    title: 'Parenting Strategies',
    description: 'Practical approaches for neurodivergent-friendly parenting',
    icon: Users,
    color: 'text-green-600'
  }
};

export default function Learn() {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('autism-basics');
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendedVideos, setRecommendedVideos] = useState<Video[]>([]);

  useEffect(() => {
    // Get recommendations based on recent quiz results
    const quizHistory = localStorage.getItem('quiz-history');
    if (quizHistory) {
      const results: QuizResult[] = JSON.parse(quizHistory);
      const recentResults = results.slice(-3); // Last 3 quiz results
      
      const recommended = VIDEOS.filter(video => 
        recentResults.some(result => 
          video.relatedQuizzes.includes(result.quizType as QuizType) &&
          (result.score / (result.totalQuestions * 3)) > 0.4 // 40% or higher score
        )
      ).slice(0, 4); // Top 4 recommendations
      
      setRecommendedVideos(recommended);
    }
  }, []);

  const filteredVideos = VIDEOS.filter(video => {
    const matchesCategory = video.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredVideos = VIDEOS.filter(video => video.featured);

  const VideoCard = ({ video }: { video: Video }) => (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <div className={`${video.thumbnailColor} h-32 rounded-t-lg flex items-center justify-center relative`}>
          <Play className="w-12 h-12 text-white opacity-80" />
          <Badge className="absolute top-2 right-2 bg-black/50 text-white">
            <Clock className="w-3 h-3 mr-1" />
            {video.duration}
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h3>
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{video.description}</p>
          <div className="flex flex-wrap gap-1">
            {video.tags.slice(0, 2).map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Learn</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A library of short, practical videos to help you understand and support your neurodivergent child
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Recommended Videos */}
        {recommendedVideos.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Recommended for You
            </h2>
            <p className="text-muted-foreground mb-4">
              Based on your recent quiz results, these videos might be helpful
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {recommendedVideos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        )}

        {/* Featured Videos */}
        {searchTerm === '' && (
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              Featured Videos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {featuredVideos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        )}

        {/* Video Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          
          <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as VideoCategory)}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              {Object.entries(CATEGORY_INFO).map(([category, info]) => {
                const IconComponent = info.icon;
                return (
                  <TabsTrigger key={category} value={category} className="flex items-center gap-2">
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{info.title}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(CATEGORY_INFO).map(([category, info]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground">{info.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredVideos.map(video => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </div>
                
                {filteredVideos.length === 0 && searchTerm && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No videos found matching "{searchTerm}"</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setSearchTerm('')}
                      className="mt-2"
                    >
                      Clear search
                    </Button>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Video Count Summary */}
        <div className="text-center pt-8 border-t">
          <p className="text-muted-foreground">
            {VIDEOS.length} videos across {Object.keys(CATEGORY_INFO).length} categories • 
            All videos include captions and are 1-3 minutes long
          </p>
        </div>
      </div>
    </Layout>
  );
}