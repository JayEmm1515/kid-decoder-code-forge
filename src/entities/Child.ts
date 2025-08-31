export class Child {
  static async list(orderBy?: string) {
    // Mock data for now - replace with actual Supabase calls
    return [
      {
        id: '1',
        name: 'Emma',
        birth_date: '2020-03-15',
        age_group: '3-5',
        notes: 'Loves drawing and playing with blocks',
        created_date: '2024-01-01'
      },
      {
        id: '2', 
        name: 'Liam',
        birth_date: '2018-08-22',
        age_group: '6-12',
        notes: 'Very active, enjoys sports',
        created_date: '2024-01-02'
      }
    ];
  }

  static async create(data: any) {
    console.log('Creating child:', data);
    return { id: Date.now().toString(), ...data };
  }

  static async update(id: string, data: any) {
    console.log('Updating child:', id, data);
    return data;
  }

  static async delete(id: string) {
    console.log('Deleting child:', id);
    return true;
  }
}