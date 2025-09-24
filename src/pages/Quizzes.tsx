import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Clock, FileText, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

type AgeGroup = 'preschool' | 'school-age' | 'teens';
type QuizType = 'adhd' | 'autism';
type Answer = 'never' | 'sometimes' | 'often' | 'very-often';

interface Question {
  id: string;
  text: string;
  ageGroups: AgeGroup[];
}

interface QuizResult {
  id: string;
  quizType: QuizType;
  ageGroup: AgeGroup;
  score: number;
  totalQuestions: number;
  date: string;
  answers: Record<string, Answer>;
}

const ADHD_QUESTIONS: Question[] = [
  {
    id: 'attention-1',
    text: 'Has difficulty paying attention to activities or tasks',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'attention-2',
    text: 'Seems not to listen when spoken to directly',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'attention-3',
    text: 'Fails to finish tasks or follow through on instructions',
    ageGroups: ['school-age', 'teens']
  },
  {
    id: 'attention-4',
    text: 'Has difficulty organising tasks and activities',
    ageGroups: ['school-age', 'teens']
  },
  {
    id: 'hyperactivity-1',
    text: 'Fidgets with hands or feet or squirms in seat',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'hyperactivity-2',
    text: 'Leaves seat when expected to remain seated',
    ageGroups: ['preschool', 'school-age']
  },
  {
    id: 'hyperactivity-3',
    text: 'Talks excessively or has difficulty playing quietly',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'impulsivity-1',
    text: 'Blurts out answers before questions are completed',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'impulsivity-2',
    text: 'Has difficulty waiting their turn',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'executive-1',
    text: 'Loses items necessary for tasks (toys, homework, pencils)',
    ageGroups: ['school-age', 'teens']
  }
];

const AUTISM_QUESTIONS: Question[] = [
  {
    id: 'social-1',
    text: 'Has difficulty making eye contact during conversations',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'social-2',
    text: 'Struggles to develop friendships appropriate to their age',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'social-3',
    text: 'Has difficulty understanding social cues and non-verbal communication',
    ageGroups: ['school-age', 'teens']
  },
  {
    id: 'communication-1',
    text: 'Delays in or lack of spoken language development',
    ageGroups: ['preschool', 'school-age']
  },
  {
    id: 'communication-2',
    text: 'Repeats words or phrases (echolalia)',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'communication-3',
    text: 'Takes things very literally or has difficulty with jokes',
    ageGroups: ['school-age', 'teens']
  },
  {
    id: 'behaviour-1',
    text: 'Shows intense interest in specific topics or objects',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'behaviour-2',
    text: 'Insists on specific routines and becomes upset with changes',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'sensory-1',
    text: 'Over- or under-reacts to sounds, textures, lights, or smells',
    ageGroups: ['preschool', 'school-age', 'teens']
  },
  {
    id: 'sensory-2',
    text: 'Shows repetitive movements (hand flapping, rocking, spinning)',
    ageGroups: ['preschool', 'school-age', 'teens']
  }
];

const ANSWER_OPTIONS = [
  { value: 'never', label: 'Never', score: 0 },
  { value: 'sometimes', label: 'Sometimes', score: 1 },
  { value: 'often', label: 'Often', score: 2 },
  { value: 'very-often', label: 'Very Often', score: 3 }
];

