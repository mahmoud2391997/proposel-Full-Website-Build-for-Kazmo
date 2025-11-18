export interface NavItem {
  label: string;
  path: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: 'THCA' | 'CBD' | 'Accessories';
}
