export type MealStorageDTO = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  type: 'IN_DIET' | 'OUT_OF_DIET';
}