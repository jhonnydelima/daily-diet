import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { mealGetAll } from './mealGetAll';
import { MealStorageDTO } from './MealStorageDTO';

export async function mealRemoveById(deletedId: string) {
  try {
    const storage: MealStorageDTO[] = await mealGetAll();

    const meals = storage.filter(meal => meal.id !== deletedId);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meals));
  } catch (error) {
    throw error;
  }
}