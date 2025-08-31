export class ChainAnalysis {
  static async list(orderBy?: string) {
    // Mock data for now - replace with actual Supabase calls
    return [
      {
        id: '1',
        child_id: '1',
        title: 'Playground Meltdown',
        incident_date: '2024-01-15',
        vulnerability_factors: 'Tired from school, hungry, overstimulated',
        prompting_event: 'Told it was time to leave the playground',
        links_in_chain: [
          {
            step: 1,
            description: 'Heard "time to go"',
            thoughts: 'I don\'t want to leave',
            feelings: 'Disappointed, angry',
            behaviors: 'Said "NO!" loudly'
          },
          {
            step: 2,
            description: 'Parent repeated the instruction',
            thoughts: 'They\'re not listening to me',
            feelings: 'Frustrated, unheard',
            behaviors: 'Threw toy down, started crying'
          }
        ],
        consequences: 'Had to be carried to car, both upset',
        prevention_strategies: 'Give earlier warning, bring snack',
        intervention_points: 'Could have validated feelings first'
      }
    ];
  }

  static async create(data: any) {
    console.log('Creating chain analysis:', data);
    return { id: Date.now().toString(), ...data };
  }

  static async update(id: string, data: any) {
    console.log('Updating chain analysis:', id, data);
    return data;
  }

  static async delete(id: string) {
    console.log('Deleting chain analysis:', id);
    return true;
  }
}