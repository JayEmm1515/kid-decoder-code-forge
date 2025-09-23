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
          "Co-regulation first: Stay calm and present - your nervous system regulates theirs (Siegel). Breathe deeply, lower your voice, and get down to their eye level.",
          "Provide the 'secure base' (Bowlby): Offer comfort through gentle touch, holding, or simply staying nearby. Your presence communicates safety during overwhelm.",
          "Address underlying needs: Check for hunger, tiredness, overstimulation, or need for connection. Tantrums often signal unmet physical or emotional needs."
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
          "Honor the attachment need: Separation anxiety reflects healthy attachment bonds (Bowlby). Validate: 'You want to stay close to me. That shows how much you love me.'",
          "Create bridging rituals: Use photos, special objects, or recordings of your voice to maintain connection during separations (Circle of Security approach).",
          "Practice graduated separations: Start with very brief separations in familiar environments, gradually building tolerance for longer periods."
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
          "Understand as self-regulation: These behaviors often serve important nervous system regulation functions (Narvaez). They're adaptive, not problematic.",
          "Provide rich sensory environment: Offer various textures, sounds, and movement opportunities that can meet their sensory needs in healthy ways.",
          "Support rather than stop: Unless harmful, allow these behaviors while offering alternatives. 'I see you need to move your body. Here's a soft brush to try.'"
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
          "Systematic needs assessment: Rule out physical causes first - hunger, gas, illness, overstimulation. Address these before assuming emotional causes.",
          "Provide consistent co-regulation: Your calm, patient presence helps regulate their overwhelmed nervous system (Siegel's interpersonal neurobiology).",
          "Create optimal environment: Dim lights, reduce noise, ensure comfortable temperature. The evolved developmental niche includes environmental sensitivity (Narvaez)."
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
          "Normalize developmental non-linearity: Development isn't linear - regression during stress is adaptive and protective (Maté's understanding of stress responses).",
          "Increase attachment security: Offer extra physical closeness, extended bedtime routines, more patient responses to needs. Regression signals need for security.",
          "Address environmental stressors: Identify and minimize sources of stress like changes in routine, family tension, or new environments."
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
          "Establish circadian rhythm support: Consistent bedtime routines help regulate their internal clock. Include dim lighting, quiet activities, and predictable sequences.",
          "Address separation anxiety at bedtime: Stay calm and patient during bedtime resistance. Their need for closeness at night reflects healthy attachment (Circle of Security principles).",
          "Support nervous system regulation: Avoid overstimulation before bed. Create calm, quiet environments that support parasympathetic activation for sleep."
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
          "Trust their internal wisdom: Children have innate ability to self-regulate food intake when not pressured. Provide variety and trust their appetite cues (Narvaez's evolved developmental niche).",
          "Examine feeding relationship: Focus on your job (offering nutritious foods in pleasant environment) vs. their job (deciding how much to eat). Avoid power struggles.",
          "Create positive mealtime atmosphere: Relaxed, social mealtimes support healthy eating. Stress and pressure activate fight-or-flight, shutting down digestion."
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
          "Co-regulate their nervous system: Stay calm and grounded when they're fearful. Your regulated presence helps them feel safe (Siegel's co-regulation principles).",
          "Validate without amplifying: 'I see you're worried about that sound. You're safe with me.' Acknowledge the fear without making it bigger or smaller than it is.",
          "Use gradual exposure with support: Slowly introduce feared objects/situations while maintaining connection and safety. Never force, always follow their lead."
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
          "Understand developmental context: Preschooler tantrums reflect immature prefrontal cortex meeting big emotions. Their thinking brain literally goes 'offline' during intense feelings (Siegel).",
          "Use 'time-in' not 'time-out': Stay connected during the storm. 'Time-in' helps co-regulate their nervous system rather than leaving them alone with overwhelming emotions.",
          "Set limits with empathy: 'You really wanted that cookie AND dinner comes first.' Acknowledge their perspective while holding boundaries (Circle of Security approach)."
        ],
        "red_flags": [
          "Tantrums lasting over 45 minutes regularly",
          "Complete inability to be comforted during episodes",
          "Aggressive behavior during tantrums"
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
          "Stay calm and curious: 'I can see you're upset about something. Can you help me understand?' Your regulated response helps them learn emotional expression (co-regulation principles).",
          "Validate feelings while addressing behavior: 'You're really mad about the toy AND hitting hurts. Let's find another way to show your feelings.'",
          "Teach alternative expressions: Model and practice other ways to show anger - stomping feet, squeezing a pillow, using words like 'I'm frustrated!'"
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
          "Understand the need for control: Bossiness often reflects anxiety about unpredictability. Provide structure and routine to reduce their need to control everything.",
          "Give appropriate leadership opportunities: 'You're great at organizing! Would you like to be in charge of setting up the art supplies?' Channel their leadership positively.",
          "Set limits on demanding tone: 'I want to help you AND I need you to ask nicely. Try again with an asking voice.' Teach HOW to ask for what they need."
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
          "Provide structured movement outlets: Channel their energy into acceptable activities - dancing, yoga, outdoor play, or 'heavy work' activities that provide sensory input.",
          "Break tasks into smaller chunks: Their developing executive function needs support. 'First we'll put on shoes, then get backpack, then go to car.'",
          "Use environmental supports: Create calm spaces with fewer distractions. Reduce visual clutter, noise, and overwhelming stimuli that increase hyperactivity.",
          "Implement regular movement breaks: Build physical activity into daily routine. Many children need movement to help their brains focus and regulate.",
          "Practice mindfulness together: Simple breathing exercises, body awareness games, and mindful listening can help develop self-regulation skills.",
          "Check nutrition and sleep: Ensure adequate sleep, regular meals, and limited sugar/processed foods that can affect attention and impulse control.",
          "Use positive attention for calm behavior: Catch them being still, focused, or calm and acknowledge it. 'I notice how carefully you're listening.'",
          "Consider sensory needs: Some hyperactivity reflects sensory seeking. Provide appropriate sensory input through movement, touch, or proprioceptive activities."
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
          "Validate attachment needs: 'You want to stay close to me. That shows how much you love me.' Separation anxiety reflects healthy attachment bonds (Bowlby).",
          "Create connection rituals: Develop special goodbye routines, use photos or recordings of your voice, and create 'connection objects' to bridge separations.",
          "Practice graduated exposure: Start with very brief separations in safe environments, gradually building tolerance. Follow their lead rather than pushing.",
          "Prepare in advance: Talk about upcoming separations, visit new environments beforehand, and create visual schedules showing when you'll return.",
          "Support other caregivers: Help alternative caregivers understand your child's attachment needs and preferred soothing strategies.",
          "Stay regulated during goodbyes: Your calm energy helps them feel safe. Rushed, anxious departures increase their distress.",
          "Avoid sneaking away: Always say goodbye. Disappearing without notice breaks trust and increases future anxiety about separations.",
          "Reunite with enthusiasm: Show joy when you come back together. This reinforces that separations end in happy reunions."
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
          "Respond matter-of-factly: 'Accidents happen. Let's clean up and try again.' Avoid shame, disappointment, or pressure which increase stress and accidents.",
          "Address underlying stress: Toileting regression often signals emotional overwhelm. Identify and reduce stressors while providing extra emotional support.",
          "Maintain consistent routines: Keep regular toilet breaks, especially during transitions or busy times when children might 'forget' their body signals.",
          "Rule out medical issues: Consult healthcare provider to ensure no physical causes like constipation, UTI, or developmental delays.",
          "Support nervous system regulation: Stress affects bladder control. Focus on helping them feel calm and safe in their body.",
          "Avoid punishment: Consequences for accidents increase shame and stress, making the problem worse. Focus on natural learning and support.",
          "Provide appropriate reminders: Gentle prompts during high-risk times (transitions, excitement, new environments) without nagging or pressure.",
          "Celebrate successes: Acknowledge their body awareness and successful toilet use without making it overly important or emotionally charged."
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
          "Understand regression as communication: Temporary return to earlier behaviors often signals need for extra security during times of stress or change.",
          "Provide emotional comfort without reinforcing: Offer extra snuggles and attention for their emotional needs rather than for the regressive behaviors themselves.",
          "Address underlying stressors: Identify what changes or challenges might be overwhelming them - new sibling, daycare, family stress, developmental leaps.",
          "Maintain gentle expectations: Keep some age-appropriate expectations while being patient with temporary regression. 'I know you can do this when you're ready.'",
          "Focus on connection over correction: Increase one-on-one time, physical affection, and emotional attunement rather than trying to eliminate regressive behaviors.",
          "Support the whole family: Often regression reflects family system stress. Address adult anxiety, relationship tensions, or environmental stressors affecting everyone.",
          "Trust developmental resilience: Most regression resolves naturally once children feel secure again. Forcing maturity often prolongs regressive patterns.",
          "Seek support when needed: If regression is severe or prolonged, consider consultation with child development specialists."
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
          "Validate emotions first: 'You're having such hard feelings. It makes sense you're upset.' Don't rush to fix or dismiss their emotional experience.",
          "Look for patterns and triggers: Track when crying increases - transitions, hunger, tiredness, overstimulation, or specific emotional triggers.",
          "Provide co-regulation support: Stay calm and present during their emotional storms. Your regulated nervous system helps theirs find balance (Siegel's co-regulation).",
          "Teach emotion vocabulary: Help them name feelings in the moment. 'This looks like disappointment' or 'I wonder if you're feeling frustrated.'",
          "Create emotional safety: Ensure they know ALL feelings are acceptable, even if behaviors need limits. 'It's okay to feel angry AND hitting isn't okay.'",
          "Address underlying needs: Excessive crying often signals unmet needs for connection, control, or comfort. Meet these needs proactively.",
          "Use comfort strategies: Offer physical comfort, change of environment, or soothing activities without trying to stop the emotion too quickly.",
          "Build emotional resilience: During calm moments, read books about feelings, practice coping strategies, and celebrate emotional courage."
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
          "Address developmental fears: Preschooler imagination creates both wonderful creativity and scary possibilities. Validate fears while gently challenging them.",
          "Create bedtime security rituals: Consistent, calming routines help transition from active day to restful night. Include connection time with you.",
          "Use graduated exposure to fears: If afraid of dark, use nightlight, then dimmer light, gradually building comfort. Never force, always follow their lead.",
          "Provide comfort objects: Special stuffed animals, blankets, or photos can provide security during nighttime separation from you.",
          "Check environment: Ensure comfortable room temperature, minimal noise, and appropriate lighting that supports natural sleep rhythms.",
          "Avoid overstimulation before bed: Limit screens, exciting activities, or stimulating foods that can interfere with nervous system regulation for sleep.",
          "Stay calm during resistance: Your anxious energy about bedtime increases their resistance. Approach bedtime with patience and confidence.",
          "Address daytime stress: Sometimes sleep problems reflect daytime overwhelm. Ensure they have adequate downtime and emotional processing during the day."
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
          "Reduce performance pressure: Remove pressure to speak in challenging situations. Pressure increases anxiety and makes speaking harder.",
          "Support their comfort zone: Let them communicate through gestures, nodding, or whispering to you first. Honor their pace of social engagement.",
          "Build confidence gradually: Create successful speaking experiences in very safe environments before expecting communication in challenging ones.",
          "Address underlying anxiety: Selective mutism often reflects social anxiety. Focus on helping them feel emotionally safe rather than pushing speech.",
          "Communicate with caregivers: Ensure teachers and other adults understand not to pressure speech and know alternative ways child can participate.",
          "Avoid bribes or consequences: Rewards or punishments for speaking increase pressure and often backfire. Focus on reducing anxiety instead.",
          "Celebrate non-verbal communication: Acknowledge their expressions, gestures, and other forms of communication to build confidence.",
          "Consider professional support: Speech-language pathologists familiar with selective mutism can provide valuable strategies and assessment."
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
          "Validate their emotional experience: 'That does look scary to you. Your feelings make sense.' Don't minimize or dismiss their fears, even if they seem irrational.",
          "Use gradual exposure with support: Slowly introduce feared situations while maintaining safety and connection. 'Let's look at the dog from far away first.'",
          "Provide coping tools: Teach breathing techniques, create 'brave' mantras, or use comfort objects they can carry when facing fears.",
          "Address the nervous system: Help them recognize body signals of fear and practice calming strategies that activate their parasympathetic nervous system.",
          "Build confidence through mastery: Create successful experiences in slightly challenging situations to build their sense of capability and resilience.",
          "Avoid forcing exposure: Pushing too hard often increases fears. Follow their lead and respect their pace of emotional processing.",
          "Check for underlying factors: Sometimes increased fearfulness signals stress, changes, or overwhelming experiences that need attention.",
          "Model brave behavior: Show them how you handle things that make YOU nervous. Normalize having fears while also showing courage."
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
          "Understand developmental context: School-age children face increasing social pressures and academic demands. Withdrawal may be protective and adaptive (Maté's understanding of protective responses).",
          "Open gentle dialogue: 'I've noticed you've been spending more time alone lately. I'm wondering what that's like for you.' Approach with curiosity, not judgment.",
          "Respect their need for privacy: Balance respecting growing independence with maintaining connection. 'I'm here when you're ready to talk.'",
          "Create low-pressure connection opportunities: Side-by-side activities like cooking, walking, or car rides can feel safer for sharing than face-to-face conversations.",
          "Check for underlying issues: Gently explore possible bullying, academic struggles, friendship problems, or family stress that might be contributing.",
          "Maintain family routines: Continue family meals, traditions, and activities even if they participate quietly. Presence matters even without verbal engagement.",
          "Focus on felt safety: Help them feel emotionally and physically safe at home, even if school or peer environments feel challenging (Circle of Security principles).",
          "Monitor for depression signs: While some withdrawal is normal, watch for persistent sadness, loss of interests, or concerning changes in sleep/appetite.",
          "Avoid taking it personally: Their withdrawal likely reflects their internal struggles, not rejection of family relationships.",
          "Seek professional support: If withdrawal is severe or accompanied by other concerning symptoms, consider counseling support."
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
          "Understand developmental drives: School-age children are developing sense of fairness and autonomy. Some defiance reflects healthy moral development and critical thinking.",
          "Use collaborative problem-solving: 'Help me understand your perspective on this rule. What concerns do you have?' Include them in finding solutions (Siegel's collaborative approach).",
          "Examine rule fairness: Ensure family rules are reasonable, clearly explained, and consistently applied. Children this age can spot inconsistency and unfairness.",
          "Focus on natural consequences: Let them experience logical outcomes of choices when safe. This builds internal motivation better than arbitrary punishments.",
          "Address underlying feelings: 'It seems like you're feeling powerless. Tell me more about that.' Often defiance masks feelings of helplessness or unfairness.",
          "Provide appropriate autonomy: Give them meaningful choices and responsibility. Micro-managing increases rebellion in children who need growing independence.",
          "Stay curious about their world: Understanding their peer relationships, school pressures, and developmental challenges helps you respond with empathy.",
          "Model respectful disagreement: Show them how to express different opinions respectfully. 'I hear you disagree. Help me understand your thinking.'",
          "Check your own triggers: Sometimes our reaction to defiance is stronger than the behavior warrants. Manage your own emotions to respond effectively.",
          "Maintain connection during conflicts: 'We disagree about this AND I still love you completely.' Preserve the relationship even during difficult moments."
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
          "Understand as trauma response: Perfectionism often stems from early experiences of conditional love or criticism. The child's nervous system learned that being 'perfect' equals safety (Maté's trauma understanding).",
          "Focus on internal validation: Help them develop intrinsic motivation by asking 'How did that feel to you?' rather than 'Great job!' Authentic self-esteem comes from within (Circle of Security principles).",
          "Model mistake-making as learning: Share your own mistakes openly and how they led to growth. 'I used to think I had to be perfect too, and it made me really anxious.'",
          "Separate worth from performance: Consistently communicate 'I love you no matter what you do or achieve.' This helps rewire their attachment security (Bowlby's secure base concept).",
          "Address underlying anxiety: Perfectionism often masks deep fear. Validate: 'It sounds scary to think about making mistakes. Tell me more about that worry.'",
          "Create 'good enough' experiences: Intentionally engage in activities where imperfection is okay - art, cooking, games. Show joy in the process rather than outcome.",
          "Teach self-compassion practices: Help them develop the inner voice that says 'It's okay to make mistakes, that's how we learn' instead of harsh self-criticism (influenced by self-compassion research).",
          "Support nervous system regulation: Perfectionism keeps children in chronic stress. Use breathing techniques, movement, and mindfulness to help them feel safe in their body.",
          "Examine family and school pressures: Honestly assess whether environmental expectations are contributing to their perfectionism and advocate for more balanced approaches."
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
          "Investigate through attachment lens: School avoidance often signals the child doesn't feel safe at school. Ask 'What makes school feel unsafe?' rather than 'Why won't you go?' (Circle of Security approach).",
          "Address separation anxiety: Some school avoidance reflects attachment needs. Provide transitional objects, photos, or notes that maintain connection during separation.",
          "Support nervous system regulation: Anxiety about school activates fight-or-flight responses. Teach breathing techniques and grounding exercises they can use at school.",
          "Collaborate with school as partners: Work together to identify specific stressors - academic, social, or sensory. Schools often have resources parents don't know about.",
          "Create graduated exposure plan: Start with very small steps like driving by school, visiting for 10 minutes, staying for one class. Build tolerance gradually without forcing.",
          "Examine academic fit: Some children avoid school because work is too hard or too easy. Advocate for appropriate academic support or enrichment.",
          "Address social dynamics: Bullying, exclusion, or social anxiety are common causes. Help develop social skills and work with school to address peer issues.",
          "Consider underlying conditions: School avoidance can indicate learning disabilities, ADHD, autism, or mental health conditions requiring professional evaluation.",
          "Maintain empathy while holding expectations: 'I can see school feels really hard for you AND education is important. Let's figure out how to make it work better.'"
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
          "Understand as protective adaptation: Emotional shutdown is often the nervous system's way of surviving overwhelming experiences. Honor this protection while gently offering connection (Maté's trauma framework).",
          "Focus on felt safety first: Before trying to 'fix' the shutdown, help them feel safe in relationship with you. Stay present without demands for emotional expression.",
          "Use non-verbal connection: Offer physical proximity, gentle touch (if welcomed), or simply being in the same space. Connection can happen without words (attachment theory principles).",
          "Respect their timing: Pushing for emotional expression often increases shutdown. Trust that with safety and time, natural emotional flow will return.",
          "Address potential trauma: Emotional numbing can indicate experiences that overwhelmed their capacity to process. Consider trauma-informed therapy if this persists.",
          "Model emotional expression: Show your own emotions appropriately - 'I feel sad when I see you hurting' - without making them responsible for your feelings.",
          "Create low-pressure connection opportunities: Side-by-side activities like walking, driving, or doing crafts can facilitate opening up more than face-to-face conversation.",
          "Support basic regulation: Ensure good sleep, nutrition, exercise, and limit overwhelming stimuli. A dysregulated nervous system can't access emotions safely.",
          "Consider professional support: If shutdown persists for weeks or includes talk of emptiness/hopelessness, seek help from trauma-informed mental health professionals."
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
          "Understand food as emotional regulation: Children often use food to manage overwhelming feelings when they lack other coping skills. Address the emotions, not just the eating (Maté's addiction understanding).",
          "Examine family food dynamics: Look at family attitudes toward food, body image, dieting, and emotional eating. Children absorb these patterns unconsciously.",
          "Focus on nourishment and pleasure: Emphasize how food helps their body grow strong and can be enjoyable rather than focusing on weight or appearance.",
          "Address underlying trauma or stress: Extreme eating patterns can indicate anxiety, depression, trauma, or other stressors that need professional attention.",
          "Create food security: Ensure consistent, adequate meals so scarcity fears don't drive bingeing behaviors. Restriction often leads to reactive overeating.",
          "Teach emotional awareness: Help them identify feelings before they turn to food. 'What are you feeling right now? Let's talk about that before we eat.'",
          "Model healthy relationship with food: Demonstrate eating for nourishment and pleasure without guilt, shame, or rigidity around food choices.",
          "Remove moral language about food: Avoid 'good' and 'bad' foods. This creates shame and can worsen extreme eating patterns.",
          "Seek professional support early: Eating disorders can be serious and benefit from specialized treatment. Don't wait if patterns persist or worsen."
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
          "Rule out medical causes first: Consult healthcare provider to eliminate constipation, urinary tract infections, diabetes, or other physical conditions causing accidents.",
          "Understand as stress indicator: Regression in toileting often signals emotional overwhelm, trauma, or significant life changes requiring attention to underlying causes.",
          "Respond without shame: Matter-of-fact cleanup without anger or disappointment protects their developing sense of self. Shame about bodily functions can create lasting issues.",
          "Address sleep and stress factors: Bedwetting often connects to deep sleep patterns, stress, or anxiety. Improve sleep hygiene and reduce environmental stressors.",
          "Support their autonomy: Involve them in problem-solving without making it their fault. 'Let's figure out how to help your body with this' rather than blame.",
          "Examine family dynamics: Sometimes toileting issues reflect power struggles or family stress. Address relationship patterns that might be contributing.",
          "Consider trauma responses: Sudden onset of toileting problems can indicate trauma, abuse, or overwhelming experiences requiring professional support.",
          "Protect from social consequences: Work with school and social situations to minimize embarrassment while addressing the underlying causes.",
          "Trust developmental timing: Some children's nervous systems mature at different rates. Patience combined with appropriate support usually resolves these issues."
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
          "Understand as anxiety management: Rituals provide sense of control when the world feels unpredictable or unsafe. Address underlying anxiety rather than just the behaviors (attachment-based understanding).",
          "Respect the function while offering alternatives: 'I can see this helps you feel safe. Let's think of other ways to feel safe too' rather than just stopping rituals.",
          "Introduce flexibility very gradually: Make tiny changes to routines while maintaining the core elements that provide security. Build tolerance slowly.",
          "Address environmental stressors: Examine what's creating the need for control - school stress, family conflict, major changes, or sensory overwhelm.",
          "Validate their experience: 'It really matters to you that things are done just right. That makes sense.' Validation reduces the intensity of the need for control.",
          "Teach anxiety management skills: Breathing techniques, progressive muscle relaxation, and mindfulness can provide alternative ways to feel safe and regulated.",
          "Consider neurodevelopmental factors: Some rigidity reflects autistic traits or other neurodifferences requiring accommodation rather than elimination.",
          "Support family flexibility: Sometimes parents' own anxiety or rigidity contributes to children's need for control. Address family-wide stress and flexibility.",
          "Know when to seek help: If rituals interfere with daily functioning or increase in complexity/frequency, consider evaluation for OCD or anxiety disorders."
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
          "Address internalized shame: Excessive apologizing often indicates the child has internalized a sense of being 'bad' or burdensome. Healing requires rebuilding their sense of inherent worth (Maté's shame understanding).",
          "Examine family communication patterns: Children learn to over-apologize from environments where mistakes are met with criticism, anger, or disappointment. Model different responses.",
          "Separate behavior from identity: 'You made a mistake AND you're a good person' helps them understand that actions don't define their worth (Circle of Security principles).",
          "Validate their feelings while challenging thoughts: 'You're feeling really bad about this mistake. Let's think about whether this is as big as it feels right now.'",
          "Teach self-compassion explicitly: Help them develop the voice that says 'Everyone makes mistakes, that's how we learn' instead of harsh self-criticism.",
          "Model appropriate apologizing: Show when apologies are needed (for harm caused) versus when they're not (for being human, having needs, making normal mistakes).",
          "Address perfectionism at the root: Frequent apologizing often stems from perfectionist thinking that any mistake is catastrophic. Challenge these cognitive patterns.",
          "Build secure attachment: Children who feel securely loved apologize less frequently because they trust the relationship can handle their imperfections.",
          "Consider underlying depression or anxiety: Excessive shame and self-criticism can indicate mental health conditions requiring professional support."
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
          "Investigate sensory factors: Many hygiene refusals stem from sensory sensitivities - water temperature, soap textures, or overwhelm from multiple sensations. Accommodate these needs.",
          "Examine depression indicators: Sudden changes in hygiene habits can signal depression, where self-care feels impossible. Address underlying emotional state first.",
          "Address executive function challenges: Some children struggle with the planning and sequencing required for hygiene routines. Break tasks into smaller, more manageable steps.",
          "Consider body autonomy issues: Sometimes hygiene refusal reflects appropriate boundary-setting about their body. Respect their autonomy while addressing health needs.",
          "Look for trauma indicators: Sudden hygiene changes, especially around bathing, can indicate trauma or abuse. Handle with sensitivity and seek professional guidance if concerned.",
          "Create positive associations: If hygiene has become a battleground, rebuild positive associations through fun bath toys, favorite soaps, or enjoyable routines.",
          "Address social skills understanding: Some children don't understand the social importance of hygiene. Teach explicitly without shaming their natural body processes.",
          "Support sensory regulation: Use predictable routines, preferred temperatures, and calming environments to make hygiene feel safe and manageable.",
          "Model self-care as self-respect: Show how taking care of our bodies is a way of honoring ourselves rather than just following rules."
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
          "Understand screen use as regulation attempt: Many children use screens to manage difficult emotions, anxiety, or overwhelm. Address underlying emotional needs rather than just limiting access.",
          "Examine what screens provide: Identify whether they're seeking social connection, escape from stress, stimulation, or competence. Find offline ways to meet these legitimate needs.",
          "Create gradual transitions: Sudden screen removal often creates intense reactions. Use timers, warnings, and transition rituals to help their nervous system adjust.",
          "Address underlying ADHD or sensory needs: Some children are drawn to screens because they provide optimal stimulation for their neurotype. Consider evaluation if needed.",
          "Build real-world competence: Children often prefer screens when real-world activities feel too challenging or boring. Ensure offline activities match their skill level and interests.",
          "Examine family screen culture: Children model what they see. Assess family screen habits and create consistent, reasonable expectations for everyone.",
          "Provide connection and boredom tolerance: Screens often fill gaps in human connection or inability to tolerate unstimulated time. Address these underlying capacity-building needs.",
          "Use collaborative problem-solving: Include them in creating screen time agreements rather than imposing rules. This builds buy-in and self-regulation skills.",
          "Consider social aspects: For some children, online gaming or social media provides important peer connection. Find ways to maintain social needs while managing screen time."
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
          "Respect developmental need for autonomy: Adolescent withdrawal often reflects healthy separation-individuation process. Honor their need for space while staying emotionally available (developmental psychology principles).",
          "Stay curious, not controlling: Approach with 'I've noticed you seem to prefer alone time lately. How are you doing?' rather than demands for connection or accusations.",
          "Offer low-pressure connection opportunities: Text messages, side-by-side activities, or brief check-ins work better than intense conversations during withdrawal periods.",
          "Examine family dynamics: Sometimes withdrawal reflects family conflict, criticism, or overwhelm. Address environmental factors that might be pushing them away.",
          "Differentiate normal from concerning: Temporary withdrawal during stress is normal; complete isolation with mood changes may indicate depression requiring professional support.",
          "Maintain unconditional love messages: 'I'm here whenever you're ready' and 'I love you even when we're not talking much' preserve the attachment bond during distant periods.",
          "Address your own anxiety: Parent worry about teen withdrawal can inadvertently push them further away. Manage your own fears about the changing relationship.",
          "Look for signs of depression: If withdrawal includes hopelessness, loss of all interests, or self-harm thoughts, seek immediate professional help regardless of their resistance.",
          "Trust the relationship: Securely attached teens typically return to connection after working through developmental tasks. Maintain faith in your bond."
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
          "Understand defiance as development: Adolescent opposition serves important identity formation and autonomy development. It's not personal attack but necessary growth process (developmental understanding).",
          "Examine power dynamics: Ask yourself whether rules are reasonable, necessary, and respectfully communicated. Authoritarian approaches often increase defiance in teens.",
          "Move toward collaborative parenting: Include them in family rule-making and problem-solving. 'What do you think would be fair expectations around curfew?' builds buy-in.",
          "Separate respect from compliance: You can maintain mutual respect even when disagreeing. Focus on 'How can we work this out?' rather than 'You must obey.'",
          "Address underlying needs: Defiance often masks feelings of powerlessness, misunderstanding, or unmet needs for autonomy, competence, or connection.",
          "Pick battles wisely: Differentiate between safety issues (non-negotiable) and preference issues (room to negotiate). Fight for what truly matters.",
          "Validate their perspective: 'I can see why this rule feels unfair to you' doesn't mean changing the rule but acknowledges their experience and maintains connection.",
          "Model respectful disagreement: Show how to disagree without being disrespectful. Your response to their defiance teaches them how to handle conflict in relationships.",
          "Examine your own triggers: Teen defiance often activates parents' own childhood experiences of authority. Address your emotional reactions to respond more skillfully."
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
          "Understand aggression as pain expression: Aggressive behavior often represents intense emotional pain, trauma, or feeling powerless that gets expressed through the body (Maté's trauma framework).",
          "Ensure safety first: Set clear, firm boundaries about physical safety while addressing underlying causes. 'I won't let you hurt yourself or others AND I want to understand what's going on.'",
          "Look beneath the behavior: Ask 'What happened to you?' rather than 'What's wrong with you?' Aggression often has roots in experiences of powerlessness, shame, or trauma.",
          "Teach emotional regulation skills: Help them identify early warning signs of escalation and develop coping strategies like breathing, physical release, or taking space.",
          "Address family trauma patterns: Aggressive teens often come from families with histories of trauma, violence, or emotional dysregulation requiring family-wide healing.",
          "Model calm responses: Your regulated response to their aggression teaches them that intense emotions can be contained and relationships can survive conflict.",
          "Consider trauma therapy: Aggressive behavior, especially if sudden or severe, may indicate underlying trauma requiring specialized therapeutic intervention.",
          "Examine environmental triggers: Identify situations, stressors, or relationship dynamics that tend to trigger aggressive responses and work to modify them.",
          "Maintain connection despite behavior: Separate the person from their actions. 'I love you AND this behavior isn't okay. Let's figure out what's underneath it.'"
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
          "Understand adolescent brain development: Teen brains are wired for sensation-seeking as part of normal development. The prefrontal cortex (judgment center) isn't fully mature until mid-20s (neuroscience understanding).",
          "Discuss risks without lecturing: Share information about consequences in collaborative conversation rather than fear-based warnings. Ask 'What do you think could happen?' to engage their thinking.",
          "Provide safe excitement alternatives: Help them find healthy ways to get adrenaline and excitement - sports, adventure activities, creative challenges that meet their developmental needs.",
          "Stay connected despite concerning behavior: Pulling away in fear often increases risky behavior. Maintain relationship while expressing concerns about safety.",
          "Examine underlying emotional needs: Risk-taking often attempts to manage depression, anxiety, trauma, or emotional numbness. Address root causes rather than just behaviors.",
          "Involve them as experts: Ask about their risk assessment and safety planning. 'What would help you stay safer when you're out with friends?' builds internal motivation.",
          "Address peer influence thoughtfully: Help them develop skills to resist negative peer pressure while maintaining friendships. Role-play difficult social situations.",
          "Model calculated risk-taking: Show them how to evaluate risks and make thoughtful decisions about activities that involve some uncertainty or challenge.",
          "Know when to seek help: If risk-taking escalates, involves substance use, or seems driven by self-destructive impulses, professional intervention may be needed."
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
          "Understand lying as autonomy-seeking: Teen lying often reflects normal developmental need for privacy and independence rather than moral failure or disrespect (developmental perspective).",
          "Examine trust-control balance: Ask whether your expectations for information-sharing are reasonable for their age and development. Some privacy is healthy and necessary.",
          "Focus on safety over surveillance: Shift conversations to 'I need to know you're safe' rather than 'I need to know everything you're doing.' This maintains connection while respecting autonomy.",
          "Create opportunities for honesty: Make it easier to tell truth by responding calmly to concerning information and focusing on problem-solving rather than punishment.",
          "Address your own anxiety: Parent fear about teen activities often drives interrogation that increases lying. Manage your anxiety to preserve honest communication.",
          "Discuss the relationship impact: Help them understand how lying affects trust and relationship quality. 'When you lie, it makes it harder for me to support you.'",
          "Look for patterns in lying: Consistent lying about certain topics may indicate areas where they feel unsafe to be honest - examine your responses to those topics.",
          "Model transparency appropriately: Share your own age-appropriate challenges and how you handle difficult situations to normalize honest communication.",
          "Differentiate privacy from deception: Help them understand the difference between keeping some things private (healthy) and actively deceiving about important matters (relationship-damaging)."
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
          "Address underlying needs: Stealing often reflects unmet needs for belonging, excitement, material items, or feeling of control. Understand what they're really seeking through this behavior.",
          "Examine financial pressures: Teen stealing may relate to wanting things peers have or feeling unable to ask parents for money. Address family financial communication and teen's legitimate needs.",
          "Hold them accountable meaningfully: Natural consequences should include making amends, returning/replacing items, and understanding impact on others. Avoid shame-based responses.",
          "Look for peer influence factors: Sometimes stealing occurs in group settings where teens feel pressure to prove themselves or gain acceptance. Address social dynamics.",
          "Consider underlying mental health: Stealing can indicate depression, ADHD, trauma, or other conditions affecting impulse control and decision-making. Seek evaluation if patterns persist.",
          "Teach empathy and perspective-taking: Help them understand how stealing affects victims, businesses, and community trust. Role-play different perspectives.",
          "Address family modeling: Examine whether family behaviors around honesty, rules, or taking things send mixed messages about what's acceptable.",
          "Discuss legal and social consequences: Age-appropriately explain real-world implications of theft while maintaining hope for their ability to make better choices.",
          "Support positive identity development: Help them see themselves as trustworthy and capable of making good choices. Focus on their character strengths and values."
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
          "Understand bullying as pain passed along: Teens who bully others are often experiencing their own powerlessness, trauma, or emotional pain. Address their hurt while stopping harmful behavior (Maté's understanding).",
          "Address immediately and clearly: Set firm boundaries about bullying while investigating underlying causes. 'This behavior stops now AND let's understand what's driving it.'",
          "Examine their own victimization: Many teen bullies have histories of being bullied, abused, or marginalized. Trauma-informed approaches address root causes more effectively than punishment alone.",
          "Build empathy through connection: Help them understand impact on victims by connecting to their own experiences of feeling powerless, excluded, or hurt.",
          "Address family and social power dynamics: Sometimes bullying reflects patterns learned at home or in community. Examine whether they're experiencing domination that gets passed down.",
          "Require meaningful repair: Have them make direct amends to victims and contribute positively to communities they've harmed. This builds responsibility and empathy.",
          "Address underlying insecurity: Bullying often stems from deep insecurity masked by aggressive behavior. Build their authentic self-esteem through connection and competence-building.",
          "Teach healthy power and leadership: Channel their influence toward positive leadership rather than dominance. Help them use their power constructively.",
          "Monitor and support: Stay involved in their social world to prevent future bullying while supporting their growth toward healthy relationships."
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
          "Address achievement pressure directly: Teen perfectionism often reflects overwhelming academic, social, or family pressure. Examine environmental expectations and advocate for balance.",
          "Differentiate self-worth from performance: Consistently communicate that your love and their value aren't dependent on achievements. This rewires attachment security (Bowlby's principles).",
          "Model work-life balance: Show them how to prioritize self-care, relationships, and joy alongside achievement. Your example teaches them sustainable life patterns.",
          "Address anxiety and depression: Perfectionism often masks intense anxiety or depression. If teen shows signs of mental health struggles, seek professional support.",
          "Teach failure as learning: Share your own failures and what you learned from them. Help them reframe mistakes as growth opportunities rather than character judgments.",
          "Examine family perfectionism patterns: Sometimes teen perfectionism reflects family-wide patterns of conditional love or criticism. Address these systemic issues.",
          "Support authentic interests: Help them pursue activities they genuinely enjoy rather than just those that look good on applications or meet others' expectations.",
          "Build distress tolerance: Help them develop capacity to sit with uncomfortable feelings like disappointment without needing to be perfect to feel okay.",
          "Create perfectionism-free zones: Establish family activities, conversations, or spaces where achievement doesn't matter and they can just be themselves."
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
          "Investigate school climate and safety: Teen school avoidance often indicates problems with bullying, social anxiety, academic overwhelm, or unsafe school environment requiring advocacy.",
          "Address mental health factors: Depression, anxiety, or trauma can make school feel impossible. Screen for mental health conditions and provide appropriate support.",
          "Examine academic fit and learning needs: Some teens avoid school because of undiagnosed learning differences, inappropriate academic level, or lack of engaging coursework.",
          "Support without enabling: Balance understanding their struggles with maintaining expectations for education. 'School is hard for you AND education is important. Let's solve this together.'",
          "Work collaboratively with school: Partner with counselors, teachers, and administrators to identify barriers and create supportive solutions rather than punitive responses.",
          "Address social anxiety and peer issues: Help them develop social skills, find their peer group, or address bullying situations that make school feel unsafe socially.",
          "Consider alternative education options: Some teens thrive in different educational environments - online school, alternative programs, or modified schedules may be appropriate.",
          "Build motivation through connection: Help them connect education to their own goals and interests rather than external pressures or requirements.",
          "Address trauma or family stressors: Sometimes school avoidance reflects overwhelming home situations or trauma that makes leaving home feel unsafe."
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
          "Understand numbing as protective response: Emotional shutdown is often the nervous system's way of surviving overwhelming pain, trauma, or chronic stress. Honor this adaptation while gently offering reconnection (Maté's trauma understanding).",
          "Create felt safety first: Before trying to access emotions, help them feel physically and emotionally safe in relationship with you. This may take considerable time and patience.",
          "Use non-verbal connection: Offer presence without demands - sitting nearby, gentle touch if welcomed, or engaging in parallel activities. Connection can happen without emotional expression.",
          "Address underlying trauma or depression: Emotional numbing often indicates experiences that overwhelmed their capacity to cope. Professional trauma-informed therapy may be essential.",
          "Respect their protective mechanisms: Pushing for emotional expression can increase shutdown. Trust that with safety and time, natural emotional capacity will return.",
          "Model emotional expression appropriately: Share your own feelings in non-demanding ways: 'I feel sad seeing you struggle, and I'm here for whatever you need.'",
          "Support basic regulation: Ensure adequate sleep, nutrition, movement, and limit overwhelming stimuli. A dysregulated nervous system can't safely access emotions.",
          "Consider medication evaluation: Persistent emotional numbing may benefit from psychiatric evaluation, especially if accompanied by depression or anxiety symptoms.",
          "Maintain hope and connection: Even when they seem unreachable, your consistent presence and belief in their healing capacity provides important foundation for recovery."
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
          "Stay calm and non-judgmental: Your reaction sets the tone for whether they'll continue to trust you with their pain. Panic or anger often shuts down communication (attachment principles).",
          "Understand self-harm function: It often serves to regulate overwhelming emotions, feel control, or express pain they can't verbalize. Address the underlying needs, not just the behavior.",
          "Seek professional help immediately: Self-harm requires specialized intervention. Find therapists trained in self-injury and adolescent mental health for comprehensive support.",
          "Remove or secure harmful objects: While addressing root causes, take practical steps to reduce easy access to self-harm tools without making them feel untrusted.",
          "Validate their pain without condoning behavior: 'I can see you're in tremendous pain. Let's find safer ways to help with these feelings together.'",
          "Address trauma and mental health: Self-harm often indicates underlying trauma, depression, anxiety, or other conditions requiring professional treatment.",
          "Learn about self-harm safety: While working toward stopping, learn about harm reduction approaches that can minimize physical damage if behavior continues temporarily.",
          "Support alternative coping strategies: Help them develop other ways to manage intense emotions - ice cubes, intense exercise, creative expression, calling supportive people.",
          "Maintain strong therapeutic relationships: Consistent professional support is crucial for teens who self-harm. Don't try to handle this alone as a parent."
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
          "Stay calm and gather information: Approach with curiosity rather than judgment to understand what's happening and whether this indicates concerning experiences or exposure.",
          "Provide comprehensive sex education: Many inappropriate behaviors stem from lack of proper education about healthy sexuality, boundaries, and consent.",
          "Assess for trauma or abuse: Sudden or age-inappropriate sexual behavior can indicate sexual abuse or exposure requiring immediate professional assessment and support.",
          "Set clear, shame-free boundaries: Address concerning behavior directly while maintaining the teen's dignity: 'This behavior isn't appropriate and we need to talk about why.'",
          "Examine media and peer influences: Investigate whether they've been exposed to pornography, inappropriate online content, or peer pressure that's shaping their understanding.",
          "Address consent and healthy relationships: Teach explicitly about mutual respect, consent, emotional readiness, and what healthy sexual relationships look like.",
          "Consider professional evaluation: If behavior persists or seems compulsive, seek assessment from professionals experienced with adolescent sexuality and trauma.",
          "Support healthy identity development: Help them understand sexuality as part of healthy human development while maintaining appropriate boundaries for their age.",
          "Address family communication: Examine whether family comfort with discussing sexuality and boundaries needs to improve to support healthy development."
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
      what_it_means: Array.isArray(behavior.meanings) ? behavior.meanings.join('. ') + '.' : behavior.meanings,
      what_it_conveys: "Through this behavior, your child may be trying to communicate their need for understanding, safety, or support in managing overwhelming feelings or situations.",
      parent_experience: Array.isArray(behavior.parent_experience) ? behavior.parent_experience.join('. ') + '.' : behavior.parent_experience,
      age_specific_strategies: behavior.strategies,
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