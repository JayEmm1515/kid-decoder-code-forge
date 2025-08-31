export class MoodEntry {
  static async list(orderBy?: string) {
    // Mock data for now - replace with actual Supabase calls
    return [
      {
        id: '1',
        child_id: '1',
        date: '2024-01-15',
        morning_mood: 'happy',
        afternoon_mood: 'neutral',
        evening_mood: 'sad',
        sleep_quality: 'good',
        energy_level: 7,
        notable_events: 'Had a playdate in the afternoon'
      },
      {
        id: '2',
        child_id: '2',
        date: '2024-01-14', 
        morning_mood: 'very_happy',
        afternoon_mood: 'happy',
        evening_mood: 'neutral',
        sleep_quality: 'excellent',
        energy_level: 8,
        notable_events: 'Scored a goal in soccer practice'
      }
    ];
  }

  static async create(data: any) {
    console.log('Creating mood entry:', data);
    return { id: Date.now().toString(), ...data };
  }

  static async update(id: string, data: any) {
    console.log('Updating mood entry:', id, data);
    return data;
  }

  static async delete(id: string) {
    console.log('Deleting mood entry:', id);
    return true;
  }
}