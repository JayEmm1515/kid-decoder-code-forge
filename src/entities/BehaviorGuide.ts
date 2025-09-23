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
          "Name and validate: 'You're having such big feelings. It's hard when things don't work the way you want.' This helps develop emotional vocabulary and felt understanding.",
          "Address underlying needs: Check for hunger, tiredness, overstimulation, or need for connection. Tantrums often signal unmet physical or emotional needs.",
          "Use sensory soothing: Soft singing, rhythmic rocking, or gentle massage can activate the parasympathetic nervous system and restore calm (Narvaez).",
          "Avoid reasoning during the storm: Wait until after the tantrum to discuss what happened. During intense emotion, the thinking brain is offline.",
          "Create predictable routines: Consistent daily rhythms provide the secure structure that prevents many tantrums before they start.",
          "Practice 'Circle of Security' principles: Be bigger, stronger, wiser, and kind while helping them organize their emotions through your calm presence."
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
          "Practice graduated separations: Start with very brief separations in familiar environments, gradually building tolerance for longer periods.",
          "Maintain the secure base: Be fully present during reunions without rushing or dismissing their feelings. This reinforces that coming back together is safe and joyful.",
          "Support the caregiver's nervous system: Stay calm during goodbyes. Children co-regulate from your emotional state, so your anxiety increases theirs.",
          "Use attachment language: 'I'll be thinking of you' and 'I always come back' provide explicit reassurance about the continuity of your bond.",
          "Respect developmental timing: Some children need longer to develop object permanence. Pushing too hard can increase anxiety rather than build independence.",
          "Create consistent goodbye routines: Predictable sequences help children know what to expect and when you'll return."
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
          "Observe patterns mindfully: Notice when these behaviors increase (tiredness, stress, boredom) to understand their regulatory function.",
          "Support rather than stop: Unless harmful, allow these behaviors while offering alternatives. 'I see you need to move your body. Here's a soft brush to try.'",
          "Check environmental factors: Reduce overwhelming stimuli that might be increasing their need for self-soothing through repetitive movement.",
          "Engage their attachment system: Sometimes repetitive behaviors increase when children need more connection. Offer more physical closeness and interaction.",
          "Trust developmental wisdom: Many repetitive behaviors are part of normal neurological development and will naturally decrease with maturation.",
          "Consult if concerned: If behaviors seem compulsive or interfere with development, seek evaluation from professionals familiar with normal variation."
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
          "Provide consistent co-regulation: Your calm, patient presence helps regulate their overwhelmed nervous system (Siegel's concept of interpersonal neurobiology).",
          "Create optimal environment: Dim lights, reduce noise, ensure comfortable temperature. The evolved developmental niche includes environmental sensitivity (Narvaez).",
          "Use 'skin-to-skin' contact: Physical closeness activates the parasympathetic nervous system and promotes regulation through neurobiological pathways.",
          "Respond without urgency: Approach with curiosity rather than panic. Your calm investigation helps them feel safe even in distress.",
          "Track patterns: Note timing, duration, and contexts of crying to identify triggers and develop more targeted responses.",
          "Support your own regulation: Crying triggers our own stress responses. Take breaks, seek support, and manage your own nervous system to better help theirs.",
          "Trust the communication: Excessive crying is their way of telling you something important. Stay curious and responsive rather than frustrated."
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
          "Address environmental stressors: Identify and minimize sources of stress like changes in routine, family tension, or new environments.",
          "Avoid shaming language: 'You're acting like a baby' increases stress. Instead: 'You need extra comfort right now, and that's okay.'",
          "Provide choice in comfort: Let them choose whether they want extra snuggles, their favorite blanket, or special comfort foods during this period.",
          "Trust the process: Regression usually resolves naturally once the child feels secure again. Forcing 'age-appropriate' behavior often prolongs it.",
          "Support the whole family system: Sometimes regression reflects family stress. Address adult stress and relationship dynamics that may be affecting the child.",
          "Maintain some expectations gently: While offering extra support, keep some age-appropriate expectations to maintain developmental momentum."
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
          "Create secure sleep environment: Room-sharing or safe co-sleeping supports attachment needs while developing independent sleep skills (following safe sleep guidelines).",
          "Address separation anxiety at bedtime: Stay calm and patient during bedtime resistance. Their need for closeness at night reflects healthy attachment (Circle of Security principles).",
          "Use graduated responses: Respond consistently to night waking with comfort, but gradually reduce intervention as child develops self-soothing capacity.",
          "Support nervous system regulation: Avoid overstimulation before bed. Create calm, quiet environments that support parasympathetic activation for sleep.",
          "Consider developmental appropriateness: Many sleep 'problems' are normal developmental phases. Adjust expectations to match child's neurological maturity.",
          "Maintain caregiver well-being: Sleep deprivation affects your ability to co-regulate. Accept help, take turns with partners, and prioritize your own rest when possible.",
          "Trust biological wisdom: Children's sleep needs and patterns vary. Work with their natural rhythms rather than forcing rigid schedules."
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
          "Address sensory factors: Some children have heightened sensitivity to textures, temperatures, or flavors. Respect these differences while gradually expanding options.",
          "Create positive mealtime atmosphere: Relaxed, social mealtimes support healthy eating. Stress and pressure activate fight-or-flight, shutting down digestion.",
          "Model enjoyment of food: Children learn through observation. Show pleasure in eating variety of foods without pressuring them to copy you.",
          "Consider timing and environment: Ensure child isn't too tired, distracted, or full of milk/snacks when offering meals.",
          "Rule out medical causes: Persistent food refusal may indicate reflux, allergies, or other physical issues requiring medical evaluation.",
          "Support feeding relationship repair: If mealtimes have become battlegrounds, take pressure off and rebuild positive associations with eating together."
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
          "Use gradual exposure with support: Slowly introduce feared objects/situations while maintaining connection and safety. Never force, always follow their lead.",
          "Provide comfort objects: Transitional objects help bridge separations and provide security during scary moments (attachment theory principles).",
          "Create predictable environments: Reduce overwhelming stimuli when possible. Too much novelty can trigger fear responses in sensitive children.",
          "Support sensory regulation: Some fears relate to sensory overwhelm. Help identify triggers and provide sensory supports (quiet spaces, soft textures, familiar sounds).",
          "Build 'felt safety': Focus on helping them FEEL safe in their body, not just convincing them logically that they're safe.",
          "Trust developmental timing: Many fears are normal developmental phases that resolve with maturation and secure relationships."
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
          "Set limits with empathy: 'You really wanted that cookie AND dinner comes first.' Acknowledge their perspective while holding boundaries (Circle of Security approach).",
          "Offer limited choices: 'Would you like to walk to the car or hop like a bunny?' Providing options gives sense of control within your limits.",
          "Create visual supports: Use pictures, timers, or charts to help with transitions. Visual cues support executive function development.",
          "Address underlying needs: Check for hunger, tiredness, overstimulation, or need for connection before assuming defiance.",
          "Practice emotional coaching: During calm moments, read books about feelings, practice naming emotions, and create 'feeling tools' they can use.",
          "Model regulation strategies: Show them how you handle frustration. 'I'm feeling angry, so I'm going to take three deep breaths.'"
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
          "Recognize autonomy development: Defiance is often healthy assertion of independence. Respond to the underlying need for autonomy while maintaining necessary limits.",
          "Use collaborative problem-solving: 'We have a problem. You want to keep playing AND we need to clean up. What ideas do you have?' (Siegel's collaborative approach).",
          "Provide appropriate power: Give them meaningful choices and control where safety allows. 'Which jacket would you like to wear?' vs. fighting about wearing a jacket.",
          "Check your attachment lens: Are you in 'shark music' (Circle of Security term for anxiety)? Sometimes our own triggers make normal behavior feel more threatening.",
          "Use playful engagement: Silly voices, games, or humor can shift the dynamic from power struggle to connection. 'Oh no! The toys are escaping! Help me catch them!'",
          "Examine expectations: Ensure requests are developmentally appropriate. Can they actually remember multi-step instructions or sit still for that long?",
          "Stay regulated yourself: Your calm nervous system helps them regulate. When you escalate, they escalate. Take breaks when needed.",
          "Focus on connection first: Sometimes defiance signals disconnection. Offer special time or physical affection before addressing the behavior."
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
          "Teach emotional vocabulary actively: 'Your body is showing me you're frustrated. Let's find words for that feeling.' Help them connect body sensations to emotion words.",
          "Provide immediate alternatives: 'Hands are not for hitting. Hands are for hugging, building, and high-fives. Let's try again.' Give them something TO do, not just what NOT to do.",
          "Address the unmet need: Aggression often signals unmet needs for attention, control, or sensory input. 'You wanted that toy. Let's ask for a turn.'",
          "Use natural consequences: If they hurt someone, they need to help that person feel better. Focus on repair rather than punishment.",
          "Create sensory outlets: Provide acceptable ways to meet their need for physical intensity - jumping, dancing, squeezing stress balls, or heavy work activities.",
          "Stay calm during incidents: Your regulated response helps them learn regulation. Reacting with anger teaches them that aggression is how we handle frustration.",
          "Practice during calm moments: Role-play scenarios, read books about emotions, and practice gentle touches during peaceful times.",
          "Examine environmental factors: Are they overstimulated, hungry, tired, or overwhelmed? Address these underlying states that make aggression more likely."
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
          "Set limits on demanding tone: 'I want to help you AND I need you to ask nicely. Try again with a asking voice.' Teach HOW to ask for what they need.",
          "Address underlying anxiety: Controlling behavior often masks worry. 'It seems like you're worried about what might happen. Tell me about that.'",
          "Create predictability: Use visual schedules, consistent routines, and advance warning of changes to reduce their anxiety-driven need for control.",
          "Model flexible thinking: Show them how you adapt when things don't go as planned. 'Oh well, we'll try a different way. That's okay.'",
          "Validate their perspective: 'You had a plan for how this should go. It's hard when things change.' Acknowledge their feelings while maintaining flexibility.",
          "Encourage collaborative solutions: 'We both have ideas. Let's see if we can find a way that works for both of us.'"
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