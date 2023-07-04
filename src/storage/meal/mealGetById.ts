import { mealGetAll } from './mealGetAll';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealGetById(id: string) {
  try {
    const storage: MealStorageDTO[] = await mealGetAll();

    const meals = storage.find(meal => meal.id === id);

    return meals;
  } catch (error) {
    throw error;
  }
}