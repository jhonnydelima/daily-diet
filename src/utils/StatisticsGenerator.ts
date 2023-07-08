import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

export class StatisticsGenerator {
  meals: MealStorageDTO[];
  mealsInDiet: number;
  mealsOutOfDiet: number;

  constructor(meals: MealStorageDTO[]) {
    this.meals = this.sortMeals(meals);
    this.mealsInDiet = meals.filter(meal => meal.type === 'IN_DIET').length;
    this.mealsOutOfDiet = meals.filter(meal => meal.type === 'OUT_OF_DIET').length;
  }

  private sortMeals(meals: MealStorageDTO[]) {
    let sorted: MealStorageDTO[] = [];

    const dates: string[] = [...new Set(meals.map(({ date }) => date))].sort();
  
    dates.map(
      date => {
        return meals
          .filter(meal => meal.date === date)
          .sort((a, b) => {
            if (a.time < b.time) {
              return -1;
            }

            if (a.time > a.time) {
               return 1;
            }
                
            return 0;
          });
      }
    ).map(item => {
      sorted = [...sorted, ...item];
    })

    return sorted;
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