export default function Quizzes() {
  const [currentQuiz, setCurrentQuiz] = useState<QuizType | null>(null);
  const [selectedAge, setSelectedAge] = useState<AgeGroup>('school-age');
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('quiz-history');
    if (savedHistory) {
      setQuizHistory(JSON.parse(savedHistory));
    }
  }, []);

  const getCurrentQuestions = () => {
    const questions = currentQuiz === 'adhd' ? ADHD_QUESTIONS : AUTISM_QUESTIONS;
    return questions.filter(q => q.ageGroups.includes(selectedAge));
  };

  const calculateScore = () => {
    const questions = getCurrentQuestions();
    return questions.reduce((total, question) => {
      const answer = answers[question.id];
      const answerScore = ANSWER_OPTIONS.find(opt => opt.value === answer)?.score || 0;
      return total + answerScore;
    }, 0);
  };

  const getScorePercentage = () => {
    const questions = getCurrentQuestions();
    const maxScore = questions.length * 3;
    return Math.round((calculateScore() / maxScore) * 100);
  };

  const getResultSummary = () => {
    const percentage = getScorePercentage();
    const quizName = currentQuiz === 'adhd' ? 'ADHD' : 'Autism';
    
    if (percentage < 30) {
      return `Your answers suggest few ${quizName} traits at this time. Every child develops differently, and this is just a snapshot.`;
    } else if (percentage < 60) {
      return `Some of your answers may suggest ${quizName} traits. This is not a diagnosis. These traits can be part of normal development or may indicate areas to explore further.`;
    } else {
      return `Many of your answers suggest ${quizName} traits. This is not a diagnosis. Consider discussing these observations with a health professional who can provide proper assessment and support.`;
    }
  };

  const saveResult = () => {
    const result: QuizResult = {
      id: Date.now().toString(),
      quizType: currentQuiz!,
      ageGroup: selectedAge,
      score: calculateScore(),
      totalQuestions: getCurrentQuestions().length,
      date: new Date().toISOString(),
      answers: { ...answers }
    };

    const updatedHistory = [...quizHistory, result];
    setQuizHistory(updatedHistory);
    localStorage.setItem('quiz-history', JSON.stringify(updatedHistory));
  };

  const handleSubmitQuiz = () => {
    saveResult();
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setAnswers({});
    setShowResults(false);
  };

  const isQuizComplete = () => {
    const questions = getCurrentQuestions();
    return questions.every(q => answers[q.id]);
  };

  if (showResults) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">Quiz Results</h1>
            <p className="text-muted-foreground">
              {currentQuiz === 'adhd' ? 'ADHD' : 'Autism'} Quiz - {selectedAge.charAt(0).toUpperCase() + selectedAge.slice(1).replace('-', ' ')} Age Group
            </p>
          </div>

          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Your Score: {getScorePercentage()}%</CardTitle>
              <CardDescription>
                {calculateScore()} out of {getCurrentQuestions().length * 3} total points
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <p className="text-lg leading-relaxed">{getResultSummary()}</p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium text-amber-800 mb-2">Important Disclaimer</p>
                    <p className="text-amber-700">
                      This tool is for educational purposes only and not a substitute for professional medical advice. 
                      For emergencies, call 000. If you have concerns about your child's development, please consult 
                      with a qualified health professional.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <Button onClick={resetQuiz} variant="outline">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Take Another Quiz
                </Button>
                <Button asChild>
                  <Link to="/learn">
                    <FileText className="w-4 h-4 mr-2" />
                    Watch Recommended Videos
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  if (currentQuiz) {
    const questions = getCurrentQuestions();
    
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {currentQuiz === 'adhd' ? 'ADHD' : 'Autism'} Screening Quiz
            </h1>
            <p className="text-muted-foreground mb-4">
              Age Group: {selectedAge.charAt(0).toUpperCase() + selectedAge.slice(1).replace('-', ' ')}
            </p>
            <Badge variant="secondary">
              {Object.keys(answers).length} of {questions.length} questions completed
            </Badge>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Please rate how often each behaviour occurs</CardTitle>
              <CardDescription>
                Think about your child's behaviour over the past 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {questions.map((question, index) => (
                <div key={question.id} className="space-y-3">
                  <p className="font-medium">
                    {index + 1}. {question.text}
                  </p>
                  <RadioGroup
                    value={answers[question.id] || ''}
                    onValueChange={(value) => 
                      setAnswers(prev => ({ ...prev, [question.id]: value as Answer }))
                    }
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {ANSWER_OPTIONS.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem 
                            value={option.value} 
                            id={`${question.id}-${option.value}`}
                          />
                          <Label 
                            htmlFor={`${question.id}-${option.value}`}
                            className="cursor-pointer"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              ))}

              <div className="flex justify-between items-center pt-6 border-t">
                <Button onClick={resetQuiz} variant="outline">
                  Cancel
                </Button>
                <Button 
                  onClick={handleSubmitQuiz}
                  disabled={!isQuizComplete()}
                >
                  View Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Neurodevelopmental Quizzes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These brief questionnaires can help you reflect on your child's development. 
            They are educational tools only and not diagnostic instruments.
          </p>
        </div>

        {/* Age Group Selection */}
        <Card>
          <CardHeader>
            <CardTitle>First, select your child's age group</CardTitle>
            <CardDescription>
              This will show age-appropriate questions for your child
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedAge} onValueChange={(value) => setSelectedAge(value as AgeGroup)}>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="preschool" id="preschool" />
                  <Label htmlFor="preschool" className="cursor-pointer flex-1">
                    <div>
                      <p className="font-medium">Preschool</p>
                      <p className="text-sm text-muted-foreground">Ages 3-5 years</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="school-age" id="school-age" />
                  <Label htmlFor="school-age" className="cursor-pointer flex-1">
                    <div>
                      <p className="font-medium">School Age</p>
                      <p className="text-sm text-muted-foreground">Ages 6-12 years</p>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-4 border rounded-lg">
                  <RadioGroupItem value="teens" id="teens" />
                  <Label htmlFor="teens" className="cursor-pointer flex-1">
                    <div>
                      <p className="font-medium">Teens</p>
                      <p className="text-sm text-muted-foreground">Ages 13-18 years</p>
                    </div>
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Quiz Selection */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentQuiz('adhd')}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <span>ADHD Screening Quiz</span>
              </CardTitle>
              <CardDescription>
                Attention Deficit Hyperactivity Disorder screening questions covering attention, 
                hyperactivity, and impulsivity traits.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {ADHD_QUESTIONS.filter(q => q.ageGroups.includes(selectedAge)).length} questions
                </span>
                <Button>Start Quiz</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setCurrentQuiz('autism')}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <span>Autism Screening Quiz</span>
              </CardTitle>
              <CardDescription>
                Autism Spectrum Disorder screening questions covering social communication, 
                behaviour patterns, and sensory differences.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {AUTISM_QUESTIONS.filter(q => q.ageGroups.includes(selectedAge)).length} questions
                </span>
                <Button>Start Quiz</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quiz History */}
        {quizHistory.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Previous Quiz Results</CardTitle>
              <CardDescription>
                View your past quiz results to track patterns over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quizHistory.slice(-5).reverse().map((result) => (
                  <div key={result.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">
                        {result.quizType.toUpperCase()} Quiz - {result.ageGroup.charAt(0).toUpperCase() + result.ageGroup.slice(1).replace('-', ' ')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(result.date).toLocaleDateString('en-AU')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {Math.round((result.score / (result.totalQuestions * 3)) * 100)}%
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {result.score}/{result.totalQuestions * 3}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Important Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-amber-800 mb-2">Important Information</h3>
              <p className="text-amber-700 mb-3">
                These screening tools are for educational purposes only and are not diagnostic instruments. 
                They cannot replace professional assessment by qualified health professionals.
              </p>
              <p className="text-amber-700 font-medium">
                This tool is for educational purposes only and not a substitute for professional medical advice. 
                For emergencies, call 000.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}