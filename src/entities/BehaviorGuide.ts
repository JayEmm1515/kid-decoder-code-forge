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