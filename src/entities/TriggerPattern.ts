export class TriggerPattern {
  static async getTriggerPatterns(childId: string) {
    // This would be stored in Supabase in a real implementation
    // For now, we'll extract triggers from chain analyses and store them locally
    
    const mockPatterns = [
      {
        id: '1',
        child_id: childId,
        trigger: 'Transitions/Changes',
        count: 8,
        examples: ['Leaving playground', 'Getting ready for bed', 'Ending screen time'],
        last_occurrence: '2024-01-20'
      },
      {
        id: '2', 
        child_id: childId,
        trigger: 'Tiredness',
        count: 6,
        examples: ['After school', 'Before nap', 'Late evening'],
        last_occurrence: '2024-01-18'
      },
      {
        id: '3',
        child_id: childId,
        trigger: 'Hunger/Physical needs',
        count: 5,
        examples: ['Before meals', 'Long car rides', 'Shopping trips'],
        last_occurrence: '2024-01-15'
      },
      {
        id: '4',
        child_id: childId,
        trigger: 'Social situations',
        count: 3,
        examples: ['Group activities', 'Sharing toys', 'New environments'],
        last_occurrence: '2024-01-12'
      }
    ];

    return mockPatterns;
  }

  static async updateTriggerFromAnalysis(chainAnalysis: any) {
    // Extract potential triggers from chain analysis
    const triggers = this.extractTriggers(chainAnalysis);
    
    // In a real implementation, this would update the database
    console.log('Updated triggers for child:', chainAnalysis.child_id, triggers);
    
    return triggers;
  }

  static extractTriggers(chainAnalysis: any): string[] {
    const triggers: string[] = [];
    
    // Extract from vulnerability factors
    const vulnerabilityText = chainAnalysis.vulnerability_factors?.toLowerCase() || '';
    if (vulnerabilityText.includes('tired') || vulnerabilityText.includes('sleep')) {
      triggers.push('Tiredness');
    }
    if (vulnerabilityText.includes('hungry') || vulnerabilityText.includes('food')) {
      triggers.push('Hunger/Physical needs');
    }
    if (vulnerabilityText.includes('overstimulated') || vulnerabilityText.includes('noise') || vulnerabilityText.includes('crowded')) {
      triggers.push('Overstimulation');
    }
    
    // Extract from prompting event
    const promptingText = chainAnalysis.prompting_event?.toLowerCase() || '';
    if (promptingText.includes('transition') || promptingText.includes('leave') || promptingText.includes('stop') || promptingText.includes('change')) {
      triggers.push('Transitions/Changes');
    }
    if (promptingText.includes('share') || promptingText.includes('other kids') || promptingText.includes('social')) {
      triggers.push('Social situations');
    }
    if (promptingText.includes('no') || promptingText.includes('denied') || promptingText.includes('cant')) {
      triggers.push('Denied requests');
    }
    
    // Remove duplicates
    return [...new Set(triggers)];
  }

  static async create(data: any) {
    console.log('Creating trigger pattern:', data);
    return { id: Date.now().toString(), ...data };
  }

  static async update(id: string, data: any) {
    console.log('Updating trigger pattern:', id, data);
    return data;
  }

  static async delete(id: string) {
    console.log('Deleting trigger pattern:', id);
    return true;
  }
}