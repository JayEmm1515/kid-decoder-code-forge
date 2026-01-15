export const createPageUrl = (pageName: string) => {
  // Convert page names to URL paths
  const pageRoutes: Record<string, string> = {
    'Dashboard': '/',
    'Children': '/children',
    'ParentingChat': '/parenting-chat',
    'Tracking': '/tracking',
    'ChainAnalysis': '/chain-analysis',
    'UnderstandingBehaviour': '/understanding-behaviour',
    'BehaviourList': '/behaviourlist',
    'BehaviourDetail': '/behaviourdetail',
    'EarlyYears': '/early-years',
    'Preschool': '/preschool',
    'SchoolAge': '/school-age',
    'Teens': '/teens',
    'BeingWithExercise': '/being-with-exercise',
    'BeingWith': '/being-with-exercise',
    'EmotionalBlueprint': '/emotional-blueprint',
    'Neurodivergence': '/neurodivergence',
    'BoundaryBarriers': '/boundary-barriers',
    'BehaviourGuides': '/behaviour-guides',
  };

  return pageRoutes[pageName] || `/${pageName.toLowerCase()}`;
};