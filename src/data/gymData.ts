export interface Program {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  whoItIsFor: string;
  keyFocus: string[];
  image: string;
  iconName: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  shortDesc: string;
  bio: string;
  trainingFocus: string[];
  image: string;
}

export interface MembershipPlan {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    shortDesc: 'Build strength, improve technique and develop a stronger foundation.',
    fullDesc: 'Our core strength program focuses on fundamental compound movements, progressive overload, and technical precision. Designed to build dense muscle mass, increase power, and establish resilient joints.',
    whoItIsFor: 'Individuals looking to build raw strength, improve body composition, and master foundational lifting techniques.',
    keyFocus: ['Barbell & Dumbbell Fundamentals', 'Progressive Overload Protocols', 'Structural Integrity & Joint Safety', 'Strength Benchmarking'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Dumbbell'
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    shortDesc: 'Focused one-to-one coaching built around your goals, experience and progress.',
    fullDesc: 'Experience tailored, individual guidance with our expert coaches. Every session is custom-designed based on your movement assessment, specific fitness objectives, and personal schedule.',
    whoItIsFor: 'People who want personalized accountability, targeted goal execution, and individualized exercise programming.',
    keyFocus: ['1-on-1 Dedicated Coaching', 'Movement Assessment & Mobility', 'Tailored Goal Roadmaps', 'Form & Technique Perfection'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
    iconName: 'UserCheck'
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness',
    shortDesc: 'Improve mobility, conditioning, balance and everyday performance.',
    fullDesc: 'Train for real-world vitality. Our functional fitness programming combines kettlebells, bodyweight conditioning, plyometrics, and core stability to make you move better, react faster, and feel energized.',
    whoItIsFor: 'Athletes and fitness enthusiasts who want versatile athleticism, stamina, and improved everyday movement efficiency.',
    keyFocus: ['Multi-directional Conditioning', 'Core & Pillar Stability', 'Kettlebell & Bodyweight Skills', 'Agility & Work Capacity'],
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Zap'
  },
  {
    id: 'group-training',
    title: 'Group Training',
    shortDesc: 'High-energy sessions designed to keep you moving, motivated and consistent.',
    fullDesc: 'Train alongside an intense, supportive community. Group sessions pair dynamic interval circuits with structured lifting elements so you push harder while maintaining proper movement standards.',
    whoItIsFor: 'Anyone thrives in a high-octane group dynamic and wants structured, high-energy workouts without guesswork.',
    keyFocus: ['High-Intensity Circuits', 'Team Energy & Camaraderie', 'Paced Interval Protocols', 'Guided Form Instruction'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Users'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'arjun-menon',
    name: 'Arjun Menon',
    role: 'Strength Coach',
    shortDesc: 'Specializes in powerlifting mechanics and progressive strength development.',
    bio: 'Arjun has spent over a decade refining compound lifting methods. He emphasizes strict movement standards, injury prevention, and long-term athletic durability.',
    trainingFocus: ['Powerlifting Mechanics', 'Barbell Strength', 'Hypertrophy Protocols'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'rahul-dev',
    name: 'Rahul Dev',
    role: 'Performance Coach',
    shortDesc: 'Focused on functional conditioning, athletic speed, and metabolic endurance.',
    bio: 'Rahul brings an intense, methodical approach to athletic performance and functional movement. He works with individuals seeking high energy capacity and lean conditioning.',
    trainingFocus: ['Functional Athleticism', 'HIIT & Endurance', 'Kettlebell Training'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'maya-krishnan',
    name: 'Maya Krishnan',
    role: 'Fitness Coach',
    shortDesc: 'Dedicated to mobility optimization, structural balance, and sustainable movement habits.',
    bio: 'Maya combines athletic conditioning with mobility protocols. Her goal is to build strong, pain-free bodies that perform at their peak both inside and outside the gym.',
    trainingFocus: ['Mobility & Posture', 'Core Strength', 'Functional Bodyweight Training'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'starter',
    title: 'STARTER',
    subtitle: 'PLAN 01',
    description: 'For people beginning their fitness journey with structured facility access.',
    features: [
      'Full Gym & Facility Access',
      'Initial Movement & Goal Assessment',
      'Locker & Shower Amenities',
      'Standard Open Gym Hours Access',
      'Forge Mobile App Access'
    ]
  },
  {
    id: 'performance',
    title: 'PERFORMANCE',
    subtitle: 'PLAN 02',
    popular: true,
    description: 'For consistent training and structured progress with group sessions.',
    features: [
      'Unlimited Facility Access',
      'Unlimited Group Training Sessions',
      'Quarterly Progress Check-ins',
      'Customized Strength Worksheets',
      'Priority Equipment Booking',
      'Locker & Shower Amenities'
    ]
  },
  {
    id: 'personal',
    title: 'PERSONAL',
    subtitle: 'PLAN 03',
    description: 'For people looking for focused one-to-one dedicated coaching.',
    features: [
      'Dedicated 1-on-1 Personal Trainer',
      'Tailored Nutritional Guidance Roadmap',
      'Fully Customized Weekly Programming',
      'Unlimited Facility & Group Sessions',
      'Monthly Mobility & Body Composition Scans',
      'VIP Locker Access'
    ]
  }
];

export const FAQS: FAQ[] = [
  {
    question: 'Can I visit before joining?',
    answer: 'Absolutely. You are welcome to book a walkthrough or introductory consultation to inspect our facility, meet our coaching staff, and discuss your fitness goals.'
  },
  {
    question: 'Do you offer personal training?',
    answer: 'Yes. We offer dedicated 1-on-1 personal training packages designed around your individual experience level, schedule, and specific training benchmarks.'
  },
  {
    question: 'Are beginner-friendly programs available?',
    answer: 'Yes. All our training programs cater to multiple skill levels. Our coaches scale weight, intensity, and movement complexity to ensure safe and continuous progression.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply click "Start Your Journey" or submit an enquiry on our Contact page. A Forge Fitness representative will connect with you to guide your next steps.'
  }
];
