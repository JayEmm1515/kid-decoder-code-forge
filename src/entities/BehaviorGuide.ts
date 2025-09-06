export class BehaviorGuide {
  static async list(orderBy?: string) {
    // Comprehensive evidence-based behavior guides
    return [
      // 0-2 Age Group (Early Years)
      {
        id: '1',
        title: 'Separation Anxiety',
        slug: 'separation-anxiety',
        age_group: '0-2',
        summary: 'Helping babies and toddlers feel secure during separations',
        what_it_means: 'Separation anxiety shows that your child has formed a healthy attachment and understands you as their safe base. This developmental milestone typically emerges around 8-10 months as their brain develops awareness of object permanence.',
        what_it_conveys: 'Your child is saying "I love you and need you" - this is actually a positive sign of healthy development. They\'re expressing their deep connection to you and their understanding that you exist even when not visible.',
        parent_experience: 'You may feel guilty leaving them, worry about their distress, or question if you\'re doing the right thing. These feelings are completely normal and show your care for your child\'s wellbeing.',
        practical_strategies: 'Create predictable goodbye rituals, practice short separations, leave a comfort object, stay calm during transitions, and trust that consistent warm partings build resilience over time.'
      },
      {
        id: '2',
        title: 'Sleep Resistance',
        slug: 'sleep-resistance',
        age_group: '0-2',
        summary: 'Understanding and addressing bedtime battles in babies and toddlers',
        what_it_means: 'Sleep resistance often reflects your child\'s nervous system struggling to shift from alert to calm states. Their developing brain is learning the complex skill of self-regulation.',
        what_it_conveys: 'Your child may be communicating overwhelm, overtiredness, or a need for more connection and co-regulation before sleep.',
        parent_experience: 'You might feel exhausted, frustrated, or worried about doing something wrong. Sleep challenges can trigger our own childhood experiences and fears about rest.',
        practical_strategies: 'Establish consistent routines, watch for early sleep cues, create calm environments, offer your regulated presence, and remember that sleep skills develop gradually with patient repetition.'
      },
      {
        id: '3',
        title: 'Hitting and Aggression',
        slug: 'hitting-aggression-toddler',
        age_group: '0-2',
        summary: 'Responding to physical expressions of big emotions in toddlers',
        what_it_means: 'Hitting is your toddler\'s primitive way of expressing emotions they cannot yet verbalize. Their impulse control systems are still developing, making physical reactions their default response.',
        what_it_conveys: 'Your child is likely feeling overwhelmed, frustrated, or seeking connection through the only means they currently understand.',
        parent_experience: 'You may feel shocked, embarrassed, or worried about raising an aggressive child. These behaviors can trigger intense reactions in parents.',
        practical_strategies: 'Stay calm, gently stop the hitting, offer alternative expressions, name their emotions, provide comfort after boundaries, and model gentle touch consistently.'
      },

      // 3-5 Age Group (Preschool)
      {
        id: '4',
        title: 'Tantrums and Meltdowns',
        slug: 'tantrums-meltdowns',
        age_group: '3-5',
        summary: 'Understanding and responding to emotional outbursts in preschoolers',
        what_it_means: 'Tantrums occur when your child\'s emotional intensity exceeds their capacity to cope. Their developing prefrontal cortex cannot yet regulate the intense activation in their emotional brain centers.',
        what_it_conveys: 'Your child is communicating that they need help regulating their emotions and may be feeling scared, frustrated, overwhelmed, or powerless.',
        parent_experience: 'You might feel embarrassed, frustrated, helpless, or triggered by the intensity. Remember that your calm presence teaches emotional regulation more than any words.',
        practical_strategies: 'Stay present and calm, validate their feelings, avoid reasoning during the storm, offer comfort when they\'re ready, and teach coping strategies during calm moments.'
      },
      {
        id: '5',
        title: 'Defiance and Power Struggles',
        slug: 'defiance-power-struggles',
        age_group: '3-5',
        summary: 'Navigating the push for autonomy in preschoolers',
        what_it_means: 'Defiance is your child\'s developmental drive for autonomy meeting their need for safety and connection. They\'re learning about personal power while still needing guidance.',
        what_it_conveys: 'Your child is saying "I want to have some control" and "I\'m learning about my own will." This is healthy development, even when challenging.',
        parent_experience: 'You may feel challenged, frustrated, or worry about losing authority. This phase can trigger our own childhood experiences with power and control.',
        practical_strategies: 'Offer limited choices, pick your battles wisely, stay connected during conflicts, acknowledge their feelings, set clear boundaries with warmth, and celebrate cooperation.'
      },
      {
        id: '6',
        title: 'Fears and Phobias',
        slug: 'fears-phobias',
        age_group: '3-5',
        summary: 'Supporting children through developmental fears',
        what_it_means: 'Fears are normal as your child\'s imagination develops faster than their logical thinking. Their brain is designed to detect threats, sometimes creating fears of imaginary dangers.',
        what_it_conveys: 'Your child is communicating a need for safety, comfort, and reassurance as they navigate an increasingly complex understanding of the world.',
        parent_experience: 'You might feel the urge to dismiss fears as "silly" or become anxious yourself. Balancing validation with gentle reality-testing can feel challenging.',
        practical_strategies: 'Validate their feelings, avoid dismissing fears, gradually expose them to safe versions, create comfort rituals, read books about fears, and model calm responses.'
      },

      // 6-12 Age Group (School Age)
      {
        id: '7',
        title: 'School Refusal and Anxiety',
        slug: 'school-refusal-anxiety',
        age_group: '6-12',
        summary: 'Understanding and addressing reluctance to attend school',
        what_it_means: 'School refusal often reflects underlying anxiety, overwhelm, or unmet needs rather than simple avoidance. Your child\'s nervous system may be perceiving school as unsafe.',
        what_it_conveys: 'Your child is communicating distress about some aspect of school - social, academic, sensory, or emotional - and needs support to feel safe.',
        parent_experience: 'You may feel frustrated, worried about academics, or uncertain about how firm to be. The morning battles can be exhausting for the whole family.',
        practical_strategies: 'Explore underlying causes, collaborate with teachers, create gradual re-entry plans, teach anxiety management skills, maintain connection, and seek professional support if needed.'
      },
      {
        id: '8',
        title: 'Sibling Rivalry and Fighting',
        slug: 'sibling-rivalry-fighting',
        age_group: '6-12',
        summary: 'Managing conflicts and competition between siblings',
        what_it_means: 'Sibling conflicts reflect children\'s fundamental need to secure their place in the family and ensure their survival needs are met. Competition for parental attention is developmentally normal.',
        what_it_conveys: 'Your children are communicating their need for individual recognition, fairness, and assurance of their unique place in your heart.',
        parent_experience: 'You might feel torn between children, exhausted by constant refereeing, or worried about long-term relationships between siblings.',
        practical_strategies: 'Avoid comparisons, spend individual time with each child, teach conflict resolution skills, focus on underlying needs, stay out of minor disputes, and build family connection rituals.'
      },
      {
        id: '9',
        title: 'Perfectionism and Performance Anxiety',
        slug: 'perfectionism-performance-anxiety',
        age_group: '6-12',
        summary: 'Supporting children who struggle with high expectations',
        what_it_means: 'Perfectionism often develops as a strategy to maintain connection and approval. Your child\'s developing sense of self becomes tied to achievement rather than inherent worth.',
        what_it_conveys: 'Your child is communicating anxiety about acceptance and belonging, fearing that mistakes might threaten their relationships or safety.',
        parent_experience: 'You may feel proud of their high standards while also worried about their stress levels. Balancing encouragement with pressure can feel tricky.',
        practical_strategies: 'Model making mistakes gracefully, focus on effort over outcome, share your own struggles, create low-pressure activities, celebrate imperfection, and emphasize unconditional love.'
      },
      {
        id: '10',
        title: 'Lying and Dishonesty',
        slug: 'lying-dishonesty',
        age_group: '6-12',
        summary: 'Understanding why children lie and how to respond',
        what_it_means: 'Lying often reflects your child\'s attempt to avoid disappointing you, escape consequences, or protect something important to them. It\'s rarely about moral failing.',
        what_it_conveys: 'Your child may be communicating fear of your reaction, a desire to please you, or anxiety about the consequences of truth.',
        parent_experience: 'You might feel hurt, betrayed, or worried about their moral development. The discovery of lies can trigger feelings about trust and connection.',
        practical_strategies: 'Create safe spaces for truth-telling, focus on problem-solving rather than punishment, model honesty about your own mistakes, and address underlying fears that drive dishonesty.'
      },

      // 13-18 Age Group (Teens)
      {
        id: '11',
        title: 'Mood Swings and Emotional Intensity',
        slug: 'mood-swings-emotional-intensity',
        age_group: '13-18',
        summary: 'Understanding teenage emotional volatility and brain development',
        what_it_means: 'Mood swings reflect massive brain reconstruction during adolescence. The emotional centers develop faster than regulatory systems, creating temporary imbalance.',
        what_it_conveys: 'Your teen is communicating the overwhelm of navigating intense emotions with developing coping skills while facing increased social and academic pressures.',
        parent_experience: 'You may feel confused by the intensity, miss your "easier" child, or take their moods personally. The unpredictability can be emotionally exhausting.',
        practical_strategies: 'Stay regulated yourself, avoid taking moods personally, offer presence without fixing, teach emotional vocabulary, maintain routines, and validate their experience.'
      },
      {
        id: '12',
        title: 'Risk-Taking and Poor Decisions',
        slug: 'risk-taking-poor-decisions',
        age_group: '13-18',
        summary: 'Understanding adolescent decision-making and impulse control',
        what_it_means: 'Risk-taking reflects normal adolescent brain development where reward systems are hyperactive while impulse control systems are still maturing.',
        what_it_conveys: 'Your teen is communicating their developmental need for autonomy, peer acceptance, and novel experiences while their brain prioritizes immediate rewards.',
        parent_experience: 'You may feel terrified, frustrated, or powerless watching them make choices you wouldn\'t make. The urge to control can be overwhelming.',
        practical_strategies: 'Maintain connection over control, discuss consequences collaboratively, share your values without lecturing, create opportunities for appropriate risk-taking, and trust the relationship.'
      },
      {
        id: '13',
        title: 'Withdrawal and Communication Shutdown',
        slug: 'withdrawal-communication-shutdown',
        age_group: '13-18',
        summary: 'Reconnecting when teenagers pull away emotionally',
        what_it_means: 'Withdrawal is often your teen\'s attempt to individuate and develop their own identity while managing overwhelming emotions and social pressures.',
        what_it_conveys: 'Your teen may be communicating a need for space to process their experiences while still needing your steady, available presence.',
        parent_experience: 'You might feel rejected, worried, or desperate to reconnect. The silence can trigger fears about losing your relationship permanently.',
        practical_strategies: 'Respect their need for space while staying available, find new ways to connect, focus on being interesting rather than interested, maintain family rituals, and trust the foundation you\'ve built.'
      },
      {
        id: '14',
        title: 'Academic Struggles and Motivation Issues',
        slug: 'academic-struggles-motivation',
        age_group: '13-18',
        summary: 'Supporting teens through school challenges and loss of motivation',
        what_it_means: 'Academic struggles often reflect overwhelm, misaligned learning styles, mental health challenges, or the adolescent brain\'s focus on social rather than academic priorities.',
        what_it_conveys: 'Your teen may be communicating stress, perfectionism, learning differences, or competing priorities as their brain reorganizes around peer relationships.',
        parent_experience: 'You might feel anxious about their future, frustrated by their apparent lack of care, or uncertain about how much to intervene.',
        practical_strategies: 'Collaborate on solutions, address underlying stress, connect with teachers, explore learning supports, maintain perspective on long-term development, and separate their struggles from your worth as a parent.'
      },
      {
        id: '15',
        title: 'Peer Pressure and Social Drama',
        slug: 'peer-pressure-social-drama',
        age_group: '13-18',
        summary: 'Helping teens navigate complex social relationships',
        what_it_means: 'Social struggles reflect the adolescent brain\'s developmental priority on peer relationships and belonging, which temporarily override family connections and individual judgment.',
        what_it_conveys: 'Your teen is communicating their intense need for social acceptance and their struggle to balance authenticity with belonging.',
        parent_experience: 'You may feel helpless watching them get hurt, frustrated by their choices, or triggered by your own adolescent social memories.',
        practical_strategies: 'Listen without immediately problem-solving, share your own social struggles, discuss values during calm moments, help them identify true friends, and trust their ability to learn from experience.'
      }
    ];
  }

  static async filter(criteria: any) {
    const allGuides = await this.list();
    return allGuides.filter(guide => {
      if (criteria.age_group && guide.age_group !== criteria.age_group) return false;
      if (criteria.slug && guide.slug !== criteria.slug) return false;
      return true;
    });
  }

  static async create(data: any) {
    console.log('Creating behavior guide:', data);
    return { id: Date.now().toString(), ...data };
  }

  static async update(id: string, data: any) {
    console.log('Updating behavior guide:', id, data);
    return data;
  }

  static async delete(id: string) {
    console.log('Deleting behavior guide:', id);
    return true;
  }
}