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
        notes: 'Better than last time'
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
        notes: 'Great morning!'
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
}