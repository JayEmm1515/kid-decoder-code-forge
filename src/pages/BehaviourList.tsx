import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, BookOpen, Clock, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import { BehaviorGuide } from '@/entities/BehaviorGuide';
import { createPageUrl } from '@/utils';

const ageGroupColors = {
  '0-2': 'bg-mint/10 text-mint border-mint/20',
  '3-5': 'bg-violet/10 text-violet border-violet/20', 
  '6-12': 'bg-peach/10 text-peach border-peach/20',
  '13-18': 'bg-rose/10 text-rose border-rose/20'
};

const ageGroupLabels = {
  '0-2': 'Early Years',
  '3-5': 'Preschool',
  '6-12': 'School Age', 
  '13-18': 'Teens'
};

export default function BehaviourListPage() {
  const [searchParams] = useSearchParams();
  const [behaviors, setBehaviors] = useState([]);
  const [filteredBehaviors, setFilteredBehaviors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  
  const ageGroup = searchParams.get('age_group');

  useEffect(() => {
    const loadBehaviors = async () => {
      setLoading(true);
      try {
        let data;
        if (ageGroup) {
          data = await BehaviorGuide.filter({ age_group: ageGroup });
        } else {
          data = await BehaviorGuide.list();
        }
        setBehaviors(data);
        setFilteredBehaviors(data);
      } catch (error) {
        console.error('Failed to load behaviors:', error);
        setBehaviors([]);
        setFilteredBehaviors([]);
      }
      setLoading(false);
    };

    loadBehaviors();
  }, [ageGroup]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredBehaviors(behaviors);
    } else {
      const filtered = behaviors.filter(behavior =>
        behavior.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        behavior.summary.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBehaviors(filtered);
    }
  }, [searchTerm, behaviors]);

  const BehaviorCard = ({ behavior }) => (
    <Link 
      to={createPageUrl(`BehaviourDetail?id=${behavior.id}`)}
      className="block group"
    >
      <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 border border-slate-200 group-hover:border-violet/30">
        <CardHeader className="space-y-3">
          <div className="flex items-start justify-between">
            <Badge 
              variant="outline" 
              className={ageGroupColors[behavior.age_group]}
            >
              {ageGroupLabels[behavior.age_group]}
            </Badge>
            <Clock className="w-4 h-4 text-muted" />
          </div>
          <CardTitle className="text-xl font-semibold text-ink group-hover:text-violet transition-colors">
            {behavior.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted leading-relaxed">{behavior.summary}</p>
          
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div className="space-y-2">
              <h4 className="font-medium text-ink text-sm">What it means:</h4>
              <p className="text-sm text-muted line-clamp-2">{behavior.what_it_means}</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium text-ink text-sm">What they're communicating:</h4>
              <p className="text-sm text-muted line-clamp-2">{behavior.what_it_conveys}</p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-violet hover:text-violet hover:bg-violet/10 p-0 h-auto font-semibold"
            >
              Read full guide →
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-white p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-slate-200 rounded w-1/3"></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-64 bg-slate-200 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Header */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Link 
                to={createPageUrl("UnderstandingBehaviour")} 
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-muted" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-ink">
                  {ageGroup ? `${ageGroupLabels[ageGroup]} Behavior Guides` : 'All Behavior Guides'}
                </h1>
                <p className="text-muted mt-2">
                  {ageGroup 
                    ? `Evidence-based guidance for understanding ${ageGroupLabels[ageGroup].toLowerCase()} behavior`
                    : 'Evidence-based guidance for understanding children\'s behavior across all ages'
                  }
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
              <Input
                placeholder="Search behavior guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-slate-200"
              />
            </div>
          </div>

          {/* Results */}
          {filteredBehaviors.length === 0 ? (
            <Card className="text-center py-12 bg-slate-50">
              <CardContent className="space-y-4">
                <BookOpen className="w-12 h-12 text-muted mx-auto" />
                <div>
                  <h3 className="text-xl font-semibold text-ink">No guides found</h3>
                  <p className="text-muted mt-2">
                    {searchTerm 
                      ? `No behavior guides match "${searchTerm}"`
                      : 'No behavior guides available for this age group yet'
                    }
                  </p>
                </div>
                {searchTerm && (
                  <Button 
                    variant="outline" 
                    onClick={() => setSearchTerm('')}
                    className="mt-4"
                  >
                    Clear search
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-muted flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {filteredBehaviors.length} guide{filteredBehaviors.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBehaviors.map(behavior => (
                  <BehaviorCard key={behavior.id} behavior={behavior} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}