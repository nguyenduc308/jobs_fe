import { Category } from '@/interfaces/Category';
import { IClientProfile } from '@/interfaces/Profile';

export interface IJobItem {
  title: string;
  id: number;
  slug: string;
  description: string;
  is_verified: boolean;
  categories: Category[];
  stars: number;
  content: string;
  client: IClientProfile;
}
