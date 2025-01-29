export interface State {
  id: string;
  name: string;
  abbreviation: string;
}

export interface TaxInfo {
  name: string;
  description: string;
  percentage: string;
  allocation: string;
}

export interface PublicServant {
  role: string;
  salary: number;
  benefits: string[];
  department: string;
}

export interface Vote {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  date: string;
  result?: string;
}