export class BehaviorGuide {
  static async list(orderBy?: string) {
    const behaviorsData = [
      // 0-2 Years Behaviors
      {
        "behaviour": "Tantrums",
        "age_group": "0-2",
        "slug": "tantrums-0-2",
        "summary": "Intense emotional outbursts due to limited communication abilities",
        "meanings": [
          "Frustration from limited verbal expression",
          "Overstimulation or unmet physical needs",
          "Need for co-regulation and safety"
        ],
        "parent_experience": [
          "Feeling overwhelmed, unsure how to respond",
          "Fear of being judged in public or by family",
          "Frustration from repeated outbursts"
        ],
        "strategies": [
          "Use calm voice and stay close",
          "Validate feelings with simple words",
          "Redirect gently with touch or song"
        ],
        "red_flags": [
          "Tantrums lasting over 30 mins daily",
          "Physical harm to self or others",
          "Lack of response to comfort consistently"
        ]
      },
      {
        "behaviour": "Clinginess or separation anxiety",
        "age_group": "0-2",
        "slug": "clinginess-separation-anxiety-0-2",
        "summary": "Difficulty being apart from primary caregivers",
        "meanings": [
          "Developmental anxiety related to object permanence",
          "Need for secure base and safety",
          "Natural attachment behaviour"
        ],
        "parent_experience": [
          "Distress seeing child cry or cling",
          "Frustration from inability to leave or get things done",
          "Worry about creating 'dependency'"
        ],
        "strategies": [
          "Offer transitional object (e.g. toy, cloth)",
          "Use short goodbye rituals",
          "Stay calm during separations"
        ],
        "red_flags": [
          "Inconsolable distress at every separation",
          "Extreme avoidance of other caregivers",
          "Physical symptoms during separations"
        ]
      },
      {
        "behaviour": "Repetitive movements or self-stimulation",
        "age_group": "0-2",
        "slug": "repetitive-movements-0-2",
        "summary": "Repetitive behaviours that provide sensory input or comfort",
        "meanings": [
          "Self-soothing and regulation",
          "Sensory seeking behaviour",
          "Normal developmental exploration"
        ],
        "parent_experience": [
          "Worry about whether behaviour is normal",
          "Concern about child's development",
          "Uncertainty about when to intervene"
        ],
        "strategies": [
          "Provide alternative sensory activities",
          "Ensure child's other needs are met",
          "Observe triggers and patterns"
        ],
        "red_flags": [
          "Self-injurious repetitive behaviours",
          "Behaviours interfering with daily activities",
          "Loss of previously acquired skills"
        ]
      },
      {
        "behaviour": "Excessive crying or sadness",
        "age_group": "0-2",
        "slug": "excessive-crying-sadness-0-2",
        "summary": "Prolonged periods of crying or appearing sad",
        "meanings": [
          "Unmet physical or emotional needs",
          "Overstimulation or overwhelm",
          "Possible illness or discomfort"
        ],
        "parent_experience": [
          "Feeling helpless and exhausted",
          "Worry about child's wellbeing",
          "Self-doubt about parenting abilities"
        ],
        "strategies": [
          "Check for physical needs (hunger, sleep, comfort)",
          "Provide consistent, calm responses",
          "Create soothing environment"
        ],
        "red_flags": [
          "Crying for hours despite comfort attempts",
          "Loss of interest in play or interaction",
          "Changes in eating or sleeping patterns"
        ]
      },
      {
        "behaviour": "Regressing (baby talk, needing nappies, etc.)",
        "age_group": "0-2",
        "slug": "regressing-0-2",
        "summary": "Return to earlier developmental behaviours",
        "meanings": [
          "Response to stress or change",
          "Seeking comfort and attention",
          "Normal part of development"
        ],
        "parent_experience": [
          "Concern about child going backwards",
          "Frustration with lost progress",
          "Worry about underlying issues"
        ],
        "strategies": [
          "Provide extra comfort and reassurance",
          "Maintain consistent routines",
          "Address any sources of stress"
        ],
        "red_flags": [
          "Significant loss of multiple skills",
          "Regression lasting several weeks",
          "Accompanied by other concerning behaviours"
        ]
      },
      {
        "behaviour": "Sleep disturbances",
        "age_group": "0-2",
        "slug": "sleep-disturbances-0-2",
        "summary": "Difficulty falling asleep, staying asleep, or frequent night waking",
        "meanings": [
          "Normal developmental sleep patterns",
          "Separation anxiety at bedtime",
          "Overstimulation or routine disruption"
        ],
        "parent_experience": [
          "Exhaustion from interrupted sleep",
          "Worry about child's rest needs",
          "Frustration with bedtime battles"
        ],
        "strategies": [
          "Establish consistent bedtime routine",
          "Create calm, dark sleep environment",
          "Respond consistently to night waking"
        ],
        "red_flags": [
          "Extreme sleep resistance for weeks",
          "Night terrors or frequent nightmares",
          "Excessive daytime sleepiness"
        ]
      },
      {
        "behaviour": "Food refusal",
        "age_group": "0-2",
        "slug": "food-refusal-0-2",
        "summary": "Refusing to eat or being very selective with foods",
        "meanings": [
          "Normal developmental food preferences",
          "Sensory sensitivities",
          "Asserting independence"
        ],
        "parent_experience": [
          "Worry about child's nutrition",
          "Stress around mealtimes",
          "Feeling like a failure as a provider"
        ],
        "strategies": [
          "Offer variety without pressure",
          "Model positive eating behaviours",
          "Keep mealtimes relaxed and social"
        ],
        "red_flags": [
          "Significant weight loss",
          "Refusal of all foods from food groups",
          "Gagging or vomiting with food"
        ]
      },
      {
        "behaviour": "Fearfulness and phobias",
        "age_group": "0-2",
        "slug": "fearfulness-phobias-0-2",
        "summary": "Intense fear reactions to specific situations or objects",
        "meanings": [
          "Normal developmental fears",
          "Sensitivity to new experiences",
          "Response to overstimulation"
        ],
        "parent_experience": [
          "Heartbreak seeing child distressed",
          "Confusion about what triggered fear",
          "Temptation to avoid feared situations"
        ],
        "strategies": [
          "Provide comfort and reassurance",
          "Gradually expose to feared situations",
          "Stay calm during fear responses"
        ],
        "red_flags": [
          "Fears interfering with daily activities",
          "Extreme physical reactions to fear",
          "Multiple intense fears developing rapidly"
        ]
      },

      // 3-5 Years Behaviors
      {
        "behaviour": "Tantrums",
        "age_group": "3-5",
        "slug": "tantrums-3-5",
        "summary": "Intense emotional outbursts as children learn emotional regulation",
        "meanings": [
          "Boundary testing and emotional learning",
          "Lack of consistent routines or unmet needs",
          "Difficulty transitioning between tasks"
        ],
        "parent_experience": [
          "Feeling overwhelmed by intensity",
          "Embarrassment in public situations",
          "Uncertainty about discipline approach"
        ],
        "strategies": [
          "Name emotions and offer two choices",
          "Hold limits with empathy",
          "Use visual aids for transitions"
        ],
        "red_flags": [
          "Tantrums lasting over 45 minutes regularly",
          "Violence toward others during outbursts",
          "Multiple daily tantrums affecting family life"
        ]
      },
      {
        "behaviour": "Defiance and refusing instructions",
        "age_group": "3-5",
        "slug": "defiance-refusing-instructions-3-5",
        "summary": "Resistance to following directions as part of developing autonomy",
        "meanings": [
          "Boundary testing and autonomy seeking",
          "Emotional overload when feeling powerless",
          "Testing consistency of rules"
        ],
        "parent_experience": [
          "Feeling disrespected or challenged",
          "Worry about losing control",
          "Exhaustion from power struggles"
        ],
        "strategies": [
          "Offer choices within limits",
          "Use playful tone to increase cooperation",
          "Be consistent with expectations"
        ],
        "red_flags": [
          "Defiance leading to dangerous situations",
          "Complete refusal to follow any instructions",
          "Escalation to aggression when given limits"
        ]
      },
      {
        "behaviour": "Aggression (hitting, biting, throwing)",
        "age_group": "3-5",
        "slug": "aggression-3-5",
        "summary": "Physical expressions of frustration due to limited emotional vocabulary",
        "meanings": [
          "Immature social communication",
          "Mimicking aggressive play or lack of emotional vocabulary",
          "Overwhelming frustration or overstimulation"
        ],
        "parent_experience": [
          "Shock and embarrassment",
          "Fear of child hurting others",
          "Worry about child's social development"
        ],
        "strategies": [
          "Label what's not okay and show what is",
          "Use books or stories to teach alternatives",
          "Provide physical outlets for energy"
        ],
        "red_flags": [
          "Frequent aggression toward peers",
          "Use of objects as weapons",
          "Lack of remorse after hurting others"
        ]
      },
      {
        "behaviour": "Controlling or bossy behaviour",
        "age_group": "3-5",
        "slug": "controlling-bossy-behaviour-3-5",
        "summary": "Attempts to control situations and people as a way to feel secure",
        "meanings": [
          "Need for predictability and control",
          "Anxiety about uncertainty",
          "Imitating adult behaviours"
        ],
        "parent_experience": [
          "Frustration with child's demands",
          "Feeling manipulated",
          "Concern about social relationships"
        ],
        "strategies": [
          "Give child appropriate choices and control",
          "Set clear boundaries on bossiness",
          "Teach asking versus demanding"
        ],
        "red_flags": [
          "Extreme distress when not in control",
          "Inability to play cooperatively",
          "Aggressive reactions to losing control"
        ]
      },
      {
        "behaviour": "Hyperactivity and impulsiveness",
        "age_group": "3-5",
        "slug": "hyperactivity-impulsiveness-3-5",
        "summary": "High energy levels and difficulty with impulse control",
        "meanings": [
          "Normal developmental energy and curiosity",
          "Difficulty with self-regulation",
          "Possible attention or sensory needs"
        ],
        "parent_experience": [
          "Exhaustion from constant supervision",
          "Worry about child's safety",
          "Concerns about school readiness"
        ],
        "strategies": [
          "Provide structured physical outlets",
          "Use timers and visual cues",
          "Break tasks into smaller steps"
        ],
        "red_flags": [
          "Inability to sit for age-appropriate activities",
          "Frequent injuries from impulsive actions",
          "Significant interference with learning"
        ]
      },
      {
        "behaviour": "Clinginess or separation anxiety",
        "age_group": "3-5",
        "slug": "clinginess-separation-anxiety-3-5",
        "summary": "Difficulty separating from caregivers beyond typical developmental stage",
        "meanings": [
          "Fear of abandonment or change in routine",
          "Uncertainty about transitions or new environments",
          "Response to family stress or changes"
        ],
        "parent_experience": [
          "Guilt about leaving child distressed",
          "Frustration with limited independence",
          "Worry about preschool adjustment"
        ],
        "strategies": [
          "Prepare child ahead of time for separations",
          "Keep routines consistent and warm",
          "Practice short separations"
        ],
        "red_flags": [
          "Extreme distress lasting hours",
          "Refusal to engage with other caregivers",
          "Physical symptoms during separations"
        ]
      },
      {
        "behaviour": "Bedwetting or soiling",
        "age_group": "3-5",
        "slug": "bedwetting-soiling-3-5",
        "summary": "Toileting accidents beyond typical developmental expectations",
        "meanings": [
          "Developmental variation in readiness",
          "Response to stress or change",
          "Possible medical or emotional factors"
        ],
        "parent_experience": [
          "Frustration with regression",
          "Embarrassment about accidents",
          "Worry about underlying issues"
        ],
        "strategies": [
          "Stay calm and matter-of-fact",
          "Maintain consistent routines",
          "Consult healthcare provider if persistent"
        ],
        "red_flags": [
          "Sudden onset after being trained",
          "Pain or discomfort during toileting",
          "Intentional soiling or withholding"
        ]
      },
      {
        "behaviour": "Regressing (baby talk, needing nappies, etc.)",
        "age_group": "3-5",
        "slug": "regressing-3-5",
        "summary": "Return to earlier developmental behaviours",
        "meanings": [
          "Response to stress, change, or new sibling",
          "Seeking extra attention and care",
          "Normal temporary response to challenges"
        ],
        "parent_experience": [
          "Disappointment about lost progress",
          "Confusion about how to respond",
          "Worry about development"
        ],
        "strategies": [
          "Provide extra comfort without reinforcing regression",
          "Address underlying stressors",
          "Acknowledge child's feelings"
        ],
        "red_flags": [
          "Significant loss of multiple skills",
          "Regression lasting several months",
          "Accompanied by other concerning behaviours"
        ]
      },
      {
        "behaviour": "Excessive crying or sadness",
        "age_group": "3-5",
        "slug": "excessive-crying-sadness-3-5",
        "summary": "Frequent crying or persistent sad mood",
        "meanings": [
          "Emotional overwhelm or sensitivity",
          "Difficulty expressing needs verbally",
          "Response to environmental stressors"
        ],
        "parent_experience": [
          "Heartbreak seeing child distressed",
          "Frustration when comfort doesn't help",
          "Worry about child's emotional health"
        ],
        "strategies": [
          "Validate emotions while teaching coping",
          "Look for patterns and triggers",
          "Provide consistent emotional support"
        ],
        "red_flags": [
          "Persistent sadness lasting weeks",
          "Loss of interest in previously enjoyed activities",
          "Talk of self-harm or not wanting to live"
        ]
      },
      {
        "behaviour": "Sleep disturbances",
        "age_group": "3-5",
        "slug": "sleep-disturbances-3-5",
        "summary": "Difficulty with sleep routines, nightmares, or night fears",
        "meanings": [
          "Developmental fears and imagination",
          "Separation anxiety at bedtime",
          "Overstimulation or routine changes"
        ],
        "parent_experience": [
          "Exhaustion from disrupted nights",
          "Frustration with bedtime battles",
          "Worry about child's rest needs"
        ],
        "strategies": [
          "Establish calm bedtime routine",
          "Address fears with comfort and gradual exposure",
          "Ensure appropriate sleep environment"
        ],
        "red_flags": [
          "Night terrors or severe nightmares",
          "Extreme bedtime resistance for weeks",
          "Significant daytime tiredness affecting function"
        ]
      },
      {
        "behaviour": "Selective mutism or refusal to speak",
        "age_group": "3-5",
        "slug": "selective-mutism-3-5",
        "summary": "Speaking in some situations but not others",
        "meanings": [
          "Anxiety in certain social situations",
          "Shyness or temperamental sensitivity",
          "Possible speech or language concerns"
        ],
        "parent_experience": [
          "Confusion about inconsistent speaking",
          "Worry about social development",
          "Frustration when child won't speak to others"
        ],
        "strategies": [
          "Reduce pressure to speak",
          "Create comfortable social opportunities",
          "Consult speech-language pathologist if needed"
        ],
        "red_flags": [
          "Complete silence in multiple settings",
          "Regression from previous speaking",
          "Signs of distress when expected to speak"
        ]
      },
      {
        "behaviour": "Fearfulness and phobias",
        "age_group": "3-5",
        "slug": "fearfulness-phobias-3-5",
        "summary": "Intense fears that may interfere with daily activities",
        "meanings": [
          "Developing imagination and awareness of danger",
          "Sensitivity to new experiences",
          "Possible trauma or learned fears"
        ],
        "parent_experience": [
          "Distress seeing child frightened",
          "Frustration with irrational fears",
          "Uncertainty about exposure versus protection"
        ],
        "strategies": [
          "Validate fears while gently challenging them",
          "Use gradual exposure and positive experiences",
          "Provide coping strategies and comfort items"
        ],
        "red_flags": [
          "Fears severely limiting daily activities",
          "Physical symptoms with fear (vomiting, panic)",
          "Multiple intense fears developing rapidly"
        ]
      },

      // 6-12 Years Behaviors
      {
        "behaviour": "Withdrawing or isolating",
        "age_group": "6-12",
        "slug": "withdrawing-isolating-6-12",
        "summary": "Pulling away from family and social interactions",
        "meanings": [
          "Avoidance of peer rejection or bullying",
          "Masking sadness or emotional distress",
          "Need for alone time to process experiences"
        ],
        "parent_experience": [
          "Worry about child's emotional wellbeing",
          "Confusion about whether to intervene or give space",
          "Sadness about lost connection"
        ],
        "strategies": [
          "Open the door with: 'I've noticed you've been quiet lately.'",
          "Offer connection through shared interests",
          "Respect need for space while staying available"
        ],
        "red_flags": [
          "Complete refusal to engage with family",
          "Withdrawal from all activities and friendships",
          "Expression of hopelessness or worthlessness"
        ]
      },
      {
        "behaviour": "Defiance and refusing instructions",
        "age_group": "6-12",
        "slug": "defiance-refusing-instructions-6-12",
        "summary": "Challenging authority and refusing to comply with rules",
        "meanings": [
          "Challenging perceived unfairness or lack of control",
          "Reacting to inconsistency or harsh discipline",
          "Testing independence and boundaries"
        ],
        "parent_experience": [
          "Feeling disrespected and challenged",
          "Worry about future behaviour problems",
          "Exhaustion from constant battles"
        ],
        "strategies": [
          "Discuss reasons behind rules collaboratively",
          "Validate frustration but hold expectations",
          "Involve child in creating family rules"
        ],
        "red_flags": [
          "Defiance leading to dangerous situations",
          "Problems at school and home consistently",
          "Escalation to aggression or destructive behaviour"
        ]
      },
      {
        "behaviour": "Aggression (hitting, biting, throwing)",
        "age_group": "6-12",
        "slug": "aggression-6-12",
        "summary": "Physical expressions of anger or frustration",
        "meanings": [
          "Inability to express anger safely",
          "Reactivity to perceived threat or rejection",
          "Learned behaviour or trauma response"
        ],
        "parent_experience": [
          "Fear of child hurting others",
          "Embarrassment about child's behaviour",
          "Worry about underlying emotional issues"
        ],
        "strategies": [
          "Teach emotional vocabulary and physical outlets",
          "Create calm-down spaces at home or school",
          "Model appropriate anger expression"
        ],
        "red_flags": [
          "Planned or premeditated aggression",
          "Use of weapons or dangerous objects",
          "Lack of remorse or empathy after incidents"
        ]
      },
      {
        "behaviour": "Lying or fabrication",
        "age_group": "6-12",
        "slug": "lying-fabrication-6-12",
        "summary": "Telling untruths to avoid consequences or gain attention",
        "meanings": [
          "Avoiding punishment or disappointment",
          "Seeking attention or status",
          "Testing boundaries or protecting others"
        ],
        "parent_experience": [
          "Feeling betrayed and disappointed",
          "Uncertainty about what to believe",
          "Worry about child's moral development"
        ],
        "strategies": [
          "Stay calm and focus on truth-telling",
          "Reduce situations that tempt lying",
          "Praise honesty even when it reveals mistakes"
        ],
        "red_flags": [
          "Elaborate lies that harm others",
          "Inability to distinguish truth from lies",
          "Lying about serious safety issues"
        ]
      },
      {
        "behaviour": "Stealing or taking without permission",
        "age_group": "6-12",
        "slug": "stealing-taking-without-permission-6-12",
        "summary": "Taking items that belong to others",
        "meanings": [
          "Impulsive desire for items",
          "Testing boundaries and rules",
          "Possible unmet needs or peer pressure"
        ],
        "parent_experience": [
          "Shock and disappointment",
          "Embarrassment when returning items",
          "Worry about moral development"
        ],
        "strategies": [
          "Address the behaviour calmly but seriously",
          "Ensure child returns or replaces items",
          "Discuss feelings and needs behind stealing"
        ],
        "red_flags": [
          "Repeated stealing despite consequences",
          "Stealing valuable or dangerous items",
          "No remorse or understanding of impact"
        ]
      },
      {
        "behaviour": "Bullying others or mean behaviour",
        "age_group": "6-12",
        "slug": "bullying-mean-behaviour-6-12",
        "summary": "Deliberately hurting others physically or emotionally",
        "meanings": [
          "Feeling powerless in other areas of life",
          "Learned behaviour or lack of empathy",
          "Response to being bullied themselves"
        ],
        "parent_experience": [
          "Shock and shame about child's behaviour",
          "Worry about child's character",
          "Stress about relationships with other families"
        ],
        "strategies": [
          "Address behaviour immediately and clearly",
          "Teach empathy and perspective-taking",
          "Monitor social interactions closely"
        ],
        "red_flags": [
          "Systematic targeting of vulnerable peers",
          "Enjoyment or pride in hurting others",
          "Escalation to serious physical harm"
        ]
      },
      {
        "behaviour": "People-pleasing or perfectionism",
        "age_group": "6-12",
        "slug": "people-pleasing-perfectionism-6-12",
        "summary": "Excessive concern with meeting others' expectations",
        "meanings": [
          "Fear of disappointing others",
          "Low self-esteem or anxiety",
          "Learned pattern of gaining approval"
        ],
        "parent_experience": [
          "Worry about child's stress levels",
          "Confusion about seemingly 'good' behaviour",
          "Concern about child's authentic self-expression"
        ],
        "strategies": [
          "Emphasise effort over outcomes",
          "Model making mistakes and learning",
          "Encourage child's own preferences and opinions"
        ],
        "red_flags": [
          "Extreme distress over minor mistakes",
          "Avoidance of new activities due to fear of failure",
          "Physical symptoms from stress and pressure"
        ]
      },
      {
        "behaviour": "Avoidance of school or tasks",
        "age_group": "6-12",
        "slug": "avoidance-school-tasks-6-12",
        "summary": "Reluctance to attend school or complete required activities",
        "meanings": [
          "Academic struggles or learning difficulties",
          "Social anxiety or peer problems",
          "Overwhelming expectations or perfectionism"
        ],
        "parent_experience": [
          "Frustration with morning battles",
          "Worry about child's education",
          "Stress about school relationships"
        ],
        "strategies": [
          "Identify underlying causes of avoidance",
          "Work with school to address concerns",
          "Break tasks into manageable steps"
        ],
        "red_flags": [
          "Complete school refusal lasting days",
          "Physical symptoms before school",
          "Significant academic decline"
        ]
      },
      {
        "behaviour": "Emotional shutdown or numbing",
        "age_group": "6-12",
        "slug": "emotional-shutdown-numbing-6-12",
        "summary": "Appearing emotionally disconnected or unresponsive",
        "meanings": [
          "Protective response to overwhelming emotions",
          "Depression or trauma response",
          "Learned coping mechanism"
        ],
        "parent_experience": [
          "Worry about child's emotional health",
          "Feeling unable to connect with child",
          "Sadness about child's apparent numbness"
        ],
        "strategies": [
          "Provide consistent, patient support",
          "Avoid forcing emotional expression",
          "Consider professional help if persistent"
        ],
        "red_flags": [
          "Complete lack of emotional response",
          "Loss of interest in all activities",
          "Talk of feeling empty or nothing mattering"
        ]
      },
      {
        "behaviour": "Food refusal or bingeing",
        "age_group": "6-12",
        "slug": "food-refusal-bingeing-6-12",
        "summary": "Extreme eating patterns of restriction or overeating",
        "meanings": [
          "Emotional regulation through food",
          "Control issues or anxiety",
          "Body image concerns or peer influence"
        ],
        "parent_experience": [
          "Worry about child's physical health",
          "Stress around mealtimes",
          "Confusion about how to help"
        ],
        "strategies": [
          "Focus on health rather than weight",
          "Create positive mealtime environments",
          "Address underlying emotional needs"
        ],
        "red_flags": [
          "Significant weight changes",
          "Secretive eating behaviours",
          "Extreme distress around food or body image"
        ]
      },
      {
        "behaviour": "Bedwetting or soiling (persistent)",
        "age_group": "6-12",
        "slug": "bedwetting-soiling-persistent-6-12",
        "summary": "Continued toileting accidents beyond typical developmental age",
        "meanings": [
          "Medical issues or developmental delays",
          "Emotional stress or trauma response",
          "Sleep or attention difficulties"
        ],
        "parent_experience": [
          "Concern about underlying medical issues",
          "Frustration with ongoing accidents",
          "Worry about child's social impact"
        ],
        "strategies": [
          "Consult healthcare provider for evaluation",
          "Maintain matter-of-fact response",
          "Support child's self-esteem"
        ],
        "red_flags": [
          "Sudden onset of toileting problems",
          "Pain or discomfort during toileting",
          "Signs of urinary tract infections"
        ]
      },
      {
        "behaviour": "Obsessive rituals or rigidity",
        "age_group": "6-12",
        "slug": "obsessive-rituals-rigidity-6-12",
        "summary": "Repetitive behaviours or extreme need for sameness",
        "meanings": [
          "Anxiety management through control",
          "Neurodevelopmental differences",
          "Response to stress or uncertainty"
        ],
        "parent_experience": [
          "Frustration with rigid routines",
          "Worry about child's flexibility",
          "Stress when routines are disrupted"
        ],
        "strategies": [
          "Gradually introduce small changes",
          "Help child understand anxiety connection",
          "Provide predictability where possible"
        ],
        "red_flags": [
          "Rituals interfering with daily functioning",
          "Extreme distress when rituals interrupted",
          "Increasing number or complexity of rituals"
        ]
      },
      {
        "behaviour": "Frequent apologies or shame-based language",
        "age_group": "6-12",
        "slug": "frequent-apologies-shame-language-6-12",
        "summary": "Excessive apologising and negative self-talk",
        "meanings": [
          "Low self-esteem or perfectionism",
          "Fear of disappointing others",
          "Learned response to criticism"
        ],
        "parent_experience": [
          "Heartbreak hearing child's self-criticism",
          "Confusion about source of shame",
          "Desire to boost child's confidence"
        ],
        "strategies": [
          "Model self-compassion and mistake-making",
          "Challenge negative self-talk gently",
          "Praise effort and learning over perfection"
        ],
        "red_flags": [
          "Extreme self-criticism or self-hate",
          "Apologising for normal childhood behaviour",
          "Talk of being worthless or bad"
        ]
      },
      {
        "behaviour": "Refusal to bathe or poor hygiene",
        "age_group": "6-12",
        "slug": "refusal-bathe-poor-hygiene-6-12",
        "summary": "Resistance to personal care and cleanliness",
        "meanings": [
          "Sensory sensitivities or discomfort",
          "Asserting independence inappropriately",
          "Depression or emotional difficulties"
        ],
        "parent_experience": [
          "Embarrassment about child's appearance",
          "Frustration with daily battles",
          "Worry about social consequences"
        ],
        "strategies": [
          "Identify barriers to hygiene (sensory, time, etc.)",
          "Create manageable routines",
          "Address underlying emotional issues"
        ],
        "red_flags": [
          "Complete refusal despite health risks",
          "Social isolation due to hygiene",
          "Regression from previous hygiene habits"
        ]
      },
      {
        "behaviour": "Excessive screen use or fixation",
        "age_group": "6-12",
        "slug": "excessive-screen-use-fixation-6-12",
        "summary": "Problematic relationship with digital devices and content",
        "meanings": [
          "Escape from difficult emotions or situations",
          "Difficulty with self-regulation",
          "Social connection through online activities"
        ],
        "parent_experience": [
          "Frustration with screen time battles",
          "Worry about developmental impact",
          "Stress about monitoring and limits"
        ],
        "strategies": [
          "Set clear, consistent screen time limits",
          "Provide engaging alternative activities",
          "Model healthy screen use"
        ],
        "red_flags": [
          "Extreme reactions when screens removed",
          "Neglecting basic needs for screen time",
          "Decline in academic or social functioning"
        ]
      },

      // 12-18 Years Behaviors
      {
        "behaviour": "Withdrawing or isolating",
        "age_group": "12-18",
        "slug": "withdrawing-isolating-12-18",
        "summary": "Pulling away from family and social connections",
        "meanings": [
          "Withdrawing due to depression or social anxiety",
          "Avoidance linked to fear of judgement or rejection",
          "Normal developmental need for independence"
        ],
        "parent_experience": [
          "Sadness about lost closeness",
          "Worry about teen's mental health",
          "Uncertainty about when to intervene"
        ],
        "strategies": [
          "Respect space but check in non-judgementally",
          "Use low-pressure options like texting or walking side-by-side",
          "Stay available without forcing connection"
        ],
        "red_flags": [
          "Complete isolation lasting weeks",
          "Loss of all friendships and activities",
          "Expression of hopelessness or suicidal thoughts"
        ]
      },
      {
        "behaviour": "Defiance and refusing instructions",
        "age_group": "12-18",
        "slug": "defiance-refusing-instructions-12-18",
        "summary": "Challenging authority as part of identity development",
        "meanings": [
          "Pushing against perceived control or injustice",
          "Asserting independence and rejecting hierarchy",
          "Testing family values and boundaries"
        ],
        "parent_experience": [
          "Feeling disrespected and powerless",
          "Fear about teen's future choices",
          "Grief over changing relationship"
        ],
        "strategies": [
          "Negotiate shared expectations openly",
          "Avoid punitive reactions—focus on mutual respect",
          "Pick battles carefully and explain reasoning"
        ],
        "red_flags": [
          "Defiance putting teen in serious danger",
          "Complete breakdown of family relationships",
          "Criminal behaviour or legal consequences"
        ]
      },
      {
        "behaviour": "Aggression (verbal or physical)",
        "age_group": "12-18",
        "slug": "aggression-verbal-physical-12-18",
        "summary": "Hostile behaviour toward family members or others",
        "meanings": [
          "Intense emotional pain expressed physically",
          "Poor impulse control or trauma reactivity",
          "Feeling powerless or misunderstood"
        ],
        "parent_experience": [
          "Fear and hurt from teen's behaviour",
          "Feeling like a failure as a parent",
          "Uncertainty about safety at home"
        ],
        "strategies": [
          "Help teen recognise escalation signals",
          "Model anger management techniques yourself",
          "Set clear consequences for aggressive behaviour"
        ],
        "red_flags": [
          "Threats of serious violence",
          "Use of weapons or causing injury",
          "Aggression toward vulnerable family members"
        ]
      },
      {
        "behaviour": "Risk-taking or thrill-seeking",
        "age_group": "12-18",
        "slug": "risk-taking-thrill-seeking-12-18",
        "summary": "Engaging in dangerous activities for excitement",
        "meanings": [
          "Normal adolescent brain development and sensation-seeking",
          "Coping with emotional pain or numbness",
          "Peer influence and social status seeking"
        ],
        "parent_experience": [
          "Constant worry about teen's safety",
          "Feeling helpless to control behaviour",
          "Fear of serious consequences"
        ],
        "strategies": [
          "Discuss risks without lecturing",
          "Provide safe alternatives for excitement",
          "Stay connected despite concerning behaviour"
        ],
        "red_flags": [
          "Life-threatening risk-taking",
          "Progression to more dangerous behaviours",
          "Risk-taking combined with substance use"
        ]
      },
      {
        "behaviour": "Lying or fabrication",
        "age_group": "12-18",
        "slug": "lying-fabrication-12-18",
        "summary": "Deception to maintain independence or avoid consequences",
        "meanings": [
          "Protecting privacy and independence",
          "Avoiding punishment or disappointment",
          "Possible involvement in risky behaviour"
        ],
        "parent_experience": [
          "Feeling betrayed and unable to trust",
          "Worry about what teen is hiding",
          "Sadness about relationship breakdown"
        ],
        "strategies": [
          "Focus on safety rather than control",
          "Discuss the importance of trust in relationships",
          "Create opportunities for honest communication"
        ],
        "red_flags": [
          "Lies about dangerous activities",
          "Elaborate deception involving others",
          "Lying about mental health or self-harm"
        ]
      },
      {
        "behaviour": "Stealing or taking without permission",
        "age_group": "12-18",
        "slug": "stealing-taking-without-permission-12-18",
        "summary": "Taking items or money that doesn't belong to them",
        "meanings": [
          "Financial needs for social activities",
          "Peer pressure or group behaviour",
          "Testing boundaries or seeking attention"
        ],
        "parent_experience": [
          "Shock and disappointment",
          "Worry about teen's moral compass",
          "Fear of legal consequences"
        ],
        "strategies": [
          "Address behaviour seriously with natural consequences",
          "Explore underlying needs or pressures",
          "Discuss legal and social implications"
        ],
        "red_flags": [
          "Stealing to support substance use",
          "Involvement in organised theft",
          "No remorse or understanding of impact"
        ]
      },
      {
        "behaviour": "Bullying others or mean behaviour",
        "age_group": "12-18",
        "slug": "bullying-mean-behaviour-12-18",
        "summary": "Deliberately hurting others through various means",
        "meanings": [
          "Feeling powerless in other relationships",
          "Learned behaviour or group dynamics",
          "Response to being victimised themselves"
        ],
        "parent_experience": [
          "Shame about teen's character",
          "Worry about empathy development",
          "Stress about community relationships"
        ],
        "strategies": [
          "Address behaviour immediately and clearly",
          "Explore underlying pain or insecurity",
          "Require meaningful amends to victims"
        ],
        "red_flags": [
          "Systematic targeting and harassment",
          "Use of social media for cyberbullying",
          "Enjoyment or pride in causing harm"
        ]
      },
      {
        "behaviour": "People-pleasing or perfectionism",
        "age_group": "12-18",
        "slug": "people-pleasing-perfectionism-12-18",
        "summary": "Excessive need to meet others' expectations",
        "meanings": [
          "Academic or social pressure",
          "Low self-esteem masked by achievement",
          "Fear of failure or disappointment"
        ],
        "parent_experience": [
          "Worry about teen's stress and mental health",
          "Pride mixed with concern about achievements",
          "Guilt about contributing to pressure"
        ],
        "strategies": [
          "Model work-life balance and self-care",
          "Discuss realistic expectations and failure as learning",
          "Encourage authentic self-expression"
        ],
        "red_flags": [
          "Panic attacks or physical symptoms from stress",
          "Self-harm related to perfectionism",
          "Complete breakdown when facing imperfection"
        ]
      },
      {
        "behaviour": "Avoidance of school or tasks",
        "age_group": "12-18",
        "slug": "avoidance-school-tasks-12-18",
        "summary": "Refusal to attend school or complete responsibilities",
        "meanings": [
          "Academic overwhelm or learning difficulties",
          "Social anxiety or peer problems",
          "Depression or mental health challenges"
        ],
        "parent_experience": [
          "Frustration with teen's lack of motivation",
          "Worry about future opportunities",
          "Stress about legal requirements for attendance"
        ],
        "strategies": [
          "Identify barriers to school attendance",
          "Work with school counsellors and teachers",
          "Address underlying mental health needs"
        ],
        "red_flags": [
          "Complete school refusal for weeks",
          "Talk of dropping out or giving up",
          "Avoidance of all responsibilities"
        ]
      },
      {
        "behaviour": "Emotional shutdown or numbing",
        "age_group": "12-18",
        "slug": "emotional-shutdown-numbing-12-18",
        "summary": "Appearing emotionally disconnected or unresponsive",
        "meanings": [
          "Protection from overwhelming emotions",
          "Depression or trauma response",
          "Response to chronic stress or pressure"
        ],
        "parent_experience": [
          "Sadness about inability to connect",
          "Worry about teen's emotional health",
          "Feeling helpless to reach them"
        ],
        "strategies": [
          "Provide consistent support without pressure",
          "Consider professional mental health support",
          "Validate that numbness is a form of pain"
        ],
        "red_flags": [
          "Complete emotional flatness for weeks",
          "Talk of feeling dead inside",
          "Loss of all interests and relationships"
        ]
      },
      {
        "behaviour": "Sensation seeking or self-harm",
        "age_group": "12-18",
        "slug": "sensation-seeking-self-harm-12-18",
        "summary": "Deliberately causing physical harm to oneself",
        "meanings": [
          "Coping mechanism for emotional pain",
          "Feeling of control when life feels chaotic",
          "Way to feel something when emotionally numb"
        ],
        "parent_experience": [
          "Terror and heartbreak discovering self-harm",
          "Guilt about not noticing sooner",
          "Desperation to help but uncertainty how"
        ],
        "strategies": [
          "Stay calm and avoid shaming language",
          "Seek immediate professional help",
          "Focus on underlying emotional needs"
        ],
        "red_flags": [
          "Escalating severity of self-harm",
          "Multiple methods of self-injury",
          "Talk of suicide or wanting to die"
        ]
      },
      {
        "behaviour": "Inappropriate sexualised behaviour",
        "age_group": "12-18",
        "slug": "inappropriate-sexualised-behaviour-12-18",
        "summary": "Sexual behaviour that's concerning for developmental stage",
        "meanings": [
          "Exposure to inappropriate sexual content",
          "Possible history of sexual abuse",
          "Lack of appropriate boundaries education"
        ],
        "parent_experience": [
          "Shock and confusion about behaviour",
          "Worry about teen's safety and judgment",
          "Uncertainty about how to address"
        ],
        "strategies": [
          "Address behaviour calmly but clearly",
          "Provide appropriate sex education",
          "Consider professional assessment if concerning"
        ],
        "red_flags": [
          "Sexual behaviour toward younger children",
          "Compulsive or risky sexual behaviour",
          "Signs of possible sexual abuse"
        ]
      },
      {
        "behaviour": "Over-compliance or adultification",
        "age_group": "12-18",
        "slug": "over-compliance-adultification-12-18",
        "summary": "Taking on excessive responsibilities or being overly compliant",
        "meanings": [
          "Family role as caretaker or peace-keeper",
          "Response to family stress or dysfunction",
          "Fear of conflict or disappointing others"
        ],
        "parent_experience": [
          "Appreciation mixed with concern",
          "Guilt about teen's lost childhood",
          "Worry about teen's own needs being met"
        ],
        "strategies": [
          "Encourage age-appropriate responsibilities",
          "Address family dynamics that create pressure",
          "Support teen's own interests and needs"
        ],
        "red_flags": [
          "Complete sacrifice of teen's own needs",
          "Anxiety when not caring for others",
          "Loss of peer relationships due to responsibilities"
        ]
      },
      {
        "behaviour": "Manipulation or triangulation",
        "age_group": "12-18",
        "slug": "manipulation-triangulation-12-18",
        "summary": "Using others to meet needs or avoid consequences",
        "meanings": [
          "Learned strategy for getting needs met",
          "Fear of direct confrontation or rejection",
          "Possible response to family dynamics"
        ],
        "parent_experience": [
          "Feeling manipulated and used",
          "Confusion about teen's motivations",
          "Stress in family or social relationships"
        ],
        "strategies": [
          "Address behaviour directly and calmly",
          "Model direct, honest communication",
          "Set clear boundaries and consequences"
        ],
        "red_flags": [
          "Systematic manipulation causing harm",
          "Inability to form genuine relationships",
          "Lack of empathy for impact on others"
        ]
      },
      {
        "behaviour": "Obsessive rituals or rigidity",
        "age_group": "12-18",
        "slug": "obsessive-rituals-rigidity-12-18",
        "summary": "Repetitive behaviours or extreme need for control",
        "meanings": [
          "Anxiety management through control",
          "Response to feeling overwhelmed",
          "Possible obsessive-compulsive patterns"
        ],
        "parent_experience": [
          "Frustration with inflexibility",
          "Worry about teen's mental health",
          "Stress when routines are disrupted"
        ],
        "strategies": [
          "Understand rituals as anxiety management",
          "Gradually encourage flexibility",
          "Consider professional help if severe"
        ],
        "red_flags": [
          "Rituals severely interfering with life",
          "Extreme distress when rituals prevented",
          "Increasing complexity or time spent on rituals"
        ]
      },
      {
        "behaviour": "Frequent apologies or shame-based language",
        "age_group": "12-18",
        "slug": "frequent-apologies-shame-language-12-18",
        "summary": "Excessive self-criticism and apologising",
        "meanings": [
          "Low self-esteem or depression",
          "Perfectionism and fear of failure",
          "Learned response to criticism"
        ],
        "parent_experience": [
          "Heartbreak hearing teen's self-hatred",
          "Confusion about source of shame",
          "Urgency to build teen's confidence"
        ],
        "strategies": [
          "Challenge negative self-talk gently",
          "Model self-compassion",
          "Focus on teen's strengths and growth"
        ],
        "red_flags": [
          "Talk of self-hatred or worthlessness",
          "Apologising for existing or taking space",
          "Shame interfering with relationships"
        ]
      },
      {
        "behaviour": "Refusal to bathe or poor hygiene",
        "age_group": "12-18",
        "slug": "refusal-bathe-poor-hygiene-12-18",
        "summary": "Neglecting personal care and cleanliness",
        "meanings": [
          "Depression or lack of energy",
          "Body image issues or shame",
          "Rebellion against expectations"
        ],
        "parent_experience": [
          "Embarrassment about teen's appearance",
          "Worry about social consequences",
          "Frustration with daily battles"
        ],
        "strategies": [
          "Address underlying emotional issues",
          "Respect privacy while setting basic expectations",
          "Consider depression screening if persistent"
        ],
        "red_flags": [
          "Complete neglect of hygiene for weeks",
          "Social isolation due to hygiene",
          "Signs of depression or self-neglect"
        ]
      },
      {
        "behaviour": "Excessive screen use or fixation",
        "age_group": "12-18",
        "slug": "excessive-screen-use-fixation-12-18",
        "summary": "Problematic relationship with digital devices and content",
        "meanings": [
          "Escape from depression, anxiety, or social problems",
          "Social connection through online communities",
          "Difficulty with self-regulation and dopamine seeking"
        ],
        "parent_experience": [
          "Frustration with screen time battles",
          "Worry about real-world social development",
          "Feeling powerless to control teen's choices"
        ],
        "strategies": [
          "Discuss healthy digital habits collaboratively",
          "Model balanced screen use",
          "Address underlying issues driving excessive use"
        ],
        "red_flags": [
          "Complete neglect of responsibilities for screens",
          "Aggressive reactions when access limited",
          "Loss of all offline relationships and activities"
        ]
      }
    ];

    // Transform data for UI consumption
    return behaviorsData.map(behavior => ({
      id: behavior.slug,
      title: behavior.behaviour,
      slug: behavior.slug,
      age_group: behavior.age_group,
      summary: behavior.summary,
      meanings: behavior.meanings,
      parent_experience: behavior.parent_experience,
      strategies: behavior.strategies,
      red_flags: behavior.red_flags
    }));
  }

  static async filter(criteria: any) {
    const allBehaviors = await this.list();
    
    if (criteria.age_group) {
      return allBehaviors.filter(behavior => behavior.age_group === criteria.age_group);
    }
    
    if (criteria.slug) {
      return allBehaviors.filter(behavior => behavior.slug === criteria.slug);
    }
    
    return allBehaviors;
  }

  static async create(data: any) {
    // Simulate creating a new behavior guide
    return { id: Date.now().toString(), ...data };
  }

  static async update(id: string, data: any) {
    // Simulate updating a behavior guide
    return { id, ...data };
  }

  static async delete(id: string) {
    // Simulate deleting a behavior guide
    return { success: true };
  }
}