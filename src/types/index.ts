export interface MoovsConfig {
  operatorId: string;
  theme: 'light' | 'dark';
  primaryColor: string;
  language: 'en' | 'pt';
}

export interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Vehicle {
  id: number;
  name: string;
  image: string;
  capacity: number;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface Area {
  id: number;
  name: string;
  description: string;
}
