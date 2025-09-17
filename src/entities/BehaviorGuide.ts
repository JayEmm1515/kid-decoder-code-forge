export class BehaviorGuide {
  static async list(orderBy?: string) {
    const behaviorsData = [
      {
        "behaviour": "Tantrums",
        "meanings": {
          "0-2": [
            "Frustration from limited verbal expression",
            "Overstimulation or unmet physical needs",
            "Need for co-regulation and safety"
          ],
          "3-5": [
            "Boundary testing and emotional learning",
            "Lack of consistent routines or unmet needs",
            "Difficulty transitioning between tasks"
          ],
          "6-12": [
            "Emotional overwhelm related to social or academic stress",
            "Seeking control in uncertain environments",
            "Unexpressed anxiety or unmet expectations"
          ],
          "13-18": [
            "Intensified emotional reactivity or identity assertion",
            "Maladaptive coping with stress or shame",
            "Unprocessed trauma or peer conflict"
          ]
        },
        "parent_experience": [
          "Feeling overwhelmed, unsure how to respond",
          "Fear of being judged in public or by family",
          "Frustration from repeated outbursts"
        ],
        "strategies": {
          "0-2": [
            "Use calm voice and stay close",
            "Validate feelings with simple words",
            "Redirect gently with touch or song"
          ],
          "3-5": [
            "Name emotions and offer two choices",
            "Hold limits with empathy",
            "Use visual aids for transitions"
          ],
          "6-12": [
            "Debrief after calm returns",
            "Introduce self-regulation strategies",
            "Help child name triggers"
          ],
          "13-18": [
            "Keep tone neutral during escalation",
            "Use collaborative problem solving later",
            "Encourage journaling or creative outlets"
          ]
        },
        "red_flags": [
          "Tantrums lasting over 30 mins daily",
          "Physical harm to self or others",
          "Lack of response to comfort consistently"
        ]
      },
      {
        "behaviour": "Withdrawing or isolating",
        "meanings": {
          "0-2": [
            "Low energy due to tiredness or illness",
            "Need to self-soothe in overstimulating environments"
          ],
          "3-5": [
            "Seeking emotional safety through retreat",
            "Feeling unseen or unimportant"
          ],
          "6-12": [
            "Avoidance of peer rejection or bullying",
            "Masking sadness or emotional distress"
          ],
          "13-18": [
            "Withdrawing due to depression or social anxiety",
            "Avoidance linked to fear of judgement or rejection"
          ]
        },
        "parent_experience": [
          "Worry about child's emotional wellbeing",
          "Confusion about whether to intervene or give space",
          "Loneliness due to child withdrawing"
        ],
        "strategies": {
          "0-2": [
            "Sit nearby in silence and wait for engagement",
            "Use simple play or book sharing"
          ],
          "3-5": [
            "Reflect feelings: 'You're needing some quiet.'",
            "Draw them gently into shared activity"
          ],
          "6-12": [
            "Open the door with: 'I've noticed you've been quiet lately.'",
            "Offer connection through shared interests"
          ],
          "13-18": [
            "Respect space but check in non-judgementally",
            "Use low-pressure options like texting or walking side-by-side"
          ]
        },
        "red_flags": [
          "Refusal to engage with family or friends",
          "Speech regression or extreme silence",
          "Expression of sadness or hopelessness"
        ]
      },
      {
        "behaviour": "Defiance and refusing instructions",
        "meanings": {
          "0-2": [
            "Developmental drive toward independence",
            "Misunderstanding of safety or instruction"
          ],
          "3-5": [
            "Boundary testing and autonomy seeking",
            "Emotional overload when feeling powerless"
          ],
          "6-12": [
            "Challenging perceived unfairness or lack of control",
            "Reacting to inconsistency or harsh discipline"
          ],
          "13-18": [
            "Pushing against perceived control or injustice",
            "Asserting independence and rejecting hierarchy"
          ]
        },
        "parent_experience": [
          "Feeling disrespected or powerless",
          "Worry that discipline isn't working",
          "Fear that the child will become uncontrollable"
        ],
        "strategies": {
          "0-2": [
            "Repeat simple instruction calmly",
            "Model safe behaviour instead of punishing"
          ],
          "3-5": [
            "Offer choices within limits",
            "Use playful tone to increase cooperation"
          ],
          "6-12": [
            "Discuss reasons behind rules collaboratively",
            "Validate frustration but hold expectations"
          ],
          "13-18": [
            "Negotiate shared expectations openly",
            "Avoid punitive reactions—focus on mutual respect"
          ]
        },
        "red_flags": [
          "Destructive or dangerous defiance",
          "Repeated defiance causing school or social issues",
          "Child expresses hatred or self-harm during defiance"
        ]
      },
      {
        "behaviour": "Aggression (hitting, biting, throwing)",
        "meanings": {
          "0-2": [
            "Exploratory behaviour with poor impulse control",
            "Frustration, fatigue, or dysregulation"
          ],
          "3-5": [
            "Immature social communication",
            "Mimicking aggressive play or lack of emotional vocabulary"
          ],
          "6-12": [
            "Inability to express anger safely",
            "Reactivity to perceived threat or rejection"
          ],
          "13-18": [
            "Intense emotional pain expressed physically",
            "Poor impulse control or trauma reactivity"
          ]
        },
        "parent_experience": [
          "Fear of harm to others or child",
          "Guilt for yelling or reacting strongly",
          "Uncertainty about whether it's 'normal' behaviour"
        ],
        "strategies": {
          "0-2": [
            "Redirect with soft object or change of scene",
            "Model gentle touch and calm tone"
          ],
          "3-5": [
            "Label what's not okay and show what is",
            "Use books or stories to teach alternatives"
          ],
          "6-12": [
            "Teach emotional vocabulary and physical outlets",
            "Create calm-down spaces at home or school"
          ],
          "13-18": [
            "Help teen recognise escalation signals",
            "Model anger management techniques yourself"
          ]
        },
        "red_flags": [
          "Frequent violence towards others or animals",
          "Use of weapons or threats",
          "Lack of remorse after aggression"
        ]
      },
      {
        "behaviour": "Clinginess or separation anxiety",
        "meanings": {
          "0-2": [
            "Developmental anxiety related to object permanence",
            "Need for secure base and safety"
          ],
          "3-5": [
            "Fear of abandonment or change in routine",
            "Uncertainty about transitions or new environments"
          ],
          "6-12": [
            "Social separation fears or identity-related insecurity",
            "Increased awareness of risk and consequence"
          ],
          "13-18": [
            "Dependency rooted in low self-esteem or enmeshment",
            "Avoidance of separation as protective mechanism"
          ]
        },
        "parent_experience": [
          "Distress seeing child cry or cling",
          "Frustration from inability to leave or get things done",
          "Worry about creating 'dependency'"
        ],
        "strategies": {
          "0-2": [
            "Offer transitional object (e.g. toy, cloth)",
            "Use short goodbye rituals"
          ],
          "3-5": [
            "Prepare child ahead of time for separations",
            "Keep routines consistent and warm"
          ],
          "6-12": [
            "Validate anxiety and explain reasons for separation",
            "Encourage confidence-building tasks"
          ],
          "13-18": [
            "Foster autonomy while offering safety net",
            "Explore underlying emotional needs for closeness"
          ]
        },
        "red_flags": [
          "Inconsolable distress at every separation",
          "Extreme avoidance of school or social spaces",
          "Regression (e.g. toileting, speech) lasting weeks"
        ]
      },
      {
        "behaviour": "Lying or fabrication",
        "meanings": {
          "0-2": [
            "Lying or fabrication meaning for 0-2 years"
          ],
          "3-5": [
            "Lying or fabrication meaning for 3-5 years"
          ],
          "6-12": [
            "Lying or fabrication meaning for 6-12 years"
          ],
          "13-18": [
            "Lying or fabrication meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Lying or fabrication - example 1",
          "Parent experience for Lying or fabrication - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Lying or fabrication at 0-2"
          ],
          "3-5": [
            "Strategy for Lying or fabrication at 3-5"
          ],
          "6-12": [
            "Strategy for Lying or fabrication at 6-12"
          ],
          "13-18": [
            "Strategy for Lying or fabrication at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Lying or fabrication - example 1",
          "Red flag for Lying or fabrication - example 2"
        ]
      },
      {
        "behaviour": "Stealing or taking without permission",
        "meanings": {
          "0-2": [
            "Stealing or taking without permission meaning for 0-2 years"
          ],
          "3-5": [
            "Stealing or taking without permission meaning for 3-5 years"
          ],
          "6-12": [
            "Stealing or taking without permission meaning for 6-12 years"
          ],
          "13-18": [
            "Stealing or taking without permission meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Stealing or taking without permission - example 1",
          "Parent experience for Stealing or taking without permission - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Stealing or taking without permission at 0-2"
          ],
          "3-5": [
            "Strategy for Stealing or taking without permission at 3-5"
          ],
          "6-12": [
            "Strategy for Stealing or taking without permission at 6-12"
          ],
          "13-18": [
            "Strategy for Stealing or taking without permission at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Stealing or taking without permission - example 1",
          "Red flag for Stealing or taking without permission - example 2"
        ]
      },
      {
        "behaviour": "Risk-taking or thrill-seeking",
        "meanings": {
          "0-2": [
            "Risk-taking or thrill-seeking meaning for 0-2 years"
          ],
          "3-5": [
            "Risk-taking or thrill-seeking meaning for 3-5 years"
          ],
          "6-12": [
            "Risk-taking or thrill-seeking meaning for 6-12 years"
          ],
          "13-18": [
            "Risk-taking or thrill-seeking meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Risk-taking or thrill-seeking - example 1",
          "Parent experience for Risk-taking or thrill-seeking - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Risk-taking or thrill-seeking at 0-2"
          ],
          "3-5": [
            "Strategy for Risk-taking or thrill-seeking at 3-5"
          ],
          "6-12": [
            "Strategy for Risk-taking or thrill-seeking at 6-12"
          ],
          "13-18": [
            "Strategy for Risk-taking or thrill-seeking at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Risk-taking or thrill-seeking - example 1",
          "Red flag for Risk-taking or thrill-seeking - example 2"
        ]
      },
      {
        "behaviour": "Bedwetting or soiling",
        "meanings": {
          "0-2": [
            "Bedwetting or soiling meaning for 0-2 years"
          ],
          "3-5": [
            "Bedwetting or soiling meaning for 3-5 years"
          ],
          "6-12": [
            "Bedwetting or soiling meaning for 6-12 years"
          ],
          "13-18": [
            "Bedwetting or soiling meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Bedwetting or soiling - example 1",
          "Parent experience for Bedwetting or soiling - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Bedwetting or soiling at 0-2"
          ],
          "3-5": [
            "Strategy for Bedwetting or soiling at 3-5"
          ],
          "6-12": [
            "Strategy for Bedwetting or soiling at 6-12"
          ],
          "13-18": [
            "Strategy for Bedwetting or soiling at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Bedwetting or soiling - example 1",
          "Red flag for Bedwetting or soiling - example 2"
        ]
      },
      {
        "behaviour": "Sleep disturbances",
        "meanings": {
          "0-2": [
            "Sleep disturbances meaning for 0-2 years"
          ],
          "3-5": [
            "Sleep disturbances meaning for 3-5 years"
          ],
          "6-12": [
            "Sleep disturbances meaning for 6-12 years"
          ],
          "13-18": [
            "Sleep disturbances meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Sleep disturbances - example 1",
          "Parent experience for Sleep disturbances - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Sleep disturbances at 0-2"
          ],
          "3-5": [
            "Strategy for Sleep disturbances at 3-5"
          ],
          "6-12": [
            "Strategy for Sleep disturbances at 6-12"
          ],
          "13-18": [
            "Strategy for Sleep disturbances at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Sleep disturbances - example 1",
          "Red flag for Sleep disturbances - example 2"
        ]
      },
      {
        "behaviour": "Excessive screen use or fixation",
        "meanings": {
          "0-2": [
            "Excessive screen use or fixation meaning for 0-2 years"
          ],
          "3-5": [
            "Excessive screen use or fixation meaning for 3-5 years"
          ],
          "6-12": [
            "Excessive screen use or fixation meaning for 6-12 years"
          ],
          "13-18": [
            "Excessive screen use or fixation meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Excessive screen use or fixation - example 1",
          "Parent experience for Excessive screen use or fixation - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Excessive screen use or fixation at 0-2"
          ],
          "3-5": [
            "Strategy for Excessive screen use or fixation at 3-5"
          ],
          "6-12": [
            "Strategy for Excessive screen use or fixation at 6-12"
          ],
          "13-18": [
            "Strategy for Excessive screen use or fixation at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Excessive screen use or fixation - example 1",
          "Red flag for Excessive screen use or fixation - example 2"
        ]
      },
      {
        "behaviour": "Selective mutism or refusal to speak",
        "meanings": {
          "0-2": [
            "Selective mutism or refusal to speak meaning for 0-2 years"
          ],
          "3-5": [
            "Selective mutism or refusal to speak meaning for 3-5 years"
          ],
          "6-12": [
            "Selective mutism or refusal to speak meaning for 6-12 years"
          ],
          "13-18": [
            "Selective mutism or refusal to speak meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Selective mutism or refusal to speak - example 1",
          "Parent experience for Selective mutism or refusal to speak - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Selective mutism or refusal to speak at 0-2"
          ],
          "3-5": [
            "Strategy for Selective mutism or refusal to speak at 3-5"
          ],
          "6-12": [
            "Strategy for Selective mutism or refusal to speak at 6-12"
          ],
          "13-18": [
            "Strategy for Selective mutism or refusal to speak at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Selective mutism or refusal to speak - example 1",
          "Red flag for Selective mutism or refusal to speak - example 2"
        ]
      },
      {
        "behaviour": "Repetitive movements or self-stimulation",
        "meanings": {
          "0-2": [
            "Repetitive movements or self-stimulation meaning for 0-2 years"
          ],
          "3-5": [
            "Repetitive movements or self-stimulation meaning for 3-5 years"
          ],
          "6-12": [
            "Repetitive movements or self-stimulation meaning for 6-12 years"
          ],
          "13-18": [
            "Repetitive movements or self-stimulation meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Repetitive movements or self-stimulation - example 1",
          "Parent experience for Repetitive movements or self-stimulation - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Repetitive movements or self-stimulation at 0-2"
          ],
          "3-5": [
            "Strategy for Repetitive movements or self-stimulation at 3-5"
          ],
          "6-12": [
            "Strategy for Repetitive movements or self-stimulation at 6-12"
          ],
          "13-18": [
            "Strategy for Repetitive movements or self-stimulation at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Repetitive movements or self-stimulation - example 1",
          "Red flag for Repetitive movements or self-stimulation - example 2"
        ]
      },
      {
        "behaviour": "Controlling or bossy behaviour",
        "meanings": {
          "0-2": [
            "Controlling or bossy behaviour meaning for 0-2 years"
          ],
          "3-5": [
            "Controlling or bossy behaviour meaning for 3-5 years"
          ],
          "6-12": [
            "Controlling or bossy behaviour meaning for 6-12 years"
          ],
          "13-18": [
            "Controlling or bossy behaviour meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Controlling or bossy behaviour - example 1",
          "Parent experience for Controlling or bossy behaviour - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Controlling or bossy behaviour at 0-2"
          ],
          "3-5": [
            "Strategy for Controlling or bossy behaviour at 3-5"
          ],
          "6-12": [
            "Strategy for Controlling or bossy behaviour at 6-12"
          ],
          "13-18": [
            "Strategy for Controlling or bossy behaviour at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Controlling or bossy behaviour - example 1",
          "Red flag for Controlling or bossy behaviour - example 2"
        ]
      },
      {
        "behaviour": "Hyperactivity and impulsiveness",
        "meanings": {
          "0-2": [
            "Hyperactivity and impulsiveness meaning for 0-2 years"
          ],
          "3-5": [
            "Hyperactivity and impulsiveness meaning for 3-5 years"
          ],
          "6-12": [
            "Hyperactivity and impulsiveness meaning for 6-12 years"
          ],
          "13-18": [
            "Hyperactivity and impulsiveness meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Hyperactivity and impulsiveness - example 1",
          "Parent experience for Hyperactivity and impulsiveness - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Hyperactivity and impulsiveness at 0-2"
          ],
          "3-5": [
            "Strategy for Hyperactivity and impulsiveness at 3-5"
          ],
          "6-12": [
            "Strategy for Hyperactivity and impulsiveness at 6-12"
          ],
          "13-18": [
            "Strategy for Hyperactivity and impulsiveness at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Hyperactivity and impulsiveness - example 1",
          "Red flag for Hyperactivity and impulsiveness - example 2"
        ]
      },
      {
        "behaviour": "Emotional shutdown or numbing",
        "meanings": {
          "0-2": [
            "Emotional shutdown or numbing meaning for 0-2 years"
          ],
          "3-5": [
            "Emotional shutdown or numbing meaning for 3-5 years"
          ],
          "6-12": [
            "Emotional shutdown or numbing meaning for 6-12 years"
          ],
          "13-18": [
            "Emotional shutdown or numbing meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Emotional shutdown or numbing - example 1",
          "Parent experience for Emotional shutdown or numbing - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Emotional shutdown or numbing at 0-2"
          ],
          "3-5": [
            "Strategy for Emotional shutdown or numbing at 3-5"
          ],
          "6-12": [
            "Strategy for Emotional shutdown or numbing at 6-12"
          ],
          "13-18": [
            "Strategy for Emotional shutdown or numbing at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Emotional shutdown or numbing - example 1",
          "Red flag for Emotional shutdown or numbing - example 2"
        ]
      },
      {
        "behaviour": "People-pleasing or perfectionism",
        "meanings": {
          "0-2": [
            "People-pleasing or perfectionism meaning for 0-2 years"
          ],
          "3-5": [
            "People-pleasing or perfectionism meaning for 3-5 years"
          ],
          "6-12": [
            "People-pleasing or perfectionism meaning for 6-12 years"
          ],
          "13-18": [
            "People-pleasing or perfectionism meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for People-pleasing or perfectionism - example 1",
          "Parent experience for People-pleasing or perfectionism - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for People-pleasing or perfectionism at 0-2"
          ],
          "3-5": [
            "Strategy for People-pleasing or perfectionism at 3-5"
          ],
          "6-12": [
            "Strategy for People-pleasing or perfectionism at 6-12"
          ],
          "13-18": [
            "Strategy for People-pleasing or perfectionism at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for People-pleasing or perfectionism - example 1",
          "Red flag for People-pleasing or perfectionism - example 2"
        ]
      },
      {
        "behaviour": "Regressing (baby talk, needing nappies, etc.)",
        "meanings": {
          "0-2": [
            "Regressing (baby talk, needing nappies, etc.) meaning for 0-2 years"
          ],
          "3-5": [
            "Regressing (baby talk, needing nappies, etc.) meaning for 3-5 years"
          ],
          "6-12": [
            "Regressing (baby talk, needing nappies, etc.) meaning for 6-12 years"
          ],
          "13-18": [
            "Regressing (baby talk, needing nappies, etc.) meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Regressing (baby talk, needing nappies, etc.) - example 1",
          "Parent experience for Regressing (baby talk, needing nappies, etc.) - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Regressing (baby talk, needing nappies, etc.) at 0-2"
          ],
          "3-5": [
            "Strategy for Regressing (baby talk, needing nappies, etc.) at 3-5"
          ],
          "6-12": [
            "Strategy for Regressing (baby talk, needing nappies, etc.) at 6-12"
          ],
          "13-18": [
            "Strategy for Regressing (baby talk, needing nappies, etc.) at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Regressing (baby talk, needing nappies, etc.) - example 1",
          "Red flag for Regressing (baby talk, needing nappies, etc.) - example 2"
        ]
      },
      {
        "behaviour": "Excessive crying or sadness",
        "meanings": {
          "0-2": [
            "Excessive crying or sadness meaning for 0-2 years"
          ],
          "3-5": [
            "Excessive crying or sadness meaning for 3-5 years"
          ],
          "6-12": [
            "Excessive crying or sadness meaning for 6-12 years"
          ],
          "13-18": [
            "Excessive crying or sadness meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Excessive crying or sadness - example 1",
          "Parent experience for Excessive crying or sadness - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Excessive crying or sadness at 0-2"
          ],
          "3-5": [
            "Strategy for Excessive crying or sadness at 3-5"
          ],
          "6-12": [
            "Strategy for Excessive crying or sadness at 6-12"
          ],
          "13-18": [
            "Strategy for Excessive crying or sadness at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Excessive crying or sadness - example 1",
          "Red flag for Excessive crying or sadness - example 2"
        ]
      },
      {
        "behaviour": "Bullying others or mean behaviour",
        "meanings": {
          "0-2": [
            "Bullying others or mean behaviour meaning for 0-2 years"
          ],
          "3-5": [
            "Bullying others or mean behaviour meaning for 3-5 years"
          ],
          "6-12": [
            "Bullying others or mean behaviour meaning for 6-12 years"
          ],
          "13-18": [
            "Bullying others or mean behaviour meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Bullying others or mean behaviour - example 1",
          "Parent experience for Bullying others or mean behaviour - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Bullying others or mean behaviour at 0-2"
          ],
          "3-5": [
            "Strategy for Bullying others or mean behaviour at 3-5"
          ],
          "6-12": [
            "Strategy for Bullying others or mean behaviour at 6-12"
          ],
          "13-18": [
            "Strategy for Bullying others or mean behaviour at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Bullying others or mean behaviour - example 1",
          "Red flag for Bullying others or mean behaviour - example 2"
        ]
      },
      {
        "behaviour": "Fearfulness and phobias",
        "meanings": {
          "0-2": [
            "Fearfulness and phobias meaning for 0-2 years"
          ],
          "3-5": [
            "Fearfulness and phobias meaning for 3-5 years"
          ],
          "6-12": [
            "Fearfulness and phobias meaning for 6-12 years"
          ],
          "13-18": [
            "Fearfulness and phobias meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Fearfulness and phobias - example 1",
          "Parent experience for Fearfulness and phobias - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Fearfulness and phobias at 0-2"
          ],
          "3-5": [
            "Strategy for Fearfulness and phobias at 3-5"
          ],
          "6-12": [
            "Strategy for Fearfulness and phobias at 6-12"
          ],
          "13-18": [
            "Strategy for Fearfulness and phobias at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Fearfulness and phobias - example 1",
          "Red flag for Fearfulness and phobias - example 2"
        ]
      },
      {
        "behaviour": "Avoidance of school or tasks",
        "meanings": {
          "0-2": [
            "Avoidance of school or tasks meaning for 0-2 years"
          ],
          "3-5": [
            "Avoidance of school or tasks meaning for 3-5 years"
          ],
          "6-12": [
            "Avoidance of school or tasks meaning for 6-12 years"
          ],
          "13-18": [
            "Avoidance of school or tasks meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Avoidance of school or tasks - example 1",
          "Parent experience for Avoidance of school or tasks - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Avoidance of school or tasks at 0-2"
          ],
          "3-5": [
            "Strategy for Avoidance of school or tasks at 3-5"
          ],
          "6-12": [
            "Strategy for Avoidance of school or tasks at 6-12"
          ],
          "13-18": [
            "Strategy for Avoidance of school or tasks at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Avoidance of school or tasks - example 1",
          "Red flag for Avoidance of school or tasks - example 2"
        ]
      },
      {
        "behaviour": "Food refusal or bingeing",
        "meanings": {
          "0-2": [
            "Food refusal or bingeing meaning for 0-2 years"
          ],
          "3-5": [
            "Food refusal or bingeing meaning for 3-5 years"
          ],
          "6-12": [
            "Food refusal or bingeing meaning for 6-12 years"
          ],
          "13-18": [
            "Food refusal or bingeing meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Food refusal or bingeing - example 1",
          "Parent experience for Food refusal or bingeing - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Food refusal or bingeing at 0-2"
          ],
          "3-5": [
            "Strategy for Food refusal or bingeing at 3-5"
          ],
          "6-12": [
            "Strategy for Food refusal or bingeing at 6-12"
          ],
          "13-18": [
            "Strategy for Food refusal or bingeing at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Food refusal or bingeing - example 1",
          "Red flag for Food refusal or bingeing - example 2"
        ]
      },
      {
        "behaviour": "Sensation seeking or self-harm",
        "meanings": {
          "0-2": [
            "Sensation seeking or self-harm meaning for 0-2 years"
          ],
          "3-5": [
            "Sensation seeking or self-harm meaning for 3-5 years"
          ],
          "6-12": [
            "Sensation seeking or self-harm meaning for 6-12 years"
          ],
          "13-18": [
            "Sensation seeking or self-harm meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Sensation seeking or self-harm - example 1",
          "Parent experience for Sensation seeking or self-harm - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Sensation seeking or self-harm at 0-2"
          ],
          "3-5": [
            "Strategy for Sensation seeking or self-harm at 3-5"
          ],
          "6-12": [
            "Strategy for Sensation seeking or self-harm at 6-12"
          ],
          "13-18": [
            "Strategy for Sensation seeking or self-harm at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Sensation seeking or self-harm - example 1",
          "Red flag for Sensation seeking or self-harm - example 2"
        ]
      },
      {
        "behaviour": "Inappropriate sexualised behaviour",
        "meanings": {
          "0-2": [
            "Inappropriate sexualised behaviour meaning for 0-2 years"
          ],
          "3-5": [
            "Inappropriate sexualised behaviour meaning for 3-5 years"
          ],
          "6-12": [
            "Inappropriate sexualised behaviour meaning for 6-12 years"
          ],
          "13-18": [
            "Inappropriate sexualised behaviour meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Inappropriate sexualised behaviour - example 1",
          "Parent experience for Inappropriate sexualised behaviour - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Inappropriate sexualised behaviour at 0-2"
          ],
          "3-5": [
            "Strategy for Inappropriate sexualised behaviour at 3-5"
          ],
          "6-12": [
            "Strategy for Inappropriate sexualised behaviour at 6-12"
          ],
          "13-18": [
            "Strategy for Inappropriate sexualised behaviour at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Inappropriate sexualised behaviour - example 1",
          "Red flag for Inappropriate sexualised behaviour - example 2"
        ]
      },
      {
        "behaviour": "Over-compliance or adultification",
        "meanings": {
          "0-2": [
            "Over-compliance or adultification meaning for 0-2 years"
          ],
          "3-5": [
            "Over-compliance or adultification meaning for 3-5 years"
          ],
          "6-12": [
            "Over-compliance or adultification meaning for 6-12 years"
          ],
          "13-18": [
            "Over-compliance or adultification meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Over-compliance or adultification - example 1",
          "Parent experience for Over-compliance or adultification - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Over-compliance or adultification at 0-2"
          ],
          "3-5": [
            "Strategy for Over-compliance or adultification at 3-5"
          ],
          "6-12": [
            "Strategy for Over-compliance or adultification at 6-12"
          ],
          "13-18": [
            "Strategy for Over-compliance or adultification at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Over-compliance or adultification - example 1",
          "Red flag for Over-compliance or adultification - example 2"
        ]
      },
      {
        "behaviour": "Manipulation or triangulation",
        "meanings": {
          "0-2": [
            "Manipulation or triangulation meaning for 0-2 years"
          ],
          "3-5": [
            "Manipulation or triangulation meaning for 3-5 years"
          ],
          "6-12": [
            "Manipulation or triangulation meaning for 6-12 years"
          ],
          "13-18": [
            "Manipulation or triangulation meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Manipulation or triangulation - example 1",
          "Parent experience for Manipulation or triangulation - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Manipulation or triangulation at 0-2"
          ],
          "3-5": [
            "Strategy for Manipulation or triangulation at 3-5"
          ],
          "6-12": [
            "Strategy for Manipulation or triangulation at 6-12"
          ],
          "13-18": [
            "Strategy for Manipulation or triangulation at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Manipulation or triangulation - example 1",
          "Red flag for Manipulation or triangulation - example 2"
        ]
      },
      {
        "behaviour": "Obsessive rituals or rigidity",
        "meanings": {
          "0-2": [
            "Obsessive rituals or rigidity meaning for 0-2 years"
          ],
          "3-5": [
            "Obsessive rituals or rigidity meaning for 3-5 years"
          ],
          "6-12": [
            "Obsessive rituals or rigidity meaning for 6-12 years"
          ],
          "13-18": [
            "Obsessive rituals or rigidity meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Obsessive rituals or rigidity - example 1",
          "Parent experience for Obsessive rituals or rigidity - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Obsessive rituals or rigidity at 0-2"
          ],
          "3-5": [
            "Strategy for Obsessive rituals or rigidity at 3-5"
          ],
          "6-12": [
            "Strategy for Obsessive rituals or rigidity at 6-12"
          ],
          "13-18": [
            "Strategy for Obsessive rituals or rigidity at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Obsessive rituals or rigidity - example 1",
          "Red flag for Obsessive rituals or rigidity - example 2"
        ]
      },
      {
        "behaviour": "Frequent apologies or shame-based language",
        "meanings": {
          "0-2": [
            "Frequent apologies or shame-based language meaning for 0-2 years"
          ],
          "3-5": [
            "Frequent apologies or shame-based language meaning for 3-5 years"
          ],
          "6-12": [
            "Frequent apologies or shame-based language meaning for 6-12 years"
          ],
          "13-18": [
            "Frequent apologies or shame-based language meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Frequent apologies or shame-based language - example 1",
          "Parent experience for Frequent apologies or shame-based language - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Frequent apologies or shame-based language at 0-2"
          ],
          "3-5": [
            "Strategy for Frequent apologies or shame-based language at 3-5"
          ],
          "6-12": [
            "Strategy for Frequent apologies or shame-based language at 6-12"
          ],
          "13-18": [
            "Strategy for Frequent apologies or shame-based language at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Frequent apologies or shame-based language - example 1",
          "Red flag for Frequent apologies or shame-based language - example 2"
        ]
      },
      {
        "behaviour": "Refusal to bathe or poor hygiene",
        "meanings": {
          "0-2": [
            "Refusal to bathe or poor hygiene meaning for 0-2 years"
          ],
          "3-5": [
            "Refusal to bathe or poor hygiene meaning for 3-5 years"
          ],
          "6-12": [
            "Refusal to bathe or poor hygiene meaning for 6-12 years"
          ],
          "13-18": [
            "Refusal to bathe or poor hygiene meaning for 13-18 years"
          ]
        },
        "parent_experience": [
          "Parent experience for Refusal to bathe or poor hygiene - example 1",
          "Parent experience for Refusal to bathe or poor hygiene - example 2"
        ],
        "strategies": {
          "0-2": [
            "Strategy for Refusal to bathe or poor hygiene at 0-2"
          ],
          "3-5": [
            "Strategy for Refusal to bathe or poor hygiene at 3-5"
          ],
          "6-12": [
            "Strategy for Refusal to bathe or poor hygiene at 6-12"
          ],
          "13-18": [
            "Strategy for Refusal to bathe or poor hygiene at 13-18"
          ]
        },
        "red_flags": [
          "Red flag for Refusal to bathe or poor hygiene - example 1",
          "Red flag for Refusal to bathe or poor hygiene - example 2"
        ]
      }
    ];

    // Convert the new structure to match existing UI expectations
    const guides = [];
    behaviorsData.forEach((behavior, index) => {
      // Create entries for each age group
      const ageGroups = ['0-2', '3-5', '6-12', '13-18'];
      ageGroups.forEach(ageGroup => {
        if (behavior.meanings[ageGroup] && behavior.meanings[ageGroup].length > 0) {
          guides.push({
            id: `${index + 1}-${ageGroup}`,
            title: behavior.behaviour,
            slug: behavior.behaviour.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
            age_group: ageGroup,
            summary: `Understanding ${behavior.behaviour.toLowerCase()} in ${ageGroup === '0-2' ? 'babies and toddlers' : ageGroup === '3-5' ? 'preschoolers' : ageGroup === '6-12' ? 'school-age children' : 'teenagers'}`,
            what_it_means: behavior.meanings[ageGroup].join('. ') + '.',
            what_it_conveys: behavior.meanings[ageGroup][0] || 'Your child is communicating an important need.',
            parent_experience: behavior.parent_experience.join('. ') + '.',
            practical_strategies: behavior.strategies[ageGroup].join('. ') + '.',
            red_flags: behavior.red_flags,
            age_specific_meanings: behavior.meanings[ageGroup],
            age_specific_strategies: behavior.strategies[ageGroup]
          });
        }
      });
    });

    return guides;
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