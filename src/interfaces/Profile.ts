export interface IClientProfile {
  name: string;
  is_payment_verified: boolean;
  stars: number;
  project: { total: number; success: number };
  createdAt: string;
  updatedAt: string;
}
