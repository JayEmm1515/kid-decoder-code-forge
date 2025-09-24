export class BehaviorEntry {
  static async list(orderBy?: string) {
    // Mock data for now - replace with actual Supabase calls
    return [
      {
        id: '1',
        child_id: '1',
        date: '2024-01-15',
        time: '15:30',
        behavior_type: 'tantrum',
        intensity: 7,
        triggers: 'Told it was time to leave the playground',
        context: 'At the park after school',
        response: 'Acknowledged feelings, gave countdown warning',
        outcome: 'Calmed down after 5 minutes',
        notes: 'Better than last time',
        // Neurodivergent-specific fields
        sensory_environment: {
          noise_level: 'high',
          lighting: 'bright',
          crowding: 'moderate',
          transitions: 'unexpected'
        },
        diet_timing: {
          meal_status: 'hungry',
          time_since_meal: '3 hours'
        },
        routine_changes: {
          unexpected_events: 'Friend cancelled playdate',
          schedule_disruption: 'minor',
          transition_warning: 'none'
        }
      },
      {
        id: '2',
        child_id: '2', 
        date: '2024-01-14',
        time: '08:15',
        behavior_type: 'positive',
        intensity: 3,
        triggers: 'Morning routine',
        context: 'Getting ready for school',
        response: 'Praised independence',
        outcome: 'Continued good behavior',
        notes: 'Great morning!',
        // Neurodivergent-specific fields
        sensory_environment: {
          noise_level: 'low',
          lighting: 'dim',
          crowding: 'none',
          transitions: 'smooth'
        },
        diet_timing: {
          meal_status: 'just_ate',
          time_since_meal: '30 minutes'
        },
        routine_changes: {
          unexpected_events: 'none',
          schedule_disruption: 'none',
          transition_warning: '10 minutes'
        }
      },
      {
        id: '3',
        child_id: '1',
        date: '2024-01-13',
        time: '18:45',
        behavior_type: 'aggression',
        intensity: 8,
        triggers: 'Asked to turn off screen time',
        context: 'Living room during dinner prep',
        response: 'Used calming techniques, offered alternatives',
        outcome: 'Escalated before calming down',
        notes: 'High noise from kitchen affected response',
        sensory_environment: {
          noise_level: 'very_high',
          lighting: 'fluorescent',
          crowding: 'high',
          transitions: 'abrupt'
        },
        diet_timing: {
          meal_status: 'hungry',
          time_since_meal: '4 hours'
        },
        routine_changes: {
          unexpected_events: 'Dad came home late',
          schedule_disruption: 'major',
          transition_warning: 'none'
        }
      }
    ];
  }

  static async create(data: any) {
    console.log('Creating behavior entry:', data);
    return { id: Date.now().toString(), ...data };
  }

  static async update(id: string, data: any) {
    console.log('Updating behavior entry:', id, data);
    return data;
  }

  static async delete(id: string) {
    console.log('Deleting behavior entry:', id);
    return true;
  }

  static generateInsights(entries: any[]) {
    const insights = [];
    
    if (entries.length < 3) {
      return [{ 
        type: 'info',
        message: 'Keep logging behaviors to see patterns and insights.',
        suggestion: 'Track at least 10 entries to get meaningful patterns.'
      }];
    }

    // Analyze routine changes
    const routineChanges = entries.filter(entry => 
      entry.routine_changes?.schedule_disruption === 'major' || 
      entry.routine_changes?.unexpected_events !== 'none'
    );
    const totalMeltdowns = entries.filter(entry => 
      ['tantrum', 'aggression', 'anxiety'].includes(entry.behavior_type) && entry.intensity >= 6
    );
    
    if (routineChanges.length > 0 && totalMeltdowns.length > 0) {
      const routineRelatedMeltdowns = routineChanges.filter(entry => 
        ['tantrum', 'aggression', 'anxiety'].includes(entry.behavior_type) && entry.intensity >= 6
      ).length;
      
      if (routineRelatedMeltdowns / totalMeltdowns.length > 0.6) {
        insights.push({
          type: 'warning',
          message: `${Math.round((routineRelatedMeltdowns / totalMeltdowns.length) * 100)}% of meltdowns occur after routine changes.`,
          suggestion: 'Try giving 10-15 minute warnings before transitions and create visual schedules.'
        });
      }
    }

    // Analyze sensory environment
    const noisyEnvironments = entries.filter(entry => 
      ['high', 'very_high'].includes(entry.sensory_environment?.noise_level)
    );
    const noisyMeltdowns = noisyEnvironments.filter(entry => 
      ['aggression', 'tantrum'].includes(entry.behavior_type) && entry.intensity >= 6
    );
    
    if (noisyMeltdowns.length > 0 && noisyEnvironments.length > 0) {
      if (noisyMeltdowns.length / noisyEnvironments.length > 0.5) {
        insights.push({
          type: 'warning',
          message: 'High noise levels appear linked with aggressive behaviors.',
          suggestion: 'Consider noise-cancelling headphones or move to quieter spaces during challenging times.'
        });
      }
    }

    // Analyze meal timing
    const hungryEntries = entries.filter(entry => entry.diet_timing?.meal_status === 'hungry');
    const hungryMeltdowns = hungryEntries.filter(entry => 
      ['tantrum', 'aggression', 'withdrawal'].includes(entry.behavior_type) && entry.intensity >= 5
    );
    
    if (hungryMeltdowns.length > 0 && hungryEntries.length > 0) {
      if (hungryMeltdowns.length / hungryEntries.length > 0.4) {
        insights.push({
          type: 'info',
          message: 'Challenging behaviors often occur when hungry.',
          suggestion: 'Try offering regular snacks and watch for hunger cues before difficult activities.'
        });
      }
    }

    // Analyze crowding
    const crowdedEntries = entries.filter(entry => 
      ['high', 'very_high'].includes(entry.sensory_environment?.crowding)
    );
    const crowdedMeltdowns = crowdedEntries.filter(entry => 
      ['withdrawal', 'anxiety', 'tantrum'].includes(entry.behavior_type) && entry.intensity >= 5
    );
    
    if (crowdedMeltdowns.length > 0 && crowdedEntries.length > 0) {
      if (crowdedMeltdowns.length / crowdedEntries.length > 0.4) {
        insights.push({
          type: 'info',
          message: 'Crowded environments may be overwhelming.',
          suggestion: 'Plan quiet breaks and have exit strategies for busy places.'
        });
      }
    }

    // Positive patterns
    const positiveEntries = entries.filter(entry => entry.behavior_type === 'positive');
    if (positiveEntries.length >= 3) {
      const commonPositiveFactors = this.findCommonFactors(positiveEntries);
      if (commonPositiveFactors.length > 0) {
        insights.push({
          type: 'success',
          message: `Positive behaviors often happen when: ${commonPositiveFactors.join(', ')}.`,
          suggestion: 'Try to recreate these conditions more often.'
        });
      }
    }

    return insights.length > 0 ? insights : [{
      type: 'info',
      message: 'Continue tracking to identify patterns.',
      suggestion: 'Look for connections between environment, timing, and behavior.'
    }];
  }

  static findCommonFactors(entries: any[]) {
    const factors = [];
    
    // Check noise levels
    const lowNoise = entries.filter(e => ['low', 'moderate'].includes(e.sensory_environment?.noise_level)).length;
    if (lowNoise / entries.length > 0.7) factors.push('quiet environments');
    
    // Check routine consistency
    const steadyRoutine = entries.filter(e => e.routine_changes?.schedule_disruption === 'none').length;
    if (steadyRoutine / entries.length > 0.7) factors.push('consistent routines');
    
    // Check meal timing
    const wellFed = entries.filter(e => ['just_ate', 'satisfied'].includes(e.diet_timing?.meal_status)).length;
    if (wellFed / entries.length > 0.7) factors.push('after meals');
    
    return factors;
  }
}