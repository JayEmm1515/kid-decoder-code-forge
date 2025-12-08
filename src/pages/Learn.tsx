import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
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
  duration: string;
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
  {
    id: 'autism-1',
    title: 'What is Autism Spectrum Disorder?',
    description: 'Simple explanation of autism and why it\'s called a "spectrum"',
    category: 'autism-basics',
    duration: '2:45',
    featured: true,
    tags: ['autism', 'basics', 'diagnosis'],
    relatedQuizzes: ['autism'],
    thumbnailColor: 'bg-gradient-to-br from-teal to-mint'
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
    thumbnailColor: 'bg-gradient-to-br from-mint to-teal'
  },
  {
    id: 'adhd-1',
    title: 'What is ADHD?',
    description: 'Understanding attention deficit hyperactivity disorder in simple terms',
    category: 'adhd-basics',
    duration: '2:30',
    featured: true,
    tags: ['adhd', 'basics', 'diagnosis'],
    relatedQuizzes: ['adhd'],
    thumbnailColor: 'bg-gradient-to-br from-purple to-pink'
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
    thumbnailColor: 'bg-gradient-to-br from-pink to-purple'
  },
  {
    id: 'emotion-1',
    title: 'Big Feelings, Little Bodies',
    description: 'Understanding emotional overwhelm in neurodivergent children',
    category: 'emotional-regulation',
    duration: '2:40',
    featured: true,
    tags: ['emotions', 'regulation', 'overwhelm'],
    relatedQuizzes: ['autism', 'adhd'],
    thumbnailColor: 'bg-gradient-to-br from-teal to-purple'
  },
  {
    id: 'parenting-1',
    title: 'When to Seek Professional Help',
    description: 'Signs it\'s time to talk to a professional about your child\'s development',
    category: 'parenting-strategies',
    duration: '2:25',
    featured: true,
    tags: ['professional-help', 'assessment', 'support'],
    relatedQuizzes: ['autism', 'adhd'],
    thumbnailColor: 'bg-gradient-to-br from-purple to-teal'
  }
];

const CATEGORY_INFO = {
  'autism-basics': {
    title: 'Autism Basics',
    description: 'Understanding autism spectrum disorder and how it affects daily life',
    icon: Brain,
  },
  'adhd-basics': {
    title: 'ADHD Basics', 
    description: 'Learn about attention deficit hyperactivity disorder and its presentations',
    icon: Star,
  },
  'emotional-regulation': {
    title: 'Emotional Regulation',
    description: 'Supporting your child through big feelings and emotional moments',
    icon: Heart,
  },
  'parenting-strategies': {
    title: 'Parenting Strategies',
    description: 'Practical approaches for neurodivergent-friendly parenting',
    icon: Users,
  }
};

export default function Learn() {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('autism-basics');
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendedVideos, setRecommendedVideos] = useState<Video[]>([]);

  useEffect(() => {
    const quizHistory = localStorage.getItem('quiz-history');
    if (quizHistory) {
      const results: QuizResult[] = JSON.parse(quizHistory);
      const recentResults = results.slice(-3);
      
      const recommended = VIDEOS.filter(video => 
        recentResults.some(result => 
          video.relatedQuizzes.includes(result.quizType as QuizType) &&
          (result.score / (result.totalQuestions * 3)) > 0.4
        )
      ).slice(0, 4);
      
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
    <div className="glass-card cursor-pointer overflow-hidden">
      <div className={`${video.thumbnailColor} h-28 flex items-center justify-center relative`}>
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
          <Play className="w-6 h-6 text-white" />
        </div>
        <Badge className="absolute top-2 right-2 bg-black/40 text-white text-xs border-0 rounded-xl">
          <Clock className="w-3 h-3 mr-1" />
          {video.duration}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-sm mb-2 line-clamp-2 text-white">{video.title}</h3>
        <p className="text-xs text-white/50 mb-3 line-clamp-2">{video.description}</p>
        <div className="flex flex-wrap gap-1">
          {video.tags.slice(0, 2).map(tag => (
            <span key={tag} className="status-badge status-badge-teal text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-airy p-4 md:p-8 pb-24">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <PageHeader title="Learn" subtitle="Expert resources for parents" />

          {/* Search */}
          <div className="max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
              <Input
                placeholder="Search videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white rounded-2xl placeholder:text-white/40"
              />
            </div>
          </div>

          {/* Featured Videos */}
          {searchTerm === '' && (
            <div>
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal" />
                Featured Videos
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredVideos.map(video => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          )}

          {/* Video Categories */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4">Browse by Category</h2>
            
            <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as VideoCategory)}>
              <TabsList className="w-full grid grid-cols-2 lg:grid-cols-4 glass-card p-1.5 rounded-2xl mb-6">
                {Object.entries(CATEGORY_INFO).map(([category, info]) => {
                  const IconComponent = info.icon;
                  return (
                    <TabsTrigger 
                      key={category} 
                      value={category} 
                      className="flex items-center gap-2 rounded-xl text-white/60 data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal data-[state=active]:to-mint data-[state=active]:text-white text-xs md:text-sm"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="hidden sm:inline">{info.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {Object.entries(CATEGORY_INFO).map(([category, info]) => (
                <TabsContent key={category} value={category}>
                  <div className="mb-4">
                    <h3 className="text-base font-semibold mb-1 flex items-center gap-2 text-white">
                      <info.icon className="w-5 h-5 text-teal" />
                      {info.title}
                    </h3>
                    <p className="text-white/50 text-sm">{info.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredVideos.map(video => (
                      <VideoCard key={video.id} video={video} />
                    ))}
                  </div>
                  
                  {filteredVideos.length === 0 && searchTerm && (
                    <div className="text-center py-8">
                      <p className="text-white/50">No videos found matching "{searchTerm}"</p>
                      <button 
                        onClick={() => setSearchTerm('')}
                        className="btn-pill mt-3"
                      >
                        Clear search
                      </button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-white/40 text-sm">
              {VIDEOS.length} videos • All videos include captions
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
