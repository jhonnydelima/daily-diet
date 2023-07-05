import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

export class StatisticsGenerator {
  meals: MealStorageDTO[];
  mealsInDiet: number;
  mealsOutOfDiet: number;

  constructor(meals: MealStorageDTO[]) {
    this.meals = meals;
    this.mealsInDiet = meals.filter(meal => meal.type === 'IN_DIET').length;
    this.mealsOutOfDiet = meals.filter(meal => meal.type === 'OUT_OF_DIET').length;
  }

  getLongestSequenceInDiet() {
    let temp = 0;

    const total = this.meals.reduce((accumulator, currentValue) => {
      if (currentValue.type === 'IN_DIET') {
        temp += 1;

        if (temp > accumulator) {
          accumulator = temp;
        }

        return accumulator;
      }

      temp = 0;
      return accumulator;
    }, 0);

    return total;
  }
}