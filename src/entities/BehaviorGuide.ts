export class BehaviorGuide {
  static async list(orderBy?: string) {
    // Mock data for now - replace with actual Supabase calls
    return [
      {
        id: '1',
        title: 'Tantrums and Meltdowns',
        slug: 'tantrums-meltdowns',
        age_group: '3-5',
        summary: 'Understanding and responding to emotional outbursts in preschoolers',
        what_it_means: 'Tantrums are a normal part of development when children feel overwhelmed by big emotions they can\'t yet express or manage.',
        what_it_conveys: 'Your child is communicating that they need help regulating their emotions and may be feeling scared, frustrated, or out of control.',
        parent_experience: 'You might feel embarrassed, frustrated, or helpless. Remember that how you respond teaches your child about emotional regulation.'
      },
      {
        id: '2',
        title: 'Separation Anxiety',
        slug: 'separation-anxiety',
        age_group: '0-2',
        summary: 'Helping babies and toddlers feel secure during separations',
        what_it_means: 'Separation anxiety shows that your child has formed a healthy attachment and understands you as their safe base.',
        what_it_conveys: 'Your child is saying "I love you and need you" - this is actually a positive sign of healthy development.',
        parent_experience: 'You may feel guilty leaving them or worry about their distress. Trust that consistent, warm goodbyes help build resilience.'
      }
    ];
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