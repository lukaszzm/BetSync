export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  image: string | null;
  limit: number | null;
  balance: number;
}
